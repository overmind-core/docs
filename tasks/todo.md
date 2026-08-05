# Engineer-focused docs overhaul — plan

Goal: rewrite the Overmind docs for engineers. Less prose, more verified code
(SDK calls, env vars, endpoints, OTel config) plus real console screenshots
with workflow explanations. Every technical claim traceable to code in the
platform / SDK repos or the mirrored live docs under `sources/site/`.

## Phase 0 — Research (done)
- [x] Read docs.json and all 11 existing .mdx pages
- [x] Read mirrored live docs (`sources/site/docs.overmindlab.ai/`): guides + API reference
- [x] Inventory website repo screenshots (`apps/web/public/images/product/` — 25 console captures)
- [x] Explorer report: backend API + data model (Django, endpoints, auth)
- [x] Explorer report: OTel ingestion stack (no collector — direct OTLP/HTTP → Django → Postgres)
- [x] Explorer report: frontend routes/pages (UI surfaces, terminology, feature flags)
- [x] Explorer report: SDK repos (Python `overmind` v0.1.55, JS `@overmind-lab/trace-sdk` v0.1.0)
- [x] Direct verification: JS enableBatching default true; X-API-TOKEN not read by backend
      (only X-Api-Key / Authorization Bearer); /api/v1/models?status= values; SpanType enum;
      `overmind optimize` CLI command; inference error codes 404/503/502/429; LoRA/full FT
      confirmed in sft engines

## Audit findings (current docs)
- Pages are polished prose but light on runnable code; only Observability and
  Inference have snippets. No screenshots anywhere (only `TODO(screenshot)` comments).
- No SDK reference pages despite two real SDKs with rich public APIs.
- Observability page doesn't explain the OTLP path concretely (endpoint path,
  header, protocol) — needs a real implementation-focused rewrite.
- No REST API overview page even though the platform exposes `/api/agents/`,
  `/api/traces/`, `/api/datasets/`, `/api/jobs/`, `/api/auth/api-keys/` etc.
- Inaccuracies found and fixed: six connectors claimed (only Langfuse is live);
  "collector pipeline" implied (there is none); model catalog claims unverifiable.

## Phase 1 — Structure (docs.json)
- [x] New IA: Overview (index, quickstart), Tracing (core/observability,
      tracing/sdk-python, tracing/sdk-typescript), Core (core/agents, core/datasets),
      Agent Testing (eval, optimisers), Models (training, inference),
      Platform (platform/api, administration, glossary)
- [x] No pages moved (only added), so no redirects needed

## Phase 2 — Rewrite pages
- [x] index.mdx — what the platform is, data-flow diagram, endpoints table, section cards
- [x] quickstart.mdx — key → install → init() → first trace, plus raw-OTLP path
- [x] core/observability.mdx — full ingestion story: pipeline diagram, OTLP endpoint
      spec, attribute-mapping table, span classification, agent attribution, sessions,
      live scoring, console workflows, read API
- [x] tracing/sdk-python.mdx (new) — init() params, SpanType table, decorators,
      start_span, context helpers, PromptString, full example
- [x] tracing/sdk-typescript.mdx (new) — OvermindClient config, initTracing options,
      manual helpers, shutdown patterns, env vars
- [x] core/agents.mdx — three ingest paths, agent page tabs, trace coverage,
      observability PR, API endpoints
- [x] core/datasets.mdx — datapoint JSON, source/intent/surface enums, locking,
      creation paths, Workshop pillars/commits/waivers, API
- [x] agent-testing/eval.mdx — six evaluator kinds with real enum/config values,
      eval sets w/ roles, run anatomy + API, outcomes/degraded samples, calibration
- [x] agent-testing/optimisers.mdx — prerequisites, executioner (`overmind optimize`),
      loop FSM diagram w/ real defaults (5×3, patience 3), run page, PR, API
- [x] models/training.mdx — beta note, run inputs, recommend/estimate/validate API,
      LoRA/full FT, live metrics, baseline-vs-final benchmark, model PR
- [x] models/inference.mdx — lifecycle statuses, OpenAI-compatible endpoints w/
      ?status= filter, 4 client snippets, verified error table, loop closure
- [x] platform/api.mdx (new) — auth (3 methods), endpoint map by resource,
      conventions (filtering, errors, IDs)
- [x] platform/administration.mdx — projects, API keys (verified format/headers/
      expiry), GitHub, connectors, feature gating, jobs, billing/credits
- [x] platform/glossary.mdx — all terms aligned with verified data model

## Phase 3 — Assets
- [x] 20 screenshots copied from website repo into images/platform/; 18 embedded
      with captions (agent-context-graph.png, dataset-readiness.png held in reserve)
- [x] All embedded screenshots visually inspected before captioning

## Phase 4 — Verify
- [x] All 14 docs.json pages exist; no orphan pages; all 18 image paths resolve;
      internal links + anchors validated by script
- [x] `mint broken-links` (Node 22): "no broken links found"
- [x] `mint dev` smoke test: all 14 pages HTTP 200, no MDX parse errors,
      content + images render

## Review

**Structure**: 11 pages → 14. Added a Tracing group (observability + two SDK
references) and a REST API page under Platform. No URLs changed, so no redirects.

**Approach**: every claim traced to code. Four parallel explorers covered the
Django backend, the OTel ingestion path, the frontend routes, and the SDK repos;
contested details (JS batching default, auth headers, models ?status filter,
SpanType values, LoRA support, CLI verb) were re-verified directly in source.

**Key corrections shipped**: no OTel collector exists — SDKs post OTLP/HTTP
protobuf straight to Django and spans land in Postgres (observability page now
documents the real pipeline); only Langfuse is a live connector; OTLP accepts
protobuf only (no JSON/gRPC); auth is X-Api-Key / Authorization Bearer with
`ovr_` keys hashed at rest; training/inference flagged as beta-gated.

**Known gaps / could not confirm from code** (flagged, not guessed):
- JS SDK sends `X-API-TOKEN` but the backend only reads `X-Api-Key` /
  `Authorization` — likely handled by an edge proxy in production; docs recommend
  the verified headers only.
- Exact eval-run creation payload field names beyond the model's fields (docs
  show a representative shape and point to /api/docs/ Swagger).
- Rate limits, pagination format — not documented because not verified.

## Follow-up pass: grammar, formatting, terminology (Aug 5, 2026)

- [x] Terminology: "fine-tune" never used as a noun; generic prose is
      "trained model" / "training" / "training run" (matches website copy).
      "LoRA" / "full fine-tuning" kept only where the method matters
      (models/training experiment config). API paths (`/api/finetuning-jobs/`),
      enum values (`ft`), model refs (`ft-...`), and literal UI labels
      (the dialog's "Fine-tuning" intent option) untouched.
- [x] Grammar: proofread all 14 pages — split run-ons, fixed number
      disagreements, removed repetitive phrasing, active voice.
- [x] Formatting: headings confirmed sentence case throughout; British
      spellings in prose (catalogue) with American API identifiers preserved;
      Oxford commas; consistent bullet lead-in bolding on optimisers page.
- [x] Verified: nav pages exist, images resolve, internal links + anchors OK,
      `mint broken-links` clean (Node 22), all 14 pages return 200 on the
      running dev server (port 3002).
