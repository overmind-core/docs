# Source: https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/token

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Auth](https://docs.overmindlab.ai/api/typescript/resources/auth)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Token

##### [Create](https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/token/methods/create)

client.auth.token.create(TokenCreateParams { email, password } body, RequestOptionsoptions?): [TokenCreateResponse](https://docs.overmindlab.ai/api/typescript/resources/auth#(resource)%20auth.token%20%3E%20(model)%20token_create_response%20%3E%20(schema)) { access, refresh }

POST/api/auth/token/

##### [Refresh](https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/token/methods/refresh)

client.auth.token.refresh(TokenRefreshParams { refresh } body, RequestOptionsoptions?): [TokenRefreshResponse](https://docs.overmindlab.ai/api/typescript/resources/auth#(resource)%20auth.token%20%3E%20(model)%20token_refresh_response%20%3E%20(schema)) { access, refresh }

POST/api/auth/token/refresh/