# Source: https://docs.overmindlab.ai/api/python/resources/auth/subresources/api_keys/methods/create

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

# Generate API token

auth.api\_keys.create(APIKeyCreateParams\*\*kwargs) \-> [APIKeyCreateResponse](https://docs.overmindlab.ai/api/python/resources/auth#(resource)%20auth.api_keys%20%3E%20(model)%20api_key_create_response%20%3E%20(schema))

POST/api/auth/api-keys/

Create a new API token for the authenticated user.

##### ParametersExpand Collapse

project: str

formatuuid

name: Optional\[str\]

maxLength255

##### ReturnsExpand Collapse

class APIKeyCreateResponse: …

id: str

formatuuid

created\_at: datetime

formatdate-time

key: str

Plaintext secret. Shown only once.

name: str

prefix: str

##### Generate API token

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
api_key = client.auth.api_keys.create(
    project="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
)
print(api_key.id)
```

200 example

```
{
  "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "created_at": "2019-12-27T18:11:19.117Z",
  "key": "key",
  "name": "name",
  "prefix": "prefix"
}
```

##### Returns Examples

200 example

```
{
  "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "created_at": "2019-12-27T18:11:19.117Z",
  "key": "key",
  "name": "name",
  "prefix": "prefix"
}
```