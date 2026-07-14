# Source: https://docs.overmindlab.ai/api/typescript/resources/agents

[API Reference](https://docs.overmindlab.ai/api/typescript)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Agents

##### [List agents](https://docs.overmindlab.ai/api/typescript/resources/agents/methods/list)

client.agents.list(AgentListParams { model, name, ordering, 5 more } query?, RequestOptionsoptions?): [AgentListResponse](https://docs.overmindlab.ai/api/typescript/resources/agents#(resource)%20agents%20%3E%20(model)%20agent_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/agents/

##### [Create agent](https://docs.overmindlab.ai/api/typescript/resources/agents/methods/create)

client.agents.create(AgentCreateParams { name, project, slug, 33 more } body, RequestOptionsoptions?): [AgentCreateResponse](https://docs.overmindlab.ai/api/typescript/resources/agents#(resource)%20agents%20%3E%20(model)%20agent_create_response%20%3E%20(schema)) { id, created\_at, name, 36 more }

POST/api/agents/

##### [Get agent](https://docs.overmindlab.ai/api/typescript/resources/agents/methods/retrieve)

client.agents.retrieve(stringid, RequestOptionsoptions?): [AgentRetrieveResponse](https://docs.overmindlab.ai/api/typescript/resources/agents#(resource)%20agents%20%3E%20(model)%20agent_retrieve_response%20%3E%20(schema)) { id, created\_at, name, 36 more }

GET/api/agents/{id}/

##### [Update agent](https://docs.overmindlab.ai/api/typescript/resources/agents/methods/update)

client.agents.update(stringid, AgentUpdateParams { active\_dataset, agent\_description, agent\_path, 33 more } body?, RequestOptionsoptions?): [AgentUpdateResponse](https://docs.overmindlab.ai/api/typescript/resources/agents#(resource)%20agents%20%3E%20(model)%20agent_update_response%20%3E%20(schema)) { id, created\_at, name, 36 more }

PATCH/api/agents/{id}/

##### [Soft-delete agent](https://docs.overmindlab.ai/api/typescript/resources/agents/methods/delete)

client.agents.delete(stringid, RequestOptionsoptions?): void

DELETE/api/agents/{id}/

##### [Get agent eval spec](https://docs.overmindlab.ai/api/typescript/resources/agents/methods/retrieve_eval_spec)

client.agents.retrieveEvalSpec(stringid, RequestOptionsoptions?): [AgentRetrieveEvalSpecResponse](https://docs.overmindlab.ai/api/typescript/resources/agents#(resource)%20agents%20%3E%20(model)%20agent_retrieve_eval_spec_response%20%3E%20(schema)) { agent\_description, agent\_path, consistency\_rules, 8 more }

GET/api/agents/{id}/eval\_spec/