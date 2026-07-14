# Source: https://docs.overmindlab.ai/api/typescript/resources/datasets/methods/retrieve

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Datasets](https://docs.overmindlab.ai/api/typescript/resources/datasets)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Get dataset (with datapoints)

client.datasets.retrieve(stringid, RequestOptionsoptions?): [DatasetRetrieveResponse](https://docs.overmindlab.ai/api/typescript/resources/datasets#(resource)%20datasets%20%3E%20(model)%20dataset_retrieve_response%20%3E%20(schema)) { id, agent, created\_at, 8 more }

GET/api/datasets/{id}/

CRUD for versioned datasets.

Datapoints are never exposed directly — they can only be read via `GET /api/datasets/{id}/datapoints/` or created as part of `POST /api/datasets/`. To mutate data, POST a new dataset version.

##### ParametersExpand Collapse

id: string

formatuuid

##### ReturnsExpand Collapse

DatasetRetrieveResponse { id, agent, created\_at, 8 more }

id: string

formatuuid

agent: string

formatuuid

created\_at: string

formatdate-time

datapoints: Array<Datapoint\>

id: string

formatuuid

expected\_output?: unknown

input?: unknown

order?: number

maximum9223372036854776000

minimum0

formatint64

persona?: string

maxLength128

tags?: unknown

num\_datapoints: number

version: number

generator\_model?: string

maxLength128

metadata?: unknown

name?: string

maxLength255

policy\_hash?: string

maxLength64

source?: "seed" | "synthetic" | "augmented" | "production"

- `seed` - Seed
- `synthetic` - Synthetic
- `augmented` - Augmented
- `production` - Production

Accepts one of the following:

"seed"

"synthetic"

"augmented"

"production"

##### Get dataset (with datapoints)

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const dataset = await client.datasets.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');

console.log(dataset.id);
```

200 example

```
{
  "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "agent": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "created_at": "2019-12-27T18:11:19.117Z",
  "datapoints": [
    {
      "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "expected_output": {},
      "input": {},
      "order": 0,
      "persona": "persona",
      "tags": {}
    }
  ],
  "num_datapoints": 0,
  "version": 0,
  "generator_model": "generator_model",
  "metadata": {},
  "name": "name",
  "policy_hash": "policy_hash",
  "source": "seed"
}
```

##### Returns Examples

200 example

```
{
  "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "agent": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "created_at": "2019-12-27T18:11:19.117Z",
  "datapoints": [
    {
      "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "expected_output": {},
      "input": {},
      "order": 0,
      "persona": "persona",
      "tags": {}
    }
  ],
  "num_datapoints": 0,
  "version": 0,
  "generator_model": "generator_model",
  "metadata": {},
  "name": "name",
  "policy_hash": "policy_hash",
  "source": "seed"
}
```