# Source: https://docs.overmindlab.ai/api/python/resources/projects/subresources/memberships/methods/remove

[API Reference](https://docs.overmindlab.ai/api/python)

[Projects](https://docs.overmindlab.ai/api/python/resources/projects)

[Memberships](https://docs.overmindlab.ai/api/python/resources/projects/subresources/memberships)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Remove a user from the project

projects.memberships.remove(strid, MembershipRemoveParams\*\*kwargs)

DELETE/api/projects/{project\_id}/memberships/{id}/

Memberships for a single project (nested under `/api/projects/{project_id}/memberships/`).

##### ParametersExpand Collapse

project\_id: str

id: str

formatuuid

##### Remove a user from the project

Python

HTTP

TypeScript

Python

```
from overmind_lab import OvermindLab

client = OvermindLab()
client.projects.memberships.remove(
    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
    project_id="-2fdc-d-d8--bb--3a671d0-3-ae4a0-33c-",
)
```

##### Returns Examples