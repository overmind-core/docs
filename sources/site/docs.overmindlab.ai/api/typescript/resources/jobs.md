# Source: https://docs.overmindlab.ai/api/typescript/resources/jobs

[API Reference](https://docs.overmindlab.ai/api/typescript)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Jobs

##### [List jobs](https://docs.overmindlab.ai/api/typescript/resources/jobs/methods/list)

client.jobs.list(JobListParams { agent, analyzer\_model, created\_after, 11 more } query?, RequestOptionsoptions?): [JobListResponse](https://docs.overmindlab.ai/api/typescript/resources/jobs#(resource)%20jobs%20%3E%20(model)%20job_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/jobs/

##### [Create job](https://docs.overmindlab.ai/api/typescript/resources/jobs/methods/create)

client.jobs.create(JobCreateParams { agent, analyzer\_model, backtest\_results, 15 more } body?, RequestOptionsoptions?): [JobCreateResponse](https://docs.overmindlab.ai/api/typescript/resources/jobs#(resource)%20jobs%20%3E%20(model)%20job_create_response%20%3E%20(schema)) { id, created\_at, iterations, 19 more }

POST/api/jobs/

##### [Get job (with iterations)](https://docs.overmindlab.ai/api/typescript/resources/jobs/methods/retrieve)

client.jobs.retrieve(stringid, RequestOptionsoptions?): [JobRetrieveResponse](https://docs.overmindlab.ai/api/typescript/resources/jobs#(resource)%20jobs%20%3E%20(model)%20job_retrieve_response%20%3E%20(schema)) { id, created\_at, iterations, 19 more }

GET/api/jobs/{id}/

##### [Update job](https://docs.overmindlab.ai/api/typescript/resources/jobs/methods/update)

client.jobs.update(stringid, JobUpdateParams { agent, analyzer\_model, backtest\_results, 15 more } body?, RequestOptionsoptions?): [JobUpdateResponse](https://docs.overmindlab.ai/api/typescript/resources/jobs#(resource)%20jobs%20%3E%20(model)%20job_update_response%20%3E%20(schema)) { id, created\_at, iterations, 19 more }

PATCH/api/jobs/{id}/

##### [Delete job](https://docs.overmindlab.ai/api/typescript/resources/jobs/methods/delete)

client.jobs.delete(stringid, RequestOptionsoptions?): void

DELETE/api/jobs/{id}/