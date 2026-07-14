# Source: https://docs.overmindlab.ai/api/resources/auth/methods/retrieve_current_user

[API Reference](https://docs.overmindlab.ai/api)

[Auth](https://docs.overmindlab.ai/api/resources/auth)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Current user profile

GET/api/auth/me/

Returns the authenticated user's profile.

##### ReturnsExpand Collapse

id: number

email: string

formatemail

maxLength254

email\_verified: optional boolean

##### Current user profile

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/auth/me/
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