# Source: https://docs.overmindlab.ai/api/python/resources/auth/subresources/api_keys

[API Reference](https://docs.overmindlab.ai/api/python)

[Auth](https://docs.overmindlab.ai/api/python/resources/auth)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# API Keys

##### [List API tokens](https://docs.overmindlab.ai/api/python/resources/auth/subresources/api_keys/methods/list)

auth.api\_keys.list(APIKeyListParams\*\*kwargs) \-> [APIKeyListResponse](https://docs.overmindlab.ai/api/python/resources/auth#(resource)%20auth.api_keys%20%3E%20(model)%20api_key_list_response%20%3E%20(schema))

GET/api/auth/api-keys/

##### [Generate API token](https://docs.overmindlab.ai/api/python/resources/auth/subresources/api_keys/methods/create)

auth.api\_keys.create(APIKeyCreateParams\*\*kwargs) \-> [APIKeyCreateResponse](https://docs.overmindlab.ai/api/python/resources/auth#(resource)%20auth.api_keys%20%3E%20(model)%20api_key_create_response%20%3E%20(schema))

POST/api/auth/api-keys/

##### [Revoke API token](https://docs.overmindlab.ai/api/python/resources/auth/subresources/api_keys/methods/revoke)

auth.api\_keys.revoke(strid)

DELETE/api/auth/api-keys/{id}/