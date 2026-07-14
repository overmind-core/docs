# Source: https://docs.overmindlab.ai/api/python/resources/datasets/methods/delete

[API Reference](https://docs.overmindlab.ai/api/python)

[Datasets](https://docs.overmindlab.ai/api/python/resources/datasets)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Delete dataset version

datasets.delete(strid)

DELETE/api/datasets/{id}/

CRUD for versioned datasets.

Datapoints are never exposed directly — they can only be read via `GET /api/datasets/{id}/datapoints/` or created as part of `POST /api/datasets/`. To mutate data, POST a new dataset version.

##### ParametersExpand Collapse

id: str

formatuuid

##### Delete dataset version

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
client.datasets.delete(
    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
)
```

##### Returns Examples