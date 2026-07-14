# Source: https://docs.overmindlab.ai/api/python/resources/job_iterations

[API Reference](https://docs.overmindlab.ai/api/python)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Job Iterations

##### [List job iterations](https://docs.overmindlab.ai/api/python/resources/job_iterations/methods/list)

job\_iterations.list(JobIterationListParams\*\*kwargs) \-> [JobIterationListResponse](https://docs.overmindlab.ai/api/python/resources/job_iterations#(resource)%20job_iterations%20%3E%20(model)%20job_iteration_list_response%20%3E%20(schema))

GET/api/job-iterations/

##### [Create job iteration](https://docs.overmindlab.ai/api/python/resources/job_iterations/methods/create)

job\_iterations.create(JobIterationCreateParams\*\*kwargs) \-> [JobIterationCreateResponse](https://docs.overmindlab.ai/api/python/resources/job_iterations#(resource)%20job_iterations%20%3E%20(model)%20job_iteration_create_response%20%3E%20(schema))

POST/api/job-iterations/

##### [Get job iteration](https://docs.overmindlab.ai/api/python/resources/job_iterations/methods/retrieve)

job\_iterations.retrieve(strid) \-> [JobIterationRetrieveResponse](https://docs.overmindlab.ai/api/python/resources/job_iterations#(resource)%20job_iterations%20%3E%20(model)%20job_iteration_retrieve_response%20%3E%20(schema))

GET/api/job-iterations/{id}/

##### [Update job iteration](https://docs.overmindlab.ai/api/python/resources/job_iterations/methods/update)

job\_iterations.update(strid, JobIterationUpdateParams\*\*kwargs) \-> [JobIterationUpdateResponse](https://docs.overmindlab.ai/api/python/resources/job_iterations#(resource)%20job_iterations%20%3E%20(model)%20job_iteration_update_response%20%3E%20(schema))

PATCH/api/job-iterations/{id}/

##### [Delete job iteration](https://docs.overmindlab.ai/api/python/resources/job_iterations/methods/delete)

job\_iterations.delete(strid)

DELETE/api/job-iterations/{id}/