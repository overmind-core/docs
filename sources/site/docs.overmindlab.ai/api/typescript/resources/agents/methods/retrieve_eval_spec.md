# Source: https://docs.overmindlab.ai/api/typescript/resources/agents/methods/retrieve_eval_spec

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Agents](https://docs.overmindlab.ai/api/typescript/resources/agents)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Get agent eval spec

client.agents.retrieveEvalSpec(stringid, RequestOptionsoptions?): [AgentRetrieveEvalSpecResponse](https://docs.overmindlab.ai/api/typescript/resources/agents#(resource)%20agents%20%3E%20(model)%20agent_retrieve_eval_spec_response%20%3E%20(schema)) { agent\_description, agent\_path, consistency\_rules, 8 more }

GET/api/agents/{id}/eval\_spec/

Get agent eval spec

##### ParametersExpand Collapse

id: string

formatuuid

##### ReturnsExpand Collapse

AgentRetrieveEvalSpecResponse { agent\_description, agent\_path, consistency\_rules, 8 more }

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

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const response = await client.agents.retrieveEvalSpec('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');

console.log(response.agent_description);
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