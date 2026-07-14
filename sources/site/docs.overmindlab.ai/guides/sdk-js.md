# Source: https://docs.overmindlab.ai/guides/sdk-js

Guides

[JS/TS SDK Reference](https://docs.overmindlab.ai/guides/sdk-js/)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# JS/TS SDK Reference

JavaScript/TypeScript tracing SDK — initialize once and supported LLM clients send spans to Overmind.

One `initTracing()` call wires OpenAI, Anthropic, or Google Gemini clients you already use; spans export to Overmind without rewriting call sites.

## Installation

[Section titled “Installation”](https://docs.overmindlab.ai/#installation)

Install the SDK along with the provider(s) you use:

Terminal window

```
# OpenAInpm install @overmind-lab/trace-sdk openai
# Anthropicnpm install @overmind-lab/trace-sdk @anthropic-ai/sdk
# Google Gemininpm install @overmind-lab/trace-sdk @google/genai
```

## Quick Start with OpenAI

[Section titled “Quick Start with OpenAI”](https://docs.overmindlab.ai/#quick-start-with-openai)

```
import { OpenAI } from "openai";import { OvermindClient } from "@overmind-lab/trace-sdk";
const overmindClient = new OvermindClient({  apiKey: process.env.OVERMIND_API_KEY!,  appName: "my app",});
overmindClient.initTracing({  enableBatching: false,  enabledProviders: { openai: OpenAI },});
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const response = await openai.chat.completions.create({  model: "gpt-5-mini",  messages: [{ role: "user", content: "Explain quantum computing" }],});
await overmindClient.shutdown();
```

## Quick Start with Anthropic

[Section titled “Quick Start with Anthropic”](https://docs.overmindlab.ai/#quick-start-with-anthropic)

```
import * as Anthropic from "@anthropic-ai/sdk";import { OvermindClient } from "@overmind-lab/trace-sdk";
const overmindClient = new OvermindClient({  apiKey: process.env.OVERMIND_API_KEY!,  appName: "my app",});
overmindClient.initTracing({  enableBatching: false,  enabledProviders: { anthropic: Anthropic },});
const client = new Anthropic.default({ apiKey: process.env.ANTHROPIC_API_KEY });
const message = await client.messages.create({  model: "claude-sonnet-4-20250514",  max_tokens: 1024,  messages: [{ role: "user", content: "Explain quantum computing" }],});
console.log(message.content[0].text);
await overmindClient.shutdown();
```

## Quick Start with Google Gemini

[Section titled “Quick Start with Google Gemini”](https://docs.overmindlab.ai/#quick-start-with-google-gemini)

```
import * as GoogleGenAI from "@google/genai";import { OvermindClient } from "@overmind-lab/trace-sdk";
const overmindClient = new OvermindClient({  apiKey: process.env.OVERMIND_API_KEY!,  appName: "my app",});
overmindClient.initTracing({  enableBatching: false,  enabledProviders: { googleGenAI: GoogleGenAI },});
const client = new GoogleGenAI.GoogleGenAI({  apiKey: process.env.GEMINI_API_KEY,});
const response = await client.models.generateContent({  model: "gemini-2.0-flash",  contents: "Explain quantum computing",});
console.log(response.text);
await overmindClient.shutdown();
```

Traces are sent automatically to `https://api.overmindlab.ai` and will appear in your Overmind dashboard.

## Using Multiple Providers

[Section titled “Using Multiple Providers”](https://docs.overmindlab.ai/#using-multiple-providers)

You can enable multiple providers in a single `initTracing()` call:

```
import { OpenAI } from "openai";import * as Anthropic from "@anthropic-ai/sdk";import * as GoogleGenAI from "@google/genai";import { OvermindClient } from "@overmind-lab/trace-sdk";
const overmindClient = new OvermindClient({  apiKey: process.env.OVERMIND_API_KEY!,  appName: "my app",});
overmindClient.initTracing({  enableBatching: true,  enabledProviders: {    openai: OpenAI,    anthropic: Anthropic,    googleGenAI: GoogleGenAI,  },});
```

## Configuration

[Section titled “Configuration”](https://docs.overmindlab.ai/#configuration)

### `OvermindClient(config)`

[Section titled “OvermindClient(config)”](https://docs.overmindlab.ai/#overmindclientconfig)

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | Yes | Your Overmind API key. Falls back to `OVERMIND_API_KEY` env var. |
| `appName` | `string` | No | Name of your service, shown in the dashboard. Defaults to `"overmind-js"`. |
| `baseUrl` | `string` | No | Override the Overmind ingest endpoint. Defaults to `OVERMIND_TRACES_URL` env var or `https://api.overmindlab.ai`. |

### `initTracing(options)`

[Section titled “initTracing(options)”](https://docs.overmindlab.ai/#inittracingoptions)

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| `enabledProviders` | `object` | Yes | Pass one or more imported provider modules to instrument. See supported keys below. |
| `enableBatching` | `boolean` | No | `true` to batch spans before export (recommended for production), `false` to export immediately. Defaults to `false`. |
| `instrumentations` | `Instrumentation[]` | No | Additional OpenTelemetry instrumentations to register. |
| `spanProcessors` | `SpanProcessor[]` | No | Additional span processors (e.g. custom exporters). |

#### Supported `enabledProviders` keys

[Section titled “Supported enabledProviders keys”](https://docs.overmindlab.ai/#supported-enabledproviders-keys)

| Key | Import | Provider |
| --- | --- | --- |
| `openai` | `import { OpenAI } from "openai"` | OpenAI |
| `anthropic` | `import * as Anthropic from "@anthropic-ai/sdk"` | Anthropic |
| `googleGenAI` | `import * as GoogleGenAI from "@google/genai"` | Google Gemini |

## Environment Variables

[Section titled “Environment Variables”](https://docs.overmindlab.ai/#environment-variables)

| Variable | Description |
| --- | --- |
| `OVERMIND_API_KEY` | Your Overmind API key |
| `OVERMIND_TRACES_URL` | Override the traces ingest base URL |
| `DEPLOYMENT_ENVIRONMENT` | Tag traces with an environment (e.g. `production`, `staging`). Defaults to `development`. |
| `OPENAI_API_KEY` | Your OpenAI API key |
| `ANTHROPIC_API_KEY` | Your Anthropic API key |
| `GEMINI_API_KEY` | Your Google Gemini API key |

## What Gets Traced

[Section titled “What Gets Traced”](https://docs.overmindlab.ai/#what-gets-traced)

For each enabled provider, the SDK automatically captures:

- Prompts and completions (messages, contents, tool calls)
- Model name, temperature, top-p, max tokens
- Token usage (prompt, completion, total)
- Latency per request
- Errors and exceptions

All data is attached to OpenTelemetry spans and exported to Overmind.

## Shutdown

[Section titled “Shutdown”](https://docs.overmindlab.ai/#shutdown)

Call `shutdown()` to flush any buffered spans and cleanly stop the OpenTelemetry SDK before your process exits. This is especially important when `enableBatching: true` is used, as buffered spans may not have been exported yet.

```
await overmindClient.shutdown();
```

A typical pattern for scripts or serverless handlers:

```
try {  // ... your LLM calls} finally {  await overmindClient.shutdown();}
```

For long-running servers, hook it into your process exit signal:

```
process.on("SIGTERM", async () => {  await overmindClient.shutdown();  process.exit(0);});
```

## Production Recommendations

[Section titled “Production Recommendations”](https://docs.overmindlab.ai/#production-recommendations)

Enable batching in production to reduce network overhead:

```
overmindClient.initTracing({  enableBatching: true,  enabledProviders: { openai: OpenAI, anthropic: Anthropic, googleGenAI: GoogleGenAI },});
```

Use `enableBatching: false` during local development to see traces immediately.

## Resource Attributes

[Section titled “Resource Attributes”](https://docs.overmindlab.ai/#resource-attributes)

Every trace is tagged with the following attributes automatically:

| Attribute | Value |
| --- | --- |
| `service.name` | Value of `appName` |
| `service.version` | SDK version |
| `deployment.environment` | `DEPLOYMENT_ENVIRONMENT` env var or `"development"` |
| `overmind.sdk.name` | `overmind-js` |
| `overmind.sdk.version` | SDK version |

---

## See also

[Section titled “See also”](https://docs.overmindlab.ai/#see-also)

- [How To Use Tracing](https://docs.overmindlab.ai/guides/how-to-use-tracing) — quick start for tracing setup across Python and JS
- [Integrations](https://docs.overmindlab.ai/guides/integrations) — supported providers, frameworks, and the OTLP endpoint for other languages
- [Python SDK Reference](https://docs.overmindlab.ai/guides/sdk-python) — Python SDK for server-side tracing