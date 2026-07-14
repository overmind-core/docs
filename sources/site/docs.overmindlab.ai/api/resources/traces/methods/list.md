# Source: https://docs.overmindlab.ai/api/resources/traces/methods/list

[API Reference](https://docs.overmindlab.ai/api)

[Traces](https://docs.overmindlab.ai/api/resources/traces)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List traces (root spans)

GET/api/traces/

Returns one row per trace — the root span (`parent_span_id IS NULL`) of each trace the caller can see.

##### Query ParametersExpand Collapse

agent: optional string

formatuuid

duration\_ns\_\_gte: optional number

duration\_ns\_\_lte: optional number

has\_error: optional boolean

iteration: optional string

formatuuid

job: optional string

formatuuid

kind: optional number

max\_duration\_ms: optional number

min\_duration\_ms: optional number

name: optional string

operation: optional string

ordering: optional string

Which field to use when ordering the results.

page: optional number

A page number within the paginated result set.

project: optional string

formatuuid

received\_at\_\_gte: optional string

formatdate-time

received\_at\_\_lte: optional string

formatdate-time

search: optional string

A search term.

service\_name: optional string

service\_name\_\_in: optional array of string

Multiple values may be separated by commas.

span\_id: optional string

span\_type: optional "llm\_call" or "tool\_call"

- `llm_call` - Llm Call
- `tool_call` - Tool Call

Accepts one of the following:

"llm\_call"

"tool\_call"

start\_time\_ns\_\_gte: optional number

start\_time\_ns\_\_lte: optional number

status\_code: optional number

trace\_id: optional string

##### ReturnsExpand Collapse

count: number

results: array of object { agent, duration\_ns, end\_time\_ns, 14 more }

agent: string

formatuuid

duration\_ns: number

end\_time\_ns: number

iteration: string

formatuuid

job: string

formatuuid

kind: number

name: string

operation: string

project: string

formatuuid

received\_at: string

formatdate-time

service\_name: string

span\_id: string

span\_type: "llm\_call" or "tool\_call"

- `llm_call` - Llm Call
- `tool_call` - Tool Call

Accepts one of the following:

"llm\_call"

"tool\_call"

start\_time\_ns: number

status\_code: number

status\_message: string

trace\_id: string

next: optional string

formaturi

previous: optional string

formaturi

##### List traces (root spans)

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/traces/
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