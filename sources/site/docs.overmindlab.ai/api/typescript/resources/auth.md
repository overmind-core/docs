# Source: https://docs.overmindlab.ai/api/typescript/resources/auth

[API Reference](https://docs.overmindlab.ai/api/typescript)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Auth

##### [Current user profile](https://docs.overmindlab.ai/api/typescript/resources/auth/methods/retrieve_current_user)

client.auth.retrieveCurrentUser(RequestOptionsoptions?): [AuthRetrieveCurrentUserResponse](https://docs.overmindlab.ai/api/typescript/resources/auth#(resource)%20auth%20%3E%20(model)%20auth_retrieve_current_user_response%20%3E%20(schema)) { id, email, email\_verified }

GET/api/auth/me/

##### [Register](https://docs.overmindlab.ai/api/typescript/resources/auth/methods/register)

client.auth.register(AuthRegisterParams { email, password, password\_confirm } body, RequestOptionsoptions?): [AuthRegisterResponse](https://docs.overmindlab.ai/api/typescript/resources/auth#(resource)%20auth%20%3E%20(model)%20auth_register_response%20%3E%20(schema)) { access, refresh, user }

POST/api/auth/register/

#### AuthAPI Keys

##### [List API tokens](https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/api_keys/methods/list)

client.auth.apiKeys.list(APIKeyListParams { ordering, page, search } query?, RequestOptionsoptions?): [APIKeyListResponse](https://docs.overmindlab.ai/api/typescript/resources/auth#(resource)%20auth.api_keys%20%3E%20(model)%20api_key_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/auth/api-keys/

##### [Generate API token](https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/api_keys/methods/create)

client.auth.apiKeys.create(APIKeyCreateParams { project, name } body, RequestOptionsoptions?): [APIKeyCreateResponse](https://docs.overmindlab.ai/api/typescript/resources/auth#(resource)%20auth.api_keys%20%3E%20(model)%20api_key_create_response%20%3E%20(schema)) { id, created\_at, key, 2 more }

POST/api/auth/api-keys/

##### [Revoke API token](https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/api_keys/methods/revoke)

client.auth.apiKeys.revoke(stringid, RequestOptionsoptions?): void

DELETE/api/auth/api-keys/{id}/

#### AuthToken

##### [Create](https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/token/methods/create)

client.auth.token.create(TokenCreateParams { email, password } body, RequestOptionsoptions?): [TokenCreateResponse](https://docs.overmindlab.ai/api/typescript/resources/auth#(resource)%20auth.token%20%3E%20(model)%20token_create_response%20%3E%20(schema)) { access, refresh }

POST/api/auth/token/

##### [Refresh](https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/token/methods/refresh)

client.auth.token.refresh(TokenRefreshParams { refresh } body, RequestOptionsoptions?): [TokenRefreshResponse](https://docs.overmindlab.ai/api/typescript/resources/auth#(resource)%20auth.token%20%3E%20(model)%20token_refresh_response%20%3E%20(schema)) { access, refresh }

POST/api/auth/token/refresh/