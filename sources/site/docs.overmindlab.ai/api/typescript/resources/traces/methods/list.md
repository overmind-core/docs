# Source: https://docs.overmindlab.ai/api/typescript/resources/traces/methods/list

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Traces](https://docs.overmindlab.ai/api/typescript/resources/traces)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List traces (root spans)

client.traces.list(TraceListParams { agent, duration\_ns\_\_gte, duration\_ns\_\_lte, 22 more } query?, RequestOptionsoptions?): [TraceListResponse](https://docs.overmindlab.ai/api/typescript/resources/traces#(resource)%20traces%20%3E%20(model)%20trace_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/traces/

Returns one row per trace — the root span (`parent_span_id IS NULL`) of each trace the caller can see.

##### ParametersExpand Collapse

query: TraceListParams { agent, duration\_ns\_\_gte, duration\_ns\_\_lte, 22 more }

agent?: string

formatuuid

duration\_ns\_\_gte?: number

duration\_ns\_\_lte?: number

has\_error?: boolean

iteration?: string

formatuuid

job?: string

formatuuid

kind?: number

max\_duration\_ms?: number

min\_duration\_ms?: number

name?: string

operation?: string

ordering?: string

Which field to use when ordering the results.

page?: number

A page number within the paginated result set.

project?: string

formatuuid

received\_at\_\_gte?: string

formatdate-time

received\_at\_\_lte?: string

formatdate-time

search?: string

A search term.

service\_name?: string

service\_name\_\_in?: Array<string\>

Multiple values may be separated by commas.

span\_id?: string

span\_type?: "llm\_call" | "tool\_call"

- `llm_call` - Llm Call
- `tool_call` - Tool Call

Accepts one of the following:

"llm\_call"

"tool\_call"

start\_time\_ns\_\_gte?: number

start\_time\_ns\_\_lte?: number

status\_code?: number

trace\_id?: string

##### ReturnsExpand Collapse

TraceListResponse { count, results, next, previous }

count: number

results: Array<Result\>

agent: string | null

formatuuid

duration\_ns: number

end\_time\_ns: number

iteration: string | null

formatuuid

job: string | null

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

next?: string | null

formaturi

previous?: string | null

formaturi

##### List traces (root spans)

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const traces = await client.traces.list();

console.log(traces.count);
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