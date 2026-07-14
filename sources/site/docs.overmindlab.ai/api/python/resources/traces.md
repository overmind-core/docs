# Source: https://docs.overmindlab.ai/api/python/resources/traces

[API Reference](https://docs.overmindlab.ai/api/python)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Traces

##### [List traces (root spans)](https://docs.overmindlab.ai/api/python/resources/traces/methods/list)

traces.list(TraceListParams\*\*kwargs) \-> [TraceListResponse](https://docs.overmindlab.ai/api/python/resources/traces#(resource)%20traces%20%3E%20(model)%20trace_list_response%20%3E%20(schema))

GET/api/traces/

##### [Get a trace and all its spans](https://docs.overmindlab.ai/api/python/resources/traces/methods/retrieve)

traces.retrieve(strtrace\_id) \-> [TraceRetrieveResponse](https://docs.overmindlab.ai/api/python/resources/traces#(resource)%20traces%20%3E%20(model)%20trace_retrieve_response%20%3E%20(schema))

GET/api/traces/{trace\_id}/

##### [List distinct service names visible to the caller](https://docs.overmindlab.ai/api/python/resources/traces/methods/list_services)

traces.list\_services(TraceListServicesParams\*\*kwargs) \-> [TraceListServicesResponse](https://docs.overmindlab.ai/api/python/resources/traces#(resource)%20traces%20%3E%20(model)%20trace_list_services_response%20%3E%20(schema))

GET/api/traces/services/