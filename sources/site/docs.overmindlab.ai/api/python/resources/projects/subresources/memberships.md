# Source: https://docs.overmindlab.ai/api/python/resources/projects/subresources/memberships

[API Reference](https://docs.overmindlab.ai/api/python)

[Projects](https://docs.overmindlab.ai/api/python/resources/projects)

Copy Markdown

Open in **Claude**

Open in **ChatGPT**

Open in **Cursor**

---

**Copy Markdown**

**View as Markdown**

# Memberships

##### [List project members](https://docs.overmindlab.ai/api/python/resources/projects/subresources/memberships/methods/list)

projects.memberships.list(strproject\_id, MembershipListParams\*\*kwargs) \-> [MembershipListResponse](https://docs.overmindlab.ai/api/python/resources/projects#(resource)%20projects.memberships%20%3E%20(model)%20membership_list_response%20%3E%20(schema))

GET/api/projects/{project\_id}/memberships/

##### [Add a user to the project](https://docs.overmindlab.ai/api/python/resources/projects/subresources/memberships/methods/add)

projects.memberships.add(strproject\_id, MembershipAddParams\*\*kwargs) \-> [MembershipAddResponse](https://docs.overmindlab.ai/api/python/resources/projects#(resource)%20projects.memberships%20%3E%20(model)%20membership_add_response%20%3E%20(schema))

POST/api/projects/{project\_id}/memberships/

##### [Remove a user from the project](https://docs.overmindlab.ai/api/python/resources/projects/subresources/memberships/methods/remove)

projects.memberships.remove(strid, MembershipRemoveParams\*\*kwargs)

DELETE/api/projects/{project\_id}/memberships/{id}/