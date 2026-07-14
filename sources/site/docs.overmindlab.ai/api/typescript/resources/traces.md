# Source: https://docs.overmindlab.ai/api/typescript/resources/traces

[API Reference](https://docs.overmindlab.ai/api/typescript)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Traces

##### [List traces (root spans)](https://docs.overmindlab.ai/api/typescript/resources/traces/methods/list)

client.traces.list(TraceListParams { agent, duration\_ns\_\_gte, duration\_ns\_\_lte, 22 more } query?, RequestOptionsoptions?): [TraceListResponse](https://docs.overmindlab.ai/api/typescript/resources/traces#(resource)%20traces%20%3E%20(model)%20trace_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/traces/

##### [Get a trace and all its spans](https://docs.overmindlab.ai/api/typescript/resources/traces/methods/retrieve)

client.traces.retrieve(stringtraceID, RequestOptionsoptions?): [TraceRetrieveResponse](https://docs.overmindlab.ai/api/typescript/resources/traces#(resource)%20traces%20%3E%20(model)%20trace_retrieve_response%20%3E%20(schema)) { root, span\_count, spans, trace\_id }

GET/api/traces/{trace\_id}/

##### [List distinct service names visible to the caller](https://docs.overmindlab.ai/api/typescript/resources/traces/methods/list_services)

client.traces.listServices(TraceListServicesParams { agent, duration\_ns\_\_gte, duration\_ns\_\_lte, 22 more } query?, RequestOptionsoptions?): [TraceListServicesResponse](https://docs.overmindlab.ai/api/typescript/resources/traces#(resource)%20traces%20%3E%20(model)%20trace_list_services_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/traces/services/