# Source: https://docs.overmindlab.ai/api/python/resources/auth/subresources/api_keys/methods/revoke

[API Reference](https://docs.overmindlab.ai/api/python)

[Auth](https://docs.overmindlab.ai/api/python/resources/auth)

[API Keys](https://docs.overmindlab.ai/api/python/resources/auth/subresources/api_keys)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Revoke API token

auth.api\_keys.revoke(strid)

DELETE/api/auth/api-keys/{id}/

Permanently revoke an API token.

##### ParametersExpand Collapse

id: str

formatuuid

##### Revoke API token

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
client.auth.api_keys.revoke(
    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
)
```

##### Returns Examples