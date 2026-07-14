# Source: https://docs.overmindlab.ai/api/typescript/resources/job_iterations/methods/delete

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Job Iterations](https://docs.overmindlab.ai/api/typescript/resources/job_iterations)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Delete job iteration

client.jobIterations.delete(stringid, RequestOptionsoptions?): void

DELETE/api/job-iterations/{id}/

Delete job iteration

##### ParametersExpand Collapse

id: string

formatuuid

##### Delete job iteration

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

await client.jobIterations.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
```

##### Returns Examples