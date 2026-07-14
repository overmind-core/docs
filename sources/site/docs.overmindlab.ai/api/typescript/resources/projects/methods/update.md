# Source: https://docs.overmindlab.ai/api/typescript/resources/projects/methods/update

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Projects](https://docs.overmindlab.ai/api/typescript/resources/projects)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Update project

client.projects.update(stringid, ProjectUpdateParams { description, is\_active, name, 2 more } body?, RequestOptionsoptions?): [ProjectUpdateResponse](https://docs.overmindlab.ai/api/typescript/resources/projects#(resource)%20projects%20%3E%20(model)%20project_update_response%20%3E%20(schema)) { id, created\_at, name, 5 more }

PATCH/api/projects/{id}/

Update project

##### ParametersExpand Collapse

id: string

formatuuid

body: ProjectUpdateParams { description, is\_active, name, 2 more }

description?: string

is\_active?: boolean

name?: string

minLength1

maxLength255

settings?: unknown

slug?: string

minLength1

maxLength255

##### ReturnsExpand Collapse

ProjectUpdateResponse { id, created\_at, name, 5 more }

id: string

formatuuid

created\_at: string

formatdate-time

name: string

maxLength255

slug: string

maxLength255

updated\_at: string

formatdate-time

description?: string

is\_active?: boolean

settings?: unknown

##### Update project

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const project = await client.projects.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');

console.log(project.id);
```

200 example

```
{
  "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "created_at": "2019-12-27T18:11:19.117Z",
  "name": "name",
  "slug": "slug",
  "updated_at": "2019-12-27T18:11:19.117Z",
  "description": "description",
  "is_active": true,
  "settings": {}
}
```

##### Returns Examples

200 example

```
{
  "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
  "created_at": "2019-12-27T18:11:19.117Z",
  "name": "name",
  "slug": "slug",
  "updated_at": "2019-12-27T18:11:19.117Z",
  "description": "description",
  "is_active": true,
  "settings": {}
}
```