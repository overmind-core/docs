# Source: https://docs.overmindlab.ai/api/python/resources/jobs

[API Reference](https://docs.overmindlab.ai/api/python)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Jobs

##### [List jobs](https://docs.overmindlab.ai/api/python/resources/jobs/methods/list)

jobs.list(JobListParams\*\*kwargs) \-> [JobListResponse](https://docs.overmindlab.ai/api/python/resources/jobs#(resource)%20jobs%20%3E%20(model)%20job_list_response%20%3E%20(schema))

GET/api/jobs/

##### [Create job](https://docs.overmindlab.ai/api/python/resources/jobs/methods/create)

jobs.create(JobCreateParams\*\*kwargs) \-> [JobCreateResponse](https://docs.overmindlab.ai/api/python/resources/jobs#(resource)%20jobs%20%3E%20(model)%20job_create_response%20%3E%20(schema))

POST/api/jobs/

##### [Get job (with iterations)](https://docs.overmindlab.ai/api/python/resources/jobs/methods/retrieve)

jobs.retrieve(strid) \-> [JobRetrieveResponse](https://docs.overmindlab.ai/api/python/resources/jobs#(resource)%20jobs%20%3E%20(model)%20job_retrieve_response%20%3E%20(schema))

GET/api/jobs/{id}/

##### [Update job](https://docs.overmindlab.ai/api/python/resources/jobs/methods/update)

jobs.update(strid, JobUpdateParams\*\*kwargs) \-> [JobUpdateResponse](https://docs.overmindlab.ai/api/python/resources/jobs#(resource)%20jobs%20%3E%20(model)%20job_update_response%20%3E%20(schema))

PATCH/api/jobs/{id}/

##### [Delete job](https://docs.overmindlab.ai/api/python/resources/jobs/methods/delete)

jobs.delete(strid)

DELETE/api/jobs/{id}/