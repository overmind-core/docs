# Source: https://docs.overmindlab.ai/api/typescript/resources/job_iterations

[API Reference](https://docs.overmindlab.ai/api/typescript)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Job Iterations

##### [List job iterations](https://docs.overmindlab.ai/api/typescript/resources/job_iterations/methods/list)

client.jobIterations.list(JobIterationListParams { iteration\_name, job, ordering, 5 more } query?, RequestOptionsoptions?): [JobIterationListResponse](https://docs.overmindlab.ai/api/typescript/resources/job_iterations#(resource)%20job_iterations%20%3E%20(model)%20job_iteration_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/job-iterations/

##### [Create job iteration](https://docs.overmindlab.ai/api/typescript/resources/job_iterations/methods/create)

client.jobIterations.create(JobIterationCreateParams { iteration\_name, job, agent\_code, 5 more } body, RequestOptionsoptions?): [JobIterationCreateResponse](https://docs.overmindlab.ai/api/typescript/resources/job_iterations#(resource)%20job_iterations%20%3E%20(model)%20job_iteration_create_response%20%3E%20(schema)) { id, created\_at, iteration\_name, 7 more }

POST/api/job-iterations/

##### [Get job iteration](https://docs.overmindlab.ai/api/typescript/resources/job_iterations/methods/retrieve)

client.jobIterations.retrieve(stringid, RequestOptionsoptions?): [JobIterationRetrieveResponse](https://docs.overmindlab.ai/api/typescript/resources/job_iterations#(resource)%20job_iterations%20%3E%20(model)%20job_iteration_retrieve_response%20%3E%20(schema)) { id, created\_at, iteration\_name, 7 more }

GET/api/job-iterations/{id}/

##### [Update job iteration](https://docs.overmindlab.ai/api/typescript/resources/job_iterations/methods/update)

client.jobIterations.update(stringid, JobIterationUpdateParams { agent\_code, avg\_score, description, 5 more } body?, RequestOptionsoptions?): [JobIterationUpdateResponse](https://docs.overmindlab.ai/api/typescript/resources/job_iterations#(resource)%20job_iterations%20%3E%20(model)%20job_iteration_update_response%20%3E%20(schema)) { id, created\_at, iteration\_name, 7 more }

PATCH/api/job-iterations/{id}/

##### [Delete job iteration](https://docs.overmindlab.ai/api/typescript/resources/job_iterations/methods/delete)

client.jobIterations.delete(stringid, RequestOptionsoptions?): void

DELETE/api/job-iterations/{id}/