# Source: https://docs.overmindlab.ai/api/python/resources/projects/subresources/memberships/methods/list

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

# List project members

projects.memberships.list(strproject\_id, MembershipListParams\*\*kwargs) \-> [MembershipListResponse](https://docs.overmindlab.ai/api/python/resources/projects#(resource)%20projects.memberships%20%3E%20(model)%20membership_list_response%20%3E%20(schema))

GET/api/projects/{project\_id}/memberships/

Memberships for a single project (nested under `/api/projects/{project_id}/memberships/`).

##### ParametersExpand Collapse

project\_id: str

ordering: Optional\[str\]

Which field to use when ordering the results.

page: Optional\[int\]

A page number within the paginated result set.

search: Optional\[str\]

A search term.

##### ReturnsExpand Collapse

class MembershipListResponse: …

count: int

results: List\[Result\]

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

next: Optional\[str\]

formaturi

previous: Optional\[str\]

formaturi

##### List project members

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
memberships = client.projects.memberships.list(
    project_id="-2fdc-d-d8--bb--3a671d0-3-ae4a0-33c-",
)
print(memberships.count)
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