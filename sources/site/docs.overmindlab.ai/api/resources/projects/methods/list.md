# Source: https://docs.overmindlab.ai/api/resources/projects/methods/list

[API Reference](https://docs.overmindlab.ai/api)

[Projects](https://docs.overmindlab.ai/api/resources/projects)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List projects

GET/api/projects/

List projects

##### Query ParametersExpand Collapse

name: optional string

ordering: optional string

Which field to use when ordering the results.

page: optional number

A page number within the paginated result set.

search: optional string

A search term.

slug: optional string

##### ReturnsExpand Collapse

count: number

results: array of object { id, created\_at, name, 5 more }

id: string

formatuuid

created\_at: string

formatdate-time

name: string

maxLength255

slug: string

maxLength255

updated\_at: string

formatdate-time

description: optional string

is\_active: optional boolean

settings: optional unknown

next: optional string

formaturi

previous: optional string

formaturi

##### List projects

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/projects/
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