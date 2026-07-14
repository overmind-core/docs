# Source: https://docs.overmindlab.ai/api/typescript/resources/projects/subresources/memberships

[API Reference](https://docs.overmindlab.ai/api/typescript)

[Projects](https://docs.overmindlab.ai/api/typescript/resources/projects)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Memberships

##### [List project members](https://docs.overmindlab.ai/api/typescript/resources/projects/subresources/memberships/methods/list)

client.projects.memberships.list(stringprojectID, MembershipListParams { ordering, page, search } query?, RequestOptionsoptions?): [MembershipListResponse](https://docs.overmindlab.ai/api/typescript/resources/projects#(resource)%20projects.memberships%20%3E%20(model)%20membership_list_response%20%3E%20(schema)) { count, results, next, previous }

GET/api/projects/{project\_id}/memberships/

##### [Add a user to the project](https://docs.overmindlab.ai/api/typescript/resources/projects/subresources/memberships/methods/add)

client.projects.memberships.add(stringprojectID, MembershipAddParams { user\_id } body, RequestOptionsoptions?): [MembershipAddResponse](https://docs.overmindlab.ai/api/typescript/resources/projects#(resource)%20projects.memberships%20%3E%20(model)%20membership_add_response%20%3E%20(schema)) { id, created\_at, project, 3 more }

POST/api/projects/{project\_id}/memberships/

##### [Remove a user from the project](https://docs.overmindlab.ai/api/typescript/resources/projects/subresources/memberships/methods/remove)

client.projects.memberships.remove(stringid, MembershipRemoveParams { project\_id } params, RequestOptionsoptions?): void

DELETE/api/projects/{project\_id}/memberships/{id}/