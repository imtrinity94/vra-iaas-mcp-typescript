// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource storageProfilesAzure', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.iaas.api.storageProfilesAzure.retrieve('id');
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
      client.iaas.api.storageProfilesAzure.retrieve(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iaas.api.storageProfilesAzure.update('id', {
      name: 'name',
      regionId: '31186',
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
    const response = await client.iaas.api.storageProfilesAzure.update('id', {
      name: 'name',
      regionId: '31186',
      apiVersion: 'apiVersion',
      dataDiskCaching: 'None / ReadOnly / ReadWrite',
      defaultItem: true,
      description: 'description',
      diskEncryptionSetId:
        '/subscriptions/b8ef63/resourceGroups/DiskEncryptionSets/providers/Microsoft.Compute/diskEncryptionSets/MyDES',
      diskType: 'Standard_LRS / Premium_LRS',
      osDiskCaching: 'None / ReadOnly / ReadWrite',
      storageAccountId: 'aaa82',
      supportsEncryption: false,
      tags: [{ key: 'tier', value: 'silver' }],
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.iaas.api.storageProfilesAzure.delete('id');
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
      client.iaas.api.storageProfilesAzure.delete(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveStorageProfilesAzure', async () => {
    const responsePromise = client.iaas.api.storageProfilesAzure.retrieveStorageProfilesAzure();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveStorageProfilesAzure: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.storageProfilesAzure.retrieveStorageProfilesAzure(
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('storageProfilesAzure: only required params', async () => {
    const responsePromise = client.iaas.api.storageProfilesAzure.storageProfilesAzure({
      name: 'name',
      regionId: '31186',
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
  test.skip('storageProfilesAzure: required and optional params', async () => {
    const response = await client.iaas.api.storageProfilesAzure.storageProfilesAzure({
      name: 'name',
      regionId: '31186',
      apiVersion: 'apiVersion',
      dataDiskCaching: 'None / ReadOnly / ReadWrite',
      defaultItem: true,
      description: 'description',
      diskEncryptionSetId:
        '/subscriptions/b8ef63/resourceGroups/DiskEncryptionSets/providers/Microsoft.Compute/diskEncryptionSets/MyDES',
      diskType: 'Standard_LRS / Premium_LRS',
      osDiskCaching: 'None / ReadOnly / ReadWrite',
      storageAccountId: 'aaa82',
      supportsEncryption: false,
      tags: [{ key: 'tier', value: 'silver' }],
    });
  });
});
