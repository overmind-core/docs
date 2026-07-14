# Source: https://docs.overmindlab.ai/api/typescript/resources/auth/methods/retrieve_current_user

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Auth](https://docs.overmindlab.ai/api/typescript/resources/auth)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Current user profile

client.auth.retrieveCurrentUser(RequestOptionsoptions?): [AuthRetrieveCurrentUserResponse](https://docs.overmindlab.ai/api/typescript/resources/auth#(resource)%20auth%20%3E%20(model)%20auth_retrieve_current_user_response%20%3E%20(schema)) { id, email, email\_verified }

GET/api/auth/me/

Returns the authenticated user's profile.

##### ReturnsExpand Collapse

AuthRetrieveCurrentUserResponse { id, email, email\_verified }

id: number

email: string

formatemail

maxLength254

email\_verified?: boolean

##### Current user profile

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const response = await client.auth.retrieveCurrentUser();

console.log(response.id);
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