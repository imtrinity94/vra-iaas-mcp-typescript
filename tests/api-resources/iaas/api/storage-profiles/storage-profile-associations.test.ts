// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource storageProfileAssociations', () => {
  // Prism tests are disabled
  test.skip('retrieveStorageProfileAssociations', async () => {
    const responsePromise =
      client.iaas.api.storageProfiles.storageProfileAssociations.retrieveStorageProfileAssociations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveStorageProfileAssociations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.storageProfiles.storageProfileAssociations.retrieveStorageProfileAssociations(
        'id',
        {
          apiVersion: 'apiVersion',
          page: 0,
          size: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('updateStorageProfileAssociations: only required params', async () => {
    const responsePromise =
      client.iaas.api.storageProfiles.storageProfileAssociations.updateStorageProfileAssociations('id', {
        regionId: '31186',
        storageProfileAssociations: [
          {
            associations: [{ dataStoreId: 'a42d016e-6b0e-4265-9881-692e90b76684', priority: 0 }],
            requestType: 'CREATE',
          },
        ],
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
  test.skip('updateStorageProfileAssociations: required and optional params', async () => {
    const response =
      await client.iaas.api.storageProfiles.storageProfileAssociations.updateStorageProfileAssociations(
        'id',
        {
          regionId: '31186',
          storageProfileAssociations: [
            {
              associations: [{ dataStoreId: 'a42d016e-6b0e-4265-9881-692e90b76684', priority: 0 }],
              requestType: 'CREATE',
            },
          ],
          apiVersion: 'apiVersion',
        },
      );
  });
});
