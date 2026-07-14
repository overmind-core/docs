# Source: https://docs.overmindlab.ai/api/typescript/resources/auth/methods/register

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Auth](https://docs.overmindlab.ai/api/typescript/resources/auth)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Register

client.auth.register(AuthRegisterParams { email, password, password\_confirm } body, RequestOptionsoptions?): [AuthRegisterResponse](https://docs.overmindlab.ai/api/typescript/resources/auth#(resource)%20auth%20%3E%20(model)%20auth_register_response%20%3E%20(schema)) { access, refresh, user }

POST/api/auth/register/

Create an account with email and password.

##### ParametersExpand Collapse

body: AuthRegisterParams { email, password, password\_confirm }

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

AuthRegisterResponse { access, refresh, user }

access: string

refresh: string

user: User { id, email, email\_verified }

id: number

email: string

formatemail

maxLength254

email\_verified?: boolean

##### Register

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const response = await client.auth.register({
  email: 'dev@stainless.com',
  password: 'xxxxxxxx',
  password_confirm: 'xxxxxxxx',
});

console.log(response.access);
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