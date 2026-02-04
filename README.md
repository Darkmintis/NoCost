# 🛠️ NoCost Tools Database

> Open source database of **1750+ free developer tools** - curated by the community, for the community.

This repository powers [NoCost.dev](https://nocost.dev), a website showcasing the best free tools, APIs, and services for developers.

[![Tools](https://img.shields.io/badge/Tools-1750+-blue.svg)](https://nocost.dev)
[![Categories](https://img.shields.io/badge/Categories-26-green.svg)](https://nocost.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## 📊 What's Inside

- **1750+ tools** across 26 categories
- **Community maintained** - anyone can contribute
- **Always free** - only tools with genuine free tiers
- **JSON format** - easy to use in your own projects
- **Weekly updates** - fresh data from community contributions

### Categories

| Category | Tools | Description |
|----------|-------|-------------|
| 🔧 **Developer Tools** | 450+ | IDEs, testing, debugging |
| 🌐 **Web Development** | 200+ | Frontend frameworks, hosting |
| 🗄️ **Database** | 100+ | SQL, NoSQL, data storage |
| 📊 **Analytics** | 150+ | Monitoring, logging, metrics |
| 💼 **Business** | 100+ | CRM, project management |
| ⚡ **Productivity** | 150+ | Collaboration, automation |
| 🔒 **Security** | 100+ | SSL, auth, penetration testing |
| 🎨 **Content Creation** | 50+ | Media, graphics, video |
| 🎨 **Design** | 80+ | UI/UX, prototyping |
| 📚 **Education** | 50+ | Learning platforms |
| 📱 **Mobile Development** | 50+ | App development tools |
| 🤖 **AI & Machine Learning** | 80+ | ML platforms, AI tools |
| 🔌 **API Tools** | 100+ | API development, testing |
| ⚙️ **Backend** | 80+ | Backend frameworks, services |

## 🔍 Contributing

- 📋 **[Full Alphabetical Index](./tools.json)** - All 1750+ tools listed
- 📁 **[Browse by Category]()** - Organized category files
- 🌐 **[Visit Website](https://nocost.dev)** - Search and filter tools

### Before Adding a Tool

**Please check if it already exists:**

1. Search the [Tools Index](./tools.json) with `Ctrl+F`
2. Browse [category files]()
3. Search on [NoCost.dev](https://nocost.dev)
4. Use our search script: `node scripts/search.js "tool-name"`

This saves time and prevents duplicates!

## �🚀 Quick Start

### Use the Data in Your Project

```bash
# Fetch latest tools data
curl https://raw.githubusercontent.com/Darkmintis/NoCost/main/tools.json > tools.json
```

### JavaScript/Node.js Example

```javascript
// Fetch from GitHub
const response = await fetch('https://raw.githubusercontent.com/Darkmintis/NoCost/main/tools.json');
const tools = await response.json();

// Filter by category
const databases = tools.filter(t => t.category === 'Database');

// Search by name
const githubTools = tools.filter(t => 
  t.name.toLowerCase().includes('github')
);

// Get all categories
const categories = [...new Set(tools.map(t => t.category))];
```

### Python Example

```python
import requests

# Fetch tools
response = requests.get('https://raw.githubusercontent.com/Darkmintis/NoCost/main/tools.json')
tools = response.json()

# Filter by tags
free_apis = [t for t in tools if 'api' in t.get('tags', [])]

# Count by category
from collections import Counter
category_counts = Counter(t['category'] for t in tools)
```

## 📝 Data Structure

Each tool in `tools.json` follows this schema:

```json
{
  "name": "Tool Name",
  "description": "Clear description of what the tool does and its main features",
  "url": "https://example.com",
  "category": "Development"
}
```

### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ | Official tool name |
| `description` | string | ✅ | Clear description (20-500 chars) |
| `url` | string | ✅ | Official website (no affiliate links) |
| `category` | string | ✅ | One of the 26 categories |

## 🤝 Contributing

We **love** contributions! Anyone can submit tools via Pull Requests.

### Quick Contribution

1. **Fork** this repository
2. **Search first** - Check [tools.json](./tools.json) or use `node scripts/search.js "tool-name"`
3. **Edit** `tools.json` - add your tool
4. **Test** with `node scripts/validate.js`
5. **Regenerate index** with `node scripts/generate-index.js`
6. **Submit** a Pull Request

### Requirements

✅ **Must have:**
- Genuine free tier (not just trial)
- Usable for real projects
- Actively maintained
- No affiliate/referral links

❌ **We don't accept:**
- Tools with fake "free tiers"
- Abandoned projects
- Affiliate links
- Duplicate entries
- Promotional content

📖 **Full guidelines:** See [CONTRIBUTING.md](CONTRIBUTING.md)

## ✅ Validation

Validate your changes before submitting:

```bash
# Validate JSON format
node scripts/validate.js

# Search for existing tools
node scripts/search.js "tool-name"

# Regenerate index after adding tools
node scripts/generate-index.js
```

**Three helpful scripts:**
- `validate.js` - Check JSON syntax and required fields
- `search.js` - Find tools quickly
- `generate-index.js` - Create browsable category files

## 📜 License

**MIT License** - Feel free to use this data in your own projects!

You can:
- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Use privately

Just include the license and copyright notice.

##  Statistics

```
Total Tools: 1750+
Categories: 26
Contributors: Community-driven
Updates: Weekly via PRs
Data Format: JSON
License: MIT
Size: ~500KB
```


## 📧 Contact

- **Website:** [nocost.dev](https://nocost.dev)
- **GitHub:** [@Darkmintis](https://github.com/Darkmintis)
- **Twitter:** [@darkmintis](https://twitter.com/darkmintis)
- **Issues:** [Report a problem](https://github.com/Darkmintis/nocost-tools-database/issues)

## 🌟 Star this repo!

If you find this database useful, give it a ⭐ to show your support!

---

**Made with ❤️ by developers, for developers**
