# Source: https://docs.overmindlab.ai/api/resources/auth/subresources/api_keys/methods/create

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

# Generate API token

POST/api/auth/api-keys/

Create a new API token for the authenticated user.

##### Body ParametersExpand Collapse

project: string

formatuuid

name: optional string

maxLength255

##### ReturnsExpand Collapse

id: string

formatuuid

created\_at: string

formatdate-time

key: string

Plaintext secret. Shown only once.

name: string

prefix: string

##### Generate API token

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/auth/api-keys/ \
    -H 'Content-Type: application/json' \
    -d '{
          "project": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"
        }'
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