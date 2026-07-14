# Source: https://docs.overmindlab.ai/api/typescript/resources/jobs/methods/delete

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Jobs](https://docs.overmindlab.ai/api/typescript/resources/jobs)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Delete job

client.jobs.delete(stringid, RequestOptionsoptions?): void

DELETE/api/jobs/{id}/

Delete job

##### ParametersExpand Collapse

id: string

formatuuid

##### Delete job

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

await client.jobs.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
```

##### Returns Examples