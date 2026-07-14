# Source: https://docs.overmindlab.ai/api/python/resources/traces/methods/retrieve

[API Reference](https://docs.overmindlab.ai/api/python)

[Traces](https://docs.overmindlab.ai/api/python/resources/traces)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Get a trace and all its spans

traces.retrieve(strtrace\_id) \-> [TraceRetrieveResponse](https://docs.overmindlab.ai/api/python/resources/traces#(resource)%20traces%20%3E%20(model)%20trace_retrieve_response%20%3E%20(schema))

GET/api/traces/{trace\_id}/

Looked up by `trace_id` (the OTel 32-char hex), not by row id. Returns the root span plus every span sharing that `trace_id`.

##### ParametersExpand Collapse

trace\_id: str

##### ReturnsExpand Collapse

class TraceRetrieveResponse: …

`GET /api/traces/{trace_id}/` payload — root summary + every span.

root: Optional\[Root\]

Full span — used both for `/api/traces/{trace_id}/` (one span row in the per-trace list) and as the per-row representation for any span query.

agent: Optional\[str\]

formatuuid

attributes: object

duration\_ns: int

end\_time\_ns: int

events: object

is\_root: bool

iteration: Optional\[str\]

formatuuid

job: Optional\[str\]

formatuuid

kind: int

links: object

name: str

operation: str

parent\_span\_id: Optional\[str\]

project: str

formatuuid

received\_at: datetime

formatdate-time

resource\_attrs: object

scope\_name: str

scope\_version: str

service\_name: str

span\_id: str

span\_type: Literal\["llm\_call", "tool\_call"\]

- `llm_call` - Llm Call
- `tool_call` - Tool Call

Accepts one of the following:

"llm\_call"

"tool\_call"

start\_time\_ns: int

status\_code: int

status\_message: str

trace\_id: str

span\_count: int

spans: List\[Span\]

agent: Optional\[str\]

formatuuid

attributes: object

duration\_ns: int

end\_time\_ns: int

events: object

is\_root: bool

iteration: Optional\[str\]

formatuuid

job: Optional\[str\]

formatuuid

kind: int

links: object

name: str

operation: str

parent\_span\_id: Optional\[str\]

project: str

formatuuid

received\_at: datetime

formatdate-time

resource\_attrs: object

scope\_name: str

scope\_version: str

service\_name: str

span\_id: str

span\_type: Literal\["llm\_call", "tool\_call"\]

- `llm_call` - Llm Call
- `tool_call` - Tool Call

Accepts one of the following:

"llm\_call"

"tool\_call"

start\_time\_ns: int

status\_code: int

status\_message: str

trace\_id: str

trace\_id: str

##### Get a trace and all its spans

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
trace = client.traces.retrieve(
    "trace_id",
)
print(trace.trace_id)
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