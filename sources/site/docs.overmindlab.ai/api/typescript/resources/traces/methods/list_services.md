# Source: https://docs.overmindlab.ai/api/typescript/resources/traces/methods/list_services

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Traces](https://docs.overmindlab.ai/api/typescript/resources/traces)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List distinct service names visible to the caller

client.traces.listServices(TraceListServicesParams { agent, duration\_ns\_\_gte, duration\_ns\_\_lte, 22 more } query?, RequestOptionsoptions?): [TraceListServicesResponse](https://docs.overmindlab.ai/api/typescript/resources/traces#(resource)%20traces%20%3E%20(model)%20trace_list_services_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/traces/services/

The single trace-data viewset — one Span table, two read shapes.

##### ParametersExpand Collapse

query: TraceListServicesParams { agent, duration\_ns\_\_gte, duration\_ns\_\_lte, 22 more }

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

TraceListServicesResponse { count, results, next, previous }

count: number

results: Array<string\>

next?: string | null

formaturi

previous?: string | null

formaturi

##### List distinct service names visible to the caller

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const response = await client.traces.listServices();

console.log(response.count);
```

200 example

```
{
  "count": 123,
  "results": [
    "string"
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
    "string"
  ],
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2"
}
```