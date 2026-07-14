# Source: https://docs.overmindlab.ai/api/python/resources/job_iterations/methods/delete

[API Reference](https://docs.overmindlab.ai/api/python)

[Job Iterations](https://docs.overmindlab.ai/api/python/resources/job_iterations)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Delete job iteration

job\_iterations.delete(strid)

DELETE/api/job-iterations/{id}/

Delete job iteration

##### ParametersExpand Collapse

id: str

formatuuid

##### Delete job iteration

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
client.job_iterations.delete(
    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
)
```

##### Returns Examples