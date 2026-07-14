# Source: https://docs.overmindlab.ai/api/typescript/resources/datasets/methods/delete

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Datasets](https://docs.overmindlab.ai/api/typescript/resources/datasets)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Delete dataset version

client.datasets.delete(stringid, RequestOptionsoptions?): void

DELETE/api/datasets/{id}/

CRUD for versioned datasets.

Datapoints are never exposed directly — they can only be read via `GET /api/datasets/{id}/datapoints/` or created as part of `POST /api/datasets/`. To mutate data, POST a new dataset version.

##### ParametersExpand Collapse

id: string

formatuuid

##### Delete dataset version

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

await client.datasets.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
```

##### Returns Examples