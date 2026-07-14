# Source: https://docs.overmindlab.ai/api/typescript/resources/job_iterations/methods/list

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Job Iterations](https://docs.overmindlab.ai/api/typescript/resources/job_iterations)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List job iterations

client.jobIterations.list(JobIterationListParams { iteration\_name, job, ordering, 5 more } query?, RequestOptionsoptions?): [JobIterationListResponse](https://docs.overmindlab.ai/api/typescript/resources/job_iterations#(resource)%20job_iterations%20%3E%20(model)%20job_iteration_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/job-iterations/

List job iterations

##### ParametersExpand Collapse

query: JobIterationListParams { iteration\_name, job, ordering, 5 more }

iteration\_name?: string

job?: string

formatuuid

ordering?: string

Which field to use when ordering the results.

page?: number

A page number within the paginated result set.

score\_max?: number

formatfloat

score\_min?: number

formatfloat

search?: string

A search term.

status?: "discard" | "keep"

- `keep` - Keep
- `discard` - Discard

Accepts one of the following:

"discard"

"keep"

##### ReturnsExpand Collapse

JobIterationListResponse { count, results, next, previous }

count: number

results: Array<Result\>

id: string

formatuuid

created\_at: string

formatdate-time

iteration\_name: string

maxLength64

job: string

formatuuid

agent\_code?: string

avg\_score?: number

formatdouble

description?: string

dimension\_scores?: unknown

order?: number

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

status?: "keep" | "discard"

- `keep` - Keep
- `discard` - Discard

Accepts one of the following:

"keep"

"discard"

next?: string | null

formaturi

previous?: string | null

formaturi

##### List job iterations

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const jobIterations = await client.jobIterations.list();

console.log(jobIterations.count);
```

200 example

```
{
  "count": 123,
  "results": [
    {
      "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "created_at": "2019-12-27T18:11:19.117Z",
      "iteration_name": "iteration_name",
      "job": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "agent_code": "agent_code",
      "avg_score": 0,
      "description": "description",
      "dimension_scores": {},
      "order": -9007199254740991,
      "status": "keep"
    }
  ],
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2"
}
```

##### Returns Examples

200 example

```
{
  "count": 123,
  "results": [
    {
      "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "created_at": "2019-12-27T18:11:19.117Z",
      "iteration_name": "iteration_name",
      "job": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "agent_code": "agent_code",
      "avg_score": 0,
      "description": "description",
      "dimension_scores": {},
      "order": -9007199254740991,
      "status": "keep"
    }
  ],
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2"
}
```