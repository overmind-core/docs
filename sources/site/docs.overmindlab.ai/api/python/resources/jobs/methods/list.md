# Source: https://docs.overmindlab.ai/api/python/resources/jobs/methods/list

[API Reference](https://docs.overmindlab.ai/api/python)

[Jobs](https://docs.overmindlab.ai/api/python/resources/jobs)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List jobs

jobs.list(JobListParams\*\*kwargs) \-> [JobListResponse](https://docs.overmindlab.ai/api/python/resources/jobs#(resource)%20jobs%20%3E%20(model)%20job_list_response%20%3E%20(schema))

GET/api/jobs/

List jobs

##### ParametersExpand Collapse

agent: Optional\[str\]

formatuuid

analyzer\_model: Optional\[str\]

created\_after: Optional\[Union\[str, datetime\]\]

formatdate-time

created\_before: Optional\[Union\[str, datetime\]\]

formatdate-time

data\_source: Optional\[str\]

job\_type: Optional\[Literal\["inference", "judge\_scoring", "model\_backtesting", 2 more\]\]

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

ordering: Optional\[str\]

Which field to use when ordering the results.

page: Optional\[int\]

A page number within the paginated result set.

project: Optional\[str\]

formatuuid

prompt\_slug: Optional\[str\]

score\_max: Optional\[float\]

formatfloat

score\_min: Optional\[float\]

formatfloat

search: Optional\[str\]

A search term.

status: Optional\[Literal\["cancelled", "completed", "failed", 2 more\]\]

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

class JobListResponse: …

count: int

results: List\[Result\]

id: str

formatuuid

created\_at: datetime

formatdate-time

updated\_at: datetime

formatdate-time

agent: Optional\[str\]

formatuuid

analyzer\_model: Optional\[str\]

maxLength128

baseline\_score: Optional\[float\]

formatdouble

best\_score: Optional\[float\]

formatdouble

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

next: Optional\[str\]

formaturi

previous: Optional\[str\]

formaturi

##### List jobs

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
jobs = client.jobs.list()
print(jobs.count)
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