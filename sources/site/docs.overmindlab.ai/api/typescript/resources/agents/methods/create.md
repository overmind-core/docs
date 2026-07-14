# Source: https://docs.overmindlab.ai/api/typescript/resources/agents/methods/create

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Agents](https://docs.overmindlab.ai/api/typescript/resources/agents)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Create agent

client.agents.create(AgentCreateParams { name, project, slug, 33 more } body, RequestOptionsoptions?): [AgentCreateResponse](https://docs.overmindlab.ai/api/typescript/resources/agents#(resource)%20agents%20%3E%20(model)%20agent_create_response%20%3E%20(schema)) { id, created\_at, name, 36 more }

POST/api/agents/

Create agent

##### ParametersExpand Collapse

body: AgentCreateParams { name, project, slug, 33 more }

name: string

minLength1

maxLength255

project: string

formatuuid

slug: string

minLength1

maxLength255

active\_dataset?: string | null

formatuuid

agent\_description?: unknown

agent\_path?: string

maxLength512

analyzer\_model?: string

maxLength128

backtest\_metadata?: unknown

backtest\_model\_suggestions?: unknown

consistency\_rules?: unknown

dataset\_has\_expected\_output?: boolean

dataset\_input\_keys?: unknown

dataset\_size?: number

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

description?: string

display\_name?: string

maxLength512

entrypoint\_fn?: string

maxLength255

eval\_dataset?: unknown

evaluation\_criteria?: unknown

fixed\_elements?: unknown

improvement\_metadata?: unknown

input\_schema?: unknown

is\_deleted?: boolean

model?: string

maxLength128

optimizable\_elements?: unknown

output\_fields?: unknown

output\_schema?: unknown

policy\_data?: unknown

policy\_markdown?: string

proposed\_criteria?: unknown

status?: string

minLength1

maxLength20

structure\_weight?: number

formatdouble

tags?: unknown

tool\_analysis?: unknown

tool\_config?: unknown

tool\_usage\_weight?: number

formatdouble

total\_points?: number

formatdouble

##### ReturnsExpand Collapse

AgentCreateResponse { id, created\_at, name, 36 more }

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

active\_dataset?: string | null

formatuuid

agent\_description?: unknown

agent\_path?: string

maxLength512

analyzer\_model?: string

maxLength128

backtest\_metadata?: unknown

backtest\_model\_suggestions?: unknown

consistency\_rules?: unknown

dataset\_has\_expected\_output?: boolean

dataset\_input\_keys?: unknown

dataset\_size?: number

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

description?: string

display\_name?: string

maxLength512

entrypoint\_fn?: string

maxLength255

eval\_dataset?: unknown

evaluation\_criteria?: unknown

fixed\_elements?: unknown

improvement\_metadata?: unknown

input\_schema?: unknown

is\_deleted?: boolean

model?: string

maxLength128

optimizable\_elements?: unknown

output\_fields?: unknown

output\_schema?: unknown

policy\_data?: unknown

policy\_markdown?: string

proposed\_criteria?: unknown

status?: string

maxLength20

structure\_weight?: number

formatdouble

tags?: unknown

tool\_analysis?: unknown

tool\_config?: unknown

tool\_usage\_weight?: number

formatdouble

total\_points?: number

formatdouble

##### Create agent

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const agent = await client.agents.create({
  name: 'x',
  project: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
  slug: 'slug',
});

console.log(agent.id);
```

200 example

```
{
  "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "created_at": "2019-12-27T18:11:19.117Z",
  "name": "name",
  "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "slug": "slug",
  "updated_at": "2019-12-27T18:11:19.117Z",
  "active_dataset": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "agent_description": {},
  "agent_path": "agent_path",
  "analyzer_model": "analyzer_model",
  "backtest_metadata": {},
  "backtest_model_suggestions": {},
  "consistency_rules": {},
  "dataset_has_expected_output": true,
  "dataset_input_keys": {},
  "dataset_size": -9007199254740991,
  "description": "description",
  "display_name": "display_name",
  "entrypoint_fn": "entrypoint_fn",
  "eval_dataset": {},
  "evaluation_criteria": {},
  "fixed_elements": {},
  "improvement_metadata": {},
  "input_schema": {},
  "is_deleted": true,
  "model": "model",
  "optimizable_elements": {},
  "output_fields": {},
  "output_schema": {},
  "policy_data": {},
  "policy_markdown": "policy_markdown",
  "proposed_criteria": {},
  "status": "status",
  "structure_weight": 0,
  "tags": {},
  "tool_analysis": {},
  "tool_config": {},
  "tool_usage_weight": 0,
  "total_points": 0
}
```

##### Returns Examples

200 example

```
{
  "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "created_at": "2019-12-27T18:11:19.117Z",
  "name": "name",
  "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "slug": "slug",
  "updated_at": "2019-12-27T18:11:19.117Z",
  "active_dataset": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "agent_description": {},
  "agent_path": "agent_path",
  "analyzer_model": "analyzer_model",
  "backtest_metadata": {},
  "backtest_model_suggestions": {},
  "consistency_rules": {},
  "dataset_has_expected_output": true,
  "dataset_input_keys": {},
  "dataset_size": -9007199254740991,
  "description": "description",
  "display_name": "display_name",
  "entrypoint_fn": "entrypoint_fn",
  "eval_dataset": {},
  "evaluation_criteria": {},
  "fixed_elements": {},
  "improvement_metadata": {},
  "input_schema": {},
  "is_deleted": true,
  "model": "model",
  "optimizable_elements": {},
  "output_fields": {},
  "output_schema": {},
  "policy_data": {},
  "policy_markdown": "policy_markdown",
  "proposed_criteria": {},
  "status": "status",
  "structure_weight": 0,
  "tags": {},
  "tool_analysis": {},
  "tool_config": {},
  "tool_usage_weight": 0,
  "total_points": 0
}
```