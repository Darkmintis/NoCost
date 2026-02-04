# Contributing to NoCost Tools Database

Thank you for your interest in contributing to NoCost.dev! This guide will help you add new free developer tools to our database.

## ⚡ Quick Checklist

Before submitting:
- [ ] Tool has a **genuine free tier** (not just a trial)
- [ ] Tool is **actively maintained**
- [ ] **No duplicate** - Search tools.json or use `node scripts/search.js "tool-name"`
- [ ] **Valid JSON** - Run `node scripts/validate.js`
- [ ] **Clear description** (20-500 chars)
- [ ] **Correct category** from the list below
- [ ] **No affiliate links** or tracking parameters

## 📋 How to Contribute

### 1. Fork the Repository
Click the "Fork" button at the top right of this page to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/NoCost.git
cd NoCost
```

### 3. Create a Branch

```bash
git checkout -b add-tool-name
```

### 4. Add Your Tool

Edit `tools.json` and add your tool entry. **Minimal example:**

```json
{
  "name": "Supabase",
  "description": "Open source Firebase alternative with PostgreSQL database, authentication, and storage",
  "url": "https://supabase.com",
  "category": "Backend"
}
```

**That's it!** Only 4 fields required: `name`, `description`, `url`, `category`.

> 💡 Tip: Add your tool at the end of the array, before the closing `]`

### 5. Validate Your Changes

```bash
# Run our validation script (recommended)
node scripts/validate.js

# Or just check JSON syntax
node -e "JSON.parse(require('fs').readFileSync('tools.json', 'utf8')); console.log('✅ Valid JSON')"
```

Our validation script checks for:
- Valid JSON syntax
- Duplicate URLs
- Duplicate names within categories
- Valid category names
- Description length (max 500 chars)
- URL format

### 6. Commit and Push

```bash
git add tools.json
git commit -m "Add [Tool Name] to [Category]"
git push origin add-tool-name
```

### 7. Create Pull Request

1. Go to your fork on GitHub
2. Click "Pull Request"
3. Fill in the PR template
4. Submit!

## 📝 Tool Entry Guidelines

### Required Fields

#### `name` (string, required)
- The official name of the tool
- Use proper capitalization (e.g., "GitHub Copilot", not "github copilot")
- 2-100 characters

#### `description` (string, required)
- Clear, concise description of what the tool does
- Mention key features
- 20-500 characters
- No marketing fluff

**Good:**
```json
"description": "Open source Firebase alternative with PostgreSQL database, authentication, storage, and realtime subscriptions"
```

**Bad:**
```json
"description": "The best tool ever! Amazing features!"
```

#### `url` (string, required)
- Official website URL
- Must start with `https://` or `http://`
- **NO affiliate links or referral codes**
- **NO tracking parameters**

**Good:**
```
"url": "https://supabase.com"
```

**Bad:**
```
"url": "https://supabase.com?ref=nocost&utm_source=nocost"
```

#### `category` (string, required)
Choose exactly ONE category:

- `Development` - IDEs, code editors, dev environments
- `Web Development` - Frontend tools, frameworks, CSS libraries
- `Database` - Databases, data storage, data services
- `Analytics` - Analytics, monitoring, logging, APM
- `Business` - CRM, project management, business tools
- `Productivity` - Collaboration, communication, workflow
- `Security` - Security tools, SSL, authentication, pen testing
- `Content Creation` - Media creation, graphics, video editing
- `Design` - Design tools, prototyping, UI/UX
- `Education` - Learning platforms, courses, tutorials
- `Mobile Development` - Mobile app development tools

#### `tags` (array, required)
- 1-10 relevant tags
- Lowercase
- Helps with searchability
- Each tag 2-50 characters

**Examples:**
```json
"tags": ["database", "postgresql", "backend", "authentication", "storage"]
"tags": ["free", "api", "developer-tools", "monitoring"]
"tags": ["design", "prototyping", "collaboration", "ui-ux"]
```
rs)
- [ ] Slug is **unique** (no duplicates)
- [ ] No **duplicate tools** already in the database

## ❌ What We Don't Accept

### Fake Free Tiers
Tools that claim to be "free" but:
- Only offer time-limited trials
- Require credit card immediately
- Have unusably small limits
- "Free" tier is essentially a demo

### Abandoned Projects
- No updates in 2+ years
- Website is down or broken
- Company out of business
- Tool no longer maintained

### Affiliate/Referral Links
- Links with `?ref=`, `?utm_source=`, etc.
- Tracking parameters
- Referral codes in URL

### Duplicate Entries
- Tool already exists in database
- Check before adding

### Low Quality Submissions
- Vague descriptions ("The best tool!")
- Missing required fields
- Wrong category
- Spam or promotional content

## 📋 PR Template

When creating a Pull Request, please provide:

```markdown
## Tool Information

**Tool Name:** [Name]
**Category:** [Category]
**Website:** [URL]

## Why This Tool is Useful

[Brief explanation of why developers would find this tool useful]

## Free Tier Details

[What's included in the free tier]

## Checklist

- [ ] Tool has a genuine free tier (not just trial)
- [ ] Tool is actively maintained
- [ ] No affiliate/referral links
- [ ] JSON is valid
- [ ] Description is clear and accurate
- [ ] Correct category selected
- [ ] Relevant tags added
```

## 🔍 Examples

### ✅ Good Example

```json
{
  "name": "Supabase",
  "description": "Open source Firebase alternative with PostgreSQL database, authentication, storage, and realtime subscriptions",
  "url": "https://supabase.com",
  "category": "Database"
}
```

**Why it's good:**
- ✅ Clear, specific description
- ✅ Official URL (no tracking)
- ✅ Proper category

### ❌ Bad Example

```json
{
  "name": "AwesomeTool",
  "description": "Best tool ever! Amazing features!",
  "url": "https://example.com?ref=nocost",
  "category": "Development"
}
```

**Why it's bad:**
- ❌ Vague, marketing-style description
- ❌ Affiliate link in URL

## 🔧 Updating Existing Tools

If tool information has changed:

1. Find the tool in `tools.json`
2. Update the relevant fields
3. Submit PR with clear description of changes

**Example commit message:**
```
Update GitHub Copilot pricing information

- Updated pricing_paid to reflect new pricing tiers
- Added information about new features in free tier
```

## 🗑️ Removing/Archiving Tools

If a tool is no longer free or has been discontinued:

1. Change `status` to `"archived"`
2. Add note in PR explaining why

**Don't delete entries** - we keep them for historical reference.

## 🤝 Code of Conduct

- Be respectful and constructive
- No spam or self-promotion
- Provide accurate information
- Help maintain data quality

## 🆘 Need Help?

- **Questions?** [Open an issue](https://github.com/Darkmintis/nocost-tools-database/issues)
- **Discussion?** [Start a discussion](https://github.com/Darkmintis/nocost-tools-database/discussions)
- **Found a bug?** [Report it](https://github.com/Darkmintis/nocost-tools-database/issues/new)

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for helping make NoCost.dev better! 🚀**
