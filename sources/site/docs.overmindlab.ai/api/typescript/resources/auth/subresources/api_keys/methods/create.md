# Source: https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/api_keys/methods/create

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

# Generate API token

client.auth.apiKeys.create(APIKeyCreateParams { project, name } body, RequestOptionsoptions?): [APIKeyCreateResponse](https://docs.overmindlab.ai/api/typescript/resources/auth#(resource)%20auth.api_keys%20%3E%20(model)%20api_key_create_response%20%3E%20(schema)) { id, created\_at, key, 2 more }

POST/api/auth/api-keys/

Create a new API token for the authenticated user.

##### ParametersExpand Collapse

body: APIKeyCreateParams { project, name }

project: string

formatuuid

name?: string

maxLength255

##### ReturnsExpand Collapse

APIKeyCreateResponse { id, created\_at, key, 2 more }

id: string

formatuuid

created\_at: string

formatdate-time

key: string

Plaintext secret. Shown only once.

name: string

prefix: string

##### Generate API token

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const apiKey = await client.auth.apiKeys.create({ project: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });

console.log(apiKey.id);
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