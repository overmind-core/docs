# Source: https://docs.overmindlab.ai/api/resources/job_iterations/methods/update

[API Reference](https://docs.overmindlab.ai/api)

[Job Iterations](https://docs.overmindlab.ai/api/resources/job_iterations)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Update job iteration

PATCH/api/job-iterations/{id}/

Update job iteration

##### Path ParametersExpand Collapse

id: string

formatuuid

##### Body ParametersExpand Collapse

agent\_code: optional string

avg\_score: optional number

formatdouble

description: optional string

dimension\_scores: optional unknown

iteration\_name: optional string

minLength1

maxLength64

job: optional string

formatuuid

order: optional number

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

status: optional "keep" or "discard"

- `keep` - Keep
- `discard` - Discard

Accepts one of the following:

"keep"

"discard"

##### ReturnsExpand Collapse

id: string

formatuuid

created\_at: string

formatdate-time

iteration\_name: string

maxLength64

job: string

formatuuid

agent\_code: optional string

avg\_score: optional number

formatdouble

description: optional string

dimension\_scores: optional unknown

order: optional number

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

status: optional "keep" or "discard"

- `keep` - Keep
- `discard` - Discard

Accepts one of the following:

"keep"

"discard"

##### Update job iteration

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/job-iterations/$ID/ \
    -X PATCH
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