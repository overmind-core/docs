# Source: https://docs.overmindlab.ai/guides/getting-started

Guides

[Getting Started](https://docs.overmindlab.ai/guides/getting-started/)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Getting Started

Install Overmind and run your first optimization in about 10 minutes.

Install, init, open your IDE, type three commands. That’s the whole workflow.

> **Who this is for:** data-backed Python agents with a clear input/output and a notion of “correct.” See the [Platform Overview](https://docs.overmindlab.ai/guides/platform-overview) for context and [`examples/`](https://github.com/overmind-core/overmind/tree/main/examples) for runnable agents.

**Requirements**

- Python 3.10 or higher
- Cursor or Claude Code
- API keys for at least one LLM provider (OpenAI, Anthropic)

---

## 1\. Install Overmind

[Section titled “1. Install Overmind”](https://docs.overmindlab.ai/#1-install-overmind)

Terminal window

```
pip install overmind
```

---

## 2\. Initialize the project

[Section titled “2. Initialize the project”](https://docs.overmindlab.ai/#2-initialize-the-project)

From your agent’s project root:

Terminal window

```
cd your-agent-project/overmind init
```

This creates `.overmind/`, collects your API keys, sets your analyzer model, and installs the Agent Skills into your IDE. You can re-run it at any time.

---

## 3\. Register, configure, and optimize

[Section titled “3. Register, configure, and optimize”](https://docs.overmindlab.ai/#3-register-configure-and-optimize)

Open your project in Cursor or Claude Code. Run these three commands in the chat panel, in order:

```
/overmind-register-agent path/to/your/agent.py
```

```
/overmind-generate-spec-and-dataset my-agent
```

```
/overmind-optimize-agent my-agent
```

Each skill reads your codebase, asks what it can’t infer, and handles the rest. Results are pushed to [console.overmindlab.ai/agents](https://console.overmindlab.ai/agents) as optimization runs.

See the [How to Use Overmind guide](https://docs.overmindlab.ai/guides/skills) for what each skill does and what to expect at each step.

---

## Instrumenting a running app (optional)

[Section titled “Instrumenting a running app (optional)”](https://docs.overmindlab.ai/#instrumenting-a-running-app-optional)

If you want Overmind traces from a deployed application, independently of the optimization workflow, install the Python or JS/TS tracing SDK and call `init()` once at startup:

- [Python](https://docs.overmindlab.ai/#tab-panel-0)
- [JavaScript / TypeScript](https://docs.overmindlab.ai/#tab-panel-1)

Terminal window

```
pip install overmind
```

```
import overmindovermind.init(service_name="my-service", environment="production")
```

See the [Python SDK reference](https://docs.overmindlab.ai/guides/sdk-python).

Terminal window

```
npm install @overmind-lab/trace-sdk openai
```

```
import { OpenAI } from "openai";import { OvermindClient } from "@overmind-lab/trace-sdk";
const overmindClient = new OvermindClient({  apiKey: process.env.OVERMIND_API_KEY!,  appName: "my app",});overmindClient.initTracing({ enabledProviders: { openai: OpenAI } });
```

See the [JS/TS SDK reference](https://docs.overmindlab.ai/guides/sdk-js).

Tracing is independent of optimization. Use one, both, or neither.

---

## Next steps

[Section titled “Next steps”](https://docs.overmindlab.ai/#next-steps)

- [How to Use Overmind](https://docs.overmindlab.ai/guides/skills) — full walkthrough of each skill step
- [Overmind Optimizer Reference](https://docs.overmindlab.ai/guides/overmind_optimizer) — deep dive on policies, multi-file agents, and optimization safeguards
- [Example agents (GitHub)](https://github.com/overmind-core/overmind/tree/main/examples) — ready-made agents across sales, support, legal, healthcare, and more
- [Python SDK reference](https://docs.overmindlab.ai/guides/sdk-python) · [JS/TS SDK reference](https://docs.overmindlab.ai/guides/sdk-js)