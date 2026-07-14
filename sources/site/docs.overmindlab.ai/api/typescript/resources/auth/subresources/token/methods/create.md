# Source: https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/token/methods/create

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

# Create

client.auth.token.create(TokenCreateParams { email, password } body, RequestOptionsoptions?): [TokenCreateResponse](https://docs.overmindlab.ai/api/typescript/resources/auth#(resource)%20auth.token%20%3E%20(model)%20token_create_response%20%3E%20(schema)) { access, refresh }

POST/api/auth/token/

Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.

##### ParametersExpand Collapse

body: TokenCreateParams { email, password }

email: string

minLength1

password: string

minLength1

##### ReturnsExpand Collapse

TokenCreateResponse { access, refresh }

access: string

refresh: string

##### Create

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const token = await client.auth.token.create({ email: 'x', password: 'x' });

console.log(token.access);
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