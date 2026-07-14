# Source: https://docs.overmindlab.ai/api/resources/projects/methods/create

[API Reference](https://docs.overmindlab.ai/api)

[Projects](https://docs.overmindlab.ai/api/resources/projects)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Create project

POST/api/projects/

Create project

##### Body ParametersExpand Collapse

name: string

minLength1

maxLength255

slug: string

minLength1

maxLength255

description: optional string

is\_active: optional boolean

settings: optional unknown

##### ReturnsExpand Collapse

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

##### Create project

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/projects/ \
    -H 'Content-Type: application/json' \
    -d '{
          "name": "x",
          "slug": "slug"
        }'
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