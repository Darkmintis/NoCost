#!/usr/bin/env node

/**
 * Quick search tool for finding tools in the database
 * Usage: node scripts/search.js "keyword"
 */

const fs = require('node:fs');
const path = require('node:path');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: node scripts/search.js "keyword"');
  console.log('');
  console.log('Examples:');
  console.log('  node scripts/search.js "supabase"');
  console.log('  node scripts/search.js "database"');
  console.log('  node scripts/search.js "api"');
  process.exit(1);
}

const keyword = args[0].toLowerCase();

// Read tools
const toolsPath = path.join(__dirname, '../tools.json');
const tools = JSON.parse(fs.readFileSync(toolsPath, 'utf-8'));

console.log(`🔍 Searching for "${keyword}" in ${tools.length} tools...\n`);

// Search
const results = tools.filter(tool => {
  const searchText = [
    tool.name,
    tool.description,
    tool.category,
    tool.slug,
    tool.url,
    ...(tool.tags || [])
  ].join(' ').toLowerCase();
  
  return searchText.includes(keyword);
});

if (results.length === 0) {
  console.log('❌ No tools found');
  console.log('');
  console.log('💡 Tips:');
  console.log('  - Try a shorter keyword');
  console.log('  - Check spelling');
  console.log('  - Try searching by category');
  process.exit(0);
}

console.log(`✅ Found ${results.length} tool(s):\n`);

results.forEach((tool, index) => {
  console.log(`${index + 1}. ${tool.name}`);
  console.log(`   Category: ${tool.category}`);
  console.log(`   Slug: ${tool.slug}`);
  console.log(`   URL: ${tool.url}`);
  console.log(`   Description: ${tool.description.substring(0, 100)}...`);
  console.log('');
});

console.log(`📊 Total results: ${results.length}`);
