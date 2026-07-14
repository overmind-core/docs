# Source: https://docs.overmindlab.ai/guides/integrations

Guides

[Integrations](https://docs.overmindlab.ai/guides/integrations/)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Integrations

Overmind works with popular LLM frameworks and providers. The SDK automatically instruments supported providers and frameworks.

The Overmind SDKs automatically instrument your LLM provider calls with no changes to your existing code. See the [Python SDK Reference](https://docs.overmindlab.ai/guides/sdk-python) or [JS/TS SDK Reference](https://docs.overmindlab.ai/guides/sdk-js) for full API details, or [How To Use Tracing](https://docs.overmindlab.ai/guides/how-to-use-tracing) for a quick start.

## LLM Providers

[Section titled “LLM Providers”](https://docs.overmindlab.ai/#llm-providers)

### Python

[Section titled “Python”](https://docs.overmindlab.ai/#python)

| Provider | Supported |
| --- | :-: |
| OpenAI | ✓ |
| Anthropic | ✓ |
| Google Gemini | ✓ |
| Agno | ✓ |

Call `overmind.init()` once at startup with the providers you use. Your existing LLM client code stays unchanged — no import swaps, no proxy routing.

```
from overmind import init
init(service_name="my-service", providers=["openai", "anthropic"])
```

Pass an empty `providers` list (or omit it) to auto-detect all installed providers.

### JavaScript / TypeScript

[Section titled “JavaScript / TypeScript”](https://docs.overmindlab.ai/#javascript--typescript)

| Provider | enabledProviders key | Package |
| --- | --- | --- |
| OpenAI | `openai: OpenAI` | `openai` |
| Anthropic | `anthropic: Anthropic` | `@anthropic-ai/sdk` |
| Google Gemini | `googleGenAI: GoogleGenAI` | `@google/genai` |

Pass the imported provider module to `initTracing({ enabledProviders: { ... } })`. Your existing LLM code works unchanged.

---

## Frameworks

[Section titled “Frameworks”](https://docs.overmindlab.ai/#frameworks)

| Framework | Status | Notes |
| --- | --- | --- |
| Agno | Supported | Traces agent runs, tool calls, and reasoning steps |
| OpenAI Agents SDK | Supported | Traces agent tool calls and reasoning steps |

---

## Auto-instrumentation

[Section titled “Auto-instrumentation”](https://docs.overmindlab.ai/#auto-instrumentation)

### Python

[Section titled “Python”](https://docs.overmindlab.ai/#python-1)

The Python SDK uses OpenTelemetry auto-instrumentation. Call `init()` once at startup and every subsequent LLM call from your existing client is automatically traced.

- **OpenAI** — captures all chat completion, response, and embedding calls
- **Anthropic** — captures all message calls
- **Google Gemini** — captures all `generate_content` calls
- **Agno** — captures agent runs, tool calls, and model interactions

```
from overmind import init
init(service_name="my-service")  # instruments all installed providers
```

### JavaScript / TypeScript

[Section titled “JavaScript / TypeScript”](https://docs.overmindlab.ai/#javascript--typescript-1)

The JS SDK instruments LLM calls via `initTracing()`. Call it once before any LLM calls and all subsequent provider calls are traced automatically.

- **OpenAI** — captures chat completions, completions, and image generation calls
- **Anthropic** — captures all message calls
- **Google Gemini** — captures all generateContent and streaming calls

---

## Sending traces from any language

[Section titled “Sending traces from any language”](https://docs.overmindlab.ai/#sending-traces-from-any-language)

If you’re not using Python, you can send traces directly via the OTLP HTTP endpoint:

```
POST https://api.overmindlab.ai/api/v1/tracesHeader: X-Api-Key: ovr_your_token_hereContent-Type: application/x-protobuf
```

The endpoint accepts standard OpenTelemetry OTLP trace data. Any OpenTelemetry SDK (Go, Java, Node.js, etc.) can export to this endpoint.

---

For integration requests, contact [support@overmindlab.ai](mailto:support@overmindlab.ai).