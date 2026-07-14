# Source: https://docs.overmindlab.ai/api/python/resources/projects/methods/retrieve

[API Reference](https://docs.overmindlab.ai/api/python)

[Projects](https://docs.overmindlab.ai/api/python/resources/projects)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Get project

projects.retrieve(strid) \-> [ProjectRetrieveResponse](https://docs.overmindlab.ai/api/python/resources/projects#(resource)%20projects%20%3E%20(model)%20project_retrieve_response%20%3E%20(schema))

GET/api/projects/{id}/

Get project

##### ParametersExpand Collapse

id: str

formatuuid

##### ReturnsExpand Collapse

class ProjectRetrieveResponse: …

id: str

formatuuid

created\_at: datetime

formatdate-time

name: str

maxLength255

slug: str

maxLength255

updated\_at: datetime

formatdate-time

description: Optional\[str\]

is\_active: Optional\[bool\]

settings: Optional\[object\]

##### Get project

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
project = client.projects.retrieve(
    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
)
print(project.id)
```

200 example

```
{
  "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "created_at": "2019-12-27T18:11:19.117Z",
  "name": "name",
  "slug": "slug",
  "updated_at": "2019-12-27T18:11:19.117Z",
  "description": "description",
  "is_active": true,
  "settings": {}
}
```

##### Returns Examples

200 example

```
{
  "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "created_at": "2019-12-27T18:11:19.117Z",
  "name": "name",
  "slug": "slug",
  "updated_at": "2019-12-27T18:11:19.117Z",
  "description": "description",
  "is_active": true,
  "settings": {}
}
```