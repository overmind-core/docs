# Source: https://docs.overmindlab.ai/api/resources/traces/methods/list_services

[API Reference](https://docs.overmindlab.ai/api)

[Traces](https://docs.overmindlab.ai/api/resources/traces)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List distinct service names visible to the caller

GET/api/traces/services/

The single trace-data viewset — one Span table, two read shapes.

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

results: array of string

next: optional string

formaturi

previous: optional string

formaturi

##### List distinct service names visible to the caller

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/traces/services/
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