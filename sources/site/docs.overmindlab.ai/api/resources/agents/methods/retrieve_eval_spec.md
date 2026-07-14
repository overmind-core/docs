# Source: https://docs.overmindlab.ai/api/resources/agents/methods/retrieve_eval_spec

[API Reference](https://docs.overmindlab.ai/api)

[Agents](https://docs.overmindlab.ai/api/resources/agents)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Get agent eval spec

GET/api/agents/{id}/eval\_spec/

Get agent eval spec

##### Path ParametersExpand Collapse

id: string

formatuuid

##### ReturnsExpand Collapse

agent\_description: string

agent\_path: string

consistency\_rules: unknown

fixed\_elements: unknown

input\_schema: unknown

optimizable\_elements: unknown

output\_fields: unknown

structure\_weight: number

formatdouble

tool\_config: unknown

tool\_usage\_weight: number

formatdouble

total\_points: number

formatdouble

##### Get agent eval spec

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/agents/$ID/eval_spec/
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