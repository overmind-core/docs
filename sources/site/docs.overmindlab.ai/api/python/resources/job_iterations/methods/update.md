# Source: https://docs.overmindlab.ai/api/python/resources/job_iterations/methods/update

[API Reference](https://docs.overmindlab.ai/api/python)

[Job Iterations](https://docs.overmindlab.ai/api/python/resources/job_iterations)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Update job iteration

job\_iterations.update(strid, JobIterationUpdateParams\*\*kwargs) \-> [JobIterationUpdateResponse](https://docs.overmindlab.ai/api/python/resources/job_iterations#(resource)%20job_iterations%20%3E%20(model)%20job_iteration_update_response%20%3E%20(schema))

PATCH/api/job-iterations/{id}/

Update job iteration

##### ParametersExpand Collapse

id: str

formatuuid

agent\_code: Optional\[str\]

avg\_score: Optional\[float\]

formatdouble

description: Optional\[str\]

dimension\_scores: Optional\[[object](https://docs.overmindlab.ai/api/python/resources/job_iterations/methods/update#(resource)%20job_iterations%20%3E%20(method)%20update%20%3E%20(params)%20default%20%3E%20(param)%20dimension_scores%20%3E%20(schema))\]

iteration\_name: Optional\[str\]

minLength1

maxLength64

job: Optional\[str\]

formatuuid

order: Optional\[int\]

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

status: Optional\[Literal\["keep", "discard"\]\]

- `keep` - Keep
- `discard` - Discard

Accepts one of the following:

"keep"

"discard"

##### ReturnsExpand Collapse

class JobIterationUpdateResponse: …

id: str

formatuuid

created\_at: datetime

formatdate-time

iteration\_name: str

maxLength64

job: str

formatuuid

agent\_code: Optional\[str\]

avg\_score: Optional\[float\]

formatdouble

description: Optional\[str\]

dimension\_scores: Optional\[object\]

order: Optional\[int\]

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

status: Optional\[Literal\["keep", "discard"\]\]

- `keep` - Keep
- `discard` - Discard

Accepts one of the following:

"keep"

"discard"

##### Update job iteration

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
job_iteration = client.job_iterations.update(
    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
)
print(job_iteration.id)
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