# Source: https://docs.overmindlab.ai/api/python/resources/auth/subresources/api_keys/methods/list

[API Reference](https://docs.overmindlab.ai/api/python)

[Auth](https://docs.overmindlab.ai/api/python/resources/auth)

[API Keys](https://docs.overmindlab.ai/api/python/resources/auth/subresources/api_keys)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List API tokens

auth.api\_keys.list(APIKeyListParams\*\*kwargs) \-> [APIKeyListResponse](https://docs.overmindlab.ai/api/python/resources/auth#(resource)%20auth.api_keys%20%3E%20(model)%20api_key_list_response%20%3E%20(schema))

GET/api/auth/api-keys/

List metadata for API tokens you created (secrets are never returned).

##### ParametersExpand Collapse

ordering: Optional\[str\]

Which field to use when ordering the results.

page: Optional\[int\]

A page number within the paginated result set.

search: Optional\[str\]

A search term.

##### ReturnsExpand Collapse

class APIKeyListResponse: …

count: int

results: List\[Result\]

id: str

formatuuid

created\_at: datetime

formatdate-time

prefix: str

maxLength12

project: str

formatuuid

expires\_at: Optional\[datetime\]

formatdate-time

is\_active: Optional\[bool\]

last\_used\_at: Optional\[datetime\]

formatdate-time

name: Optional\[str\]

maxLength255

next: Optional\[str\]

formaturi

previous: Optional\[str\]

formaturi

##### List API tokens

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
api_keys = client.auth.api_keys.list()
print(api_keys.count)
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