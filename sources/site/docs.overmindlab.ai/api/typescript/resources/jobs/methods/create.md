# Source: https://docs.overmindlab.ai/api/typescript/resources/jobs/methods/create

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Jobs](https://docs.overmindlab.ai/api/typescript/resources/jobs)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Create job

client.jobs.create(JobCreateParams { agent, analyzer\_model, backtest\_results, 15 more } body?, RequestOptionsoptions?): [JobCreateResponse](https://docs.overmindlab.ai/api/typescript/resources/jobs#(resource)%20jobs%20%3E%20(model)%20job_create_response%20%3E%20(schema)) { id, created\_at, iterations, 19 more }

POST/api/jobs/

Create job

##### ParametersExpand Collapse

body: JobCreateParams { agent, analyzer\_model, backtest\_results, 15 more }

agent?: string | null

formatuuid

analyzer\_model?: string

maxLength128

backtest\_results?: unknown

baseline\_score?: number | null

formatdouble

best\_agent\_code?: string

best\_score?: number | null

formatdouble

candidates\_per\_iteration?: number

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

celery\_task\_id?: string

maxLength255

data\_source?: string

minLength1

maxLength20

improvement?: number | null

formatdouble

job\_type?: "inference" | "uploaded\_outputs\_setup" | "judge\_scoring" | 2 more

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

num\_iterations?: number

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

project?: string | null

formatuuid

prompt\_slug?: string

maxLength255

report\_markdown?: string

result?: unknown

status?: "pending" | "running" | "completed" | 2 more

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

triggered\_by?: number | null

##### ReturnsExpand Collapse

JobCreateResponse { id, created\_at, iterations, 19 more }

id: string

formatuuid

created\_at: string

formatdate-time

iterations: Array<Iteration\>

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

updated\_at: string

formatdate-time

agent?: string | null

formatuuid

analyzer\_model?: string

maxLength128

backtest\_results?: unknown

baseline\_score?: number | null

formatdouble

best\_agent\_code?: string

best\_score?: number | null

formatdouble

candidates\_per\_iteration?: number

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

celery\_task\_id?: string

maxLength255

data\_source?: string

maxLength20

improvement?: number | null

formatdouble

job\_type?: "inference" | "uploaded\_outputs\_setup" | "judge\_scoring" | 2 more

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

num\_iterations?: number

maximum9223372036854776000

minimum\-9223372036854776000

formatint64

project?: string | null

formatuuid

prompt\_slug?: string

maxLength255

report\_markdown?: string

result?: unknown

status?: "pending" | "running" | "completed" | 2 more

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

triggered\_by?: number | null

##### Create job

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const job = await client.jobs.create();

console.log(job.id);
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