# Source: https://docs.overmindlab.ai/api/resources/auth

[API Reference](https://docs.overmindlab.ai/api)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Auth

##### [Current user profile](https://docs.overmindlab.ai/api/resources/auth/methods/retrieve_current_user)

GET/api/auth/me/

##### [Register](https://docs.overmindlab.ai/api/resources/auth/methods/register)

POST/api/auth/register/

#### AuthAPI Keys

##### [List API tokens](https://docs.overmindlab.ai/api/resources/auth/subresources/api_keys/methods/list)

GET/api/auth/api-keys/

##### [Generate API token](https://docs.overmindlab.ai/api/resources/auth/subresources/api_keys/methods/create)

POST/api/auth/api-keys/

##### [Revoke API token](https://docs.overmindlab.ai/api/resources/auth/subresources/api_keys/methods/revoke)

DELETE/api/auth/api-keys/{id}/

#### AuthToken

##### [Create](https://docs.overmindlab.ai/api/resources/auth/subresources/token/methods/create)

POST/api/auth/token/

##### [Refresh](https://docs.overmindlab.ai/api/resources/auth/subresources/token/methods/refresh)

POST/api/auth/token/refresh/