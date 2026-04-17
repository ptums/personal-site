import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import "dotenv/config";

const PAGE_SIZE = 100;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const outputDir = path.join(projectRoot, "content", "blog");

function assertEnvironment() {
  const hasGraphqlUrl =
    process.env.CONTENTFUL_GRAPHQL_API_URL || process.env.CONTENTFUL_SPACE_ID;
  const hasToken =
    process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN ||
    process.env.CONTENTFUL_MANAGEMENT_API_PERSONAL_ACCESS_TOKEN;

  const missingVars = [];

  if (!hasGraphqlUrl) {
    missingVars.push("CONTENTFUL_GRAPHQL_API_URL or CONTENTFUL_SPACE_ID");
  }

  if (!hasToken) {
    missingVars.push(
      "CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN or CONTENTFUL_MANAGEMENT_API_PERSONAL_ACCESS_TOKEN",
    );
  }

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join("; ")}`);
  }
}

function getGraphqlUrl() {
  if (process.env.CONTENTFUL_GRAPHQL_API_URL) {
    return process.env.CONTENTFUL_GRAPHQL_API_URL;
  }

  const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";
  return `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${environment}`;
}

function getAccessToken() {
  return (
    process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN ||
    process.env.CONTENTFUL_MANAGEMENT_API_PERSONAL_ACCESS_TOKEN
  );
}

function toSlug(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeYaml(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

async function fetchPostsPage(skip = 0, limit = PAGE_SIZE) {
  const query = `
    query ExportPosts($skip: Int!, $limit: Int!) {
      postCollection(skip: $skip, limit: $limit, order: date_DESC) {
        total
        items {
          sys {
            id
          }
          title
          tagLine
          description
          body
          date
        }
      }
    }
  `;

  const response = await fetch(getGraphqlUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAccessToken()}`,
    },
    body: JSON.stringify({
      query,
      variables: { skip, limit },
    }),
  });

  if (!response.ok) {
    throw new Error(`Contentful request failed: ${response.status} ${response.statusText}`);
  }

  const json = await response.json();

  if (json.errors) {
    throw new Error(`Contentful query failed: ${JSON.stringify(json.errors)}`);
  }

  return json.data.postCollection;
}

function toMarkdown(post) {
  const title = post?.title ?? "";
  const tagLine = post?.tagLine ?? "";
  const description = post?.description ?? "";
  const date = post?.date ?? "";
  const body = post?.body ?? "";

  return `---
title: "${escapeYaml(title)}"
slug: "${toSlug(title)}"
date: "${escapeYaml(date)}"
tagLine: "${escapeYaml(tagLine)}"
description: "${escapeYaml(description)}"
contentfulId: "${escapeYaml(post?.sys?.id ?? "")}"
---

${body}
`;
}

async function exportPosts() {
  assertEnvironment();
  await fs.mkdir(outputDir, { recursive: true });

  let skip = 0;
  let total = 0;
  let exported = 0;

  do {
    const postCollection = await fetchPostsPage(skip, PAGE_SIZE);
    total = postCollection.total;
    const items = postCollection.items ?? [];

    for (const post of items) {
      const filename = `${toSlug(post.title)}.md`;
      const filePath = path.join(outputDir, filename);
      const markdown = toMarkdown(post);
      await fs.writeFile(filePath, markdown, "utf8");
      exported += 1;
    }

    skip += items.length;
    if (items.length === 0) {
      break;
    }
  } while (skip < total);

  console.log(`Exported ${exported} blog posts to ${outputDir}`);
}

exportPosts().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
