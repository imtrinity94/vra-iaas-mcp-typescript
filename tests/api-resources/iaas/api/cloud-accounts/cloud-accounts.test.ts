// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cloudAccounts', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.iaas.api.cloudAccounts.retrieve('id');
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
      client.iaas.api.cloudAccounts.retrieve(
        'id',
        { $select: '$select', apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccounts.update('id', {
      apiVersion: 'apiVersion',
      cloudAccountProperties: { supportPublicImages: 'true', acceptSelfSignedCertificate: 'true' },
      name: 'name',
      regions: [{ externalRegionId: 'eastasia', name: 'East Asia' }],
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
    const response = await client.iaas.api.cloudAccounts.update('id', {
      apiVersion: 'apiVersion',
      cloudAccountProperties: { supportPublicImages: 'true', acceptSelfSignedCertificate: 'true' },
      name: 'name',
      regions: [{ externalRegionId: 'eastasia', name: 'East Asia' }],
      associatedCloudAccountIds: ['42f3e0d199d134755684cd935435a'],
      associatedMobilityCloudAccountIds: { '42f3e0d199d134755684cd935435a': 'BIDIRECTIONAL' },
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      createDefaultZones: true,
      customProperties: { sampleadapterProjectId: 'projectId' },
      description: 'description',
      privateKey: 'gfsScK345sGGaVdds222dasdfDDSSasdfdsa34fS',
      privateKeyId: 'ACDC55DB4MFH6ADG75KK',
      tags: [{ key: 'env', value: 'dev' }],
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccounts.delete('id', { apiVersion: 'apiVersion' });
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
    const response = await client.iaas.api.cloudAccounts.delete('id', {
      apiVersion: 'apiVersion',
      forceDelete: true,
    });
  });

  // Prism tests are disabled
  test.skip('cloudAccounts: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccounts.cloudAccounts({
      apiVersion: 'apiVersion',
      cloudAccountProperties: { supportPublicImages: 'true', acceptSelfSignedCertificate: 'true' },
      cloudAccountType: 'vsphere, aws, azure, nsxv, nsxt, vmc, avilb',
      name: 'name',
      regions: [{ externalRegionId: 'eastasia', name: 'East Asia' }],
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
  test.skip('cloudAccounts: required and optional params', async () => {
    const response = await client.iaas.api.cloudAccounts.cloudAccounts({
      apiVersion: 'apiVersion',
      cloudAccountProperties: { supportPublicImages: 'true', acceptSelfSignedCertificate: 'true' },
      cloudAccountType: 'vsphere, aws, azure, nsxv, nsxt, vmc, avilb',
      name: 'name',
      regions: [{ externalRegionId: 'eastasia', name: 'East Asia' }],
      validateOnly: 'validateOnly',
      associatedCloudAccountIds: ['42f3e0d199d134755684cd935435a'],
      associatedMobilityCloudAccountIds: { '42f3e0d199d134755684cd935435a': 'BIDIRECTIONAL' },
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      createDefaultZones: true,
      customProperties: { sampleadapterProjectId: 'projectId' },
      description: 'description',
      privateKey: 'gfsScK345sGGaVdds222dasdfDDSSasdfdsa34fS',
      privateKeyId: 'ACDC55DB4MFH6ADG75KK',
      tags: [{ key: 'env', value: 'dev' }],
    });
  });

  // Prism tests are disabled
  test.skip('healthCheck', async () => {
    const responsePromise = client.iaas.api.cloudAccounts.healthCheck('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('healthCheck: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.cloudAccounts.healthCheck(
        'id',
        { apiVersion: 'apiVersion', periodicHealthCheckId: 'periodicHealthCheckId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('privateImageEnumeration', async () => {
    const responsePromise = client.iaas.api.cloudAccounts.privateImageEnumeration('id');
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
      client.iaas.api.cloudAccounts.privateImageEnumeration(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveCloudAccounts', async () => {
    const responsePromise = client.iaas.api.cloudAccounts.retrieveCloudAccounts();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveCloudAccounts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.cloudAccounts.retrieveCloudAccounts(
        {
          $count: true,
          $filter: '$filter',
          $select: '$select',
          $skip: 0,
          $top: 0,
          apiVersion: 'apiVersion',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });
});
