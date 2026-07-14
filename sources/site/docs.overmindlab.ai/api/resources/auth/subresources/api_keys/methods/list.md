# Source: https://docs.overmindlab.ai/api/resources/auth/subresources/api_keys/methods/list

[API Reference](https://docs.overmindlab.ai/api)

[Auth](https://docs.overmindlab.ai/api/resources/auth)

[API Keys](https://docs.overmindlab.ai/api/resources/auth/subresources/api_keys)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List API tokens

GET/api/auth/api-keys/

List metadata for API tokens you created (secrets are never returned).

##### Query ParametersExpand Collapse

ordering: optional string

Which field to use when ordering the results.

page: optional number

A page number within the paginated result set.

search: optional string

A search term.

##### ReturnsExpand Collapse

count: number

results: array of object { id, created\_at, prefix, 5 more }

id: string

formatuuid

created\_at: string

formatdate-time

prefix: string

maxLength12

project: string

formatuuid

expires\_at: optional string

formatdate-time

is\_active: optional boolean

last\_used\_at: optional string

formatdate-time

name: optional string

maxLength255

next: optional string

formaturi

previous: optional string

formaturi

##### List API tokens

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/auth/api-keys/
```

200 example

```
{
  "count": 123,
  "results": [
    {
      "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "created_at": "2019-12-27T18:11:19.117Z",
      "prefix": "prefix",
      "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "expires_at": "2019-12-27T18:11:19.117Z",
      "is_active": true,
      "last_used_at": "2019-12-27T18:11:19.117Z",
      "name": "name"
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
      "prefix": "prefix",
      "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "expires_at": "2019-12-27T18:11:19.117Z",
      "is_active": true,
      "last_used_at": "2019-12-27T18:11:19.117Z",
      "name": "name"
    }
  ],
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2"
}
```