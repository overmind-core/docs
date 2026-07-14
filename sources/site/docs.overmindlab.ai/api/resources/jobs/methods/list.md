# Source: https://docs.overmindlab.ai/api/resources/jobs/methods/list

[API Reference](https://docs.overmindlab.ai/api)

[Jobs](https://docs.overmindlab.ai/api/resources/jobs)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List jobs

GET/api/jobs/

List jobs

##### Query ParametersExpand Collapse

agent: optional string

formatuuid

analyzer\_model: optional string

created\_after: optional string

formatdate-time

created\_before: optional string

formatdate-time

data\_source: optional string

job\_type: optional "inference" or "judge\_scoring" or "model\_backtesting" or 2 more

- `inference` - Inference
- `uploaded_outputs_setup` - Uploaded Outputs Setup
- `judge_scoring` - Judge Scoring
- `prompt_tuning` - Prompt Tuning
- `model_backtesting` - Model Backtesting

Accepts one of the following:

"inference"

"judge\_scoring"

"model\_backtesting"

"prompt\_tuning"

"uploaded\_outputs\_setup"

ordering: optional string

Which field to use when ordering the results.

page: optional number

A page number within the paginated result set.

project: optional string

formatuuid

prompt\_slug: optional string

score\_max: optional number

formatfloat

score\_min: optional number

formatfloat

search: optional string

A search term.

status: optional "cancelled" or "completed" or "failed" or 2 more

- `pending` - Pending
- `running` - Running
- `completed` - Completed
- `failed` - Failed
- `cancelled` - Cancelled

Accepts one of the following:

"cancelled"

"completed"

"failed"

"pending"

"running"

##### ReturnsExpand Collapse

count: number

results: array of object { id, created\_at, updated\_at, 10 more }

id: string

formatuuid

created\_at: string

formatdate-time

updated\_at: string

formatdate-time

agent: optional string

formatuuid

analyzer\_model: optional string

maxLength128

baseline\_score: optional number

formatdouble

best\_score: optional number

formatdouble

improvement: optional number

formatdouble

job\_type: optional "inference" or "uploaded\_outputs\_setup" or "judge\_scoring" or 2 more

- `inference` - Inference
- `uploaded_outputs_setup` - Uploaded Outputs Setup
- `judge_scoring` - Judge Scoring
- `prompt_tuning` - Prompt Tuning
- `model_backtesting` - Model Backtesting

Accepts one of the following:

"inference"

"uploaded\_outputs\_setup"

"judge\_scoring"

"prompt\_tuning"

"model\_backtesting"

num\_iterations: optional number

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

project: optional string

formatuuid

prompt\_slug: optional string

maxLength255

status: optional "pending" or "running" or "completed" or 2 more

- `pending` - Pending
- `running` - Running
- `completed` - Completed
- `failed` - Failed
- `cancelled` - Cancelled

Accepts one of the following:

"pending"

"running"

"completed"

"failed"

"cancelled"

next: optional string

formaturi

previous: optional string

formaturi

##### List jobs

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/jobs/
```

200 example

```
{
  "count": 123,
  "results": [
    {
      "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "created_at": "2019-12-27T18:11:19.117Z",
      "updated_at": "2019-12-27T18:11:19.117Z",
      "agent": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "analyzer_model": "analyzer_model",
      "baseline_score": 0,
      "best_score": 0,
      "improvement": 0,
      "job_type": "inference",
      "num_iterations": -9007199254740991,
      "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "prompt_slug": "prompt_slug",
      "status": "pending"
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
      "updated_at": "2019-12-27T18:11:19.117Z",
      "agent": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "analyzer_model": "analyzer_model",
      "baseline_score": 0,
      "best_score": 0,
      "improvement": 0,
      "job_type": "inference",
      "num_iterations": -9007199254740991,
      "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "prompt_slug": "prompt_slug",
      "status": "pending"
    }
  ],
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2"
}
```