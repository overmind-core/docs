# Source: https://docs.overmindlab.ai/api/python/resources/jobs/methods/delete

[API Reference](https://docs.overmindlab.ai/api/python)

[Jobs](https://docs.overmindlab.ai/api/python/resources/jobs)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Delete job

jobs.delete(strid)

DELETE/api/jobs/{id}/

Delete job

##### ParametersExpand Collapse

id: str

formatuuid

##### Delete job

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
client.jobs.delete(
    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
)
```

##### Returns Examples