# Source: https://docs.overmindlab.ai/api/typescript/resources/projects

[API Reference](https://docs.overmindlab.ai/api/typescript)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Projects

##### [List projects](https://docs.overmindlab.ai/api/typescript/resources/projects/methods/list)

client.projects.list(ProjectListParams { name, ordering, page, 2 more } query?, RequestOptionsoptions?): [ProjectListResponse](https://docs.overmindlab.ai/api/typescript/resources/projects#(resource)%20projects%20%3E%20(model)%20project_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/projects/

##### [Create project](https://docs.overmindlab.ai/api/typescript/resources/projects/methods/create)

client.projects.create(ProjectCreateParams { name, slug, description, 2 more } body, RequestOptionsoptions?): [ProjectCreateResponse](https://docs.overmindlab.ai/api/typescript/resources/projects#(resource)%20projects%20%3E%20(model)%20project_create_response%20%3E%20(schema)) { id, created\_at, name, 5 more }

POST/api/projects/

##### [Get project](https://docs.overmindlab.ai/api/typescript/resources/projects/methods/retrieve)

client.projects.retrieve(stringid, RequestOptionsoptions?): [ProjectRetrieveResponse](https://docs.overmindlab.ai/api/typescript/resources/projects#(resource)%20projects%20%3E%20(model)%20project_retrieve_response%20%3E%20(schema)) { id, created\_at, name, 5 more }

GET/api/projects/{id}/

##### [Update project](https://docs.overmindlab.ai/api/typescript/resources/projects/methods/update)

client.projects.update(stringid, ProjectUpdateParams { description, is\_active, name, 2 more } body?, RequestOptionsoptions?): [ProjectUpdateResponse](https://docs.overmindlab.ai/api/typescript/resources/projects#(resource)%20projects%20%3E%20(model)%20project_update_response%20%3E%20(schema)) { id, created\_at, name, 5 more }

PATCH/api/projects/{id}/

##### [Delete project](https://docs.overmindlab.ai/api/typescript/resources/projects/methods/delete)

client.projects.delete(stringid, RequestOptionsoptions?): void

DELETE/api/projects/{id}/

#### ProjectsMemberships

##### [List project members](https://docs.overmindlab.ai/api/typescript/resources/projects/subresources/memberships/methods/list)

client.projects.memberships.list(stringprojectID, MembershipListParams { ordering, page, search } query?, RequestOptionsoptions?): [MembershipListResponse](https://docs.overmindlab.ai/api/typescript/resources/projects#(resource)%20projects.memberships%20%3E%20(model)%20membership_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/projects/{project\_id}/memberships/

##### [Add a user to the project](https://docs.overmindlab.ai/api/typescript/resources/projects/subresources/memberships/methods/add)

client.projects.memberships.add(stringprojectID, MembershipAddParams { user\_id } body, RequestOptionsoptions?): [MembershipAddResponse](https://docs.overmindlab.ai/api/typescript/resources/projects#(resource)%20projects.memberships%20%3E%20(model)%20membership_add_response%20%3E%20(schema)) { id, created\_at, project, 3 more }

POST/api/projects/{project\_id}/memberships/

##### [Remove a user from the project](https://docs.overmindlab.ai/api/typescript/resources/projects/subresources/memberships/methods/remove)

client.projects.memberships.remove(stringid, MembershipRemoveParams { project\_id } params, RequestOptionsoptions?): void

DELETE/api/projects/{project\_id}/memberships/{id}/