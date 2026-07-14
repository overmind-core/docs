# Source: https://docs.overmindlab.ai/api/resources/jobs/methods/retrieve

[API Reference](https://docs.overmindlab.ai/api)

[Jobs](https://docs.overmindlab.ai/api/resources/jobs)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Get job (with iterations)

GET/api/jobs/{id}/

Get job (with iterations)

##### Path ParametersExpand Collapse

id: string

formatuuid

##### ReturnsExpand Collapse

id: string

formatuuid

created\_at: string

formatdate-time

iterations: array of object { id, created\_at, iteration\_name, 7 more }

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

updated\_at: string

formatdate-time

agent: optional string

formatuuid

analyzer\_model: optional string

maxLength128

backtest\_results: optional unknown

baseline\_score: optional number

formatdouble

best\_agent\_code: optional string

best\_score: optional number

formatdouble

candidates\_per\_iteration: optional number

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

celery\_task\_id: optional string

maxLength255

data\_source: optional string

maxLength20

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

report\_markdown: optional string

result: optional unknown

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

triggered\_by: optional number

##### Get job (with iterations)

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/jobs/$ID/
```

200 example

```
{
  "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "created_at": "2019-12-27T18:11:19.117Z",
  "iterations": [
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
  "updated_at": "2019-12-27T18:11:19.117Z",
  "agent": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "analyzer_model": "analyzer_model",
  "backtest_results": {},
  "baseline_score": 0,
  "best_agent_code": "best_agent_code",
  "best_score": 0,
  "candidates_per_iteration": -9007199254740991,
  "celery_task_id": "celery_task_id",
  "data_source": "data_source",
  "improvement": 0,
  "job_type": "inference",
  "num_iterations": -9007199254740991,
  "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "prompt_slug": "prompt_slug",
  "report_markdown": "report_markdown",
  "result": {},
  "status": "pending",
  "triggered_by": 0
}
```

##### Returns Examples

200 example

```
{
  "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "created_at": "2019-12-27T18:11:19.117Z",
  "iterations": [
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
  "updated_at": "2019-12-27T18:11:19.117Z",
  "agent": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "analyzer_model": "analyzer_model",
  "backtest_results": {},
  "baseline_score": 0,
  "best_agent_code": "best_agent_code",
  "best_score": 0,
  "candidates_per_iteration": -9007199254740991,
  "celery_task_id": "celery_task_id",
  "data_source": "data_source",
  "improvement": 0,
  "job_type": "inference",
  "num_iterations": -9007199254740991,
  "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "prompt_slug": "prompt_slug",
  "report_markdown": "report_markdown",
  "result": {},
  "status": "pending",
  "triggered_by": 0
}
```