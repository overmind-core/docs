# Source: https://docs.overmindlab.ai/api/typescript/resources/projects/methods/create

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Projects](https://docs.overmindlab.ai/api/typescript/resources/projects)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Create project

client.projects.create(ProjectCreateParams { name, slug, description, 2 more } body, RequestOptionsoptions?): [ProjectCreateResponse](https://docs.overmindlab.ai/api/typescript/resources/projects#(resource)%20projects%20%3E%20(model)%20project_create_response%20%3E%20(schema)) { id, created\_at, name, 5 more }

POST/api/projects/

Create project

##### ParametersExpand Collapse

body: ProjectCreateParams { name, slug, description, 2 more }

name: string

minLength1

maxLength255

slug: string

minLength1

maxLength255

description?: string

is\_active?: boolean

settings?: unknown

##### ReturnsExpand Collapse

ProjectCreateResponse { id, created\_at, name, 5 more }

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

##### Create project

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const project = await client.projects.create({ name: 'x', slug: 'slug' });

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