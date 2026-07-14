# Source: https://docs.overmindlab.ai/api/typescript/resources/job_iterations/methods/create

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Job Iterations](https://docs.overmindlab.ai/api/typescript/resources/job_iterations)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Create job iteration

client.jobIterations.create(JobIterationCreateParams { iteration\_name, job, agent\_code, 5 more } body, RequestOptionsoptions?): [JobIterationCreateResponse](https://docs.overmindlab.ai/api/typescript/resources/job_iterations#(resource)%20job_iterations%20%3E%20(model)%20job_iteration_create_response%20%3E%20(schema)) { id, created\_at, iteration\_name, 7 more }

POST/api/job-iterations/

Create job iteration

##### ParametersExpand Collapse

body: JobIterationCreateParams { iteration\_name, job, agent\_code, 5 more }

iteration\_name: string

minLength1

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

##### ReturnsExpand Collapse

JobIterationCreateResponse { id, created\_at, iteration\_name, 7 more }

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

##### Create job iteration

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const jobIteration = await client.jobIterations.create({
  iteration_name: 'x',
  job: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
});

console.log(jobIteration.id);
```

200 example

```
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
```

##### Returns Examples

200 example

```
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
```