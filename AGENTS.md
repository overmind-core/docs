# AGENTS.md

The Overmind documentation site, built with [Mintlify](https://mintlify.com). Claude Code, Codex and Cursor read this file natively. Shared skills, if any are added, go in `.agents/skills/` with a `.claude/skills` symlink to it; personal skills go in `~/.agents/skills/`.

## Commands

Bun is the runner; do not assume `node` is installed.

```bash
bunx mint dev            # preview on http://localhost:3000
bunx mint broken-links   # run before every PR; must report no broken links
```

There is no CI, linter or formatter in this repo.

## Layout

- Pages: `index.mdx`, `quickstart.mdx`, and the `tracing/`, `core/`, `agent-testing/`, `models/` and `platform/` folders.
- `docs.json` holds the theme, navbar, footer, the navigation groups and the redirects. A new page is an `.mdx` file plus its extensionless path in a group's `pages`. A moved or renamed page also needs an entry in `redirects`.
- `snippets/`: `ascii.jsx` (the `<Ascii>` diagram frame) and `model-catalog.jsx` (a hard-coded model table).
- `images/`, `logo/`, `fonts/`: static assets. Screenshots go in `images/platform/` as `.jpg`.
- `custom.css`, `eye-blink.js`, `table-labels.js`, `posthog.js`: site chrome. `table-labels.js` copies header names into cells so tables stack on phones; keep tables as plain markdown so it keeps working.
- `.mintignore` keeps drafts (`drafts/`, `*.draft.mdx`) and agent files out of the published site.

## Writing

- Frontmatter: `title` and a one-sentence `description` on every page.
- Headings: `##` and `###`, sentence case. CLI sections may use the command as the heading (`` ## `overmind sync` ``).
- British English: behaviour, optimise, licence, cancelled. Keep code identifiers and API names as they are (`optimizer`, `catalog`).
- Second person, present tense. State the fact and stop: no marketing tone, no reassurance, no emojis. UI labels in **bold**, identifiers in `code`.
- Links are root-absolute without the extension, with anchors where useful: `/core/observability#the-otlp-endpoint`.
- Images: `<Frame caption="A full sentence.">` around `<img src="/images/platform/x.jpg" alt="Short noun phrase" />`.
- Components in use: `Card` and `CardGroup cols={2}`, `Steps`/`Step`, `Tabs`/`Tab`, `CodeGroup` (with titled blocks such as `json Cursor (.cursor/mcp.json)`), `Note`, `Tip`, `Warning`, `Frame`. Prefer these over new ones.
- Snippets are imported right after the frontmatter with an absolute path: `import { Ascii } from "/snippets/ascii.jsx";`.
- Tag the language on new code blocks (`bash`, `python`, `json`).

## Source of truth

The platform and SDK live in `overmind-core/overmind`, checked out at `../overmind`. A platform PR that changes user-visible behaviour ships with a linked PR here. Check a page against its source before you change it:

| Page | Source in `../overmind` |
| --- | --- |
| `platform/cli.mdx` | `overmind/overmind/` (`__main__.py`, `init_cmd.py`, `sync.py`, `skills.py`) |
| `platform/mcp.mdx` | `overbae/services/mcp/` and `overmind/skills/` |
| `tracing/sdk-python.mdx` | `overmind/overmind/tracing.py`, `overmind/docs/tracing-attributes.md` |
| `models/training.mdx`, `snippets/model-catalog.jsx` | `overbae/modal/models.json` |
| `platform/self-hosting.mdx` | `.env.example`, `docker-compose.yml` |
| `platform/api.mdx` | `overbae/urls.py` |
| `platform/licensing.mdx` | the `LICENSE` files |

## Git

- Branch `docs/<slug>` from `main`, then open a PR to `main`.
- Commit messages: an imperative, sentence-case subject and at most one body line. No co-author trailers.
