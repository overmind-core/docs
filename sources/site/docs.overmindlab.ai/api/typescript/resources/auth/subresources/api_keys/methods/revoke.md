# Source: https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/api_keys/methods/revoke

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Auth](https://docs.overmindlab.ai/api/typescript/resources/auth)

[API Keys](https://docs.overmindlab.ai/api/typescript/resources/auth/subresources/api_keys)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Revoke API token

client.auth.apiKeys.revoke(stringid, RequestOptionsoptions?): void

DELETE/api/auth/api-keys/{id}/

Permanently revoke an API token.

##### ParametersExpand Collapse

id: string

formatuuid

##### Revoke API token

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

await client.auth.apiKeys.revoke('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
```

##### Returns Examples