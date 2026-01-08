// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource naming', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.iaas.api.naming.create({ apiVersion: 'apiVersion' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.iaas.api.naming.create({
      apiVersion: 'apiVersion',
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      description: 'description',
      name: 'name',
      projects: [
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          active: true,
          defaultOrg: true,
          orgId: 'orgId',
          projectId: 'projectId',
          projectName: 'projectName',
        },
      ],
      templates: [
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          counters: [
            {
              id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              active: true,
              cnResourceType: 'COMPUTE',
              currentCounter: 0,
              projectId: 'projectId',
            },
          ],
          incrementStep: 0,
          name: 'name',
          pattern: 'pattern',
          resourceDefault: true,
          resourceType: 'COMPUTE',
          resourceTypeName: 'resourceTypeName',
          startCounter: 0,
          staticPattern: 'staticPattern',
          uniqueName: true,
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.iaas.api.naming.retrieve('id', { apiVersion: 'apiVersion' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.iaas.api.naming.retrieve('id', { apiVersion: 'apiVersion' });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.iaas.api.naming.list({ apiVersion: 'apiVersion' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.iaas.api.naming.list({ apiVersion: 'apiVersion' });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.iaas.api.naming.delete('id', { apiVersion: 'apiVersion' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.iaas.api.naming.delete('id', { apiVersion: 'apiVersion' });
  });
});
