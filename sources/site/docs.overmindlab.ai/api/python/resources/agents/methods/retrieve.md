# Source: https://docs.overmindlab.ai/api/python/resources/agents/methods/retrieve

[API Reference](https://docs.overmindlab.ai/api/python)

[Agents](https://docs.overmindlab.ai/api/python/resources/agents)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Get agent

agents.retrieve(strid) \-> [AgentRetrieveResponse](https://docs.overmindlab.ai/api/python/resources/agents#(resource)%20agents%20%3E%20(model)%20agent_retrieve_response%20%3E%20(schema))

GET/api/agents/{id}/

Get agent

##### ParametersExpand Collapse

id: str

formatuuid

##### ReturnsExpand Collapse

class AgentRetrieveResponse: …

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

active\_dataset: Optional\[str\]

formatuuid

agent\_description: Optional\[object\]

agent\_path: Optional\[str\]

maxLength512

analyzer\_model: Optional\[str\]

maxLength128

backtest\_metadata: Optional\[object\]

backtest\_model\_suggestions: Optional\[object\]

consistency\_rules: Optional\[object\]

dataset\_has\_expected\_output: Optional\[bool\]

dataset\_input\_keys: Optional\[object\]

dataset\_size: Optional\[int\]

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

description: Optional\[str\]

display\_name: Optional\[str\]

maxLength512

entrypoint\_fn: Optional\[str\]

maxLength255

eval\_dataset: Optional\[object\]

evaluation\_criteria: Optional\[object\]

fixed\_elements: Optional\[object\]

improvement\_metadata: Optional\[object\]

input\_schema: Optional\[object\]

is\_deleted: Optional\[bool\]

model: Optional\[str\]

maxLength128

optimizable\_elements: Optional\[object\]

output\_fields: Optional\[object\]

output\_schema: Optional\[object\]

policy\_data: Optional\[object\]

policy\_markdown: Optional\[str\]

proposed\_criteria: Optional\[object\]

status: Optional\[str\]

maxLength20

structure\_weight: Optional\[float\]

formatdouble

tags: Optional\[object\]

tool\_analysis: Optional\[object\]

tool\_config: Optional\[object\]

tool\_usage\_weight: Optional\[float\]

formatdouble

total\_points: Optional\[float\]

formatdouble

##### Get agent

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
agent = client.agents.retrieve(
    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
)
print(agent.id)
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