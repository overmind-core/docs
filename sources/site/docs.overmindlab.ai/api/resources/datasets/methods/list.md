# Source: https://docs.overmindlab.ai/api/resources/datasets/methods/list

[API Reference](https://docs.overmindlab.ai/api)

[Datasets](https://docs.overmindlab.ai/api/resources/datasets)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List datasets

GET/api/datasets/

CRUD for versioned datasets.

Datapoints are never exposed directly — they can only be read via `GET /api/datasets/{id}/datapoints/` or created as part of `POST /api/datasets/`. To mutate data, POST a new dataset version.

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

results: array of object { id, agent, created\_at, 7 more }

id: string

formatuuid

agent: string

formatuuid

created\_at: string

formatdate-time

generator\_model: string

metadata: unknown

name: string

num\_datapoints: number

policy\_hash: string

source: "seed" or "synthetic" or "augmented" or "production"

- `seed` - Seed
- `synthetic` - Synthetic
- `augmented` - Augmented
- `production` - Production

Accepts one of the following:

"seed"

"synthetic"

"augmented"

"production"

version: number

next: optional string

formaturi

previous: optional string

formaturi

##### List datasets

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/datasets/
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