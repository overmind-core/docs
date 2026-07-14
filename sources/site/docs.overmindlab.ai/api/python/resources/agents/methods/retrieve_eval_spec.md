# Source: https://docs.overmindlab.ai/api/python/resources/agents/methods/retrieve_eval_spec

[API Reference](https://docs.overmindlab.ai/api/python)

[Agents](https://docs.overmindlab.ai/api/python/resources/agents)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Get agent eval spec

agents.retrieve\_eval\_spec(strid) \-> [AgentRetrieveEvalSpecResponse](https://docs.overmindlab.ai/api/python/resources/agents#(resource)%20agents%20%3E%20(model)%20agent_retrieve_eval_spec_response%20%3E%20(schema))

GET/api/agents/{id}/eval\_spec/

Get agent eval spec

##### ParametersExpand Collapse

id: str

formatuuid

##### ReturnsExpand Collapse

class AgentRetrieveEvalSpecResponse: …

agent\_description: str

agent\_path: str

consistency\_rules: object

fixed\_elements: object

input\_schema: object

optimizable\_elements: object

output\_fields: object

structure\_weight: float

formatdouble

tool\_config: object

tool\_usage\_weight: float

formatdouble

total\_points: float

formatdouble

##### Get agent eval spec

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
response = client.agents.retrieve_eval_spec(
    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
)
print(response.agent_description)
```

200 example

```
{
  "agent_description": "agent_description",
  "agent_path": "agent_path",
  "consistency_rules": {},
  "fixed_elements": {},
  "input_schema": {},
  "optimizable_elements": {},
  "output_fields": {},
  "structure_weight": 0,
  "tool_config": {},
  "tool_usage_weight": 0,
  "total_points": 0
}
```

##### Returns Examples

200 example

```
{
  "agent_description": "agent_description",
  "agent_path": "agent_path",
  "consistency_rules": {},
  "fixed_elements": {},
  "input_schema": {},
  "optimizable_elements": {},
  "output_fields": {},
  "structure_weight": 0,
  "tool_config": {},
  "tool_usage_weight": 0,
  "total_points": 0
}
```