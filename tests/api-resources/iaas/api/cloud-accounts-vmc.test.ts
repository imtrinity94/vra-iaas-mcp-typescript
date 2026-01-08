// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cloudAccountsVmc', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVmc.retrieve('id');
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
      client.iaas.api.cloudAccountsVmc.retrieve(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVmc.update('id', {
      apiVersion: 'apiVersion',
      apiKey: 'apiKey',
      dcId: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
      hostName: 'vc1.vmware.com',
      name: 'name',
      nsxHostName: 'nsxManager.sddc-52-12-8-145.vmwaretest.com',
      password: 'cndhjslacd90ascdbasyoucbdh',
      regions: [{ externalRegionId: 'Datacenter:datacenter-3', name: 'Datacenter:datacenter-3' }],
      sddcId: 'CMBU-PRD-NSXT-M8GA-090319',
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
    const response = await client.iaas.api.cloudAccountsVmc.update('id', {
      apiVersion: 'apiVersion',
      apiKey: 'apiKey',
      dcId: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
      hostName: 'vc1.vmware.com',
      name: 'name',
      nsxHostName: 'nsxManager.sddc-52-12-8-145.vmwaretest.com',
      password: 'cndhjslacd90ascdbasyoucbdh',
      regions: [{ externalRegionId: 'Datacenter:datacenter-3', name: 'Datacenter:datacenter-3' }],
      sddcId: 'CMBU-PRD-NSXT-M8GA-090319',
      username: 'administrator@mycompany.com',
      acceptSelfSignedCertificate: false,
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      createDefaultZones: true,
      description: 'description',
      environment: 'aap',
      tags: [{ key: 'env', value: 'dev' }],
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVmc.delete('id', { apiVersion: 'apiVersion' });
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
    const response = await client.iaas.api.cloudAccountsVmc.delete('id', { apiVersion: 'apiVersion' });
  });

  // Prism tests are disabled
  test.skip('cloudAccountsVmc: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVmc.cloudAccountsVmc({
      apiVersion: 'apiVersion',
      apiKey: 'apiKey',
      dcId: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
      hostName: 'vc1.vmware.com',
      name: 'name',
      nsxHostName: 'nsxManager.sddc-52-12-8-145.vmwaretest.com',
      password: 'cndhjslacd90ascdbasyoucbdh',
      regions: [{ externalRegionId: 'Datacenter:datacenter-3', name: 'Datacenter:datacenter-3' }],
      sddcId: 'CMBU-PRD-NSXT-M8GA-090319',
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
  test.skip('cloudAccountsVmc: required and optional params', async () => {
    const response = await client.iaas.api.cloudAccountsVmc.cloudAccountsVmc({
      apiVersion: 'apiVersion',
      apiKey: 'apiKey',
      dcId: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
      hostName: 'vc1.vmware.com',
      name: 'name',
      nsxHostName: 'nsxManager.sddc-52-12-8-145.vmwaretest.com',
      password: 'cndhjslacd90ascdbasyoucbdh',
      regions: [{ externalRegionId: 'Datacenter:datacenter-3', name: 'Datacenter:datacenter-3' }],
      sddcId: 'CMBU-PRD-NSXT-M8GA-090319',
      username: 'administrator@mycompany.com',
      validateOnly: 'validateOnly',
      acceptSelfSignedCertificate: false,
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      createDefaultZones: true,
      description: 'description',
      environment: 'aap',
      tags: [{ key: 'env', value: 'dev' }],
    });
  });

  // Prism tests are disabled
  test.skip('privateImageEnumeration', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVmc.privateImageEnumeration('id');
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
      client.iaas.api.cloudAccountsVmc.privateImageEnumeration(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('regionEnumeration: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVmc.regionEnumeration({ apiVersion: 'apiVersion' });
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
    const response = await client.iaas.api.cloudAccountsVmc.regionEnumeration({
      apiVersion: 'apiVersion',
      acceptSelfSignedCertificate: false,
      apiKey: 'apiKey',
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      cloudAccountId: 'b8b7a918-342e-4a53-a3b0-b935da0fe601',
      cspHostName: 'console-stg.cloud.vmware.com',
      dcId: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
      environment: 'aap',
      hostName: 'vc1.vmware.com',
      nsxHostName: 'nsxManager.sddc-52-12-8-145.vmwaretest.com',
      password: 'cndhjslacd90ascdbasyoucbdh',
      sddcId: 'CMBU-PRD-NSXT-M8GA-090319',
      username: 'administrator@mycompany.com',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveCloudAccountsVmc', async () => {
    const responsePromise = client.iaas.api.cloudAccountsVmc.retrieveCloudAccountsVmc();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveCloudAccountsVmc: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.cloudAccountsVmc.retrieveCloudAccountsVmc(
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
