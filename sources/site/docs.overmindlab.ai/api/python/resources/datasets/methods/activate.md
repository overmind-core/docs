# Source: https://docs.overmindlab.ai/api/python/resources/datasets/methods/activate

[API Reference](https://docs.overmindlab.ai/api/python)

[Datasets](https://docs.overmindlab.ai/api/python/resources/datasets)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Activate dataset

datasets.activate(strid) \-> [DatasetActivateResponse](https://docs.overmindlab.ai/api/python/resources/datasets#(resource)%20datasets%20%3E%20(model)%20dataset_activate_response%20%3E%20(schema))

POST/api/datasets/{id}/activate/

Point the owning agent's `active_dataset` at this dataset.

##### ParametersExpand Collapse

id: str

formatuuid

##### ReturnsExpand Collapse

class DatasetActivateResponse: …

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

##### Activate dataset

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
response = client.datasets.activate(
    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
)
print(response.id)
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