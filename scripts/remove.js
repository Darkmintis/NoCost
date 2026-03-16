#!/usr/bin/env node

/**
 * Remove tools from tools.json by name or URL.
 * Usage:
 *   node scripts/remove.js "tool name"
 *   node scripts/remove.js "https://example.com"
 *   node scripts/remove.js --exact "Tool Name"
 *   node scripts/remove.js --dry-run "tool name"
 */

const fs = require('node:fs');
const path = require('node:path');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const exact = args.includes('--exact');
const query = args.filter((arg) => !arg.startsWith('--')).join(' ').trim();

if (!query) {
  console.log('Usage: node scripts/remove.js [--exact] [--dry-run] "tool name or url"');
  process.exit(1);
}

function normalize(value) {
  return value.trim().toLowerCase().replace(/\/$/, '');
}

const toolsPath = path.join(__dirname, '../tools.json');
const tools = JSON.parse(fs.readFileSync(toolsPath, 'utf-8'));
const normalizedQuery = normalize(query);

const matches = tools.filter((tool) => {
  const normalizedName = normalize(tool.name || '');
  const normalizedUrl = normalize(tool.url || '');

  if (exact) {
    return normalizedName === normalizedQuery || normalizedUrl === normalizedQuery;
  }

  return normalizedName.includes(normalizedQuery) || normalizedUrl.includes(normalizedQuery);
});

if (matches.length === 0) {
  console.log(`No tools matched "${query}".`);
  process.exit(0);
}

console.log(`Matched ${matches.length} tool(s):`);
for (const tool of matches) {
  console.log(`- ${tool.name} | ${tool.category} | ${tool.url}`);
}

if (dryRun) {
  console.log('\nDry run only. No changes written.');
  process.exit(0);
}

const matchedUrls = new Set(matches.map((tool) => normalize(tool.url || '')));
const updatedTools = tools.filter((tool) => !matchedUrls.has(normalize(tool.url || '')));

fs.writeFileSync(toolsPath, `${JSON.stringify(updatedTools, null, 2)}\n`);

console.log(`\nRemoved ${matches.length} tool(s) from tools.json.`);
console.log('Run node scripts/validate.js before committing.');