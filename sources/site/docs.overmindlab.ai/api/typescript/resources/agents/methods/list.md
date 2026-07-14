# Source: https://docs.overmindlab.ai/api/typescript/resources/agents/methods/list

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Agents](https://docs.overmindlab.ai/api/typescript/resources/agents)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List agents

client.agents.list(AgentListParams { model, name, ordering, 5 more } query?, RequestOptionsoptions?): [AgentListResponse](https://docs.overmindlab.ai/api/typescript/resources/agents#(resource)%20agents%20%3E%20(model)%20agent_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/agents/

List agents

##### ParametersExpand Collapse

query: AgentListParams { model, name, ordering, 5 more }

model?: string

name?: string

ordering?: string

Which field to use when ordering the results.

page?: number

A page number within the paginated result set.

project?: string

formatuuid

search?: string

A search term.

slug?: string

status?: string

##### ReturnsExpand Collapse

AgentListResponse { count, results, next, previous }

count: number

results: Array<Result\>

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

agent\_path?: string

maxLength512

analyzer\_model?: string

maxLength128

dataset\_has\_expected\_output?: boolean

dataset\_size?: number

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

description?: string

display\_name?: string

maxLength512

entrypoint\_fn?: string

maxLength255

model?: string

maxLength128

status?: string

maxLength20

structure\_weight?: number

formatdouble

tags?: unknown

tool\_usage\_weight?: number

formatdouble

total\_points?: number

formatdouble

next?: string | null

formaturi

previous?: string | null

formaturi

##### List agents

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const agents = await client.agents.list();

console.log(agents.count);
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