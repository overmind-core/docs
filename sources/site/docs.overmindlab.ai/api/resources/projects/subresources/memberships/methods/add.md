# Source: https://docs.overmindlab.ai/api/resources/projects/subresources/memberships/methods/add

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

# Add a user to the project

POST/api/projects/{project\_id}/memberships/

Memberships for a single project (nested under `/api/projects/{project_id}/memberships/`).

##### Path ParametersExpand Collapse

project\_id: string

##### Body ParametersExpand Collapse

user\_id: number

##### ReturnsExpand Collapse

id: string

formatuuid

created\_at: string

formatdate-time

project: string

formatuuid

updated\_at: string

formatdate-time

user: number

user\_email: string

formatemail

##### Add a user to the project

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/projects/$PROJECT_ID/memberships/ \
    -H 'Content-Type: application/json' \
    -d '{
          "user_id": 0
        }'
```

200 example

```
{
  "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "created_at": "2019-12-27T18:11:19.117Z",
  "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "updated_at": "2019-12-27T18:11:19.117Z",
  "user": 0,
  "user_email": "dev@stainless.com"
}
```

##### Returns Examples

200 example

```
{
  "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "created_at": "2019-12-27T18:11:19.117Z",
  "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "updated_at": "2019-12-27T18:11:19.117Z",
  "user": 0,
  "user_email": "dev@stainless.com"
}
```