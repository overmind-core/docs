# Source: https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/api_keys

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Auth](https://docs.overmindlab.ai/api/typescript/resources/auth)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# API Keys

##### [List API tokens](https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/api_keys/methods/list)

client.auth.apiKeys.list(APIKeyListParams { ordering, page, search } query?, RequestOptionsoptions?): [APIKeyListResponse](https://docs.overmindlab.ai/api/typescript/resources/auth#(resource)%20auth.api_keys%20%3E%20(model)%20api_key_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/auth/api-keys/

##### [Generate API token](https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/api_keys/methods/create)

client.auth.apiKeys.create(APIKeyCreateParams { project, name } body, RequestOptionsoptions?): [APIKeyCreateResponse](https://docs.overmindlab.ai/api/typescript/resources/auth#(resource)%20auth.api_keys%20%3E%20(model)%20api_key_create_response%20%3E%20(schema)) { id, created\_at, key, 2 more }

POST/api/auth/api-keys/

##### [Revoke API token](https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/api_keys/methods/revoke)

client.auth.apiKeys.revoke(stringid, RequestOptionsoptions?): void

DELETE/api/auth/api-keys/{id}/