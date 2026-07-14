# Source: https://docs.overmindlab.ai/api/resources/agents/methods/list

[API Reference](https://docs.overmindlab.ai/api)

[Agents](https://docs.overmindlab.ai/api/resources/agents)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List agents

GET/api/agents/

List agents

##### Query ParametersExpand Collapse

model: optional string

name: optional string

ordering: optional string

Which field to use when ordering the results.

page: optional number

A page number within the paginated result set.

project: optional string

formatuuid

search: optional string

A search term.

slug: optional string

status: optional string

##### ReturnsExpand Collapse

count: number

results: array of object { id, created\_at, name, 16 more }

id: string

formatuuid

created\_at: string

formatdate-time

name: string

maxLength255

project: string

formatuuid

slug: string

maxLength255

updated\_at: string

formatdate-time

agent\_path: optional string

maxLength512

analyzer\_model: optional string

maxLength128

dataset\_has\_expected\_output: optional boolean

dataset\_size: optional number

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

description: optional string

display\_name: optional string

maxLength512

entrypoint\_fn: optional string

maxLength255

model: optional string

maxLength128

status: optional string

maxLength20

structure\_weight: optional number

formatdouble

tags: optional unknown

tool\_usage\_weight: optional number

formatdouble

total\_points: optional number

formatdouble

next: optional string

formaturi

previous: optional string

formaturi

##### List agents

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/agents/
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