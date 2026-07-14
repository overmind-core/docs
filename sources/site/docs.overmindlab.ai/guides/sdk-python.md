# Source: https://docs.overmindlab.ai/guides/sdk-python

Guides

[Python SDK Reference](https://docs.overmindlab.ai/guides/sdk-python/)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Python SDK Reference

Full reference for the Overmind Python SDK — initialize once and every LLM call is automatically traced. Includes provider setup, custom spans, user tagging, and exception capture.

## Installation

[Section titled “Installation”](https://docs.overmindlab.ai/#installation)

Terminal window

```
pip install overmind
```

Install alongside your LLM provider:

Terminal window

```
pip install overmind openai          # OpenAIpip install overmind anthropic       # Anthropicpip install overmind google-genai    # Google Geminipip install overmind agno            # Agno
```

---

## `init()`

[Section titled “init()”](https://docs.overmindlab.ai/#init)

Initialize the SDK once at application startup, before any LLM calls. After calling `init()`, your existing LLM client code is automatically instrumented — no import changes, no proxy.

```
from overmind import init
init(    overmind_api_key="ovr_...",    service_name="my-service",    environment="production",    providers=["openai"],)
```

### Parameters

[Section titled “Parameters”](https://docs.overmindlab.ai/#parameters)

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `overmind_api_key` | `str | None` | `None` | Your Overmind API key. Falls back to `OVERMIND_API_KEY` env var. |
| `service_name` | `str | None` | `None` | Name of your service, shown in the dashboard. Also reads `OVERMIND_SERVICE_NAME` env var. Defaults to `"overmind-telemetry"`. |
| `environment` | `str | None` | `None` | Deployment environment (`"production"`, `"staging"`, etc.). Also reads `OVERMIND_ENVIRONMENT` env var. Defaults to `"development"`. |
| `providers` | `list[str] | None` | `None` | Which LLM providers to instrument. Supported: `"openai"`, `"anthropic"`, `"google"`, `"agno"`. `None` or empty list = auto-detect all installed providers. |
| `overmind_base_url` | `str | None` | `None` | Override the Overmind API endpoint. Falls back to `OVERMIND_API_URL` env var, then `https://api.overmindlab.ai`. |

### Environment Variables

[Section titled “Environment Variables”](https://docs.overmindlab.ai/#environment-variables)

| Variable | Description |
| --- | --- |
| `OVERMIND_API_KEY` | Your Overmind API key |
| `OVERMIND_SERVICE_NAME` | Service name (overridden by `service_name` param) |
| `OVERMIND_ENVIRONMENT` | Environment name (overridden by `environment` param) |
| `OVERMIND_API_URL` | Custom API endpoint URL |

### Provider Examples

[Section titled “Provider Examples”](https://docs.overmindlab.ai/#provider-examples)

**OpenAI**

```
from overmind import initfrom openai import OpenAI
init(service_name="my-service", providers=["openai"])
client = OpenAI()response = client.chat.completions.create(    model="gpt-5-mini",    messages=[{"role": "user", "content": "What is quantum computing?"}],)print(response.choices[0].message.content)
```

**Anthropic**

```
from overmind import initimport anthropic
init(service_name="my-service", providers=["anthropic"])
client = anthropic.Anthropic()message = client.messages.create(    model="claude-opus-4-5",    max_tokens=1024,    messages=[{"role": "user", "content": "What is quantum computing?"}],)print(message.content[0].text)
```

**Google Gemini**

```
from overmind import initfrom google import genai
init(service_name="my-service", providers=["google"])
client = genai.Client()response = client.models.generate_content(    model="gemini-2.0-flash",    contents="What is quantum computing?",)print(response.text)
```

**Agno**

```
from overmind import initfrom agno.agent import Agentfrom agno.models.openai import OpenAIChat
init(service_name="my-service", providers=["agno"])
agent = Agent(model=OpenAIChat(id="gpt-5"), markdown=True)agent.print_response("Write a haiku about the ocean.")
```

**Auto-detect all installed providers**

```
from overmind import init
init(service_name="my-service")  # auto-instruments every supported package that is installed
```

---

## Resource attributes

[Section titled “Resource attributes”](https://docs.overmindlab.ai/#resource-attributes)

Every span produced by the Python SDK is tagged with the following resource attributes automatically:

| Attribute | Value |
| --- | --- |
| `service.name` | Value of `service_name` (or `OVERMIND_SERVICE_NAME` env var, defaults to `"overmind-telemetry"`) |
| `service.version` | `SERVICE_VERSION` env var, otherwise `"unknown"` |
| `deployment.environment` | Value of `environment` (or `OVERMIND_ENVIRONMENT` / `ENVIRONMENT` env var, defaults to `"development"`) |
| `overmind.sdk.name` | `overmind-python` |
| `overmind.sdk.version` | SDK version |

---

## `get_tracer()`

[Section titled “get\_tracer()”](https://docs.overmindlab.ai/#get_tracer)

Get the OpenTelemetry `Tracer` instance for creating custom spans around arbitrary code blocks.

```
from overmind import init, get_tracer
init(service_name="my-service")
tracer = get_tracer()
with tracer.start_as_current_span("process-document") as span:    span.set_attribute("document.id", doc_id)    result = process(doc)
```

**Raises:** `RuntimeError` if `init()` has not been called.

**Returns:** An `opentelemetry.trace.Tracer` instance.

### Custom span example

[Section titled “Custom span example”](https://docs.overmindlab.ai/#custom-span-example)

```
from overmind import init, get_tracerfrom openai import OpenAI
init(service_name="pipeline")
client = OpenAI()tracer = get_tracer()
def summarise_document(doc_id: str, text: str) -> str:    with tracer.start_as_current_span("summarise") as span:        span.set_attribute("doc.id", doc_id)        span.set_attribute("doc.length", len(text))
        response = client.chat.completions.create(            model="gpt-5-mini",            messages=[                {"role": "system", "content": "Summarise the following document concisely."},                {"role": "user", "content": text},            ],        )        return response.choices[0].message.content
```

---

## Using `PromptString` for better agent detection

[Section titled “Using PromptString for better agent detection”](https://docs.overmindlab.ai/#using-promptstring-for-better-agent-detection)

When you pass prompts as plain strings, Overmind infers agents from traces by guessing which parts are the template vs. the dynamic inputs. `PromptString` lets you declare that structure explicitly so Overmind can reliably match calls to the right agent.

```
from opentelemetry.overmind.prompt import PromptStringfrom openai import OpenAIimport overmindimport uuid
overmind.init(service_name="support-bot", providers=["openai"])
system_prompt = PromptString(    id="support_greeter_v1",    template="You are a helpful support agent. Greet the user by name. Your name is {agent_name}.",    kwargs={"agent_name": "Astra"},)
client = OpenAI()response = client.chat.completions.create(    model="gpt-5-mini",    messages=[        {"role": "system", "content": system_prompt},        {"role": "user", "content": "How do I reset my password?"},    ],)
```

### Why `PromptString` helps

[Section titled “Why PromptString helps”](https://docs.overmindlab.ai/#why-promptstring-helps)

The `id` field (e.g. `support_greeter_v1`) gives Overmind a stable signal for agent discovery, so all versions of a given agent stay grouped and version comparisons are cleaner. Separating `template` from `kwargs` lets Overmind identify the static template precisely and treat only the placeholders as dynamic inputs.

Using the same `PromptString.id` for logically identical prompts across OpenAI, Anthropic, and Gemini lets Overmind group them as the same agent even when the raw strings differ slightly.

Each LLM call accepts at most one `PromptString`. The SDK raises an error if it detects more than one in a single call.

Start with your most important agents and let Overmind infer the rest from plain strings.

---

## `set_user()`

[Section titled “set\_user()”](https://docs.overmindlab.ai/#set_user)

Associate the current trace with a user. Call this once per request — typically in middleware — so all LLM calls made during that request are tagged with the user’s identity.

```
from overmind import set_user
set_user(user_id="user-123", email="alice@example.com", username="alice")
```

### Parameters

[Section titled “Parameters”](https://docs.overmindlab.ai/#parameters-1)

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `user_id` | `str` | Yes | Unique user identifier |
| `email` | `str | None` | No | User’s email address |
| `username` | `str | None` | No | User’s display name |

### FastAPI middleware example

[Section titled “FastAPI middleware example”](https://docs.overmindlab.ai/#fastapi-middleware-example)

```
from fastapi import FastAPI, Requestfrom overmind import set_user
app = FastAPI()
@app.middleware("http")async def add_user_context(request: Request, call_next):    user = getattr(request.state, "user", None)    if user:        set_user(user_id=user.id, email=user.email)    return await call_next(request)
```

---

## `set_tag()`

[Section titled “set\_tag()”](https://docs.overmindlab.ai/#set_tag)

Add a custom key-value attribute to the current span. Use this to attach any metadata you want to appear alongside traces in the dashboard.

```
from overmind import set_tag
set_tag("feature.flag", "new-checkout-flow")set_tag("tenant.id", tenant_id)set_tag("workflow", "order-processing")
```

### Parameters

[Section titled “Parameters”](https://docs.overmindlab.ai/#parameters-2)

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `str` | Attribute name |
| `value` | `str` | Attribute value |

---

## `capture_exception()`

[Section titled “capture\_exception()”](https://docs.overmindlab.ai/#capture_exception)

Record an exception on the current span and mark its status as `ERROR`. Use this in `except` blocks where you want the trace to reflect the failure.

```
from overmind import capture_exception
try:    result = client.chat.completions.create(...)except Exception as e:    capture_exception(e)    raise
```

### Parameters

[Section titled “Parameters”](https://docs.overmindlab.ai/#parameters-3)

| Parameter | Type | Description |
| --- | --- | --- |
| `exception` | `Exception` | The exception to record |

---

## Full Example

[Section titled “Full Example”](https://docs.overmindlab.ai/#full-example)

```
import osfrom overmind import init, get_tracer, set_user, set_tag, capture_exception, observe, SpanTypefrom openai import OpenAI
os.environ["OVERMIND_API_KEY"] = "ovr_your_key_here"
init(    service_name="customer-support",    environment="production",    providers=["openai"],)
client = OpenAI()
@observe("support", type=SpanType.WORKFLOW)def handle_support_query(user_id: str, question: str) -> str:    set_user(user_id=user_id)    try:        response = client.chat.completions.create(            model="gpt-5-mini",            messages=[                {"role": "system", "content": "You are a helpful customer support agent."},                {"role": "user", "content": question},            ],        )        return response.choices[0].message.content    except Exception as e:        capture_exception(e)        raise
answer = handle_support_query("user-123", "How do I reset my password?")print(answer)
```

Every call produces a trace in the Overmind dashboard.

---

## Tips

[Section titled “Tips”](https://docs.overmindlab.ai/#tips)

- Call `init()` at the top of your entry point (`main.py`, `app.py`, etc.) before any LLM calls or framework setup.
- Give each distinct agent in your app its own `service_name` (e.g. support bot, summariser, code assistant). Overmind uses this to keep agent templates separate.
- Use `set_user()` and `set_tag()` to attach metadata you can filter on in the dashboard.
- Continuous production tracing gives the optimizer more signal to work with. See [Overmind Optimizer Reference](https://docs.overmindlab.ai/guides/overmind_optimizer) to run optimization on a registered agent.

---

## See also

[Section titled “See also”](https://docs.overmindlab.ai/#see-also)

- [How To Use Tracing](https://docs.overmindlab.ai/guides/how-to-use-tracing) — quick start for tracing setup across Python and JS
- [Integrations](https://docs.overmindlab.ai/guides/integrations) — supported providers and frameworks, including the OTLP endpoint for other languages
- [Overmind Optimizer Reference](https://docs.overmindlab.ai/guides/overmind_optimizer) — use your traces to power the optimization loop