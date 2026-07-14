# Source: https://docs.overmindlab.ai/api

[Overview](https://docs.overmindlab.ai/api)

# API Reference

### Libraries

TypeScript

0.0.1

npm install git+ssh://git@github.com:stainless-sdks/overmind-lab-typescript.git

 [Read Docs](https://docs.overmindlab.ai/api/typescript)

Python

0.0.1

pip install git+ssh://git@github.com/stainless-sdks/overmind-lab-python.git

 [Read Docs](https://docs.overmindlab.ai/api/python)

### API Overview

#### Agents

##### [List agents](https://docs.overmindlab.ai/api/resources/agents/methods/list)

GET/api/agents/

##### [Create agent](https://docs.overmindlab.ai/api/resources/agents/methods/create)

POST/api/agents/

##### [Get agent](https://docs.overmindlab.ai/api/resources/agents/methods/retrieve)

GET/api/agents/{id}/

##### [Update agent](https://docs.overmindlab.ai/api/resources/agents/methods/update)

PATCH/api/agents/{id}/

##### [Soft-delete agent](https://docs.overmindlab.ai/api/resources/agents/methods/delete)

DELETE/api/agents/{id}/

##### [Get agent eval spec](https://docs.overmindlab.ai/api/resources/agents/methods/retrieve_eval_spec)

GET/api/agents/{id}/eval\_spec/

#### Auth

##### [Current user profile](https://docs.overmindlab.ai/api/resources/auth/methods/retrieve_current_user)

GET/api/auth/me/

##### [Register](https://docs.overmindlab.ai/api/resources/auth/methods/register)

POST/api/auth/register/

#### AuthAPI Keys

##### [List API tokens](https://docs.overmindlab.ai/api/resources/auth/subresources/api_keys/methods/list)

GET/api/auth/api-keys/

##### [Generate API token](https://docs.overmindlab.ai/api/resources/auth/subresources/api_keys/methods/create)

POST/api/auth/api-keys/

##### [Revoke API token](https://docs.overmindlab.ai/api/resources/auth/subresources/api_keys/methods/revoke)

DELETE/api/auth/api-keys/{id}/

#### AuthToken

##### [Create](https://docs.overmindlab.ai/api/resources/auth/subresources/token/methods/create)

POST/api/auth/token/

##### [Refresh](https://docs.overmindlab.ai/api/resources/auth/subresources/token/methods/refresh)

POST/api/auth/token/refresh/

#### Datasets

##### [List datasets](https://docs.overmindlab.ai/api/resources/datasets/methods/list)

GET/api/datasets/

##### [Create dataset (auto-increments version per agent)](https://docs.overmindlab.ai/api/resources/datasets/methods/create)

POST/api/datasets/

##### [Get dataset (with datapoints)](https://docs.overmindlab.ai/api/resources/datasets/methods/retrieve)

GET/api/datasets/{id}/

##### [Delete dataset version](https://docs.overmindlab.ai/api/resources/datasets/methods/delete)

DELETE/api/datasets/{id}/

##### [Activate dataset](https://docs.overmindlab.ai/api/resources/datasets/methods/activate)

POST/api/datasets/{id}/activate/

##### [List datapoints for a dataset](https://docs.overmindlab.ai/api/resources/datasets/methods/list_datapoints)

GET/api/datasets/{id}/datapoints/

#### Job Iterations

##### [List job iterations](https://docs.overmindlab.ai/api/resources/job_iterations/methods/list)

GET/api/job-iterations/

##### [Create job iteration](https://docs.overmindlab.ai/api/resources/job_iterations/methods/create)

POST/api/job-iterations/

##### [Get job iteration](https://docs.overmindlab.ai/api/resources/job_iterations/methods/retrieve)

GET/api/job-iterations/{id}/

##### [Update job iteration](https://docs.overmindlab.ai/api/resources/job_iterations/methods/update)

PATCH/api/job-iterations/{id}/

##### [Delete job iteration](https://docs.overmindlab.ai/api/resources/job_iterations/methods/delete)

DELETE/api/job-iterations/{id}/

#### Jobs

##### [List jobs](https://docs.overmindlab.ai/api/resources/jobs/methods/list)

GET/api/jobs/

##### [Create job](https://docs.overmindlab.ai/api/resources/jobs/methods/create)

POST/api/jobs/

##### [Get job (with iterations)](https://docs.overmindlab.ai/api/resources/jobs/methods/retrieve)

GET/api/jobs/{id}/

##### [Update job](https://docs.overmindlab.ai/api/resources/jobs/methods/update)

PATCH/api/jobs/{id}/

##### [Delete job](https://docs.overmindlab.ai/api/resources/jobs/methods/delete)

DELETE/api/jobs/{id}/

#### Projects

##### [List projects](https://docs.overmindlab.ai/api/resources/projects/methods/list)

GET/api/projects/

##### [Create project](https://docs.overmindlab.ai/api/resources/projects/methods/create)

POST/api/projects/

##### [Get project](https://docs.overmindlab.ai/api/resources/projects/methods/retrieve)

GET/api/projects/{id}/

##### [Update project](https://docs.overmindlab.ai/api/resources/projects/methods/update)

PATCH/api/projects/{id}/

##### [Delete project](https://docs.overmindlab.ai/api/resources/projects/methods/delete)

DELETE/api/projects/{id}/

#### ProjectsMemberships

##### [List project members](https://docs.overmindlab.ai/api/resources/projects/subresources/memberships/methods/list)

GET/api/projects/{project\_id}/memberships/

##### [Add a user to the project](https://docs.overmindlab.ai/api/resources/projects/subresources/memberships/methods/add)

POST/api/projects/{project\_id}/memberships/

##### [Remove a user from the project](https://docs.overmindlab.ai/api/resources/projects/subresources/memberships/methods/remove)

DELETE/api/projects/{project\_id}/memberships/{id}/

#### Traces

##### [List traces (root spans)](https://docs.overmindlab.ai/api/resources/traces/methods/list)

GET/api/traces/

##### [Get a trace and all its spans](https://docs.overmindlab.ai/api/resources/traces/methods/retrieve)

GET/api/traces/{trace\_id}/

##### [List distinct service names visible to the caller](https://docs.overmindlab.ai/api/resources/traces/methods/list_services)

GET/api/traces/services/

#### Health

##### [Check](https://docs.overmindlab.ai/api/resources/health/methods/check)

GET/health