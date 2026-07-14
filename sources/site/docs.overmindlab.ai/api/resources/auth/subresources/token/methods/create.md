# Source: https://docs.overmindlab.ai/api/resources/auth/subresources/token/methods/create

[API Reference](https://docs.overmindlab.ai/api)

[Auth](https://docs.overmindlab.ai/api/resources/auth)

[Token](https://docs.overmindlab.ai/api/resources/auth/subresources/token)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Create

POST/api/auth/token/

Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.

##### Body ParametersExpand Collapse

email: string

minLength1

password: string

minLength1

##### ReturnsExpand Collapse

access: string

refresh: string

##### Create

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/auth/token/ \
    -H 'Content-Type: application/json' \
    -d '{
          "email": "x",
          "password": "x"
        }'
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