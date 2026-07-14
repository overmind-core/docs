# Source: https://docs.overmindlab.ai/api/python/resources/auth/subresources/token/methods/create

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

# Create

auth.token.create(TokenCreateParams\*\*kwargs) \-> [TokenCreateResponse](https://docs.overmindlab.ai/api/python/resources/auth#(resource)%20auth.token%20%3E%20(model)%20token_create_response%20%3E%20(schema))

POST/api/auth/token/

Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.

##### ParametersExpand Collapse

email: str

minLength1

password: str

minLength1

##### ReturnsExpand Collapse

class TokenCreateResponse: …

access: str

refresh: str

##### Create

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
token = client.auth.token.create(
    email="x",
    password="x",
)
print(token.access)
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