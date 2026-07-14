# Source: https://docs.overmindlab.ai/api/typescript/resources/traces/methods/retrieve

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Traces](https://docs.overmindlab.ai/api/typescript/resources/traces)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Get a trace and all its spans

client.traces.retrieve(stringtraceID, RequestOptionsoptions?): [TraceRetrieveResponse](https://docs.overmindlab.ai/api/typescript/resources/traces#(resource)%20traces%20%3E%20(model)%20trace_retrieve_response%20%3E%20(schema)) { root, span\_count, spans, trace\_id }

GET/api/traces/{trace\_id}/

Looked up by `trace_id` (the OTel 32-char hex), not by row id. Returns the root span plus every span sharing that `trace_id`.

##### ParametersExpand Collapse

traceID: string

##### ReturnsExpand Collapse

TraceRetrieveResponse { root, span\_count, spans, trace\_id }

`GET /api/traces/{trace_id}/` payload — root summary + every span.

root: Root | null

Full span — used both for `/api/traces/{trace_id}/` (one span row in the per-trace list) and as the per-row representation for any span query.

agent: string | null

formatuuid

attributes: unknown

duration\_ns: number

end\_time\_ns: number

events: unknown

is\_root: boolean

iteration: string | null

formatuuid

job: string | null

formatuuid

kind: number

links: unknown

name: string

operation: string

parent\_span\_id: string | null

project: string

formatuuid

received\_at: string

formatdate-time

resource\_attrs: unknown

scope\_name: string

scope\_version: string

service\_name: string

span\_id: string

span\_type: "llm\_call" | "tool\_call"

- `llm_call` - Llm Call
- `tool_call` - Tool Call

Accepts one of the following:

"llm\_call"

"tool\_call"

start\_time\_ns: number

status\_code: number

status\_message: string

trace\_id: string

span\_count: number

spans: Array<Span\>

agent: string | null

formatuuid

attributes: unknown

duration\_ns: number

end\_time\_ns: number

events: unknown

is\_root: boolean

iteration: string | null

formatuuid

job: string | null

formatuuid

kind: number

links: unknown

name: string

operation: string

parent\_span\_id: string | null

project: string

formatuuid

received\_at: string

formatdate-time

resource\_attrs: unknown

scope\_name: string

scope\_version: string

service\_name: string

span\_id: string

span\_type: "llm\_call" | "tool\_call"

- `llm_call` - Llm Call
- `tool_call` - Tool Call

Accepts one of the following:

"llm\_call"

"tool\_call"

start\_time\_ns: number

status\_code: number

status\_message: string

trace\_id: string

trace\_id: string

##### Get a trace and all its spans

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const trace = await client.traces.retrieve('trace_id');

console.log(trace.trace_id);
```

200 example

```
{
  "root": {
    "agent": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
    "attributes": {},
    "duration_ns": 0,
    "end_time_ns": 0,
    "events": {},
    "is_root": true,
    "iteration": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
    "job": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
    "kind": 0,
    "links": {},
    "name": "name",
    "operation": "operation",
    "parent_span_id": "parent_span_id",
    "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
    "received_at": "2019-12-27T18:11:19.117Z",
    "resource_attrs": {},
    "scope_name": "scope_name",
    "scope_version": "scope_version",
    "service_name": "service_name",
    "span_id": "span_id",
    "span_type": "llm_call",
    "start_time_ns": 0,
    "status_code": 0,
    "status_message": "status_message",
    "trace_id": "trace_id"
  },
  "span_count": 0,
  "spans": [
    {
      "agent": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "attributes": {},
      "duration_ns": 0,
      "end_time_ns": 0,
      "events": {},
      "is_root": true,
      "iteration": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "job": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "kind": 0,
      "links": {},
      "name": "name",
      "operation": "operation",
      "parent_span_id": "parent_span_id",
      "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "received_at": "2019-12-27T18:11:19.117Z",
      "resource_attrs": {},
      "scope_name": "scope_name",
      "scope_version": "scope_version",
      "service_name": "service_name",
      "span_id": "span_id",
      "span_type": "llm_call",
      "start_time_ns": 0,
      "status_code": 0,
      "status_message": "status_message",
      "trace_id": "trace_id"
    }
  ],
  "trace_id": "trace_id"
}
```

##### Returns Examples

200 example

```
{
  "root": {
    "agent": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
    "attributes": {},
    "duration_ns": 0,
    "end_time_ns": 0,
    "events": {},
    "is_root": true,
    "iteration": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
    "job": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
    "kind": 0,
    "links": {},
    "name": "name",
    "operation": "operation",
    "parent_span_id": "parent_span_id",
    "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
    "received_at": "2019-12-27T18:11:19.117Z",
    "resource_attrs": {},
    "scope_name": "scope_name",
    "scope_version": "scope_version",
    "service_name": "service_name",
    "span_id": "span_id",
    "span_type": "llm_call",
    "start_time_ns": 0,
    "status_code": 0,
    "status_message": "status_message",
    "trace_id": "trace_id"
  },
  "span_count": 0,
  "spans": [
    {
      "agent": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "attributes": {},
      "duration_ns": 0,
      "end_time_ns": 0,
      "events": {},
      "is_root": true,
      "iteration": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "job": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "kind": 0,
      "links": {},
      "name": "name",
      "operation": "operation",
      "parent_span_id": "parent_span_id",
      "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "received_at": "2019-12-27T18:11:19.117Z",
      "resource_attrs": {},
      "scope_name": "scope_name",
      "scope_version": "scope_version",
      "service_name": "service_name",
      "span_id": "span_id",
      "span_type": "llm_call",
      "start_time_ns": 0,
      "status_code": 0,
      "status_message": "status_message",
      "trace_id": "trace_id"
    }
  ],
  "trace_id": "trace_id"
}
```