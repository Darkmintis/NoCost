# NoCost Tools Database

Open source database of free developer tools used by https://nocost-dev.vercel.app.

This is the public community repo. Contributors only need this repository to add, update, or remove tools. The private site repository `Darkmintis/NoCost.dev` pulls `tools.json` from here automatically after changes are merged.

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## What lives here

- `tools.json`: the source of truth for all tool entries
- `scripts/validate.js`: validates the dataset
- `scripts/search.js`: helps contributors find duplicates before opening a PR
- `.github/workflows`: validates changes and triggers the private site sync after merges

## How updates reach the site

1. You open a pull request against this repo.
2. GitHub Actions validates `tools.json`.
3. A maintainer merges the PR.
4. This repo sends a repository dispatch event to the private `NoCost.dev` repo.
5. The private repo syncs the newest `tools.json` and deploys the site.

## Quick contribution flow

```bash
git clone https://github.com/YOUR_USERNAME/NoCost.git
cd NoCost
node scripts/search.js "tool-name"
node scripts/validate.js
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
```

## Repo split

- Public data repo: `Darkmintis/NoCost`
- Private site repo: `Darkmintis/NoCost.dev`

If you want to contribute tool data, use this repo. If you want to work on the site application itself, that happens in the private repo.

## More details

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full submission rules and review checklist.
