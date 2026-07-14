# Source: https://docs.overmindlab.ai/api/resources/agents/methods/create

[API Reference](https://docs.overmindlab.ai/api)

[Agents](https://docs.overmindlab.ai/api/resources/agents)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Create agent

POST/api/agents/

Create agent

##### Body ParametersExpand Collapse

name: string

minLength1

maxLength255

project: string

formatuuid

slug: string

minLength1

maxLength255

active\_dataset: optional string

formatuuid

agent\_description: optional unknown

agent\_path: optional string

maxLength512

analyzer\_model: optional string

maxLength128

backtest\_metadata: optional unknown

backtest\_model\_suggestions: optional unknown

consistency\_rules: optional unknown

dataset\_has\_expected\_output: optional boolean

dataset\_input\_keys: optional unknown

dataset\_size: optional number

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

description: optional string

display\_name: optional string

maxLength512

entrypoint\_fn: optional string

maxLength255

eval\_dataset: optional unknown

evaluation\_criteria: optional unknown

fixed\_elements: optional unknown

improvement\_metadata: optional unknown

input\_schema: optional unknown

is\_deleted: optional boolean

model: optional string

maxLength128

optimizable\_elements: optional unknown

output\_fields: optional unknown

output\_schema: optional unknown

policy\_data: optional unknown

policy\_markdown: optional string

proposed\_criteria: optional unknown

status: optional string

minLength1

maxLength20

structure\_weight: optional number

formatdouble

tags: optional unknown

tool\_analysis: optional unknown

tool\_config: optional unknown

tool\_usage\_weight: optional number

formatdouble

total\_points: optional number

formatdouble

##### ReturnsExpand Collapse

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

active\_dataset: optional string

formatuuid

agent\_description: optional unknown

agent\_path: optional string

maxLength512

analyzer\_model: optional string

maxLength128

backtest\_metadata: optional unknown

backtest\_model\_suggestions: optional unknown

consistency\_rules: optional unknown

dataset\_has\_expected\_output: optional boolean

dataset\_input\_keys: optional unknown

dataset\_size: optional number

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

description: optional string

display\_name: optional string

maxLength512

entrypoint\_fn: optional string

maxLength255

eval\_dataset: optional unknown

evaluation\_criteria: optional unknown

fixed\_elements: optional unknown

improvement\_metadata: optional unknown

input\_schema: optional unknown

is\_deleted: optional boolean

model: optional string

maxLength128

optimizable\_elements: optional unknown

output\_fields: optional unknown

output\_schema: optional unknown

policy\_data: optional unknown

policy\_markdown: optional string

proposed\_criteria: optional unknown

status: optional string

maxLength20

structure\_weight: optional number

formatdouble

tags: optional unknown

tool\_analysis: optional unknown

tool\_config: optional unknown

tool\_usage\_weight: optional number

formatdouble

total\_points: optional number

formatdouble

##### Create agent

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/agents/ \
    -H 'Content-Type: application/json' \
    -d '{
          "name": "x",
          "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
          "slug": "slug"
        }'
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