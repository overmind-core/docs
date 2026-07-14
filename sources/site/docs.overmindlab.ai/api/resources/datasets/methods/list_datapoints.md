# Source: https://docs.overmindlab.ai/api/resources/datasets/methods/list_datapoints

[API Reference](https://docs.overmindlab.ai/api)

[Datasets](https://docs.overmindlab.ai/api/resources/datasets)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List datapoints for a dataset

GET/api/datasets/{id}/datapoints/

CRUD for versioned datasets.

Datapoints are never exposed directly — they can only be read via `GET /api/datasets/{id}/datapoints/` or created as part of `POST /api/datasets/`. To mutate data, POST a new dataset version.

##### Path ParametersExpand Collapse

id: string

formatuuid

##### Query ParametersExpand Collapse

agent: optional string

formatuuid

generator\_model: optional string

ordering: optional string

Which field to use when ordering the results.

page: optional number

A page number within the paginated result set.

search: optional string

A search term.

source: optional "augmented" or "production" or "seed" or "synthetic"

- `seed` - Seed
- `synthetic` - Synthetic
- `augmented` - Augmented
- `production` - Production

Accepts one of the following:

"augmented"

"production"

"seed"

"synthetic"

version: optional number

version\_max: optional number

version\_min: optional number

##### ReturnsExpand Collapse

count: number

results: array of object { id, expected\_output, input, 3 more }

id: string

formatuuid

expected\_output: optional unknown

input: optional unknown

order: optional number

maximum9223372036854776000

minimum0

formatint64

persona: optional string

maxLength128

tags: optional unknown

next: optional string

formaturi

previous: optional string

formaturi

##### List datapoints for a dataset

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/datasets/$ID/datapoints/
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