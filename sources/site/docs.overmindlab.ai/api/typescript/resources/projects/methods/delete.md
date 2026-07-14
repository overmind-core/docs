# Source: https://docs.overmindlab.ai/api/typescript/resources/projects/methods/delete

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Projects](https://docs.overmindlab.ai/api/typescript/resources/projects)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Delete project

client.projects.delete(stringid, RequestOptionsoptions?): void

DELETE/api/projects/{id}/

Delete project

##### ParametersExpand Collapse

id: string

formatuuid

##### Delete project

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

await client.projects.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
```

##### Returns Examples