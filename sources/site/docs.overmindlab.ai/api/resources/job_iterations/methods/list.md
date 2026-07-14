# Source: https://docs.overmindlab.ai/api/resources/job_iterations/methods/list

[API Reference](https://docs.overmindlab.ai/api)

[Job Iterations](https://docs.overmindlab.ai/api/resources/job_iterations)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List job iterations

GET/api/job-iterations/

List job iterations

##### Query ParametersExpand Collapse

iteration\_name: optional string

job: optional string

formatuuid

ordering: optional string

Which field to use when ordering the results.

page: optional number

A page number within the paginated result set.

score\_max: optional number

formatfloat

score\_min: optional number

formatfloat

search: optional string

A search term.

status: optional "discard" or "keep"

- `keep` - Keep
- `discard` - Discard

Accepts one of the following:

"discard"

"keep"

##### ReturnsExpand Collapse

count: number

results: array of object { id, created\_at, iteration\_name, 7 more }

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

next: optional string

formaturi

previous: optional string

formaturi

##### List job iterations

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/job-iterations/
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