// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource storageProfilesVsphere', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.iaas.api.storageProfilesVsphere.retrieve('id');
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
      client.iaas.api.storageProfilesVsphere.retrieve(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iaas.api.storageProfilesVsphere.update('id', {
      defaultItem: true,
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
    const response = await client.iaas.api.storageProfilesVsphere.update('id', {
      defaultItem: true,
      name: 'name',
      regionId: '31186',
      apiVersion: 'apiVersion',
      computeHostId: '8c4ba7aa-3520-344d-b118-4a2108aaabb8',
      datastoreId: '08d28',
      description: 'description',
      diskMode: 'undefined / independent-persistent / independent-nonpersistent',
      diskType: 'standard / firstClass',
      limitIops: '1000',
      priority: 2,
      provisioningType: 'thin / thick / eagerZeroedThick',
      shares: '2000',
      sharesLevel: 'low / normal / high / custom',
      storageFilterType: 'MANUAL',
      storagePolicyId: '6b59743af31d',
      storageProfileAssociations: [
        {
          associations: [{ dataStoreId: 'a42d016e-6b0e-4265-9881-692e90b76684', priority: 0 }],
          requestType: 'CREATE',
        },
      ],
      supportsEncryption: false,
      tags: [{ key: 'tier', value: 'silver' }],
      tagsToMatch: [{ key: 'tag1', value: 'value1' }],
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.iaas.api.storageProfilesVsphere.delete('id');
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
      client.iaas.api.storageProfilesVsphere.delete(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveStorageProfilesVsphere', async () => {
    const responsePromise = client.iaas.api.storageProfilesVsphere.retrieveStorageProfilesVsphere();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveStorageProfilesVsphere: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.storageProfilesVsphere.retrieveStorageProfilesVsphere(
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('storageProfilesVsphere: only required params', async () => {
    const responsePromise = client.iaas.api.storageProfilesVsphere.storageProfilesVsphere({
      defaultItem: true,
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
  test.skip('storageProfilesVsphere: required and optional params', async () => {
    const response = await client.iaas.api.storageProfilesVsphere.storageProfilesVsphere({
      defaultItem: true,
      name: 'name',
      regionId: '31186',
      apiVersion: 'apiVersion',
      computeHostId: '8c4ba7aa-3520-344d-b118-4a2108aaabb8',
      datastoreId: '08d28',
      description: 'description',
      diskMode: 'undefined / independent-persistent / independent-nonpersistent',
      diskType: 'standard / firstClass',
      limitIops: '1000',
      priority: 2,
      provisioningType: 'thin / thick / eagerZeroedThick',
      shares: '2000',
      sharesLevel: 'low / normal / high / custom',
      storageFilterType: 'MANUAL',
      storagePolicyId: '6b59743af31d',
      storageProfileAssociations: [
        {
          associations: [{ dataStoreId: 'a42d016e-6b0e-4265-9881-692e90b76684', priority: 0 }],
          requestType: 'CREATE',
        },
      ],
      supportsEncryption: false,
      tags: [{ key: 'tier', value: 'silver' }],
      tagsToMatch: [{ key: 'tag1', value: 'value1' }],
    });
  });
});
