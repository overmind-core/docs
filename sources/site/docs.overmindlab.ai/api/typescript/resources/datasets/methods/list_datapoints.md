# Source: https://docs.overmindlab.ai/api/typescript/resources/datasets/methods/list_datapoints

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Datasets](https://docs.overmindlab.ai/api/typescript/resources/datasets)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List datapoints for a dataset

client.datasets.listDatapoints(stringid, DatasetListDatapointsParams { agent, generator\_model, ordering, 6 more } query?, RequestOptionsoptions?): [DatasetListDatapointsResponse](https://docs.overmindlab.ai/api/typescript/resources/datasets#(resource)%20datasets%20%3E%20(model)%20dataset_list_datapoints_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/datasets/{id}/datapoints/

CRUD for versioned datasets.

Datapoints are never exposed directly — they can only be read via `GET /api/datasets/{id}/datapoints/` or created as part of `POST /api/datasets/`. To mutate data, POST a new dataset version.

##### ParametersExpand Collapse

id: string

formatuuid

query: DatasetListDatapointsParams { agent, generator\_model, ordering, 6 more }

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

DatasetListDatapointsResponse { count, results, next, previous }

count: number

results: Array<Result\>

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

next?: string | null

formaturi

previous?: string | null

formaturi

##### List datapoints for a dataset

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const response = await client.datasets.listDatapoints('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');

console.log(response.count);
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