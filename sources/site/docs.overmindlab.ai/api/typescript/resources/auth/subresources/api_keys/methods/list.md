# Source: https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/api_keys/methods/list

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Auth](https://docs.overmindlab.ai/api/typescript/resources/auth)

[API Keys](https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/api_keys)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List API tokens

client.auth.apiKeys.list(APIKeyListParams { ordering, page, search } query?, RequestOptionsoptions?): [APIKeyListResponse](https://docs.overmindlab.ai/api/typescript/resources/auth#(resource)%20auth.api_keys%20%3E%20(model)%20api_key_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/auth/api-keys/

List metadata for API tokens you created (secrets are never returned).

##### ParametersExpand Collapse

query: APIKeyListParams { ordering, page, search }

ordering?: string

Which field to use when ordering the results.

page?: number

A page number within the paginated result set.

search?: string

A search term.

##### ReturnsExpand Collapse

APIKeyListResponse { count, results, next, previous }

count: number

results: Array<Result\>

id: string

formatuuid

created\_at: string

formatdate-time

prefix: string

maxLength12

project: string

formatuuid

expires\_at?: string | null

formatdate-time

is\_active?: boolean

last\_used\_at?: string | null

formatdate-time

name?: string

maxLength255

next?: string | null

formaturi

previous?: string | null

formaturi

##### List API tokens

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const apiKeys = await client.auth.apiKeys.list();

console.log(apiKeys.count);
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