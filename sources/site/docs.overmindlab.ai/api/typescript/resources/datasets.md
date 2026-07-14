# Source: https://docs.overmindlab.ai/api/typescript/resources/datasets

[API Reference](https://docs.overmindlab.ai/api/typescript)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Datasets

##### [List datasets](https://docs.overmindlab.ai/api/typescript/resources/datasets/methods/list)

client.datasets.list(DatasetListParams { agent, generator\_model, ordering, 6 more } query?, RequestOptionsoptions?): [DatasetListResponse](https://docs.overmindlab.ai/api/typescript/resources/datasets#(resource)%20datasets%20%3E%20(model)%20dataset_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/datasets/

##### [Create dataset (auto-increments version per agent)](https://docs.overmindlab.ai/api/typescript/resources/datasets/methods/create)

client.datasets.create(DatasetCreateParams { agent, datapoints, generator\_model, 5 more } body, RequestOptionsoptions?): [DatasetCreateResponse](https://docs.overmindlab.ai/api/typescript/resources/datasets#(resource)%20datasets%20%3E%20(model)%20dataset_create_response%20%3E%20(schema)) { id, agent, created\_at, 8 more }

POST/api/datasets/

##### [Get dataset (with datapoints)](https://docs.overmindlab.ai/api/typescript/resources/datasets/methods/retrieve)

client.datasets.retrieve(stringid, RequestOptionsoptions?): [DatasetRetrieveResponse](https://docs.overmindlab.ai/api/typescript/resources/datasets#(resource)%20datasets%20%3E%20(model)%20dataset_retrieve_response%20%3E%20(schema)) { id, agent, created\_at, 8 more }

GET/api/datasets/{id}/

##### [Delete dataset version](https://docs.overmindlab.ai/api/typescript/resources/datasets/methods/delete)

client.datasets.delete(stringid, RequestOptionsoptions?): void

DELETE/api/datasets/{id}/

##### [Activate dataset](https://docs.overmindlab.ai/api/typescript/resources/datasets/methods/activate)

client.datasets.activate(stringid, RequestOptionsoptions?): [DatasetActivateResponse](https://docs.overmindlab.ai/api/typescript/resources/datasets#(resource)%20datasets%20%3E%20(model)%20dataset_activate_response%20%3E%20(schema)) { id, agent, created\_at, 8 more }

POST/api/datasets/{id}/activate/

##### [List datapoints for a dataset](https://docs.overmindlab.ai/api/typescript/resources/datasets/methods/list_datapoints)

client.datasets.listDatapoints(stringid, DatasetListDatapointsParams { agent, generator\_model, ordering, 6 more } query?, RequestOptionsoptions?): [DatasetListDatapointsResponse](https://docs.overmindlab.ai/api/typescript/resources/datasets#(resource)%20datasets%20%3E%20(model)%20dataset_list_datapoints_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/datasets/{id}/datapoints/