# Source: https://docs.overmindlab.ai/api/resources/datasets/methods/delete

[API Reference](https://docs.overmindlab.ai/api)

[Datasets](https://docs.overmindlab.ai/api/resources/datasets)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Delete dataset version

DELETE/api/datasets/{id}/

CRUD for versioned datasets.

Datapoints are never exposed directly — they can only be read via `GET /api/datasets/{id}/datapoints/` or created as part of `POST /api/datasets/`. To mutate data, POST a new dataset version.

##### Path ParametersExpand Collapse

id: string

formatuuid

##### Delete dataset version

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/datasets/$ID/ \
    -X DELETE
```

##### Returns Examples