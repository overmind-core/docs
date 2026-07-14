# Source: https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/token/methods/refresh

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Auth](https://docs.overmindlab.ai/api/typescript/resources/auth)

[Token](https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/token)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Refresh

client.auth.token.refresh(TokenRefreshParams { refresh } body, RequestOptionsoptions?): [TokenRefreshResponse](https://docs.overmindlab.ai/api/typescript/resources/auth#(resource)%20auth.token%20%3E%20(model)%20token_refresh_response%20%3E%20(schema)) { access, refresh }

POST/api/auth/token/refresh/

Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.

##### ParametersExpand Collapse

body: TokenRefreshParams { refresh }

refresh: string

minLength1

##### ReturnsExpand Collapse

TokenRefreshResponse { access, refresh }

access: string

refresh: string

##### Refresh

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const response = await client.auth.token.refresh({ refresh: 'x' });

console.log(response.access);
```

200 example

```
{
  "access": "access",
  "refresh": "refresh"
}
```

##### Returns Examples

200 example

```
{
  "access": "access",
  "refresh": "refresh"
}
```