# Agent Rules - NoCost Tools Database

This file configures behavior for AI coding agents working on this repository.

## Repo Overview

Public database of free developer tools. Single source of truth: `tools.json`.
Site: https://nocost-dev.vercel.app

## Workflow

1. Branch from `main` - never use other branches
2. Run `node scripts/search.js "keyword"` before adding a tool to check for duplicates
3. Edit `tools.json` following the schema rules below
4. Run `node scripts/validate.js` before committing
5. Commit and open PR against `Darkmintis/NoCost:main`

## Before Adding a Tool

- **Verify the free tier is real** - not just a 7/14/30-day trial, not a "limited time" promo. The tool must have a genuine, ongoing free plan.
- **Tool must be actively maintained** - check commit history, blog, or recent updates.
- **Check for duplicates** - search by name AND URL:
  ```
  node scripts/search.js "tool-name"
  node scripts/search.js "https://example.com"
  ```
- **Category must exist** in the valid list (see below).

## Before Removing a Tool

- Confirm the reason: no longer free, discontinued, pricing changed.
- Use `node scripts/remove.js --dry-run "tool-name"` first.
- Include removal reason in PR description.

## tools.json Schema

Every entry **MUST** have exactly these fields:

```json
{
  "name": "Official Product Name",
  "description": "What the tool does. Factual, no marketing. Max 500 chars.",
  "url": "https://official-site.com",
  "category": "Developer Tools"
}
```

### name rules
- Use official product name, normal capitalization.
- No emoji, no taglines.

### description rules
- Start with what the tool does, then (optionally) why the free tier matters.
- Be specific. Good: *"Open source Firebase alternative with PostgreSQL, auth, storage, and realtime subscriptions"*
- Bad: *"Best tool ever with amazing features"*
- Max 500 characters (validated).

### url rules
- Must start with `https://` or `http://`.
- Must be the official homepage or product page.
- **No** `ref=`, `utm_*`, affiliate codes, or tracking parameters.

### category rules
- Must be one of the valid categories listed below.
- Case-sensitive.

## Valid Categories

```
AI & Machine Learning
API Tools
Authentication
Automation
Backend Services
Backend
Business
CDN
CI/CD
CMS
Cloud Computing
Cloud
Code Quality
Collaboration
Communication
Content Creation
Content Management
Content
CSS Frameworks
Database
Design Tools
Design
Development
Developer Tools
Domains & DNS
Education
Email Services
Forms
Hosting
Icons & Graphics
Infrastructure
Learning
Mobile Development
Mobile
Monitoring
No-Code/Low-Code
Other
Payments
Productivity
Search
Security
Storage
Testing
Version Control
Web Development
```

## Validation

Always run before committing:

```bash
node scripts/validate.js
```

The script checks:
- Valid JSON syntax
- Required fields present (name, description, url, category)
- Duplicate URLs
- Duplicate names within the same category
- Valid URL format
- Description length (max 500 chars)
- Category is in the allowed list

Validation **must pass** (exit code 0) before opening a PR.

## Commit Rules

- Keep commits focused: one tool add = one commit.
- Commit message format:
  - Add: `Add ToolName`
  - Update: `Update ToolName - what changed`
  - Remove: `Remove ToolName - reason`
  - Fix: `Fix typo in ToolName description`
- Example: `Add Supabase`
- Do NOT commit `AGENTS.md` - this file is instructions only.

## PR Rules

- PR title matches commit message style.
- Fill in the PR template completely.
- PRs must target `Darkmintis/NoCost:main`.
- After merge, the site automatically syncs the latest `tools.json`.

## What We Do Not Accept

- Fake free tiers (trials presented as free plans)
- Duplicate entries
- Abandoned or dead projects
- Affiliate or tracking links
- Promotional or marketing descriptions
- Broken JSON or missing required fields
- Tools requiring a credit card for the "free" tier (unless genuinely free with card on file)

## Tools Available

- `node scripts/search.js "keyword"` - search tools.json
- `node scripts/validate.js` - validate the dataset
- `node scripts/remove.js [--dry-run] [--exact] "name"` - remove a tool
