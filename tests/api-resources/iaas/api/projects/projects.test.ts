// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource projects', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.iaas.api.projects.create({ name: 'name' });
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
    const response = await client.iaas.api.projects.create({
      name: 'name',
      apiVersion: 'apiVersion',
      validatePrincipals: true,
      administrators: [{ email: 'administrator@vmware.com', type: 'user' }],
      constraints: {
        network: [{ expression: 'env:dev', mandatory: true }],
        storage: [{ expression: 'gold', mandatory: true }],
        extensibility: [{ expression: 'key:value', mandatory: true }],
      },
      customProperties: { property: 'value' },
      description: 'description',
      machineNamingTemplate: '${project.name}-test-${####}',
      members: [{ email: 'member@vmware.com', type: 'user' }],
      operationTimeout: 30,
      placementPolicy: 'DEFAULT',
      sharedResources: true,
      supervisors: [{ email: 'supervisor@vmware.com', type: 'user' }],
      viewers: [{ email: 'viewer@vmware.com', type: 'user' }],
      zoneAssignmentConfigurations: [
        {
          cpuLimit: 2048,
          maxNumberInstances: 50,
          memoryLimitMB: 2048,
          priority: 1,
          storageLimitGB: 20,
          zoneId: '77ee1',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.iaas.api.projects.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.projects.retrieve(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iaas.api.projects.update('id', { name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.iaas.api.projects.update('id', {
      name: 'name',
      apiVersion: 'apiVersion',
      validatePrincipals: true,
      administrators: [{ email: 'administrator@vmware.com', type: 'user' }],
      constraints: {
        network: [{ expression: 'env:dev', mandatory: true }],
        storage: [{ expression: 'gold', mandatory: true }],
        extensibility: [{ expression: 'key:value', mandatory: true }],
      },
      customProperties: { property: 'value' },
      description: 'description',
      machineNamingTemplate: '${project.name}-test-${####}',
      members: [{ email: 'member@vmware.com', type: 'user' }],
      operationTimeout: 30,
      placementPolicy: 'DEFAULT',
      sharedResources: true,
      supervisors: [{ email: 'supervisor@vmware.com', type: 'user' }],
      viewers: [{ email: 'viewer@vmware.com', type: 'user' }],
      zoneAssignmentConfigurations: [
        {
          cpuLimit: 2048,
          maxNumberInstances: 50,
          memoryLimitMB: 2048,
          priority: 1,
          storageLimitGB: 20,
          zoneId: '77ee1',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.iaas.api.projects.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.projects.list(
        {
          $count: true,
          $filter: '$filter',
          $orderBy: '$orderBy',
          $skip: 0,
          $top: 0,
          apiVersion: 'apiVersion',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.iaas.api.projects.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.projects.delete(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });
});
