# Source: https://docs.overmindlab.ai/api/typescript/resources/projects/subresources/memberships/methods/list

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Projects](https://docs.overmindlab.ai/api/typescript/resources/projects)

[Memberships](https://docs.overmindlab.ai/api/typescript/resources/projects/subresources/memberships)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List project members

client.projects.memberships.list(stringprojectID, MembershipListParams { ordering, page, search } query?, RequestOptionsoptions?): [MembershipListResponse](https://docs.overmindlab.ai/api/typescript/resources/projects#(resource)%20projects.memberships%20%3E%20(model)%20membership_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/projects/{project\_id}/memberships/

Memberships for a single project (nested under `/api/projects/{project_id}/memberships/`).

##### ParametersExpand Collapse

projectID: string

query: MembershipListParams { ordering, page, search }

ordering?: string

Which field to use when ordering the results.

page?: number

A page number within the paginated result set.

search?: string

A search term.

##### ReturnsExpand Collapse

MembershipListResponse { count, results, next, previous }

count: number

results: Array<Result\>

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

next?: string | null

formaturi

previous?: string | null

formaturi

##### List project members

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const memberships = await client.projects.memberships.list('-2fdc-d-d8--bb--3a671d0-3-ae4a0-33c-');

console.log(memberships.count);
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