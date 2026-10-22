# Overmind documentation

Public product documentation for Overmind, built with Mintlify. The platform and SDK live in the sibling [overmind repository](https://github.com/overmind-core/overmind).

## Content structure

The site follows [Diátaxis](https://diataxis.fr/):

- `tutorials/`: small, complete lessons with fixed inputs and observable results.
- `how-to/`: procedures for a reader's task, including prerequisites, decisions and verification.
- `reference/`: factual contracts, formats, commands and boundaries.
- `explanation/`: concepts, rationale and relationships.

A feature can appear in several forms, but each page has one purpose. Link to a contract instead of repeating a field catalogue in a tutorial. Keep release history and implementation audit notes out of the reader's task flow.

## Agent-first examples

Lead with the outcome a user can ask their coding agent to achieve. Every public page includes a short, copyable request rendered with `AgentPrompt` from `snippets/agent-prompt.mdx`. Give prompts enough context to stand alone: the user’s task, source and desired result in a few concise sentences. Include the full Hugging Face URL when a prompt starts work from the example dataset; follow-up requests can refer to the existing work. Let the connected workflow handle implementation details. Tutorials use one main prompt, observable checkpoints and a known result; guides add prerequisites and execution boundaries; reference prompts inspect the relevant contract; explanation prompts help the user understand recorded evidence. Keep the four Diátaxis purposes distinct.

Place detailed commands, tool names and schemas after the user-facing workflow. They explain what the agent does, rather than requiring the reader to orchestrate every call. Do not imply that MCP transports local bytes or replaces login, secret entry and unsupported administration controls. Native MCP prompts and copyable user requests are different things.

Use `reference/example-dataset.mdx` for the ecommerce fraud source, target semantics and verified counts. Retain original source bytes, publish transformations through saved packages, and keep references out of model input. Do not imply that synthetic fraud results establish real-world performance. Document what a prompt starts, including any inference, evaluation or training work. A preparation-only prompt must have an explicit continuation when launch is the user's next step.

## Editing

Verify claims against the matching platform checkout, registered MCP contracts, CLI help and current frontend routes. A pre-existing docs page is not evidence that a feature still ships. Distinguish data-only work from repository workflows, preparation from launch, deployment from activation, and technical readiness from measured task suitability.

Use placeholders for credentials and deployment-specific IDs. State whether examples execute paid provider work. Keep original target semantics, unknown evidence and incomplete coverage explicit. Avoid hardcoded prices, quotas, model availability and cold-start promises unless sourced and maintained.

Retain redirects in `docs.json` when moving pages. Update internal links to canonical destinations. Old page URLs redirect, but removed heading fragments are not guaranteed to map; use new canonical section links in new material. Do not reuse screenshots of removed controls. New screenshots need a current UI verification.

## Local checks

Install dependencies with Bun and run Mintlify under a supported Node LTS. Validation here used Node 22; Bun reports a Node compatibility version that this Mintlify release rejects. Put the LTS binary first on `PATH`, then run:

```bash
bun install --frozen-lockfile
node node_modules/mint/index.js validate --disable-openapi
node node_modules/mint/index.js broken-links
```

Use `mint validate --help` for the installed version's supported options. `node node_modules/mint/index.js dev` opens a documentation preview when needed. Never start the platform's API or frontend just to check prose.

Before publication, execute changed tutorials against a disposable project on the intended deployment and record actual outcomes. Compilation and link checks do not verify provider-backed behaviour. Apply the repository's content checks and review redirects before pushing.

The [redraft audit](docs-audit.md) records the content inventory, evidence sources, migration map and validation limits. It is maintainer material and excluded from the public site.

Public onboarding and general examples target Overmind Cloud. Local coding-agent execution and local file handling do not imply a locally deployed platform. Keep localhost endpoints in explicitly labelled self-hosting or deployment-development guidance.
