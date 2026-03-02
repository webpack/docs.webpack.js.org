/**
 * validate-nav.mjs
 *
 * Validates that all pages declared in docs.json navigation
 * have corresponding .mdx files in the repository.
 *
 * Usage: node scripts/validate-nav.mjs
 *
 * Exit codes:
 *   0 - All declared pages have corresponding files
 *   1 - One or more declared pages are missing
 */

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Resolve repo root (script is in /scripts, so go up one level)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

/**
 * Resolves a navigation page path to its corresponding .mdx file path.
 *
 * Rules:
 *   - "index" → "index.mdx"
 *   - "guides/getting-started" → "guides/getting-started.mdx"
 *   - "configuration/" (trailing slash) → "configuration/index.mdx"
 *
 * @param {string} pagePath - The page path from docs.json
 * @returns {string} - The resolved .mdx file path relative to repo root
 */
function resolvePagePath(pagePath) {
  // Trailing slash means it's a directory index
  if (pagePath.endsWith('/')) {
    return `${pagePath}index.mdx`;
  }
  return `${pagePath}.mdx`;
}

/**
 * Recursively extracts all page paths from a navigation group.
 * Handles nested structures where pages can contain strings or objects.
 *
 * @param {Array} pages - Array of page entries (strings or objects with nested pages)
 * @returns {string[]} - Flat array of all page paths
 */
function extractPagesFromGroup(pages) {
  const paths = [];

  for (const page of pages) {
    if (typeof page === 'string') {
      // Simple page path
      paths.push(page);
    } else if (typeof page === 'object' && page !== null) {
      // Could be a nested group with its own pages array
      if (Array.isArray(page.pages)) {
        paths.push(...extractPagesFromGroup(page.pages));
      }
      // Could also have a 'page' property for a single page
      if (typeof page.page === 'string') {
        paths.push(page.page);
      }
    }
  }

  return paths;
}

/**
 * Extracts all declared page paths from the docs.json navigation structure.
 *
 * Structure: navigation.tabs[] → groups[] → pages[]
 *
 * @param {object} docsConfig - Parsed docs.json content
 * @returns {string[]} - Array of all declared page paths
 */
function extractAllPagePaths(docsConfig) {
  const paths = [];

  const tabs = docsConfig?.navigation?.tabs;
  if (!Array.isArray(tabs)) {
    console.error('Error: navigation.tabs is not an array');
    return paths;
  }

  for (const tab of tabs) {
    const groups = tab?.groups;
    if (!Array.isArray(groups)) {
      continue;
    }

    for (const group of groups) {
      const pages = group?.pages;
      if (!Array.isArray(pages)) {
        continue;
      }

      paths.push(...extractPagesFromGroup(pages));
    }
  }

  return paths;
}

/**
 * Main validation function.
 */
function main() {
  // Read and parse docs.json
  const docsJsonPath = join(ROOT, 'docs.json');

  if (!existsSync(docsJsonPath)) {
    console.error(`Error: docs.json not found at ${docsJsonPath}`);
    process.exit(1);
  }

  let docsConfig;
  try {
    const content = readFileSync(docsJsonPath, 'utf-8');
    docsConfig = JSON.parse(content);
  } catch (err) {
    console.error(`Error: Failed to parse docs.json: ${err.message}`);
    process.exit(1);
  }

  // Extract all declared page paths
  const declaredPaths = extractAllPagePaths(docsConfig);

  if (declaredPaths.length === 0) {
    console.error('Error: No pages found in navigation');
    process.exit(1);
  }

  // Check for duplicates
  const uniquePaths = new Set(declaredPaths);
  if (uniquePaths.size !== declaredPaths.length) {
    const duplicates = declaredPaths.filter(
      (path, index) => declaredPaths.indexOf(path) !== index
    );
    console.warn('\n[WARN] Duplicate page entries detected:');
    for (const dup of [...new Set(duplicates)]) {
      console.warn(`   - ${dup}`);
    }
  }

  // Check each path for existence
  const existing = [];
  const missing = [];

  for (const pagePath of declaredPaths) {
    const mdxPath = resolvePagePath(pagePath);
    const fullPath = join(ROOT, mdxPath);

    if (existsSync(fullPath)) {
      existing.push({ pagePath, mdxPath });
    } else {
      missing.push({ pagePath, mdxPath });
    }
  }

  // Print summary
  console.log('\n=== Navigation Validation Report ===\n');
  console.log(`Total declared pages: ${declaredPaths.length}`);
  console.log(`Existing pages:       ${existing.length}`);
  console.log(`Missing pages:        ${missing.length}`);

  if (missing.length > 0) {
    console.log('\n[FAIL] Missing pages:\n');
    for (const { pagePath, mdxPath } of missing) {
      console.log(`   - ${mdxPath}`);
      console.log(`     (declared as: "${pagePath}")`);
    }
    console.log('\n');
    process.exit(1);
  }

  console.log('\n[OK] All declared pages exist.\n');
  process.exit(0);
}

// Run
main();
