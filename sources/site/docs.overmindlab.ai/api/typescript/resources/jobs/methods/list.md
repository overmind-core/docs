# Source: https://docs.overmindlab.ai/api/typescript/resources/jobs/methods/list

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Jobs](https://docs.overmindlab.ai/api/typescript/resources/jobs)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List jobs

client.jobs.list(JobListParams { agent, analyzer\_model, created\_after, 11 more } query?, RequestOptionsoptions?): [JobListResponse](https://docs.overmindlab.ai/api/typescript/resources/jobs#(resource)%20jobs%20%3E%20(model)%20job_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/jobs/

List jobs

##### ParametersExpand Collapse

query: JobListParams { agent, analyzer\_model, created\_after, 11 more }

agent?: string

formatuuid

analyzer\_model?: string

created\_after?: string

formatdate-time

created\_before?: string

formatdate-time

data\_source?: string

job\_type?: "inference" | "judge\_scoring" | "model\_backtesting" | 2 more

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

ordering?: string

Which field to use when ordering the results.

page?: number

A page number within the paginated result set.

project?: string

formatuuid

prompt\_slug?: string

score\_max?: number

formatfloat

score\_min?: number

formatfloat

search?: string

A search term.

status?: "cancelled" | "completed" | "failed" | 2 more

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

JobListResponse { count, results, next, previous }

count: number

results: Array<Result\>

id: string

formatuuid

created\_at: string

formatdate-time

updated\_at: string

formatdate-time

agent?: string | null

formatuuid

analyzer\_model?: string

maxLength128

baseline\_score?: number | null

formatdouble

best\_score?: number | null

formatdouble

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

next?: string | null

formaturi

previous?: string | null

formaturi

##### List jobs

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const jobs = await client.jobs.list();

console.log(jobs.count);
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