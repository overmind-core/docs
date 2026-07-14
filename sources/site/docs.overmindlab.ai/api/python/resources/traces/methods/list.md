# Source: https://docs.overmindlab.ai/api/python/resources/traces/methods/list

[API Reference](https://docs.overmindlab.ai/api/python)

[Traces](https://docs.overmindlab.ai/api/python/resources/traces)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List traces (root spans)

traces.list(TraceListParams\*\*kwargs) \-> [TraceListResponse](https://docs.overmindlab.ai/api/python/resources/traces#(resource)%20traces%20%3E%20(model)%20trace_list_response%20%3E%20(schema))

GET/api/traces/

Returns one row per trace — the root span (`parent_span_id IS NULL`) of each trace the caller can see.

##### ParametersExpand Collapse

agent: Optional\[str\]

formatuuid

duration\_ns\_gte: Optional\[int\]

duration\_ns\_lte: Optional\[int\]

has\_error: Optional\[[bool](https://docs.overmindlab.ai/api/python/resources/traces/methods/list#(resource)%20traces%20%3E%20(method)%20list%20%3E%20(params)%20default%20%3E%20(param)%20has_error%20%3E%20(schema))\]

iteration: Optional\[str\]

formatuuid

job: Optional\[str\]

formatuuid

kind: Optional\[int\]

max\_duration\_ms: Optional\[float\]

min\_duration\_ms: Optional\[float\]

name: Optional\[str\]

operation: Optional\[str\]

ordering: Optional\[str\]

Which field to use when ordering the results.

page: Optional\[int\]

A page number within the paginated result set.

project: Optional\[str\]

formatuuid

received\_at\_gte: Optional\[Union\[str, datetime\]\]

formatdate-time

received\_at\_lte: Optional\[Union\[str, datetime\]\]

formatdate-time

search: Optional\[str\]

A search term.

service\_name: Optional\[str\]

service\_name\_in: Optional\[[SequenceNotStr](https://docs.overmindlab.ai/api/python/resources/traces/methods/list#(resource)%20traces%20%3E%20(method)%20list%20%3E%20(params)%20default%20%3E%20(param)%20service_name__in%20%3E%20(schema))\[str\]\]

Multiple values may be separated by commas.

span\_id: Optional\[str\]

span\_type: Optional\[Literal\["llm\_call", "tool\_call"\]\]

- `llm_call` - Llm Call
- `tool_call` - Tool Call

Accepts one of the following:

"llm\_call"

"tool\_call"

start\_time\_ns\_gte: Optional\[int\]

start\_time\_ns\_lte: Optional\[int\]

status\_code: Optional\[int\]

trace\_id: Optional\[str\]

##### ReturnsExpand Collapse

class TraceListResponse: …

count: int

results: List\[Result\]

agent: Optional\[str\]

formatuuid

duration\_ns: int

end\_time\_ns: int

iteration: Optional\[str\]

formatuuid

job: Optional\[str\]

formatuuid

kind: int

name: str

operation: str

project: str

formatuuid

received\_at: datetime

formatdate-time

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

next: Optional\[str\]

formaturi

previous: Optional\[str\]

formaturi

##### List traces (root spans)

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
traces = client.traces.list()
print(traces.count)
```

200 example

```
{
  "count": 123,
  "results": [
    {
      "agent": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "duration_ns": 0,
      "end_time_ns": 0,
      "iteration": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "job": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "kind": 0,
      "name": "name",
      "operation": "operation",
      "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "received_at": "2019-12-27T18:11:19.117Z",
      "service_name": "service_name",
      "span_id": "span_id",
      "span_type": "llm_call",
      "start_time_ns": 0,
      "status_code": 0,
      "status_message": "status_message",
      "trace_id": "trace_id"
    }
  ],
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2"
}
```

##### Returns Examples

200 example

```
{
  "count": 123,
  "results": [
    {
      "agent": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "duration_ns": 0,
      "end_time_ns": 0,
      "iteration": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "job": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "kind": 0,
      "name": "name",
      "operation": "operation",
      "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "received_at": "2019-12-27T18:11:19.117Z",
      "service_name": "service_name",
      "span_id": "span_id",
      "span_type": "llm_call",
      "start_time_ns": 0,
      "status_code": 0,
      "status_message": "status_message",
      "trace_id": "trace_id"
    }
  ],
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2"
}
```