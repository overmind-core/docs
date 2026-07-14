# Source: https://docs.overmindlab.ai/api/typescript/resources/projects/subresources/memberships/methods/add

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

# Add a user to the project

client.projects.memberships.add(stringprojectID, MembershipAddParams { user\_id } body, RequestOptionsoptions?): [MembershipAddResponse](https://docs.overmindlab.ai/api/typescript/resources/projects#(resource)%20projects.memberships%20%3E%20(model)%20membership_add_response%20%3E%20(schema)) { id, created\_at, project, 3 more }

POST/api/projects/{project\_id}/memberships/

Memberships for a single project (nested under `/api/projects/{project_id}/memberships/`).

##### ParametersExpand Collapse

projectID: string

body: MembershipAddParams { user\_id }

user\_id: number

##### ReturnsExpand Collapse

MembershipAddResponse { id, created\_at, project, 3 more }

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

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const response = await client.projects.memberships.add('-2fdc-d-d8--bb--3a671d0-3-ae4a0-33c-', {
  user_id: 0,
});

console.log(response.id);
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