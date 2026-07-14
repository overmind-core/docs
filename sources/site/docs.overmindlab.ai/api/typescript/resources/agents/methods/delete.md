# Source: https://docs.overmindlab.ai/api/typescript/resources/agents/methods/delete

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Agents](https://docs.overmindlab.ai/api/typescript/resources/agents)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Soft-delete agent

client.agents.delete(stringid, RequestOptionsoptions?): void

DELETE/api/agents/{id}/

Soft-delete agent

##### ParametersExpand Collapse

id: string

formatuuid

##### Soft-delete agent

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

await client.agents.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
```

##### Returns Examples