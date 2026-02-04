#!/usr/bin/env node

/**
 * Validation script for tools.json
 * Checks for: JSON validity, duplicates, required fields, URL format, description length
 */

const fs = require('node:fs');
const path = require('node:path');

const VALID_CATEGORIES = new Set([
  'Development',
  'Web Development',
  'Database',
  'Analytics',
  'Business',
  'Productivity',
  'Security',
  'Content Creation',
  'Design',
  'Education',
  'Mobile Development',
  'AI & Machine Learning',
  'API Tools',
  'Authentication',
  'Automation',
  'Backend Services',
  'CI/CD',
  'Cloud Computing',
  'Code Quality',
  'Collaboration',
  'Content Management',
  'CSS Frameworks',
  'Design Tools',
  'Developer Tools',
  'Domains & DNS',
  'Email Services',
  'Forms',
  'Hosting',
  'Icons & Graphics',
  'Learning',
  'Monitoring',
  'No-Code/Low-Code',
  'Payments',
  'Search',
  'Testing',
  'Version Control',
  'Infrastructure',
  'Communication',
  'Content',
  'Mobile',
  'Other',
  'Storage',
  'CDN',
  'CMS',
  'Cloud',
  'Backend'
]);

const REQUIRED_FIELDS = ['name', 'description', 'url', 'category'];

let errors = 0;
let warnings = 0;

function log(message, type = 'info') {
  const colors = {
    error: '\x1b[31m',
    warning: '\x1b[33m',
    success: '\x1b[32m',
    info: '\x1b[36m',
    reset: '\x1b[0m'
  };
  
  const prefixMap = {
    error: '❌',
    warning: '⚠️',
    success: '✅',
    info: '🔍'
  };
  const prefix = prefixMap[type] || '🔍';
  console.log(`${colors[type]}${prefix} ${message}${colors.reset}`);
}

function validateRequiredFields(tool, index) {
  const missing = REQUIRED_FIELDS.filter(field => !tool[field]);
  if (missing.length > 0) {
    log(`Tool #${index + 1} "${tool.name || 'UNKNOWN'}": Missing fields: ${missing.join(', ')}`, 'error');
    errors++;
  }
}

function validateUrl(tool, index, urlMap) {
  if (!tool.url) return;
  
  const normalizedUrl = tool.url.toLowerCase().replace(/\/$/, '');
  if (urlMap.has(normalizedUrl)) {
    log(`Tool #${index + 1} "${tool.name}": Duplicate URL "${tool.url}" (first seen at #${urlMap.get(normalizedUrl)})`, 'error');
    errors++;
  } else {
    urlMap.set(normalizedUrl, index + 1);
  }

  try {
    new URL(tool.url);
    if (!tool.url.startsWith('http')) {
      log(`Tool #${index + 1} "${tool.name}": URL should start with http:// or https://`, 'warning');
      warnings++;
    }
  } catch (error) {
    log(`Tool #${index + 1} "${tool.name}": Invalid URL format - ${error.message}`, 'error');
    errors++;
  }
}

function validateName(tool, index, nameMap) {
  if (!tool.name || !tool.category) return;
  
  const nameKey = `${tool.category}:${tool.name.toLowerCase()}`;
  if (nameMap.has(nameKey)) {
    log(`Tool #${index + 1} "${tool.name}": Duplicate name in category "${tool.category}" (first seen at #${nameMap.get(nameKey)})`, 'error');
    errors++;
  } else {
    nameMap.set(nameKey, index + 1);
  }
}

function validateDescription(tool, index) {
  if (tool.description && tool.description.length > 500) {
    log(`Tool #${index + 1} "${tool.name}": Description too long (${tool.description.length} chars, max 500)`, 'warning');
    warnings++;
  }
}

function validateCategory(tool, index) {
  if (tool.category && !VALID_CATEGORIES.has(tool.category)) {
    log(`Tool #${index + 1} "${tool.name}": Invalid category "${tool.category}"`, 'warning');
    warnings++;
  }
}

function validateTools() {
  log('Validating tools.json...', 'info');
  console.log('');

  const toolsPath = path.join(__dirname, '../tools.json');
  
  if (!fs.existsSync(toolsPath)) {
    log('Error: tools.json not found!', 'error');
    process.exit(1);
  }

  let tools;
  try {
    const content = fs.readFileSync(toolsPath, 'utf-8');
    tools = JSON.parse(content);
    log('JSON syntax is valid', 'success');
  } catch (error) {
    log(`JSON parsing failed: ${error.message}`, 'error');
    process.exit(1);
  }

  if (!Array.isArray(tools)) {
    log('tools.json must be an array', 'error');
    process.exit(1);
  }

  log(`Found ${tools.length} tools`, 'info');
  console.log('');

  // Track duplicates
  const urlMap = new Map();
  const nameMap = new Map();

  // Validate each tool
  tools.forEach((tool, index) => {
    validateRequiredFields(tool, index);
    validateUrl(tool, index, urlMap);
    validateName(tool, index, nameMap);
    validateDescription(tool, index);
    validateCategory(tool, index);
  });

  // Summary
  console.log('');
  console.log('='.repeat(60));
  log('Validation Summary', 'info');
  console.log('='.repeat(60));
  log(`Total tools: ${tools.length}`, 'info');
  log(`Errors: ${errors}`, errors > 0 ? 'error' : 'success');
  log(`Warnings: ${warnings}`, warnings > 0 ? 'warning' : 'success');
  console.log('='.repeat(60));

  if (errors > 0) {
    log('\nValidation failed! Please fix the errors above.', 'error');
    process.exit(1);
  } else if (warnings > 0) {
    log('\nValidation passed with warnings. Consider fixing them.', 'warning');
    process.exit(0);
  } else {
    log('\nAll validations passed! ✨', 'success');
    process.exit(0);
  }
}

validateTools();
