# Source: https://docs.overmindlab.ai/api/resources/projects/subresources/memberships/methods/remove

[API Reference](https://docs.overmindlab.ai/api)

[Projects](https://docs.overmindlab.ai/api/resources/projects)

[Memberships](https://docs.overmindlab.ai/api/resources/projects/subresources/memberships)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Remove a user from the project

DELETE/api/projects/{project\_id}/memberships/{id}/

Memberships for a single project (nested under `/api/projects/{project_id}/memberships/`).

##### Path ParametersExpand Collapse

project\_id: string

id: string

formatuuid

##### Remove a user from the project

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/projects/$PROJECT_ID/memberships/$ID/ \
    -X DELETE
```

##### Returns Examples