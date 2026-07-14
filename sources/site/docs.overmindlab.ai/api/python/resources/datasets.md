# Source: https://docs.overmindlab.ai/api/python/resources/datasets

[API Reference](https://docs.overmindlab.ai/api/python)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Datasets

##### [List datasets](https://docs.overmindlab.ai/api/python/resources/datasets/methods/list)

datasets.list(DatasetListParams\*\*kwargs) \-> [DatasetListResponse](https://docs.overmindlab.ai/api/python/resources/datasets#(resource)%20datasets%20%3E%20(model)%20dataset_list_response%20%3E%20(schema))

GET/api/datasets/

##### [Create dataset (auto-increments version per agent)](https://docs.overmindlab.ai/api/python/resources/datasets/methods/create)

datasets.create(DatasetCreateParams\*\*kwargs) \-> [DatasetCreateResponse](https://docs.overmindlab.ai/api/python/resources/datasets#(resource)%20datasets%20%3E%20(model)%20dataset_create_response%20%3E%20(schema))

POST/api/datasets/

##### [Get dataset (with datapoints)](https://docs.overmindlab.ai/api/python/resources/datasets/methods/retrieve)

datasets.retrieve(strid) \-> [DatasetRetrieveResponse](https://docs.overmindlab.ai/api/python/resources/datasets#(resource)%20datasets%20%3E%20(model)%20dataset_retrieve_response%20%3E%20(schema))

GET/api/datasets/{id}/

##### [Delete dataset version](https://docs.overmindlab.ai/api/python/resources/datasets/methods/delete)

datasets.delete(strid)

DELETE/api/datasets/{id}/

##### [Activate dataset](https://docs.overmindlab.ai/api/python/resources/datasets/methods/activate)

datasets.activate(strid) \-> [DatasetActivateResponse](https://docs.overmindlab.ai/api/python/resources/datasets#(resource)%20datasets%20%3E%20(model)%20dataset_activate_response%20%3E%20(schema))

POST/api/datasets/{id}/activate/

##### [List datapoints for a dataset](https://docs.overmindlab.ai/api/python/resources/datasets/methods/list_datapoints)

datasets.list\_datapoints(strid, DatasetListDatapointsParams\*\*kwargs) \-> [DatasetListDatapointsResponse](https://docs.overmindlab.ai/api/python/resources/datasets#(resource)%20datasets%20%3E%20(model)%20dataset_list_datapoints_response%20%3E%20(schema))

GET/api/datasets/{id}/datapoints/