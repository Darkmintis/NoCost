# NoCost Tools Database

Open source database of free developer tools used by https://nocost-dev.vercel.app.

Contributors only need this repository to add, update, or remove tools. Changes merged here are automatically synced to the site.

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## What lives here

- `tools.json`: the source of truth for all tool entries
- `scripts/validate.js`: validates the dataset
- `scripts/search.js`: helps contributors find duplicates before opening a PR
- `scripts/remove.js`: removes tools that are no longer free or should be delisted
- `.github/workflows`: validates changes and triggers site sync after merges

## Quick contribution flow

```bash
git clone https://github.com/YOUR_USERNAME/NoCost.git
cd NoCost
node scripts/search.js "tool-name"
node scripts/validate.js
node scripts/remove.js --dry-run "tool-name"
```

Then edit `tools.json`, commit your change, and open a pull request.

## Data format

Each entry in `tools.json` follows this shape:

```json
{
  "name": "Tool Name",
  "description": "Clear description of what the tool does",
  "url": "https://example.com",
  "category": "Developer Tools"
}
```

Required fields:

- `name`
- `description`
- `url`
- `category`

## Useful commands

```bash
node scripts/search.js "supabase"
node scripts/validate.js
node scripts/remove.js --exact "https://example.com"
```

## More details

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full submission rules and review checklist.
