# Source: https://docs.overmindlab.ai/api/python/resources/projects/subresources/memberships/methods/add

[API Reference](https://docs.overmindlab.ai/api/python)

[Projects](https://docs.overmindlab.ai/api/python/resources/projects)

[Memberships](https://docs.overmindlab.ai/api/python/resources/projects/subresources/memberships)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Add a user to the project

projects.memberships.add(strproject\_id, MembershipAddParams\*\*kwargs) \-> [MembershipAddResponse](https://docs.overmindlab.ai/api/python/resources/projects#(resource)%20projects.memberships%20%3E%20(model)%20membership_add_response%20%3E%20(schema))

POST/api/projects/{project\_id}/memberships/

Memberships for a single project (nested under `/api/projects/{project_id}/memberships/`).

##### ParametersExpand Collapse

project\_id: str

user\_id: int

##### ReturnsExpand Collapse

class MembershipAddResponse: …

id: str

formatuuid

created\_at: datetime

formatdate-time

project: str

formatuuid

updated\_at: datetime

formatdate-time

user: int

user\_email: str

formatemail

##### Add a user to the project

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
response = client.projects.memberships.add(
    project_id="-2fdc-d-d8--bb--3a671d0-3-ae4a0-33c-",
    user_id=0,
)
print(response.id)
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