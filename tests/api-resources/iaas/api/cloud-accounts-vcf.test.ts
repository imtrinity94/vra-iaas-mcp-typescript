// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cloudAccountsVcf', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVcf.retrieve('id');
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
      client.iaas.api.cloudAccountsVcf.retrieve(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVcf.update('id', {
      apiVersion: 'apiVersion',
      name: 'name',
      nsxHostName: 'nsxt.mycompany.com',
      nsxPassword: 'cndhjslacd90ascdbasyoucbdh',
      nsxUsername: 'administrator@mycompany.com',
      regions: [{ externalRegionId: 'us-east-1', name: 'us-east-1' }],
      vcenterHostName: 'vc.mycompany.com',
      vcenterPassword: 'cndhjslacd90ascdbasyoucbdh',
      vcenterUsername: 'administrator@mycompany.com',
      workloadDomainId: 'workloadDomainId',
      workloadDomainName: 'Management',
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
    const response = await client.iaas.api.cloudAccountsVcf.update('id', {
      apiVersion: 'apiVersion',
      name: 'name',
      nsxHostName: 'nsxt.mycompany.com',
      nsxPassword: 'cndhjslacd90ascdbasyoucbdh',
      nsxUsername: 'administrator@mycompany.com',
      regions: [{ externalRegionId: 'us-east-1', name: 'us-east-1' }],
      vcenterHostName: 'vc.mycompany.com',
      vcenterPassword: 'cndhjslacd90ascdbasyoucbdh',
      vcenterUsername: 'administrator@mycompany.com',
      workloadDomainId: 'workloadDomainId',
      workloadDomainName: 'Management',
      acceptSelfSignedCertificate: false,
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      createDefaultZones: true,
      dcId: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
      description: 'description',
      nsxCertificate: 'nsxCertificate',
      sddcManagerId: 'sddcManagerId',
      tags: [{ key: 'env', value: 'dev' }],
      vcenterCertificate: 'vcenterCertificate',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVcf.delete('id', { apiVersion: 'apiVersion' });
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
    const response = await client.iaas.api.cloudAccountsVcf.delete('id', { apiVersion: 'apiVersion' });
  });

  // Prism tests are disabled
  test.skip('cloudAccountsVcf: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVcf.cloudAccountsVcf({
      apiVersion: 'apiVersion',
      name: 'name',
      nsxHostName: 'nsxt.mycompany.com',
      nsxPassword: 'cndhjslacd90ascdbasyoucbdh',
      nsxUsername: 'administrator@mycompany.com',
      regions: [{ externalRegionId: 'us-east-1', name: 'us-east-1' }],
      vcenterHostName: 'vc.mycompany.com',
      vcenterPassword: 'cndhjslacd90ascdbasyoucbdh',
      vcenterUsername: 'administrator@mycompany.com',
      workloadDomainId: 'workloadDomainId',
      workloadDomainName: 'Management',
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
  test.skip('cloudAccountsVcf: required and optional params', async () => {
    const response = await client.iaas.api.cloudAccountsVcf.cloudAccountsVcf({
      apiVersion: 'apiVersion',
      name: 'name',
      nsxHostName: 'nsxt.mycompany.com',
      nsxPassword: 'cndhjslacd90ascdbasyoucbdh',
      nsxUsername: 'administrator@mycompany.com',
      regions: [{ externalRegionId: 'us-east-1', name: 'us-east-1' }],
      vcenterHostName: 'vc.mycompany.com',
      vcenterPassword: 'cndhjslacd90ascdbasyoucbdh',
      vcenterUsername: 'administrator@mycompany.com',
      workloadDomainId: 'workloadDomainId',
      workloadDomainName: 'Management',
      validateOnly: 'validateOnly',
      acceptSelfSignedCertificate: false,
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      createDefaultZones: true,
      dcId: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
      description: 'description',
      nsxCertificate: 'nsxCertificate',
      sddcManagerId: 'sddcManagerId',
      tags: [{ key: 'env', value: 'dev' }],
      vcenterCertificate: 'vcenterCertificate',
    });
  });

  // Prism tests are disabled
  test.skip('privateImageEnumeration', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVcf.privateImageEnumeration('id');
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
      client.iaas.api.cloudAccountsVcf.privateImageEnumeration(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('regionEnumeration: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVcf.regionEnumeration({ apiVersion: 'apiVersion' });
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
    const response = await client.iaas.api.cloudAccountsVcf.regionEnumeration({
      apiVersion: 'apiVersion',
      acceptSelfSignedCertificate: false,
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      cloudAccountId: 'b8b7a918-342e-4a53-a3b0-b935da0fe601',
      dcId: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
      nsxCertificate: 'nsxCertificate',
      nsxHostName: 'nsxt.mycompany.com',
      nsxPassword: 'cndhjslacd90ascdbasyoucbdh',
      nsxUsername: 'administrator@mycompany.com',
      sddcManagerId: 'sddcManagerId',
      vcenterCertificate: 'vcenterCertificate',
      vcenterHostName: 'vc.mycompany.com',
      vcenterPassword: 'cndhjslacd90ascdbasyoucbdh',
      vcenterUsername: 'administrator@mycompany.com',
      workloadDomainId: 'workloadDomainId',
      workloadDomainName: 'Management',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveCloudAccountsVcf', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVcf.retrieveCloudAccountsVcf();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveCloudAccountsVcf: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.cloudAccountsVcf.retrieveCloudAccountsVcf(
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
