# Source: https://docs.overmindlab.ai/api/python/resources/auth

[API Reference](https://docs.overmindlab.ai/api/python)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Auth

##### [Current user profile](https://docs.overmindlab.ai/api/python/resources/auth/methods/retrieve_current_user)

auth.retrieve\_current\_user() \-> [AuthRetrieveCurrentUserResponse](https://docs.overmindlab.ai/api/python/resources/auth#(resource)%20auth%20%3E%20(model)%20auth_retrieve_current_user_response%20%3E%20(schema))

GET/api/auth/me/

##### [Register](https://docs.overmindlab.ai/api/python/resources/auth/methods/register)

auth.register(AuthRegisterParams\*\*kwargs) \-> [AuthRegisterResponse](https://docs.overmindlab.ai/api/python/resources/auth#(resource)%20auth%20%3E%20(model)%20auth_register_response%20%3E%20(schema))

POST/api/auth/register/

#### AuthAPI Keys

##### [List API tokens](https://docs.overmindlab.ai/api/python/resources/auth/subresources/api_keys/methods/list)

auth.api\_keys.list(APIKeyListParams\*\*kwargs) \-> [APIKeyListResponse](https://docs.overmindlab.ai/api/python/resources/auth#(resource)%20auth.api_keys%20%3E%20(model)%20api_key_list_response%20%3E%20(schema))

GET/api/auth/api-keys/

##### [Generate API token](https://docs.overmindlab.ai/api/python/resources/auth/subresources/api_keys/methods/create)

auth.api\_keys.create(APIKeyCreateParams\*\*kwargs) \-> [APIKeyCreateResponse](https://docs.overmindlab.ai/api/python/resources/auth#(resource)%20auth.api_keys%20%3E%20(model)%20api_key_create_response%20%3E%20(schema))

POST/api/auth/api-keys/

##### [Revoke API token](https://docs.overmindlab.ai/api/python/resources/auth/subresources/api_keys/methods/revoke)

auth.api\_keys.revoke(strid)

DELETE/api/auth/api-keys/{id}/

#### AuthToken

##### [Create](https://docs.overmindlab.ai/api/python/resources/auth/subresources/token/methods/create)

auth.token.create(TokenCreateParams\*\*kwargs) \-> [TokenCreateResponse](https://docs.overmindlab.ai/api/python/resources/auth#(resource)%20auth.token%20%3E%20(model)%20token_create_response%20%3E%20(schema))

POST/api/auth/token/

##### [Refresh](https://docs.overmindlab.ai/api/python/resources/auth/subresources/token/methods/refresh)

auth.token.refresh(TokenRefreshParams\*\*kwargs) \-> [TokenRefreshResponse](https://docs.overmindlab.ai/api/python/resources/auth#(resource)%20auth.token%20%3E%20(model)%20token_refresh_response%20%3E%20(schema))

POST/api/auth/token/refresh/