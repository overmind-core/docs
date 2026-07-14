# Source: https://docs.overmindlab.ai/guides/platform-overview

Guides

[Platform Overview](https://docs.overmindlab.ai/guides/platform-overview/)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Platform Overview

## Who Overmind is for

[Section titled “Who Overmind is for”](https://docs.overmindlab.ai/#who-overmind-is-for)

Overmind is built for teams that already have, or are about to ship, data-backed agents performing specific real-world jobs — for example:

- a lead qualifier scoring inbound sales inquiries
- a support triage router classifying and drafting responses
- a contract clause extractor over long legal documents
- a clinical coder converting encounter notes into ICD/CPT codes
- an AP invoice agent making payment decisions with policy and fraud signals
- an on-call triage agent investigating and routing incidents
- a returns concierge applying policy and writing customer copy
- a research-brief multi-agent producing marketing/SEO outputs

If your agent is a chat toy, a single-shot prompt, or a one-off internal demo, Overmind is overkill. If your agent runs against real data, has a defined input/output contract, and you care about regression-safe improvement over weeks and months — that’s what Overmind is built for.

## Products

[Section titled “Products”](https://docs.overmindlab.ai/#products)

### Overmind Optimizer

[Section titled “Overmind Optimizer”](https://docs.overmindlab.ai/#overmind-optimizer)

[Overmind Optimizer](https://docs.overmindlab.ai/guides/overmind_optimizer) autonomously improves Python agents that run on real, structured data. It runs structured optimization loops and keeps only changes that measurably improve outcomes. It works with any Python agentic framework — LangChain, LlamaIndex, Agno, CrewAI, AutoGen, OpenAI Agents SDK, or plain Python.

![The Overmind console showing registered agents with their state, dataset size, analyzer model, and last run time](https://docs.overmindlab.ai/images/platform/agents-home.png)

You drive the full workflow through Agent Skills — slash commands in Cursor or Claude Code. Run `overmind init` once to install the skills, then use them in your AI chat panel:

```
/overmind-register-agent path/to/your/agent.py/overmind-generate-spec-and-dataset my-agent/overmind-optimize-agent my-agent
```

What gets optimized:

- prompts and instructions
- tool definitions
- model selection
- orchestration and control-flow logic
- policy compliance and edge-case handling

### Tracing SDKs

[Section titled “Tracing SDKs”](https://docs.overmindlab.ai/#tracing-sdks)

The tracing SDKs for Python and JavaScript/TypeScript instrument your LLM stack and send telemetry to Overmind. Tracing feeds the optimizer and provides visibility into production behavior independently of it.

- [Python SDK reference](https://docs.overmindlab.ai/guides/sdk-python)
- [JS/TS SDK reference](https://docs.overmindlab.ai/guides/sdk-js)
- [Integrations](https://docs.overmindlab.ai/guides/integrations)

### Fine-tuning (currently in beta)

[Section titled “Fine-tuning (currently in beta)”](https://docs.overmindlab.ai/#fine-tuning-currently-in-beta)

Private model training on production traces. See [Fine-tuning (Beta)](https://docs.overmindlab.ai/guides/fine-tuning-beta) for availability and how to get access.