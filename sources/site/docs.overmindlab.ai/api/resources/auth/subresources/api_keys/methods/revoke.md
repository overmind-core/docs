# Source: https://docs.overmindlab.ai/api/resources/auth/subresources/api_keys/methods/revoke

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

# Revoke API token

DELETE/api/auth/api-keys/{id}/

Permanently revoke an API token.

##### Path ParametersExpand Collapse

id: string

formatuuid

##### Revoke API token

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/auth/api-keys/$ID/ \
    -X DELETE
```

##### Returns Examples