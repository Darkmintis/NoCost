# Contributing to NoCost

This repository is the public database behind NoCost.dev. If you want to add or fix a tool listing, this is the only repo you need.

## Before you open a PR

- Check that the tool has a real free tier and is still active.
- Search for duplicates with `node scripts/search.js "tool-name"`.
- If a tool is no longer free, remove it from `tools.json` or use `node scripts/remove.js "tool-name"`.
- Keep the description factual and short.
- Use the official URL with no referral or tracking parameters.
- Run `node scripts/validate.js` before pushing.

## Quick start

```bash
git clone https://github.com/YOUR_USERNAME/NoCost.git
cd NoCost
git checkout -b add-tool-name
node scripts/search.js "tool-name"
node scripts/validate.js
```

Then edit `tools.json`, run the validator again, commit, and open a pull request.

To remove a tool that became paid or was discontinued:

```bash
node scripts/remove.js --dry-run "tool-name"
node scripts/remove.js "tool-name"
node scripts/validate.js
```

## Required schema

Every entry in `tools.json` must include:

```json
{
  "name": "Tool Name",
  "description": "What the tool does and why the free tier is useful",
  "url": "https://example.com",
  "category": "Developer Tools"
}
```

## Field rules

### `name`

- Use the official product name.
- Use normal capitalization.

### `description`

- Keep it clear and specific.
- Focus on what the tool does.
- Avoid marketing copy.

Good example:

```json
"description": "Open source Firebase alternative with PostgreSQL, auth, storage, and realtime features"
```

Bad example:

```json
"description": "Best tool ever with amazing features"
```

### `url`

- Must start with `https://` or `http://`.
- Must be the official tool URL.
- No `ref`, `utm_*`, affiliate, or tracking params.

Good:

```json
"url": "https://supabase.com"
```

Bad:

```json
"url": "https://supabase.com?ref=nocost&utm_source=nocost"
```

### `category`

Pick one category already used in the dataset. The validator enforces the allowed list.

## What we do not accept

- Fake free tiers or free trials presented as free plans
- Duplicate entries
- Abandoned or dead projects
- Affiliate or tracking links
- Promotional descriptions
- Broken JSON or missing required fields

## Opening the pull request

After validation passes:

```bash
git add tools.json
git commit -m "Add Tool Name"
git push origin add-tool-name
```

Open a PR and fill in the template.

If you are removing a tool, mention why in the PR description, for example:

- no longer offers a real free tier
- project discontinued
- pricing page changed and free plan removed

## How the site updates

After your PR is merged into `Darkmintis/NoCost`, GitHub Actions notifies the private `Darkmintis/NoCost.dev` site repo, which syncs the latest `tools.json` and deploys the update.

## Help

- Questions: https://github.com/Darkmintis/NoCost/issues
- Bugs in data: open an issue in this repo

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
