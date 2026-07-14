# Source: https://docs.overmindlab.ai/api/python/resources/datasets/methods/list_datapoints

[API Reference](https://docs.overmindlab.ai/api/python)

[Datasets](https://docs.overmindlab.ai/api/python/resources/datasets)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List datapoints for a dataset

datasets.list\_datapoints(strid, DatasetListDatapointsParams\*\*kwargs) \-> [DatasetListDatapointsResponse](https://docs.overmindlab.ai/api/python/resources/datasets#(resource)%20datasets%20%3E%20(model)%20dataset_list_datapoints_response%20%3E%20(schema))

GET/api/datasets/{id}/datapoints/

CRUD for versioned datasets.

Datapoints are never exposed directly — they can only be read via `GET /api/datasets/{id}/datapoints/` or created as part of `POST /api/datasets/`. To mutate data, POST a new dataset version.

##### ParametersExpand Collapse

id: str

formatuuid

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

class DatasetListDatapointsResponse: …

count: int

results: List\[Result\]

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

next: Optional\[str\]

formaturi

previous: Optional\[str\]

formaturi

##### List datapoints for a dataset

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
response = client.datasets.list_datapoints(
    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
)
print(response.count)
```

200 example

```
{
  "count": 123,
  "results": [
    {
      "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "expected_output": {},
      "input": {},
      "order": 0,
      "persona": "persona",
      "tags": {}
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
      "expected_output": {},
      "input": {},
      "order": 0,
      "persona": "persona",
      "tags": {}
    }
  ],
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2"
}
```