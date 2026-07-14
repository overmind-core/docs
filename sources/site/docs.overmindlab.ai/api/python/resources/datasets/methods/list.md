# Source: https://docs.overmindlab.ai/api/python/resources/datasets/methods/list

[API Reference](https://docs.overmindlab.ai/api/python)

[Datasets](https://docs.overmindlab.ai/api/python/resources/datasets)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List datasets

datasets.list(DatasetListParams\*\*kwargs) \-> [DatasetListResponse](https://docs.overmindlab.ai/api/python/resources/datasets#(resource)%20datasets%20%3E%20(model)%20dataset_list_response%20%3E%20(schema))

GET/api/datasets/

CRUD for versioned datasets.

Datapoints are never exposed directly — they can only be read via `GET /api/datasets/{id}/datapoints/` or created as part of `POST /api/datasets/`. To mutate data, POST a new dataset version.

##### ParametersExpand Collapse

agent: Optional\[str\]

formatuuid

generator\_model: Optional\[str\]

ordering: Optional\[str\]

Which field to use when ordering the results.

page: Optional\[int\]

A page number within the paginated result set.

search: Optional\[str\]

A search term.

source: Optional\[Literal\["augmented", "production", "seed", "synthetic"\]\]

- `seed` - Seed
- `synthetic` - Synthetic
- `augmented` - Augmented
- `production` - Production

Accepts one of the following:

"augmented"

"production"

"seed"

"synthetic"

version: Optional\[int\]

version\_max: Optional\[int\]

version\_min: Optional\[int\]

##### ReturnsExpand Collapse

class DatasetListResponse: …

count: int

results: List\[Result\]

id: str

formatuuid

agent: str

formatuuid

created\_at: datetime

formatdate-time

generator\_model: str

metadata: object

name: str

num\_datapoints: int

policy\_hash: str

source: Literal\["seed", "synthetic", "augmented", "production"\]

- `seed` - Seed
- `synthetic` - Synthetic
- `augmented` - Augmented
- `production` - Production

Accepts one of the following:

"seed"

"synthetic"

"augmented"

"production"

version: int

next: Optional\[str\]

formaturi

previous: Optional\[str\]

formaturi

##### List datasets

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
datasets = client.datasets.list()
print(datasets.count)
```

200 example

```
{
  "count": 123,
  "results": [
    {
      "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "agent": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "created_at": "2019-12-27T18:11:19.117Z",
      "generator_model": "generator_model",
      "metadata": {},
      "name": "name",
      "num_datapoints": 0,
      "policy_hash": "policy_hash",
      "source": "seed",
      "version": 0
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
      "agent": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "created_at": "2019-12-27T18:11:19.117Z",
      "generator_model": "generator_model",
      "metadata": {},
      "name": "name",
      "num_datapoints": 0,
      "policy_hash": "policy_hash",
      "source": "seed",
      "version": 0
    }
  ],
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2"
}
```