# Source: https://docs.overmindlab.ai/api/resources/datasets/methods/retrieve

[API Reference](https://docs.overmindlab.ai/api)

[Datasets](https://docs.overmindlab.ai/api/resources/datasets)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Get dataset (with datapoints)

GET/api/datasets/{id}/

CRUD for versioned datasets.

Datapoints are never exposed directly — they can only be read via `GET /api/datasets/{id}/datapoints/` or created as part of `POST /api/datasets/`. To mutate data, POST a new dataset version.

##### Path ParametersExpand Collapse

id: string

formatuuid

##### ReturnsExpand Collapse

id: string

formatuuid

agent: string

formatuuid

created\_at: string

formatdate-time

datapoints: array of object { id, expected\_output, input, 3 more }

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

num\_datapoints: number

version: number

generator\_model: optional string

maxLength128

metadata: optional unknown

name: optional string

maxLength255

policy\_hash: optional string

maxLength64

source: optional "seed" or "synthetic" or "augmented" or "production"

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

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/datasets/$ID/
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