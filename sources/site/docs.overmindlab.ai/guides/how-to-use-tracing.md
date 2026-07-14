# Source: https://docs.overmindlab.ai/guides/how-to-use-tracing

Guides

[How To Use Tracing](https://docs.overmindlab.ai/guides/how-to-use-tracing/)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# How To Use Tracing

Instrument your LLM stack with Overmind tracing — automatic provider capture plus decorators, custom spans, and context helpers in Python and JavaScript.

Tracing is how Overmind sees what your application actually does at runtime. Call `init()` once (Python) or `initTracing()` once (JS/TS) and every supported LLM call is captured and exported to the Overmind dashboard automatically. On top of that, the Python SDK gives you decorators and span helpers so you can trace your own functions, tools, and workflows — turning a flat list of LLM calls into a structured tree you can read, debug, and optimize.

Tracing is also the fuel for the [Optimizer](https://docs.overmindlab.ai/guides/overmind_optimizer): the more real traces a project has, the more signal Overmind has to improve your prompts and pick better models.

## How tracing works

[Section titled “How tracing works”](https://docs.overmindlab.ai/#how-tracing-works)

Overmind tracing is built on [OpenTelemetry](https://opentelemetry.io/). You don’t need to know OTel to use it, but the mental model helps:

- A **trace** is one end-to-end operation (e.g. handling a request).
- A trace is a tree of **spans**. Each span represents one unit of work — an LLM call, a tool invocation, a function, a loop iteration — and records a start time, duration, status, and attributes.
- Spans nest. A `workflow` span can contain `tool` spans, which contain `llm_call` spans. That parent/child structure is what the dashboard renders as a timeline.

There are two layers you can use, and most apps use both:

1. **Automatic instrumentation** — after `init()`, calls to supported providers (OpenAI, Anthropic, Gemini, Agno) are traced with zero code changes.
2. **Manual instrumentation** — decorators and context managers you add to your own code to capture the surrounding business logic, not just the raw model calls.

Everything is exported over OTLP to `https://api.overmindlab.ai` and appears in your dashboard in near real time.

---

## Python

[Section titled “Python”](https://docs.overmindlab.ai/#python)

### Install

[Section titled “Install”](https://docs.overmindlab.ai/#install)

Install the SDK alongside the provider(s) you use:

Terminal window

```
pip install overmind openai          # OpenAIpip install overmind anthropic       # Anthropicpip install overmind google-genai    # Google Geminipip install overmind agno            # Agno
```

### Initialize once

[Section titled “Initialize once”](https://docs.overmindlab.ai/#initialize-once)

Call `init()` a single time at process startup, **before** any LLM calls or framework setup (top of `main.py`, `app.py`, your worker entry point, etc.):

```
from overmind import init
init(    service_name="my-service",    environment="production",    providers=["openai"],)
```

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `overmind_api_key` | `str | None` | `None` | Your Overmind API key. Falls back to the `OVERMIND_API_KEY` env var. |
| `service_name` | `str | None` | `None` | Name shown in the dashboard. Falls back to `OVERMIND_SERVICE_NAME`, then `"overmind-telemetry"`. |
| `environment` | `str | None` | `None` | Deployment environment (`"production"`, `"staging"`, …). Falls back to `OVERMIND_ENVIRONMENT` / `ENVIRONMENT`, then `"development"`. |
| `providers` | `list[str] | None` | `None` | Providers to instrument: `"openai"`, `"anthropic"`, `"google"`, `"agno"`. Pass an empty list `[]` to instrument **all** installed providers. |
| `overmind_base_url` | `str | None` | `None` | Override the ingest endpoint. Falls back to `OVERMIND_API_URL`, then `https://api.overmindlab.ai`. |

`init()` is idempotent and re-entrant: calling it again with more `providers` just enables those extra providers — it won’t tear down the existing tracer.

The full parameter and environment-variable reference lives in the [Python SDK Reference](https://docs.overmindlab.ai/guides/sdk-python#init).

### Automatic instrumentation

[Section titled “Automatic instrumentation”](https://docs.overmindlab.ai/#automatic-instrumentation)

After `init()`, keep using your LLM client exactly as before — no import swaps, no proxy:

```
from openai import OpenAI
client = OpenAI()response = client.chat.completions.create(    model="gpt-5-mini",    messages=[{"role": "user", "content": "Explain quantum computing"}],)
```

Each provider call automatically becomes an `llm_call` span capturing:

- prompts and completions (messages, tool calls)
- model name and request parameters (temperature, top-p, max tokens)
- token usage (input, output, total)
- latency
- errors and exceptions

That’s enough to populate the dashboard. The rest of this page is about adding **your own** spans around that.

---

## Tracing your own code

[Section titled “Tracing your own code”](https://docs.overmindlab.ai/#tracing-your-own-code)

Automatic instrumentation only sees the LLM calls. To understand _why_ a call happened — which tool ran, which workflow it belonged to, what the inputs were — you wrap your own code in spans. There are three ways to do it, from highest-level to lowest:

| Approach | Use it for | Ends the span |
| --- | --- | --- |
| **Decorators** (`@workflow`, `@tool`, …) | Whole functions | Automatically, when the function returns/raises |
| **`start_span()`** context manager | Blocks, loops, conditionals | Automatically, when the `with` block exits |
| **`get_tracer()`** + manual `start_span`/`end()` | Spans whose lifetime doesn’t fit a single block | You call `span.end()` yourself |

All three stamp the same canonical Overmind metadata (`overmind.span.type`, `overmind.status`, `overmind.duration.seconds`) so spans render consistently no matter how you created them.

### Span types

[Section titled “Span types”](https://docs.overmindlab.ai/#span-types)

Every Overmind span has a **type** that drives how the dashboard categorizes and renders it. Types come from the `SpanType` enum:

```
from overmind import SpanType
```

| `SpanType` | Attribute value | Meaning |
| --- | --- | --- |
| `SpanType.ENTRY_POINT` | `entry_point` | The top of a request/run — your outermost traced function |
| `SpanType.WORKFLOW` | `workflow` | A multi-step process or pipeline |
| `SpanType.TOOL` | `tool_call` | A tool / function an agent invokes |
| `SpanType.FUNCTION` | `function` | A plain traced function (the default) |
| `SpanType.LLM` | `llm_call` | A model call (set automatically by auto-instrumentation) |

### Decorators

[Section titled “Decorators”](https://docs.overmindlab.ai/#decorators)

Decorators are the easiest way to trace a function. The SDK ships one general decorator, `@observe`, plus four typed shortcuts:

| Decorator | Equivalent to | Span type |
| --- | --- | --- |
| `@observe(span_name=None, type=SpanType.FUNCTION)` | — | configurable via `type=` |
| `@entry_point(name=None)` | `@observe(type=SpanType.ENTRY_POINT)` | `entry_point` |
| `@workflow(name=None)` | `@observe(type=SpanType.WORKFLOW)` | `workflow` |
| `@tool(name=None)` | `@observe(type=SpanType.TOOL)` | `tool_call` |
| `@function(name=None)` | `@observe(type=SpanType.FUNCTION)` | `function` |

Every decorator:

- opens a span named after the function (or the name you pass)
- captures positional/keyword arguments as the `inputs` attribute and the return value as `outputs` (both JSON-serialized, best-effort — serialization never crashes your code)
- records duration and sets `overmind.status` to `success`, or on exception records the exception, sets the status to `failed`, and re-raises
- works on both sync and async functions

```
from overmind import init, workflow, tool, entry_point
init(service_name="research-agent", providers=["openai"])
@tool("web_search")def web_search(query: str) -> list[str]:    ...
@workflow("research")def research(topic: str) -> str:    results = web_search(topic)    ...
@entry_point("handle_request")def handle_request(topic: str) -> str:    return research(topic)
```

Because `handle_request` calls `research`, which calls `web_search`, the spans nest into a single tree: `handle_request` → `research` → `web_search` (→ the auto-traced `llm_call` spans underneath).

**Naming.** Call the decorator with parentheses — `@workflow()` or `@workflow("name")`. If you omit the name, the function name is used.

**Async** is supported transparently:

```
@tool("fetch_user")async def fetch_user(user_id: str) -> dict:    return await db.get_user(user_id)
```

**`@observe` directly** when you want a custom name and an explicit type in one place:

```
from overmind import observe, SpanType
@observe("score_candidate", type=SpanType.FUNCTION)def score(candidate: str) -> float:    ...
```

### `start_span()` — for blocks and loops

[Section titled “start\_span() — for blocks and loops”](https://docs.overmindlab.ai/#start_span--for-blocks-and-loops)

When a decorator doesn’t fit — a loop body, an `if` branch, a sub-section of a larger function — use the `start_span()` context manager. It opens a child span under whatever span is currently active and closes it when the `with` block exits.

```
from overmind import start_span, set_tag, SpanType
for i, doc in enumerate(documents):    with start_span("process_document", span_type=SpanType.FUNCTION, attributes={"doc.index": i}) as span:        result = process(doc)        set_tag("doc.tokens", result.tokens)
```

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `str` | — | Span name shown in the dashboard |
| `span_type` | `SpanType` | `SpanType.FUNCTION` | The span’s type |
| `attributes` | `dict[str, Any] | None` | `None` | Attributes stamped on the span at start; rich values are JSON-encoded |

Unlike the decorators, `start_span()` does **not** auto-capture inputs/outputs — you attach exactly the metadata you want with the `attributes` argument or `set_tag()` inside the block. The context manager yields the underlying OpenTelemetry span if you need it.

### Starting and ending spans manually

[Section titled “Starting and ending spans manually”](https://docs.overmindlab.ai/#starting-and-ending-spans-manually)

`start_span()` ends the span for you — there is no separate `overmind.end_span()` because the `with` block _is_ the lifetime. For the rare case where a span’s lifetime genuinely can’t be expressed as a single block (it starts in one callback and ends in another, spans an event loop, etc.), drop down to the raw OpenTelemetry tracer via `get_tracer()` and manage the lifecycle yourself.

The OTel-native context manager (recommended even here — it makes the span the _current_ one so children nest correctly, and ends it automatically):

```
from overmind import get_tracer
tracer = get_tracer()with tracer.start_as_current_span("manual_step") as span:    span.set_attribute("step", "load")    ...
```

Fully manual start/end with explicit `span.end()`:

```
from overmind import get_tracer
tracer = get_tracer()span = tracer.start_span("long_lived_op")   # starttry:    span.set_attribute("phase", "begin")    do_work()finally:    span.end()                              # end — always end the span you start
```

Two things to know about the fully-manual form:

- A span created with `tracer.start_span()` is **not** automatically the current span, so spans you open afterwards won’t nest under it. To activate it, wrap with `with trace.use_span(span, end_on_exit=True):` from `opentelemetry.trace`.
- It won’t carry Overmind’s `overmind.status` / `overmind.duration.seconds` metadata unless you set it. Prefer `@observe`/`start_span()` unless you specifically need manual lifecycle control.

`get_tracer()` raises `RuntimeError` if you call it before `init()`.

### What gets recorded on each span

[Section titled “What gets recorded on each span”](https://docs.overmindlab.ai/#what-gets-recorded-on-each-span)

Whichever method you use, spans carry a consistent set of attributes the dashboard reads:

| Attribute | Set by | Description |
| --- | --- | --- |
| `overmind.span.type` | all span helpers | One of the `SpanType` values |
| `overmind.status` | all span helpers | `success`, `failed`, or `cancelled` (on `KeyboardInterrupt`) |
| `overmind.duration.seconds` | all span helpers | Wall-clock duration of the span |
| `overmind.error.type` / `overmind.error.message` | on failure | Exception class name and a truncated, scrubbed message |
| `inputs` / `outputs` | decorators only | JSON-serialized arguments and return value |
| `user.id` / `user.email` / `user.username` | `set_user()` | Current user identity |
| _(your keys)_ | `set_tag()` / `attributes=` | Any custom metadata you attach |

---

## Add context and metadata

[Section titled “Add context and metadata”](https://docs.overmindlab.ai/#add-context-and-metadata)

These helpers operate on the **current** span, so call them inside a traced function, a `start_span()` block, or a request handler.

### `set_user()`

[Section titled “set\_user()”](https://docs.overmindlab.ai/#set_user)

Tag the active trace with a user identity — ideally once per request, in middleware:

```
from fastapi import FastAPI, Requestfrom overmind import set_user
app = FastAPI()
@app.middleware("http")async def add_user_context(request: Request, call_next):    user = getattr(request.state, "user", None)    if user:        set_user(user_id=user.id, email=user.email)    return await call_next(request)
```

`set_user(user_id, email=None, username=None)` — only `user_id` is required.

### `set_tag()`

[Section titled “set\_tag()”](https://docs.overmindlab.ai/#set_tag)

Attach arbitrary key/value metadata you can filter on in the dashboard. Strings, numbers, booleans, and `list[str]` are stored natively; richer values (dicts, dataclasses, Pydantic models) are JSON-encoded automatically:

```
from overmind import set_tag
set_tag("workflow", "order-processing")set_tag("tenant.id", tenant_id)set_tag("retry.count", 2)
```

### `capture_exception()`

[Section titled “capture\_exception()”](https://docs.overmindlab.ai/#capture_exception)

Record an exception on the current span and mark it as an error. Use it in `except` blocks where you handle the failure but still want it visible in the trace:

```
from overmind import capture_exception
try:    result = client.chat.completions.create(...)except Exception as e:    capture_exception(e)    raise
```

The decorators and `start_span()` already do this for exceptions that propagate out of them — `capture_exception()` is for failures you catch and swallow.

### `PromptString` — better agent detection

[Section titled “PromptString — better agent detection”](https://docs.overmindlab.ai/#promptstring--better-agent-detection)

Wrapping a prompt in `PromptString` lets you declare its template and dynamic inputs explicitly, so Overmind reliably groups calls into the right agent across providers and versions:

```
from overmind import PromptString
system_prompt = PromptString(    id="support_greeter_v1",    template="You are a helpful support agent. Your name is {agent_name}.",    kwargs={"agent_name": "Astra"},)
```

See the [Python SDK Reference](https://docs.overmindlab.ai/guides/sdk-python#using-promptstring-for-better-agent-detection) for the full explanation.

### Advanced helpers

[Section titled “Advanced helpers”](https://docs.overmindlab.ai/#advanced-helpers)

These live in `overmind.tracing` (import them explicitly) and cover less common cases:

```
from overmind.tracing import (    start_child_span,    # like start_span(), but force-nests under the current span    set_workflow_name,   # label every downstream span with a workflow name    set_agent_name,      # bind downstream spans to a named agent    set_conversation_id, # group multiple traces into one chat session    conversation,        # decorator form of set_conversation_id    observe_safe,        # like @observe, but skips input/output capture (sensitive data)    force_flush_traces,  # best-effort flush before a short-lived process exits)
```

`observe_safe` is handy for functions that handle secrets or large payloads you don’t want serialized into span attributes. `force_flush_traces()` is worth calling at the end of scripts and serverless handlers so buffered spans are exported before the process dies.

---

## Full Python example

[Section titled “Full Python example”](https://docs.overmindlab.ai/#full-python-example)

```
import osfrom overmind import (    init, entry_point, tool, start_span,    set_user, set_tag, capture_exception, SpanType,)from openai import OpenAI
os.environ.setdefault("OVERMIND_API_KEY", "ovr_your_key_here")
init(service_name="customer-support", environment="production", providers=["openai"])
client = OpenAI()
@tool("lookup_order")def lookup_order(order_id: str) -> dict:    return {"id": order_id, "status": "shipped"}
@entry_point("handle_support_query")def handle_support_query(user_id: str, question: str) -> str:    set_user(user_id=user_id)    set_tag("workflow", "support")
    with start_span("gather_context", span_type=SpanType.FUNCTION):        order = lookup_order("A-1001")
    try:        response = client.chat.completions.create(            model="gpt-5-mini",            messages=[                {"role": "system", "content": "You are a helpful customer support agent."},                {"role": "user", "content": f"{question}\n\nOrder: {order}"},            ],        )        return response.choices[0].message.content    except Exception as e:        capture_exception(e)        raise
print(handle_support_query("user-123", "Where is my order?"))
```

This produces a single trace: `handle_support_query` (entry point) → `gather_context` → `lookup_order` (tool) → the OpenAI `llm_call`, all tagged with the user and workflow.

---

## JavaScript / TypeScript

[Section titled “JavaScript / TypeScript”](https://docs.overmindlab.ai/#javascript--typescript)

The JS/TS SDK focuses on automatic provider instrumentation. One `initTracing()` call wires the clients you already use:

```
import { OpenAI } from "openai";import { OvermindClient } from "@overmind-lab/trace-sdk";
const overmindClient = new OvermindClient({  apiKey: process.env.OVERMIND_API_KEY!,  appName: "my-app",});
overmindClient.initTracing({  enableBatching: true,  enabledProviders: { openai: OpenAI },});
// ... your existing OpenAI / Anthropic / Gemini calls are now traced ...
await overmindClient.shutdown(); // flush buffered spans before exit
```

Always call `shutdown()` before a short-lived process exits (scripts, serverless), especially with `enableBatching: true`, or buffered spans may be lost. For custom spans in JS/TS, use the standard OpenTelemetry API directly — the decorator/`start_span` helpers described above are a Python SDK feature.

See the [JS/TS SDK Reference](https://docs.overmindlab.ai/guides/sdk-js) for providers, batching, environment variables, and shutdown patterns.

---

## Best practices

[Section titled “Best practices”](https://docs.overmindlab.ai/#best-practices)

- **Call `init()` / `initTracing()` once, first.** Before any LLM call or framework setup, at the top of your entry point.
- **Name services per agent or workflow.** Give the support bot, the summarizer, and the code assistant distinct `service_name` / `appName` values so Overmind keeps their agents separate.
- **Trace the work around the model call, not just the call.** Wrap your entry point with `@entry_point`, multi-step logic with `@workflow`, and each tool with `@tool` — that structure is what makes traces (and the optimizer) useful.
- **Tag traces with the metadata you’ll want to filter on.** `set_user()` for identity, `set_tag()` for tenant, feature flag, workflow, or version.
- **Roll out in staging first, then production**, and keep tracing on in production — continuous real-world traces give the optimizer the most signal.
- **Enable batching in production** (`enableBatching: true` in JS) and flush before exit (`force_flush_traces()` in Python, `shutdown()` in JS) for short-lived processes.

---

## Next

[Section titled “Next”](https://docs.overmindlab.ai/#next)

- [Python SDK Reference](https://docs.overmindlab.ai/guides/sdk-python) — full parameter tables and every helper
- [JS/TS SDK Reference](https://docs.overmindlab.ai/guides/sdk-js) — JavaScript/TypeScript tracing in depth
- [Integrations](https://docs.overmindlab.ai/guides/integrations) — supported providers, frameworks, and the OTLP endpoint for other languages
- [Overmind Optimizer Reference](https://docs.overmindlab.ai/guides/overmind_optimizer) — turn your traces into prompt and model improvements