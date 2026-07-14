# Source: https://docs.overmindlab.ai/api/python/resources/auth/methods/register

[API Reference](https://docs.overmindlab.ai/api/python)

[Auth](https://docs.overmindlab.ai/api/python/resources/auth)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Register

auth.register(AuthRegisterParams\*\*kwargs) \-> [AuthRegisterResponse](https://docs.overmindlab.ai/api/python/resources/auth#(resource)%20auth%20%3E%20(model)%20auth_register_response%20%3E%20(schema))

POST/api/auth/register/

Create an account with email and password.

##### ParametersExpand Collapse

email: str

formatemail

minLength1

password: str

minLength8

maxLength128

password\_confirm: str

minLength8

maxLength128

##### ReturnsExpand Collapse

class AuthRegisterResponse: …

access: str

refresh: str

user: User

id: int

email: str

formatemail

maxLength254

email\_verified: Optional\[bool\]

##### Register

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
response = client.auth.register(
    email="dev@stainless.com",
    password="xxxxxxxx",
    password_confirm="xxxxxxxx",
)
print(response.access)
```

200 example

```
{
  "access": "access",
  "refresh": "refresh",
  "user": {
    "id": 0,
    "email": "dev@stainless.com",
    "email_verified": true
  }
}
```

##### Returns Examples

200 example

```
{
  "access": "access",
  "refresh": "refresh",
  "user": {
    "id": 0,
    "email": "dev@stainless.com",
    "email_verified": true
  }
}
```