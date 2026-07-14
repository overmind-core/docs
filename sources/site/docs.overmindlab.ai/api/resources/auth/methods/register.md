# Source: https://docs.overmindlab.ai/api/resources/auth/methods/register

[API Reference](https://docs.overmindlab.ai/api)

[Auth](https://docs.overmindlab.ai/api/resources/auth)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Register

POST/api/auth/register/

Create an account with email and password.

##### Body ParametersExpand Collapse

email: string

formatemail

minLength1

password: string

minLength8

maxLength128

password\_confirm: string

minLength8

maxLength128

##### ReturnsExpand Collapse

access: string

refresh: string

user: object { id, email, email\_verified }

id: number

email: string

formatemail

maxLength254

email\_verified: optional boolean

##### Register

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/auth/register/ \
    -H 'Content-Type: application/json' \
    -d '{
          "email": "dev@stainless.com",
          "password": "xxxxxxxx",
          "password_confirm": "xxxxxxxx"
        }'
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