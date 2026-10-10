// Checks the /words notes for Obsidian-only syntax and broken images.
// Usage: node scripts/check-words.mjs
// Published notes report errors (exit 1); drafts report warnings (exit 0).

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

// Returns the frontmatter text, the body lines, and the file line number of the first body line
function splitFrontmatter(text) {
  const lines = text.split(/\r?\n/);
  if (lines[0] !== "---") return { frontmatter: "", body: lines, firstLine: 1 };
  const end = lines.indexOf("---", 1);
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

// Null if the image target exists (or is remote), otherwise a message
function checkImage(target, notePath) {
  if (/^(https?:|data:)/i.test(target)) return null;
  const clean = target.replace(/[?#].*$/, "");
  let decoded;
  try {
    decoded = decodeURI(clean);
  } catch {
    return `image path can't be decoded: ${target}`;
  }
  const file = decoded.startsWith("/")
    ? join(PUBLIC_DIR, decoded)
    : resolve(dirname(notePath), decoded);
  if (existsSync(file) && statSync(file).isFile()) return null;
  return `image not found: ${target} (looked for ${relative(ROOT, file)})`;
}

function checkNote(notePath) {
  const { body, firstLine } = splitFrontmatter(readFileSync(notePath, "utf8"));
  const findings = [];
  let fence = null; // the opening fence, e.g. "```" or "~~~~", while inside a code block

  body.forEach((rawLine, i) => {
    const lineNumber = firstLine + i;
    const fenceMatch = rawLine.match(/^\s{0,3}(`{3,}|~{3,})/);
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

    const line = stripInlineCode(rawLine);
    const add = (message) => findings.push({ line: lineNumber, message });

    for (const match of line.matchAll(/(!?)\[\[([^\]]*)\]\]/g)) {
      add(`Obsidian ${match[1] ? "embed" : "wikilink"}: ${match[0]}`);
    }
    if (/^\s{0,3}>\s*\[!\w/.test(line)) {
      add(`Obsidian callout: ${line.trim()}`);
    }
    for (const match of line.matchAll(/!\[[^\]]*\]\(\s*<?([^)\s>]+)>?(?:\s+["'][^)]*["'])?\s*\)/g)) {
      const problem = checkImage(match[1], notePath);
      if (problem) add(problem);
    }
  });

  return findings;
}

const notes = findNotes(WORDS_DIR);
let errors = 0;
let warnings = 0;

for (const notePath of notes) {
  const { frontmatter } = splitFrontmatter(readFileSync(notePath, "utf8"));
  const isDraft = /^published:\s*false\s*$/m.test(frontmatter);
  for (const { line, message } of checkNote(notePath)) {
    const level = isDraft ? "warning" : "error";
    if (isDraft) warnings++;
    else errors++;
    console.log(`${level}: ${relative(ROOT, notePath)}:${line}  ${message}`);
  }
}

console.log(`Checked ${notes.length} notes: ${errors} errors, ${warnings} warnings.`);
process.exit(errors > 0 ? 1 : 0);
