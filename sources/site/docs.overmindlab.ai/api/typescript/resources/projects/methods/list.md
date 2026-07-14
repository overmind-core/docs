# Source: https://docs.overmindlab.ai/api/typescript/resources/projects/methods/list

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Projects](https://docs.overmindlab.ai/api/typescript/resources/projects)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# List projects

client.projects.list(ProjectListParams { name, ordering, page, 2 more } query?, RequestOptionsoptions?): [ProjectListResponse](https://docs.overmindlab.ai/api/typescript/resources/projects#(resource)%20projects%20%3E%20(model)%20project_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/projects/

List projects

##### ParametersExpand Collapse

query: ProjectListParams { name, ordering, page, 2 more }

name?: string

ordering?: string

Which field to use when ordering the results.

page?: number

A page number within the paginated result set.

search?: string

A search term.

slug?: string

##### ReturnsExpand Collapse

ProjectListResponse { count, results, next, previous }

count: number

results: Array<Result\>

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

next?: string | null

formaturi

previous?: string | null

formaturi

##### List projects

TypeScript

HTTP

TypeScript

Python

```
import OvermindLab from 'overmind-lab';

const client = new OvermindLab();

const projects = await client.projects.list();

console.log(projects.count);
```

200 example

```
{
  "count": 123,
  "results": [
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
  ],
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2"
}
```

##### Returns Examples

200 example

```
{
  "count": 123,
  "results": [
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
  ],
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2"
}
```