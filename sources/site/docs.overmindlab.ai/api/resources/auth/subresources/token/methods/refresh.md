# Source: https://docs.overmindlab.ai/api/resources/auth/subresources/token/methods/refresh

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

# Refresh

POST/api/auth/token/refresh/

Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.

##### Body ParametersExpand Collapse

refresh: string

minLength1

##### ReturnsExpand Collapse

access: string

refresh: string

##### Refresh

HTTP

HTTP

TypeScript

Python

```
curl https://api.overmindlab.ai/api/auth/token/refresh/ \
    -H 'Content-Type: application/json' \
    -d '{
          "refresh": "x"
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