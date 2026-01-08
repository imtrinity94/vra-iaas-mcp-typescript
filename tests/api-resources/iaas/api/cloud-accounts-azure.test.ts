// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cloudAccountsAzure', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.iaas.api.cloudAccountsAzure.retrieve('id');
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
      client.iaas.api.cloudAccountsAzure.retrieve(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsAzure.update('id', {
      apiVersion: 'apiVersion',
      clientApplicationId: '3287dd6e-76d8-41b7-9856-2584969e7739',
      clientApplicationSecretKey: 'GDfdasDasdASFas321das32cas2x3dsXCSA76xdcasg=',
      name: 'name',
      regions: [{ externalRegionId: 'eastasia', name: 'East Asia' }],
      subscriptionId: '064865b2-e914-4717-b415-8806d17948f7',
      tenantId: '9a13d920-4691-4e2d-b5d5-9c4c1279bc9a',
    });
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
    const response = await client.iaas.api.cloudAccountsAzure.update('id', {
      apiVersion: 'apiVersion',
      clientApplicationId: '3287dd6e-76d8-41b7-9856-2584969e7739',
      clientApplicationSecretKey: 'GDfdasDasdASFas321das32cas2x3dsXCSA76xdcasg=',
      name: 'name',
      regions: [{ externalRegionId: 'eastasia', name: 'East Asia' }],
      subscriptionId: '064865b2-e914-4717-b415-8806d17948f7',
      tenantId: '9a13d920-4691-4e2d-b5d5-9c4c1279bc9a',
      createDefaultZones: true,
      description: 'description',
      tags: [{ key: 'env', value: 'dev' }],
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsAzure.delete('id', { apiVersion: 'apiVersion' });
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
    const response = await client.iaas.api.cloudAccountsAzure.delete('id', { apiVersion: 'apiVersion' });
  });

  // Prism tests are disabled
  test.skip('cloudAccountsAzure: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsAzure.cloudAccountsAzure({
      apiVersion: 'apiVersion',
      clientApplicationId: '3287dd6e-76d8-41b7-9856-2584969e7739',
      clientApplicationSecretKey: 'GDfdasDasdASFas321das32cas2x3dsXCSA76xdcasg=',
      name: 'name',
      regions: [{ externalRegionId: 'eastasia', name: 'East Asia' }],
      subscriptionId: '064865b2-e914-4717-b415-8806d17948f7',
      tenantId: '9a13d920-4691-4e2d-b5d5-9c4c1279bc9a',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('cloudAccountsAzure: required and optional params', async () => {
    const response = await client.iaas.api.cloudAccountsAzure.cloudAccountsAzure({
      apiVersion: 'apiVersion',
      clientApplicationId: '3287dd6e-76d8-41b7-9856-2584969e7739',
      clientApplicationSecretKey: 'GDfdasDasdASFas321das32cas2x3dsXCSA76xdcasg=',
      name: 'name',
      regions: [{ externalRegionId: 'eastasia', name: 'East Asia' }],
      subscriptionId: '064865b2-e914-4717-b415-8806d17948f7',
      tenantId: '9a13d920-4691-4e2d-b5d5-9c4c1279bc9a',
      validateOnly: 'validateOnly',
      createDefaultZones: true,
      description: 'description',
      tags: [{ key: 'env', value: 'dev' }],
    });
  });

  // Prism tests are disabled
  test.skip('privateImageEnumeration', async () => {
    const responsePromise = client.iaas.api.cloudAccountsAzure.privateImageEnumeration('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('privateImageEnumeration: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.cloudAccountsAzure.privateImageEnumeration(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('regionEnumeration: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsAzure.regionEnumeration({
      apiVersion: 'apiVersion',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('regionEnumeration: required and optional params', async () => {
    const response = await client.iaas.api.cloudAccountsAzure.regionEnumeration({
      apiVersion: 'apiVersion',
      clientApplicationId: '3287dd6e-76d8-41b7-9856-2584969e7739',
      clientApplicationSecretKey: 'GDfdasDasdASFas321das32cas2x3dsXCSA76xdcasg=',
      cloudAccountId: 'b8b7a918-342e-4a53-a3b0-b935da0fe601',
      subscriptionId: '064865b2-e914-4717-b415-8806d17948f7',
      tenantId: '9a13d920-4691-4e2d-b5d5-9c4c1279bc9a',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveCloudAccountsAzure', async () => {
    const responsePromise = client.iaas.api.cloudAccountsAzure.retrieveCloudAccountsAzure();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveCloudAccountsAzure: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.cloudAccountsAzure.retrieveCloudAccountsAzure(
        {
          $skip: 0,
          $top: 0,
          apiVersion: 'apiVersion',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });
});
