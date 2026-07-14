# Source: https://docs.overmindlab.ai/api/python/resources/agents/methods/delete

[API Reference](https://docs.overmindlab.ai/api/python)

[Agents](https://docs.overmindlab.ai/api/python/resources/agents)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Soft-delete agent

agents.delete(strid)

DELETE/api/agents/{id}/

Soft-delete agent

##### ParametersExpand Collapse

id: str

formatuuid

##### Soft-delete agent

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
client.agents.delete(
    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
)
```

##### Returns Examples