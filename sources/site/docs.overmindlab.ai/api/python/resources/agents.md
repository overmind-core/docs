# Source: https://docs.overmindlab.ai/api/python/resources/agents

[API Reference](https://docs.overmindlab.ai/api/python)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Agents

##### [List agents](https://docs.overmindlab.ai/api/python/resources/agents/methods/list)

agents.list(AgentListParams\*\*kwargs) \-> [AgentListResponse](https://docs.overmindlab.ai/api/python/resources/agents#(resource)%20agents%20%3E%20(model)%20agent_list_response%20%3E%20(schema))

GET/api/agents/

##### [Create agent](https://docs.overmindlab.ai/api/python/resources/agents/methods/create)

agents.create(AgentCreateParams\*\*kwargs) \-> [AgentCreateResponse](https://docs.overmindlab.ai/api/python/resources/agents#(resource)%20agents%20%3E%20(model)%20agent_create_response%20%3E%20(schema))

POST/api/agents/

##### [Get agent](https://docs.overmindlab.ai/api/python/resources/agents/methods/retrieve)

agents.retrieve(strid) \-> [AgentRetrieveResponse](https://docs.overmindlab.ai/api/python/resources/agents#(resource)%20agents%20%3E%20(model)%20agent_retrieve_response%20%3E%20(schema))

GET/api/agents/{id}/

##### [Update agent](https://docs.overmindlab.ai/api/python/resources/agents/methods/update)

agents.update(strid, AgentUpdateParams\*\*kwargs) \-> [AgentUpdateResponse](https://docs.overmindlab.ai/api/python/resources/agents#(resource)%20agents%20%3E%20(model)%20agent_update_response%20%3E%20(schema))

PATCH/api/agents/{id}/

##### [Soft-delete agent](https://docs.overmindlab.ai/api/python/resources/agents/methods/delete)

agents.delete(strid)

DELETE/api/agents/{id}/

##### [Get agent eval spec](https://docs.overmindlab.ai/api/python/resources/agents/methods/retrieve_eval_spec)

agents.retrieve\_eval\_spec(strid) \-> [AgentRetrieveEvalSpecResponse](https://docs.overmindlab.ai/api/python/resources/agents#(resource)%20agents%20%3E%20(model)%20agent_retrieve_eval_spec_response%20%3E%20(schema))

GET/api/agents/{id}/eval\_spec/