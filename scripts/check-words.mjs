// Checks the /words notes for Obsidian-only syntax and broken images.
// Usage: node scripts/check-words.mjs
// Published notes report errors (exit 1); drafts report warnings (exit 0).
// Uppercase letters in an image path are always a warning.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const WORDS_DIR = join(ROOT, "src/content/words");
const PUBLIC_DIR = join(ROOT, "public");

// Every .md file under dir, skipping any path segment that starts with "."
function findNotes(dir) {
  const notes = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) notes.push(...findNotes(path));
    else if (entry.isFile() && entry.name.endsWith(".md")) notes.push(path);
  }
  return notes.sort();
}

// Returns the frontmatter text, the body lines, and the file line number of the first body line.
// Ignores a leading byte-order mark and trailing spaces after the "---" lines.
function splitFrontmatter(text) {
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/);
  const isDelimiter = (line) => line.trimEnd() === "---";
  if (!isDelimiter(lines[0])) return { frontmatter: "", body: lines, firstLine: 1 };
  const end = lines.findIndex((line, i) => i > 0 && isDelimiter(line));
  if (end === -1) return { frontmatter: "", body: lines, firstLine: 1 };
  return {
    frontmatter: lines.slice(1, end).join("\n"),
    body: lines.slice(end + 1),
    firstLine: end + 2,
  };
}

// Replace inline `code` spans with spaces so their contents are never flagged
function stripInlineCode(line) {
  return line.replace(/(`+)[\s\S]*?\1/g, (span) => " ".repeat(span.length));
}

// Problems with one image target; remote and data: URLs are skipped
function checkImage(target, notePath) {
  if (/^(https?:|data:)/i.test(target)) return [];
  const clean = target.replace(/[?#].*$/, "");
  let decoded;
  try {
    decoded = decodeURI(clean);
  } catch {
    return [{ message: `image path can't be decoded: ${target}` }];
  }
  const problems = [];
  // macOS ignores case but Vercel builds on Linux, so a wrong-case path passes here and breaks there
  if (/[A-Z]/.test(decoded)) {
    problems.push({
      message: "Image path has uppercase letters; this can break on Linux.",
      alwaysWarning: true,
    });
  }
  const file = decoded.startsWith("/")
    ? join(PUBLIC_DIR, decoded)
    : resolve(dirname(notePath), decoded);
  if (!existsSync(file) || !statSync(file).isFile()) {
    problems.push({ message: `image not found: ${target} (looked for ${relative(ROOT, file)})` });
  }
  return problems;
}

// Short preview of an Obsidian comment for the report
function commentPreview(text) {
  const oneLine = text.replace(/\s+/g, " ").trim();
  return oneLine.length > 40 ? `${oneLine.slice(0, 40)}...` : oneLine;
}

function checkNote(notePath) {
  const { body, firstLine } = splitFrontmatter(readFileSync(notePath, "utf8"));
  const findings = [];
  let fence = null; // the opening fence, e.g. "```" or "~~~~", while inside a code block
  let openComment = null; // the finding for a %% comment that hasn't closed yet

  body.forEach((rawLine, i) => {
    const lineNumber = firstLine + i;
    const add = (message, alwaysWarning = false) =>
      findings.push({ line: lineNumber, message, alwaysWarning });

    // Inside an Obsidian comment everything is hidden until the closing %%, code fences included
    let line = rawLine;
    if (openComment) {
      const close = line.indexOf("%%");
      if (close === -1) return;
      openComment = null;
      line = " ".repeat(close + 2) + line.slice(close + 2);
    }

    const fenceMatch = line.match(/^\s{0,3}(`{3,}|~{3,})/);
    if (fence) {
      // A closing fence uses the same character, is at least as long, and has nothing after it
      if (fenceMatch && fenceMatch[1][0] === fence[0] && fenceMatch[1].length >= fence.length && rawLine.trim() === fenceMatch[1]) {
        fence = null;
      }
      return;
    }
    if (fenceMatch) {
      fence = fenceMatch[1];
      return;
    }

    line = stripInlineCode(line);

    // Flag each %% comment where it opens, then blank it out so its contents aren't checked
    let start;
    while ((start = line.indexOf("%%")) !== -1) {
      const close = line.indexOf("%%", start + 2);
      const finding = { line: lineNumber, alwaysWarning: false };
      findings.push(finding);
      if (close === -1) {
        finding.message = `Obsidian comment: %%${commentPreview(line.slice(start + 2))}`;
        openComment = finding;
        line = line.slice(0, start);
        break;
      }
      finding.message = `Obsidian comment: %%${commentPreview(line.slice(start + 2, close))}%%`;
      line = line.slice(0, start) + " ".repeat(close + 2 - start) + line.slice(close + 2);
    }

    for (const match of line.matchAll(/(!?)\[\[([^\]]*)\]\]/g)) {
      add(`Obsidian ${match[1] ? "embed" : "wikilink"}: ${match[0]}`);
    }
    if (/^\s{0,3}>\s*\[!\w/.test(line)) {
      add(`Obsidian callout: ${line.trim()}`);
    }
    for (const match of line.matchAll(/!\[[^\]]*\]\(\s*<?([^)\s>]+)>?(?:\s+["'][^)]*["'])?\s*\)/g)) {
      for (const problem of checkImage(match[1], notePath)) {
        add(problem.message, problem.alwaysWarning);
      }
    }
  });

  if (openComment) openComment.message += " (no closing %%)";
  return findings;
}

const notes = findNotes(WORDS_DIR);
let errors = 0;
let warnings = 0;

for (const notePath of notes) {
  const { frontmatter } = splitFrontmatter(readFileSync(notePath, "utf8"));
  const isDraft = /^published:\s*(false|"false"|'false')\s*$/m.test(frontmatter);
  for (const { line, message, alwaysWarning } of checkNote(notePath)) {
    const level = isDraft || alwaysWarning ? "warning" : "error";
    if (level === "warning") warnings++;
    else errors++;
    console.log(`${level}: ${relative(ROOT, notePath)}:${line}  ${message}`);
  }
}

console.log(`Checked ${notes.length} notes: ${errors} errors, ${warnings} warnings.`);
process.exit(errors > 0 ? 1 : 0);
