# Source: https://docs.overmindlab.ai/api/typescript/resources/datasets/methods/list

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Datasets](https://docs.overmindlab.ai/api/typescript/resources/datasets)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List datasets

client.datasets.list(DatasetListParams { agent, generator\_model, ordering, 6 more } query?, RequestOptionsoptions?): [DatasetListResponse](https://docs.overmindlab.ai/api/typescript/resources/datasets#(resource)%20datasets%20%3E%20(model)%20dataset_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/datasets/

CRUD for versioned datasets.

Datapoints are never exposed directly — they can only be read via `GET /api/datasets/{id}/datapoints/` or created as part of `POST /api/datasets/`. To mutate data, POST a new dataset version.

##### ParametersExpand Collapse

query: DatasetListParams { agent, generator\_model, ordering, 6 more }

agent?: string

formatuuid

generator\_model?: string

ordering?: string

Which field to use when ordering the results.

page?: number

A page number within the paginated result set.

search?: string

A search term.

source?: "augmented" | "production" | "seed" | "synthetic"

- `seed` - Seed
- `synthetic` - Synthetic
- `augmented` - Augmented
- `production` - Production

Accepts one of the following:

"augmented"

"production"

"seed"

"synthetic"

version?: number

version\_max?: number

version\_min?: number

##### ReturnsExpand Collapse

DatasetListResponse { count, results, next, previous }

count: number

results: Array<Result\>

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

source: "seed" | "synthetic" | "augmented" | "production"

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

next?: string | null

formaturi

previous?: string | null

formaturi

##### List datasets

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const datasets = await client.datasets.list();

console.log(datasets.count);
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