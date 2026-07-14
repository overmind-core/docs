# Source: https://docs.overmindlab.ai/api/python/resources/agents/methods/list

[API Reference](https://docs.overmindlab.ai/api/python)

[Agents](https://docs.overmindlab.ai/api/python/resources/agents)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List agents

agents.list(AgentListParams\*\*kwargs) \-> [AgentListResponse](https://docs.overmindlab.ai/api/python/resources/agents#(resource)%20agents%20%3E%20(model)%20agent_list_response%20%3E%20(schema))

GET/api/agents/

List agents

##### ParametersExpand Collapse

model: Optional\[str\]

name: Optional\[str\]

ordering: Optional\[str\]

Which field to use when ordering the results.

page: Optional\[int\]

A page number within the paginated result set.

project: Optional\[str\]

formatuuid

search: Optional\[str\]

A search term.

slug: Optional\[str\]

status: Optional\[str\]

##### ReturnsExpand Collapse

class AgentListResponse: …

count: int

results: List\[Result\]

id: str

formatuuid

created\_at: datetime

formatdate-time

name: str

maxLength255

project: str

formatuuid

slug: str

maxLength255

updated\_at: datetime

formatdate-time

agent\_path: Optional\[str\]

maxLength512

analyzer\_model: Optional\[str\]

maxLength128

dataset\_has\_expected\_output: Optional\[bool\]

dataset\_size: Optional\[int\]

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

description: Optional\[str\]

display\_name: Optional\[str\]

maxLength512

entrypoint\_fn: Optional\[str\]

maxLength255

model: Optional\[str\]

maxLength128

status: Optional\[str\]

maxLength20

structure\_weight: Optional\[float\]

formatdouble

tags: Optional\[object\]

tool\_usage\_weight: Optional\[float\]

formatdouble

total\_points: Optional\[float\]

formatdouble

next: Optional\[str\]

formaturi

previous: Optional\[str\]

formaturi

##### List agents

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
agents = client.agents.list()
print(agents.count)
```

200 example

```
{
  "count": 123,
  "results": [
    {
      "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "created_at": "2019-12-27T18:11:19.117Z",
      "name": "name",
      "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "slug": "slug",
      "updated_at": "2019-12-27T18:11:19.117Z",
      "agent_path": "agent_path",
      "analyzer_model": "analyzer_model",
      "dataset_has_expected_output": true,
      "dataset_size": -9007199254740991,
      "description": "description",
      "display_name": "display_name",
      "entrypoint_fn": "entrypoint_fn",
      "model": "model",
      "status": "status",
      "structure_weight": 0,
      "tags": {},
      "tool_usage_weight": 0,
      "total_points": 0
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
      "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "created_at": "2019-12-27T18:11:19.117Z",
      "name": "name",
      "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "slug": "slug",
      "updated_at": "2019-12-27T18:11:19.117Z",
      "agent_path": "agent_path",
      "analyzer_model": "analyzer_model",
      "dataset_has_expected_output": true,
      "dataset_size": -9007199254740991,
      "description": "description",
      "display_name": "display_name",
      "entrypoint_fn": "entrypoint_fn",
      "model": "model",
      "status": "status",
      "structure_weight": 0,
      "tags": {},
      "tool_usage_weight": 0,
      "total_points": 0
    }
  ],
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2"
}
```