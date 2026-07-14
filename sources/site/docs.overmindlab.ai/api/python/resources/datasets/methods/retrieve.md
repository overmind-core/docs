# Source: https://docs.overmindlab.ai/api/python/resources/datasets/methods/retrieve

[API Reference](https://docs.overmindlab.ai/api/python)

[Datasets](https://docs.overmindlab.ai/api/python/resources/datasets)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Get dataset (with datapoints)

datasets.retrieve(strid) \-> [DatasetRetrieveResponse](https://docs.overmindlab.ai/api/python/resources/datasets#(resource)%20datasets%20%3E%20(model)%20dataset_retrieve_response%20%3E%20(schema))

GET/api/datasets/{id}/

CRUD for versioned datasets.

Datapoints are never exposed directly — they can only be read via `GET /api/datasets/{id}/datapoints/` or created as part of `POST /api/datasets/`. To mutate data, POST a new dataset version.

##### ParametersExpand Collapse

id: str

formatuuid

##### ReturnsExpand Collapse

class DatasetRetrieveResponse: …

id: str

formatuuid

agent: str

formatuuid

created\_at: datetime

formatdate-time

datapoints: List\[Datapoint\]

id: str

formatuuid

expected\_output: Optional\[object\]

input: Optional\[object\]

order: Optional\[int\]

maximum9223372036854776000

minimum0

formatint64

persona: Optional\[str\]

maxLength128

tags: Optional\[object\]

num\_datapoints: int

version: int

generator\_model: Optional\[str\]

maxLength128

metadata: Optional\[object\]

name: Optional\[str\]

maxLength255

policy\_hash: Optional\[str\]

maxLength64

source: Optional\[Literal\["seed", "synthetic", "augmented", "production"\]\]

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

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
dataset = client.datasets.retrieve(
    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
)
print(dataset.id)
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