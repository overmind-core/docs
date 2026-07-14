# Source: https://docs.overmindlab.ai/api/python/resources/jobs/methods/update

[API Reference](https://docs.overmindlab.ai/api/python)

[Jobs](https://docs.overmindlab.ai/api/python/resources/jobs)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Update job

jobs.update(strid, JobUpdateParams\*\*kwargs) \-> [JobUpdateResponse](https://docs.overmindlab.ai/api/python/resources/jobs#(resource)%20jobs%20%3E%20(model)%20job_update_response%20%3E%20(schema))

PATCH/api/jobs/{id}/

Update job

##### ParametersExpand Collapse

id: str

formatuuid

agent: Optional\[str\]

formatuuid

analyzer\_model: Optional\[str\]

maxLength128

backtest\_results: Optional\[[object](https://docs.overmindlab.ai/api/python/resources/jobs/methods/update#(resource)%20jobs%20%3E%20(method)%20update%20%3E%20(params)%20default%20%3E%20(param)%20backtest_results%20%3E%20(schema))\]

baseline\_score: Optional\[float\]

formatdouble

best\_agent\_code: Optional\[str\]

best\_score: Optional\[float\]

formatdouble

candidates\_per\_iteration: Optional\[int\]

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

celery\_task\_id: Optional\[str\]

maxLength255

data\_source: Optional\[str\]

minLength1

maxLength20

improvement: Optional\[float\]

formatdouble

job\_type: Optional\[Literal\["inference", "uploaded\_outputs\_setup", "judge\_scoring", 2 more\]\]

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

num\_iterations: Optional\[int\]

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

project: Optional\[str\]

formatuuid

prompt\_slug: Optional\[str\]

maxLength255

report\_markdown: Optional\[str\]

result: Optional\[[object](https://docs.overmindlab.ai/api/python/resources/jobs/methods/update#(resource)%20jobs%20%3E%20(method)%20update%20%3E%20(params)%20default%20%3E%20(param)%20result%20%3E%20(schema))\]

status: Optional\[Literal\["pending", "running", "completed", 2 more\]\]

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

triggered\_by: Optional\[int\]

##### ReturnsExpand Collapse

class JobUpdateResponse: …

id: str

formatuuid

created\_at: datetime

formatdate-time

iterations: List\[Iteration\]

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

updated\_at: datetime

formatdate-time

agent: Optional\[str\]

formatuuid

analyzer\_model: Optional\[str\]

maxLength128

backtest\_results: Optional\[object\]

baseline\_score: Optional\[float\]

formatdouble

best\_agent\_code: Optional\[str\]

best\_score: Optional\[float\]

formatdouble

candidates\_per\_iteration: Optional\[int\]

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

celery\_task\_id: Optional\[str\]

maxLength255

data\_source: Optional\[str\]

maxLength20

improvement: Optional\[float\]

formatdouble

job\_type: Optional\[Literal\["inference", "uploaded\_outputs\_setup", "judge\_scoring", 2 more\]\]

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

num\_iterations: Optional\[int\]

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

project: Optional\[str\]

formatuuid

prompt\_slug: Optional\[str\]

maxLength255

report\_markdown: Optional\[str\]

result: Optional\[object\]

status: Optional\[Literal\["pending", "running", "completed", 2 more\]\]

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

triggered\_by: Optional\[int\]

##### Update job

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
job = client.jobs.update(
    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
)
print(job.id)
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