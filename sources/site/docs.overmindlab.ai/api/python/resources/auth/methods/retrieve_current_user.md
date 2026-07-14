# Source: https://docs.overmindlab.ai/api/python/resources/auth/methods/retrieve_current_user

[API Reference](https://docs.overmindlab.ai/api/python)

[Auth](https://docs.overmindlab.ai/api/python/resources/auth)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Current user profile

auth.retrieve\_current\_user() \-> [AuthRetrieveCurrentUserResponse](https://docs.overmindlab.ai/api/python/resources/auth#(resource)%20auth%20%3E%20(model)%20auth_retrieve_current_user_response%20%3E%20(schema))

GET/api/auth/me/

Returns the authenticated user's profile.

##### ReturnsExpand Collapse

class AuthRetrieveCurrentUserResponse: …

id: int

email: str

formatemail

maxLength254

email\_verified: Optional\[bool\]

##### Current user profile

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
response = client.auth.retrieve_current_user()
print(response.id)
```

200 example

```
{
  "id": 0,
  "email": "dev@stainless.com",
  "email_verified": true
}
```

##### Returns Examples

200 example

```
{
  "id": 0,
  "email": "dev@stainless.com",
  "email_verified": true
}
```