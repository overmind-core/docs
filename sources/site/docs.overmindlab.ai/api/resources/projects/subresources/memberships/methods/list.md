# Source: https://docs.overmindlab.ai/api/resources/projects/subresources/memberships/methods/list

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

# List project members

GET/api/projects/{project\_id}/memberships/

Memberships for a single project (nested under `/api/projects/{project_id}/memberships/`).

##### Path ParametersExpand Collapse

project\_id: string

##### Query ParametersExpand Collapse

ordering: optional string

Which field to use when ordering the results.

page: optional number

A page number within the paginated result set.

search: optional string

A search term.

##### ReturnsExpand Collapse

count: number

results: array of object { id, created\_at, project, 3 more }

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

next: optional string

formaturi

previous: optional string

formaturi

##### List project members

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/projects/$PROJECT_ID/memberships/
```

200 example

```
{
  "count": 123,
  "results": [
    {
      "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "created_at": "2019-12-27T18:11:19.117Z",
      "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "updated_at": "2019-12-27T18:11:19.117Z",
      "user": 0,
      "user_email": "dev@stainless.com"
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
      "created_at": "2019-12-27T18:11:19.117Z",
      "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "updated_at": "2019-12-27T18:11:19.117Z",
      "user": 0,
      "user_email": "dev@stainless.com"
    }
  ],
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2"
}
```