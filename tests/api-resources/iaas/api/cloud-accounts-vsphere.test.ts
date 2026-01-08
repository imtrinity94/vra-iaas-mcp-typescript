// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cloudAccountsVsphere', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVsphere.retrieve('id');
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
      client.iaas.api.cloudAccountsVsphere.retrieve(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVsphere.update('id', {
      apiVersion: 'apiVersion',
      hostName: 'vc.mycompany.com',
      name: 'name',
      regions: [{ externalRegionId: 'Datacenter:datacenter-3', name: 'Datacenter:datacenter-3' }],
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
    const response = await client.iaas.api.cloudAccountsVsphere.update('id', {
      apiVersion: 'apiVersion',
      hostName: 'vc.mycompany.com',
      name: 'name',
      regions: [{ externalRegionId: 'Datacenter:datacenter-3', name: 'Datacenter:datacenter-3' }],
      acceptSelfSignedCertificate: false,
      associatedCloudAccountIds: ['42f3e0d199d134755684cd935435a'],
      associatedMobilityCloudAccountIds: { '42f3e0d199d134755684cd935435a': 'BIDIRECTIONAL' },
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      createDefaultZones: true,
      dcid: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
      description: 'description',
      environment: 'aap',
      password: 'cndhjslacd90ascdbasyoucbdh',
      tags: [{ key: 'env', value: 'dev' }],
      username: 'administrator@mycompany.com',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVsphere.delete('id', { apiVersion: 'apiVersion' });
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
    const response = await client.iaas.api.cloudAccountsVsphere.delete('id', { apiVersion: 'apiVersion' });
  });

  // Prism tests are disabled
  test.skip('cloudAccountsVsphere: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVsphere.cloudAccountsVsphere({
      apiVersion: 'apiVersion',
      hostName: 'vc.mycompany.com',
      name: 'name',
      regions: [{ externalRegionId: 'Datacenter:datacenter-3', name: 'Datacenter:datacenter-3' }],
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
  test.skip('cloudAccountsVsphere: required and optional params', async () => {
    const response = await client.iaas.api.cloudAccountsVsphere.cloudAccountsVsphere({
      apiVersion: 'apiVersion',
      hostName: 'vc.mycompany.com',
      name: 'name',
      regions: [{ externalRegionId: 'Datacenter:datacenter-3', name: 'Datacenter:datacenter-3' }],
      validateOnly: 'validateOnly',
      acceptSelfSignedCertificate: false,
      associatedCloudAccountIds: ['42f3e0d199d134755684cd935435a'],
      associatedMobilityCloudAccountIds: { '42f3e0d199d134755684cd935435a': 'BIDIRECTIONAL' },
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      createDefaultZones: true,
      dcid: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
      description: 'description',
      environment: 'aap',
      password: 'cndhjslacd90ascdbasyoucbdh',
      tags: [{ key: 'env', value: 'dev' }],
      username: 'administrator@mycompany.com',
    });
  });

  // Prism tests are disabled
  test.skip('privateImageEnumeration', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVsphere.privateImageEnumeration('id');
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
      client.iaas.api.cloudAccountsVsphere.privateImageEnumeration(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('regionEnumeration: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVsphere.regionEnumeration({
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
    const response = await client.iaas.api.cloudAccountsVsphere.regionEnumeration({
      apiVersion: 'apiVersion',
      acceptSelfSignedCertificate: false,
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      cloudAccountId: 'b8b7a918-342e-4a53-a3b0-b935da0fe601',
      dcid: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
      environment: 'aap',
      hostName: 'vc.mycompany.com',
      password: 'cndhjslacd90ascdbasyoucbdh',
      username: 'administrator@mycompany.com',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveCloudAccountsVsphere', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVsphere.retrieveCloudAccountsVsphere();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveCloudAccountsVsphere: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.cloudAccountsVsphere.retrieveCloudAccountsVsphere(
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
