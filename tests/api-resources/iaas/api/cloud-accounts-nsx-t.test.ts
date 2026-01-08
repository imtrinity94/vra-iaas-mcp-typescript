// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cloudAccountsNsxT', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.iaas.api.cloudAccountsNsxT.retrieve('id');
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
      client.iaas.api.cloudAccountsNsxT.retrieve(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsNsxT.update('id', {
      apiVersion: 'apiVersion',
      dcid: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
      hostName: 'nsxt.mycompany.com',
      name: 'name',
      password: 'cndhjslacd90ascdbasyoucbdh',
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
    const response = await client.iaas.api.cloudAccountsNsxT.update('id', {
      apiVersion: 'apiVersion',
      dcid: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
      hostName: 'nsxt.mycompany.com',
      name: 'name',
      password: 'cndhjslacd90ascdbasyoucbdh',
      username: 'administrator@mycompany.com',
      acceptSelfSignedCertificate: false,
      associatedCloudAccountIds: ['42f3e0d199d134755684cd935435a'],
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      description: 'description',
      tags: [{ key: 'env', value: 'dev' }],
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsNsxT.delete('id', { apiVersion: 'apiVersion' });
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
    const response = await client.iaas.api.cloudAccountsNsxT.delete('id', { apiVersion: 'apiVersion' });
  });

  // Prism tests are disabled
  test.skip('cloudAccountsNsxT: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsNsxT.cloudAccountsNsxT({
      apiVersion: 'apiVersion',
      dcid: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
      hostName: 'nsxt.mycompany.com',
      name: 'name',
      password: 'cndhjslacd90ascdbasyoucbdh',
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
  test.skip('cloudAccountsNsxT: required and optional params', async () => {
    const response = await client.iaas.api.cloudAccountsNsxT.cloudAccountsNsxT({
      apiVersion: 'apiVersion',
      dcid: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
      hostName: 'nsxt.mycompany.com',
      name: 'name',
      password: 'cndhjslacd90ascdbasyoucbdh',
      username: 'administrator@mycompany.com',
      validateOnly: 'validateOnly',
      acceptSelfSignedCertificate: false,
      associatedCloudAccountIds: ['42f3e0d199d134755684cd935435a'],
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      description: 'description',
      isGlobalManager: true,
      managerMode: true,
      tags: [{ key: 'env', value: 'dev' }],
    });
  });

  // Prism tests are disabled
  test.skip('retrieveCloudAccountsNsxT', async () => {
    const responsePromise = client.iaas.api.cloudAccountsNsxT.retrieveCloudAccountsNsxT();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveCloudAccountsNsxT: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.cloudAccountsNsxT.retrieveCloudAccountsNsxT(
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
