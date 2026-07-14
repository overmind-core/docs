# Source: https://docs.overmindlab.ai/api/python/resources/projects/methods/list

[API Reference](https://docs.overmindlab.ai/api/python)

[Projects](https://docs.overmindlab.ai/api/python/resources/projects)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List projects

projects.list(ProjectListParams\*\*kwargs) \-> [ProjectListResponse](https://docs.overmindlab.ai/api/python/resources/projects#(resource)%20projects%20%3E%20(model)%20project_list_response%20%3E%20(schema))

GET/api/projects/

List projects

##### ParametersExpand Collapse

name: Optional\[str\]

ordering: Optional\[str\]

Which field to use when ordering the results.

page: Optional\[int\]

A page number within the paginated result set.

search: Optional\[str\]

A search term.

slug: Optional\[str\]

##### ReturnsExpand Collapse

class ProjectListResponse: …

count: int

results: List\[Result\]

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

next: Optional\[str\]

formaturi

previous: Optional\[str\]

formaturi

##### List projects

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
projects = client.projects.list()
print(projects.count)
```

200 example

```
{
  "count": 123,
  "results": [
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
      "name": "name",
      "slug": "slug",
      "updated_at": "2019-12-27T18:11:19.117Z",
      "description": "description",
      "is_active": true,
      "settings": {}
    }
  ],
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2"
}
```