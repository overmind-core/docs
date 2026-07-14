# Source: https://docs.overmindlab.ai/api/python/resources/projects

[API Reference](https://docs.overmindlab.ai/api/python)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Projects

##### [List projects](https://docs.overmindlab.ai/api/python/resources/projects/methods/list)

projects.list(ProjectListParams\*\*kwargs) \-> [ProjectListResponse](https://docs.overmindlab.ai/api/python/resources/projects#(resource)%20projects%20%3E%20(model)%20project_list_response%20%3E%20(schema))

GET/api/projects/

##### [Create project](https://docs.overmindlab.ai/api/python/resources/projects/methods/create)

projects.create(ProjectCreateParams\*\*kwargs) \-> [ProjectCreateResponse](https://docs.overmindlab.ai/api/python/resources/projects#(resource)%20projects%20%3E%20(model)%20project_create_response%20%3E%20(schema))

POST/api/projects/

##### [Get project](https://docs.overmindlab.ai/api/python/resources/projects/methods/retrieve)

projects.retrieve(strid) \-> [ProjectRetrieveResponse](https://docs.overmindlab.ai/api/python/resources/projects#(resource)%20projects%20%3E%20(model)%20project_retrieve_response%20%3E%20(schema))

GET/api/projects/{id}/

##### [Update project](https://docs.overmindlab.ai/api/python/resources/projects/methods/update)

projects.update(strid, ProjectUpdateParams\*\*kwargs) \-> [ProjectUpdateResponse](https://docs.overmindlab.ai/api/python/resources/projects#(resource)%20projects%20%3E%20(model)%20project_update_response%20%3E%20(schema))

PATCH/api/projects/{id}/

##### [Delete project](https://docs.overmindlab.ai/api/python/resources/projects/methods/delete)

projects.delete(strid)

DELETE/api/projects/{id}/

#### ProjectsMemberships

##### [List project members](https://docs.overmindlab.ai/api/python/resources/projects/subresources/memberships/methods/list)

projects.memberships.list(strproject\_id, MembershipListParams\*\*kwargs) \-> [MembershipListResponse](https://docs.overmindlab.ai/api/python/resources/projects#(resource)%20projects.memberships%20%3E%20(model)%20membership_list_response%20%3E%20(schema))

GET/api/projects/{project\_id}/memberships/

##### [Add a user to the project](https://docs.overmindlab.ai/api/python/resources/projects/subresources/memberships/methods/add)

projects.memberships.add(strproject\_id, MembershipAddParams\*\*kwargs) \-> [MembershipAddResponse](https://docs.overmindlab.ai/api/python/resources/projects#(resource)%20projects.memberships%20%3E%20(model)%20membership_add_response%20%3E%20(schema))

POST/api/projects/{project\_id}/memberships/

##### [Remove a user from the project](https://docs.overmindlab.ai/api/python/resources/projects/subresources/memberships/methods/remove)

projects.memberships.remove(strid, MembershipRemoveParams\*\*kwargs)

DELETE/api/projects/{project\_id}/memberships/{id}/