# Source: https://docs.overmindlab.ai/api/typescript/resources/projects/subresources/memberships/methods/remove

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Projects](https://docs.overmindlab.ai/api/typescript/resources/projects)

[Memberships](https://docs.overmindlab.ai/api/typescript/resources/projects/subresources/memberships)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Remove a user from the project

client.projects.memberships.remove(stringid, MembershipRemoveParams { project\_id } params, RequestOptionsoptions?): void

DELETE/api/projects/{project\_id}/memberships/{id}/

Memberships for a single project (nested under `/api/projects/{project_id}/memberships/`).

##### ParametersExpand Collapse

id: string

formatuuid

params: MembershipRemoveParams { project\_id }

project\_id: string

##### Remove a user from the project

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

await client.projects.memberships.remove('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
  project_id: '-2fdc-d-d8--bb--3a671d0-3-ae4a0-33c-',
});
```

##### Returns Examples