// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cloudAccountsAvilb', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.iaas.api.cloudAccountsAvilb.retrieve('id');
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
      client.iaas.api.cloudAccountsAvilb.retrieve(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsAvilb.update('id', {
      apiVersion: 'apiVersion',
      hostName: 'avilb.mycompany.com',
      name: 'name',
      password: 'cndhjslacd90ascdbasyoucbdh',
      regions: [{ externalRegionId: 'europe-west2', name: 'europe-west2' }],
      username: 'administrator@mycompany.com',
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
    const response = await client.iaas.api.cloudAccountsAvilb.update('id', {
      apiVersion: 'apiVersion',
      hostName: 'avilb.mycompany.com',
      name: 'name',
      password: 'cndhjslacd90ascdbasyoucbdh',
      regions: [{ externalRegionId: 'europe-west2', name: 'europe-west2' }],
      username: 'administrator@mycompany.com',
      acceptSelfSignedCertificate: false,
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      cloudAccountProperties: {
        cloud: 'cloud-vsphere-connector',
        tenant: 'mytenant',
        apiVersion: '22.0.1',
      },
      createDefaultZones: false,
      description: 'description',
      tags: [{ key: 'env', value: 'dev' }],
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsAvilb.delete('id', { apiVersion: 'apiVersion' });
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
    const response = await client.iaas.api.cloudAccountsAvilb.delete('id', { apiVersion: 'apiVersion' });
  });

  // Prism tests are disabled
  test.skip('cloudAccountsAvilb: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsAvilb.cloudAccountsAvilb({
      apiVersion: 'apiVersion',
      hostName: 'avilb.mycompany.com',
      name: 'name',
      password: 'cndhjslacd90ascdbasyoucbdh',
      regions: [{ externalRegionId: 'europe-west2', name: 'europe-west2' }],
      username: 'administrator@mycompany.com',
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
  test.skip('cloudAccountsAvilb: required and optional params', async () => {
    const response = await client.iaas.api.cloudAccountsAvilb.cloudAccountsAvilb({
      apiVersion: 'apiVersion',
      hostName: 'avilb.mycompany.com',
      name: 'name',
      password: 'cndhjslacd90ascdbasyoucbdh',
      regions: [{ externalRegionId: 'europe-west2', name: 'europe-west2' }],
      username: 'administrator@mycompany.com',
      acceptSelfSignedCertificate: false,
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      cloudAccountProperties: {
        cloud: 'cloud-vsphere-connector',
        tenant: 'mytenant',
        apiVersion: '22.0.1',
      },
      createDefaultZones: false,
      description: 'description',
      tags: [{ key: 'env', value: 'dev' }],
    });
  });

  // Prism tests are disabled
  test.skip('retrieveCloudAccountsAvilb', async () => {
    const responsePromise = client.iaas.api.cloudAccountsAvilb.retrieveCloudAccountsAvilb();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveCloudAccountsAvilb: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.cloudAccountsAvilb.retrieveCloudAccountsAvilb(
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
