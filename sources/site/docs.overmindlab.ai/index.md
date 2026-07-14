# Source: https://docs.overmindlab.ai/

Overview

[Introduction](https://docs.overmindlab.ai/)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Introduction

## What is Overmind?

[Section titled “What is Overmind?”](https://docs.overmindlab.ai/#what-is-overmind)

**Automatically optimize your agents — better prompts, better tools, better models.**

Overmind improves production agents by analyzing their code, capturing traces from runs, and driving autonomous optimization that keeps only changes that measurably help.

For a product-level overview, see the [Platform Overview](https://docs.overmindlab.ai/guides/platform-overview).

Today, Overmind includes:

- [Overmind Optimizer](https://docs.overmindlab.ai/guides/overmind_optimizer/) — autonomous optimization loops for data-backed production agents
- [Tracing SDKs](https://docs.overmindlab.ai/guides/how-to-use-tracing) — production telemetry that feeds the optimizer
- [Fine-tuning (Beta)](https://docs.overmindlab.ai/guides/fine-tuning-beta) — private model customization on your traces

You register your agent, define (or let Overmind infer) a policy that describes correct behavior, and start optimization. Overmind then:

1. Runs your agent on a test dataset and records detailed traces of every LLM call and tool invocation.
2. Scores outputs against an evaluation spec derived from your policy.
3. Diagnoses failures with a strong reasoning model that sees your code, policy, traces, and scores.
4. Produces candidate code fixes (best-of-N) across prompts, tool descriptions, model selection, and agent logic.
5. Accepts or reverts each candidate using regression-aware criteria, keeping only changes that genuinely improve the agent.

After several iterations you get a measurably better agent, plus a readable report and diff.

## How it works

[Section titled “How it works”](https://docs.overmindlab.ai/#how-it-works)

```
           Your Python agent (registered entrypoint)                        │                        ▼         overmind optimize <name>                        │   ┌────────────────────┴────────────────────┐   │                                         │   ▼                                         │Run agent on dataset ──▶ Traces + outputs    │                                │            │                                ▼            │                         Score vs. eval      │                         spec (+ policy)     │                                │            │                                ▼            │                         Diagnose failures   │                                │            │                                ▼            │                   Generate N candidate fixes│                                │            │                                ▼            │                   Validate + re-score       │                                │            │                                ▼            │                   Accept best / revert rest ┘                                │                                ▼                   optimized agent + report (console)
```

## Quick start

[Section titled “Quick start”](https://docs.overmindlab.ai/#quick-start)

**Requirements:** Python 3.10+, Cursor or Claude Code, and API keys for at least one LLM provider (OpenAI, Anthropic).

1. Install:

Terminal window

```
pip install overmind
```

2. Initialize (configures API keys and installs skills into your IDE):

Terminal window

```
cd your-agent-project/overmind init
```

3. Open Cursor or Claude Code and type these in the chat panel, in order:

```
/overmind-register-agent path/to/your/agent.py/overmind-generate-spec-and-dataset my-agent/overmind-optimize-agent my-agent
```

Each skill reads your codebase, asks what it can’t infer, and handles the rest. Results are pushed to [console.overmindlab.ai/agents](https://console.overmindlab.ai/agents).

See the [Getting Started guide](https://docs.overmindlab.ai/guides/getting-started) for requirements, what each step does, and next steps.

## Tracing SDKs

[Section titled “Tracing SDKs”](https://docs.overmindlab.ai/#tracing-sdks)

If you want to trace LLM calls from a running application — independently of the optimizer — Overmind ships Python and JavaScript SDKs. Call `init()` once and every LLM call is captured with model, inputs/outputs, latency, token counts, and cost. See [How To Use Tracing](https://docs.overmindlab.ai/guides/how-to-use-tracing), the [Python SDK reference](https://docs.overmindlab.ai/guides/sdk-python), or the [JS/TS SDK reference](https://docs.overmindlab.ai/guides/sdk-js).

## Guides

[Section titled “Guides”](https://docs.overmindlab.ai/#guides)

**New to Overmind?** Start with [Getting Started](https://docs.overmindlab.ai/guides/getting-started), then [How to Use Overmind](https://docs.overmindlab.ai/guides/skills).

**Tracing only (no optimization)?** Go to [How To Use Tracing](https://docs.overmindlab.ai/guides/how-to-use-tracing), then the [Python SDK](https://docs.overmindlab.ai/guides/sdk-python) or [JS/TS SDK](https://docs.overmindlab.ai/guides/sdk-js).

**Exploring fine-tuning?** See [Fine-tuning (Beta)](https://docs.overmindlab.ai/guides/fine-tuning-beta) — enable tracing first, then contact us.

For supported providers, frameworks, and the OTLP endpoint, see [Integrations](https://docs.overmindlab.ai/guides/integrations).