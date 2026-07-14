# Source: https://docs.overmindlab.ai/api/python/resources/auth/subresources/token/methods/refresh

[API Reference](https://docs.overmindlab.ai/api/python)

[Auth](https://docs.overmindlab.ai/api/python/resources/auth)

[Token](https://docs.overmindlab.ai/api/python/resources/auth/subresources/token)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Refresh

auth.token.refresh(TokenRefreshParams\*\*kwargs) \-> [TokenRefreshResponse](https://docs.overmindlab.ai/api/python/resources/auth#(resource)%20auth.token%20%3E%20(model)%20token_refresh_response%20%3E%20(schema))

POST/api/auth/token/refresh/

Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.

##### ParametersExpand Collapse

refresh: str

minLength1

##### ReturnsExpand Collapse

class TokenRefreshResponse: …

access: str

refresh: str

##### Refresh

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
response = client.auth.token.refresh(
    refresh="x",
)
print(response.access)
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