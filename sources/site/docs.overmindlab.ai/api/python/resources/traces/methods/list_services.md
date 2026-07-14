# Source: https://docs.overmindlab.ai/api/python/resources/traces/methods/list_services

[API Reference](https://docs.overmindlab.ai/api/python)

[Traces](https://docs.overmindlab.ai/api/python/resources/traces)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List distinct service names visible to the caller

traces.list\_services(TraceListServicesParams\*\*kwargs) \-> [TraceListServicesResponse](https://docs.overmindlab.ai/api/python/resources/traces#(resource)%20traces%20%3E%20(model)%20trace_list_services_response%20%3E%20(schema))

GET/api/traces/services/

The single trace-data viewset — one Span table, two read shapes.

##### ParametersExpand Collapse

agent: Optional\[str\]

formatuuid

duration\_ns\_gte: Optional\[int\]

duration\_ns\_lte: Optional\[int\]

has\_error: Optional\[[bool](https://docs.overmindlab.ai/api/python/resources/traces/methods/list_services#(resource)%20traces%20%3E%20(method)%20list_services%20%3E%20(params)%20default%20%3E%20(param)%20has_error%20%3E%20(schema))\]

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

service\_name\_in: Optional\[[SequenceNotStr](https://docs.overmindlab.ai/api/python/resources/traces/methods/list_services#(resource)%20traces%20%3E%20(method)%20list_services%20%3E%20(params)%20default%20%3E%20(param)%20service_name__in%20%3E%20(schema))\[str\]\]

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

class TraceListServicesResponse: …

count: int

results: List\[str\]

next: Optional\[str\]

formaturi

previous: Optional\[str\]

formaturi

##### List distinct service names visible to the caller

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
response = client.traces.list_services()
print(response.count)
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