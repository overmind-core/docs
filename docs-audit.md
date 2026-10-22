# Documentation audit and redraft

Audited 22 October 2026 against platform commit `809e22a9d50f48929b201e12fb35035ed82d7bde` and the existing docs working tree based on `4c198f6753d082d27ff7dcde35d29ca5510a927c`.

The input was **21 public MDX pages**, 3,913 lines, plus navigation, snippets and the starter README. The docs checkout already contained 14 modified tracked files and two untracked pages. Those edits were included in the audit, not discarded by resetting Git. A complete pre-redraft file snapshot and hashes were saved outside the checkout before editing. The working tree, rather than the docs branch name, was compared with the current platform implementation.

The latest source-and-contract recheck is recorded in [Documentation fact check](docs-fact-check.md). Sections below retain the history of earlier drafts; current tutorial scope includes training and benchmarking.

## Findings

| Finding                                                   | Evidence in the previous docs                                                                                            | Correction                                                                                                  |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| Repository-first onboarding excluded data-first users     | Quickstart required a repository scan and instrumentation before useful work                                             | Independent dataset, trace and evaluation lessons; capability optional where supported                      |
| Product claims exceeded measured evidence                 | Introduction promised continuous improvement, no poisoning and no hallucinations                                         | Describe supported operations and require measured comparisons for improvement claims                       |
| Pages mixed four reader needs                             | Training, MCP, evaluation and Workshop pages combined procedures, API tables, architecture and accumulated release notes | Separate tutorials, task guides, reference and explanations                                                 |
| Removed Workshop interaction remained documented          | Dataset guide used a bottom composer, Start workshop and platform-agent flow                                             | External authoring, retained packages, dataset table and inspectable published cells                        |
| Evaluation documentation described removed objects        | Five evaluator kinds, verdicts, behaviours, task executions and old upsert APIs                                          | Two matrix row types, frozen target runs, span metrics and append-only score history                        |
| Jev fallback claims contradicted implementation           | Decision-engine page described generative fallback; evaluation judge selector conflated grading and explanations         | Dedicated Jev scoring; separate generative low-score explanations; failures stay technical                  |
| Upload contracts contradicted each other                  | Workshop said one file only; CLI documented an older upload publication protocol                                         | Ordered atomic multi-file transfer with durable receipts; separate byte/landing state                       |
| Training pages described absent supervision controls      | Live learning-rate interventions and control-training tools were presented as available                                  | Supported development monitoring, explicit cancellation, pinned runtime and recovery boundaries             |
| Decision deployment statements conflicted                 | Training said native artifacts did not deploy; inference said every model was chat-compatible                            | Matching automatic decision deployment and typed probability input/output                                   |
| Agent-improvement page described absent platform surfaces | Improvement opportunities, releases, runner credentials and serving-policy APIs absent from current routes/catalogue     | Route readers to current investigation, evaluation and optimiser workflows; old source retained in snapshot |
| Self-hosting instructions were stale                      | Four workers, separate frontend, old seed command, alternate training backend and wrong frontend env override            | Current Compose frontend/six workers/sandbox; validated settings; no unsupported seed shortcut              |
| Credential guidance assumed project-only MCP              | MCP/administration sections claimed MCP always held a project key                                                        | Account/project discovery, explicit per-operation project selection and separate transfer auth              |
| Connector instructions used a retired mapping flow        | Pattern-group review tool absent; current contracts require reviewed parent/root boundaries                              | Document `inspect_connectors`, explicit mapping confirmation and configured sync                            |
| Glossary preserved obsolete models                        | Linear mutable Python cells, platform Workshop agent, Verdict and five evaluator kinds                                   | Definitions matching current records and contracts                                                          |
| Screenshots were not current evidence                     | Removed composers, task execution/evaluator screens and older model layouts                                              | Remove stale screenshot references from rewritten content; keep assets pending deliberate asset cleanup     |
| Maintainer README was a template                          | Mintlify Starter Kit and a broken local AI-tools link                                                                    | Product-specific authoring, verification and publication guidance                                           |

## Information architecture

Diátaxis is used as an editorial decision rule, not just four renamed feature groups. Sources: [overview](https://diataxis.fr/), [tutorials](https://diataxis.fr/tutorials/), [how-to guides](https://diataxis.fr/how-to-guides/), [reference](https://diataxis.fr/reference/) and [explanation](https://diataxis.fr/explanation/).

- Tutorials use fixed inputs, one bounded outcome and visible expected results. They do not introduce a paid training run as onboarding.
- How-to guides begin with a reader's goal and prerequisites, then finish with verification or recovery. Optional decisions stay here rather than branching a first lesson.
- Reference follows the actual software contracts. It indexes connected schemas instead of pretending a hand-maintained table is exhaustive.
- Explanation covers execution boundaries, capability evidence, data lineage, evaluation, model lifecycle and decision semantics.

The home page routes users by task and offers both data-first and repository entry paths. Navigation keeps product topics inside reader-need groups. Canonical page links use the new paths; all 20 relocated original page routes redirect, and older redirect destinations are flattened to canonical pages. Existing `/latest/:slug*` behaviour is retained. Old fragments on removed pages may not map to new headings; current internal links do not depend on them.

## Page disposition

| Original page                   | Primary destination           | Additional content                                          |
| ------------------------------- | ----------------------------- | ----------------------------------------------------------- |
| `index`                         | `index`                       | Task routing and two starting paths                         |
| `quickstart`                    | `tutorials/index`             | First dataset, first trace, first evaluation                |
| `core/capabilities`             | `explanation/capabilities`    | Map-agent guide, SDK declarations                           |
| `core/datasets`                 | `how-to/prepare-data`         | Dataset formats and partitioning                            |
| `core/native-agent-workshop`    | `reference/pipelines`         | Native-agent explanation and recovery                       |
| `core/observability`            | `how-to/investigate`          | Instrumentation, OTLP and connector guides                  |
| `agent-testing/eval`            | `how-to/evaluate`             | Matrix reference, comparison semantics                      |
| `agent-testing/trace-scoring`   | `explanation/evaluation`      | Matrix/reference history and signals                        |
| `agent-testing/decision-engine` | `explanation/decision-models` | Native comparison guide and typed data                      |
| `agent-testing/optimisers`      | `how-to/optimise`             | CLI loop reference                                          |
| `agent-testing/improvements`    | `how-to/investigate`          | Remove absent improvement/release system claims             |
| `models/training`               | `how-to/train`                | Monitoring guide, training reference, lifecycle explanation |
| `models/inference`              | `how-to/serve`                | Inference contract and routing states                       |
| `platform/mcp`                  | `reference/mcp`               | Connection and interrupted-work guides                      |
| `platform/cli`                  | `reference/cli`               | Task-specific examples in guides                            |
| `platform/api`                  | `reference/api`               | Verified route families and schema discovery                |
| `platform/administration`       | `how-to/manage-access`        | Configuration, glossary and billing boundaries              |
| `platform/self-hosting`         | `how-to/self-host`            | Configuration reference                                     |
| `platform/glossary`             | `reference/glossary`          | Remove absent object definitions                            |
| `tracing/sdk-python`            | `reference/python-sdk`        | First-trace lesson and instrumentation guide                |
| `tracing/sdk-typescript`        | `how-to/instrument`           | OTLP reference; no current JavaScript SDK                   |

## Evidence used

Paths below are in the platform repository at the audited revision. This review used source and contracts; it did not infer shipping behaviour from the stale documentation.

| Area                      | Primary evidence                                                                                                                                                                  |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Route existence and auth  | `overbae/urls.py`, `overbae/api/auth_registration.py`, `overbae/services/mcp/contracts/projects.py`                                                                               |
| Evaluation                | `overbae/services/mcp/contracts/evaluations.py`, `tools_evaluations.py`, `overbae/innermind/{default_set,evals,deterministic,dataset,generation}.py`, `overbae/innermind/checks/` |
| SDK                       | `overmind/overmind/{__init__,tracing,lifecycle,evals}.py`                                                                                                                         |
| File transfers            | `overmind/overmind/{dataset_cmd,connection_cmd,transfer_connection}.py`                                                                                                           |
| Workshop                  | `overbae/services/mcp/contracts/workbench.py`, `overbae/services/datasets/pipeline_packages.py`, `.agents/skills/data-workshop/SKILL.md`                                          |
| Data-first workflows      | `overbae/services/mcp/contracts/model_workflows.py` and its registered tool implementations                                                                                       |
| Training/inference        | `overbae/services/mcp/contracts/{finetuning,training_monitoring,inference}.py`, `tools_finetuning.py`, `overbae/api/inference_requests.py`                                        |
| Signals and observability | `overbae/services/mcp/contracts/{signals,observability}.py` and registered tools                                                                                                  |
| Deployment                | `overbae/settings.py`, `.env.example`, `docker-compose.yml`, `frontend/.env.example`                                                                                              |
| Product invariants        | `AGENTS.md`, `.agents/skills/mcp/SKILL.md`, `.agents/skills/data-workshop/SKILL.md`                                                                                               |

## Initial redraft acceptance and verification

The initial redraft contained **39 public pages**: one home page, a tutorial chooser and three lessons, 16 how-to guides, 12 references and six explanations. It preserves 51 redirect entries, including the 20 relocated source routes.

Checks completed on the draft:

- Mintlify strict build validation passed with the installed Mintlify 4.2.898 CLI under Node 22.23.1: `node node_modules/mint/index.js validate --disable-openapi --telemetry false`. The CLI requires write access to its generated `~/.mintlify` preview cache. Bun/Node-25 compatibility was rejected; rerunning with Node LTS resolved it.
- Mintlify `broken-links --telemetry false` passed with no broken links.
- The platform repository's pre-commit hooks passed on all changed/added docs files, including whitespace, JSON, file-size, private-key and Markdown formatting checks. `git diff --check` also passed.
- A separate local check found all 39 pages in navigation, resolved the 72 local MDX links, checked redirect targets/chains and parsed embedded Python/JSON/JSONL examples.
- The dataset fixture has four records with two per category.
- The evaluation lesson's actual Python source passed the platform's AST audit and ran through `overbae.innermind.deterministic.run` on in-memory spans: scores `[1.0, 1.0, 0.0]`. No database writes, provider requests or training were used for that check.
- Example matrix/set/run payloads validated against the current Pydantic contracts. All 74 tool names in the MCP family index matched registered catalogue definitions.

The initial executor check also exposed a documentation trap: deterministic scripts receive attribute-based span objects, and recorded-mode evaluation does not consume an arbitrary `output` column. The lesson uses the supported recorded answer shape and checks only vocabulary membership; it does not claim task correctness from a self-reference.

The documentation must compile as MDX, pass Mintlify configuration validation, resolve local navigation/links/assets and avoid redirect chains through removed pages. Commands, code snippets and named tools must match the audited implementation. Tutorial fixtures should produce the stated counts and deterministic check outcomes.

Live walkthroughs require a disposable project and explicit execution of the examples. Static compilation cannot verify server connectivity, provider behaviour, deployed worker qualification, UI screenshots or hosted rollout. These remain separately reportable checks rather than inferred successes.

## Maintenance policy

Update the task procedure, authoritative reference and affected explanation together when a product contract changes. Re-run tutorial walkthroughs when their commands or output expectations change. Do not append release-note paragraphs to whichever feature page is nearest. Keep catalogue counts, runtime hashes, provider availability, quotas and prices discoverable at the connected deployment unless a dedicated maintained reference owns them.

No production publication, commit or push is part of this redraft. The draft is for review against the current platform checkout; the deployed hosted version may differ.

## Agent-first revision

Following review of the local preview, the docs now centre on requests to the coding agent. All **40 public pages** include a copyable task-specific prompt. The homepage routes by outcomes; onboarding comes first in navigation; the three tutorials each begin with one main prompt and end with visible checkpoints. Detailed tool procedures remain in guides and factual contracts remain in reference, preserving the Diátaxis separation.

The new `reference/example-dataset` pins `dair-ai/emotion`, configuration `split`, at revision `cab853a1dbdf4c42c2b3ef2173804746df8825fe`. Original train and validation Parquet files were downloaded to temporary verification storage, their hashes recorded, and their schemas, label metadata and counts inspected using PyArrow. The first 120 training rows have label counts 32/48/9/19/8/4; the first 60 validation rows have 29/17/6/7/1/0. The missing development label is explicit. No source text is republished in the docs.

The main dataset tutorial now retains the full source and publishes sample selection through a saved preparation. The evaluation exercise derives three rows with source lineage and deliberately corrupts one recorded answer. It measures vocabulary membership, never classification accuracy. Training preparation has an explicit launch continuation; application activation has its own prompt. Native MCP prompts are distinguished from ordinary user requests. Authentication, secure secret entry, local shell work and unsupported administration controls are not represented as MCP-only operations.

Verification for this revision:

- All 40 public pages have prompts and appear once in navigation; 106 local links and their linked heading anchors resolve. Existing redirects were retained.
- Seven Python blocks parse; five JSON blocks parse. All 74 named tools in the MCP family index match the registered catalogue, and listed native prompt names match the server registry.
- The actual revised evaluation script passed the deterministic executor's AST audit and scored in-memory spans as `[1.0, 1.0, 0.0]`. Example matrix, set and run inputs passed current contract validation.
- The pinned source schema declares the six labels in the documented order. Dataset counts, known first-row answers and both SHA-256 checksums match the published examples.
- Mintlify build validation passed on both the staged and final applied revision. Mintlify broken-link checks and the platform pre-commit hooks passed; `git diff --check` passed.
- The running preview at `http://localhost:3002` rendered the new homepage and linked dataset tutorial, including copy controls, prompt text and expected counts. No production docs were published.

No tutorial was executed against a live Overmind project for this revision. Prompt outcomes can depend on the coding client, credentials, connected catalogue, sandbox and provider configuration. The checks above validate the documented fixtures and contracts; they do not establish an end-to-end platform run or model quality. No training, evaluation or serving job was launched.

## Short fraud prompts and brand asset

The user requested shorter prompts and a fraud dataset previously used in their work. The source was identified from the prior “Train fraud model and benchmark JEv” chat, which linked `https://huggingface.co/datasets/apex0data/ecommerce-fraud-detection-synthetic-10k-sampl`. No historical project IDs, private results or production credentials were copied into public documentation.

The current original CSV at revision `8314a33ce236442577ac988c104c2f72f17fda7f` was downloaded for verification: 10,000 records, 9,580 `False` and 420 `True` labels. Its SHA-256 is `05f63f3c49fc9a3fab5e230e8474e064052a239fb56c1aa1e10be98821e3a44c`. The source facts and grouping/imbalance limitations live in reference; copyable prompts now state the outcome without prescribing tool sequences, hashes, sample sizes or package internals. The earlier emotion fixture and its fixed evaluation outcomes above are historical checks of the previous draft, not current tutorial claims.

All prompt blocks use a shared Mintlify MDX component with selectable text and clipboard feedback. Its window chrome and frame come from [the supplied Figma asset](https://www.figma.com/design/Qqx4oeh55fg1hRd2x7fZvr/2026-01-Overmind-Brand-Assets--Copy-?node-id=1152-69298), read with Figma design context. Original exported SVGs are retained locally. The raster asset is used as a sliced border only, so its original name/title are never displayed behind the prompt. Existing fonts and surface tokens are reused.

Verification for the fraud revision: Mintlify build validation passed. All 40 pages use the shared component, with 44 prompts (at most 20 words each) and 104 resolved local links. Source CSV counts and checksum match the reference. Exported Figma assets match their downloaded bytes. Mouse and keyboard copying produced the exact prompt text; denied/unavailable clipboard paths passed a local handler check. Browser checks at 375px, the normal preview width and 1280px found no prompt overflow; all header images loaded and browser error logs were empty. Temporary viewport overrides were reset. The design detector only flagged pre-existing Geist font declarations; the prompt itself uses the site's existing Mondwest face. No live platform training or evaluation was launched for this documentation revision.

## Prompt context and compact presentation

Following further preview feedback, prompts now include task context and the desired result rather than a strict word-count target. Dataset-starting requests include the complete ecommerce fraud Hugging Face URL inside the copyable text; follow-ups refer to the existing dataset or job. Tool sequences and preparation internals remain outside the prompts.

The shared Figma frame and header graphics are rendered at half their previous size, with reduced padding and a compact copy control. Prompt text now uses the same 16px Geist Pixel and 28px line height as rendered page prose. Touch pointers retain a larger copy target.

Verification: all 40 pages retain 44 prompts and 104 valid local links; Mintlify build validation and broken-link checks passed. Browser checks confirmed the compact frame at 375px and 1280px without horizontal overflow, and mouse/keyboard copying retained the full source URL. The rendered prose is a 16px span, so the final prompt type matches that computed size rather than the older 15px paragraph rule. Pre-commit passed. No platform jobs were launched.

## Hosted onboarding default

Corrected an unintended self-hosting assumption in public onboarding. The connection prompt now asks to connect the reader’s Overmind account, while setup, tracing and API examples use the Cloud endpoints defined by the SDK and CLI. Localhost remains in the self-hosting guide and clearly labelled local development configuration reference. These documentation edits do not change the development workspace’s local-only platform connection.

## Quick-start link and complete fraud workflow

Setup prompts now direct the coding agent to the published https://console.overmindlab.ai/setup.md instructions, verified by reading that public document. The homepage and fraud tutorial request preparation, decision-model training and held-out benchmarking together. The tutorial retains its existing route but is titled “Train your first fraud model”; its outcomes, follow-up and tutorial index now reflect the complete workflow. Data checks remain part of the agent’s work rather than a separate user-requested stopping point. The standalone evaluation and self-hosting guides no longer require the training tutorial just to prepare data or check connectivity. No setup or model jobs were executed as part of this docs edit.
