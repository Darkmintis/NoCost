<![CDATA[<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://nocost-dev.vercel.app/logo.png">
    <img src="https://nocost-dev.vercel.app/logo.png" alt="NoCost.dev" width="80">
  </picture>
  <h1 align="center">NoCost Tools Database</h1>
  <p align="center">
    The open-source directory of free developer tools, APIs, and services.
    <br>
    <a href="https://nocost-dev.vercel.app"><strong>Browse the directory »</strong></a>
  </p>
  <p align="center">
    <a href="CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License"></a>
    <img src="https://img.shields.io/badge/tools-thousands-blue" alt="Thousands of tools">
    <img src="https://img.shields.io/badge/categories-20%2B-purple" alt="20+ categories">
  </p>
</p>

## What is this?

A community-maintained database of **thousands of free developer tools** across **20+ categories**. Every tool listed has a genuine free tier — no trials, no credit card required. Used by thousands of developers worldwide.

**Why contribute?** Your PR helps thousands of developers discover tools that save them time and money.

## Quick start

```bash
git clone https://github.com/YOUR_USERNAME/NoCost.git
cd NoCost
node scripts/search.js "tool-name"    # Check for duplicates
node scripts/validate.js               # Validate your changes
```

Then edit `tools.json`, commit, and open a pull request.

## Data format

```json
{
  "name": "Supabase",
  "description": "Open source Firebase alternative with PostgreSQL, auth, storage, and realtime subscriptions",
  "url": "https://supabase.com",
  "category": "Database"
}
```

Required fields: `name`, `description`, `url`, `category`.

## Contribution ideas

- **Add a tool** — know a great free tool that's missing? Open a PR.
- **Fix a description** — make it clearer or fix a typo.
- **Remove a tool** — if a tool dropped its free tier or shut down.
- **Report an issue** — found something inaccurate? Open an issue.

[Full contribution guide →](CONTRIBUTING.md)

## Commands

```bash
node scripts/search.js "keyword"         # Search for tools
node scripts/validate.js                  # Validate tools.json
node scripts/remove.js --dry-run "name"   # Preview removal
node scripts/remove.js "name"             # Remove a tool
```

## Stats

| Metric | Value |
|--------|-------|
| Total tools | Thousands |
| Categories | 20+ |
| License | MIT |

## License

MIT — see [LICENSE](LICENSE).
]]>