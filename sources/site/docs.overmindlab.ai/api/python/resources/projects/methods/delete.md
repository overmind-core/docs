# Source: https://docs.overmindlab.ai/api/python/resources/projects/methods/delete

[API Reference](https://docs.overmindlab.ai/api/python)

[Projects](https://docs.overmindlab.ai/api/python/resources/projects)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Delete project

projects.delete(strid)

DELETE/api/projects/{id}/

Delete project

##### ParametersExpand Collapse

id: str

formatuuid

##### Delete project

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
client.projects.delete(
    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
)
```

##### Returns Examples