// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource integrations', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.iaas.api.integrations.create({
      apiVersion: 'apiVersion',
      integrationProperties: { supportPublicImages: 'true', acceptSelfSignedCertificate: 'true' },
      integrationType: 'Active directory, Ansible, IPAM, vRO, GitHub',
      name: 'name',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.iaas.api.integrations.create({
      apiVersion: 'apiVersion',
      integrationProperties: { supportPublicImages: 'true', acceptSelfSignedCertificate: 'true' },
      integrationType: 'Active directory, Ansible, IPAM, vRO, GitHub',
      name: 'name',
      validateOnly: 'validateOnly',
      associatedCloudAccountIds: ['42f3e0d199d134755684cd935435a'],
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      customProperties: { sampleadapterProjectId: 'projectId' },
      description: 'description',
      privateKey: 'gfsScK345sGGaVdds222dasdfDDSSasdfdsa34fS',
      privateKeyId: 'ACDC55DB4MFH6ADG75KK',
      tags: [{ key: 'env', value: 'dev' }],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.iaas.api.integrations.retrieve('id', { apiVersion: 'apiVersion' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.iaas.api.integrations.retrieve('id', {
      apiVersion: 'apiVersion',
      $select: '$select',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iaas.api.integrations.update('id', {
      apiVersion: 'apiVersion',
      integrationProperties: { providerId: 'providerID' },
      name: 'name',
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
    const response = await client.iaas.api.integrations.update('id', {
      apiVersion: 'apiVersion',
      integrationProperties: { providerId: 'providerID' },
      name: 'name',
      associatedCloudAccountIds: ['42f3e0d199d134755684cd935435a'],
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      customProperties: { sampleadapterProjectId: 'projectId' },
      description: 'description',
      privateKey: 'gfsScK345sGGaVdds222dasdfDDSSasdfdsa34fS',
      privateKeyId: 'ACDC55DB4MFH6ADG75KK',
      tags: [{ key: 'env', value: 'dev' }],
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.iaas.api.integrations.list({ apiVersion: 'apiVersion' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.iaas.api.integrations.list({
      apiVersion: 'apiVersion',
      $count: true,
      $filter: '$filter',
      $select: '$select',
      $skip: 0,
      $top: 0,
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.iaas.api.integrations.delete('id', { apiVersion: 'apiVersion' });
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
    const response = await client.iaas.api.integrations.delete('id', { apiVersion: 'apiVersion' });
  });
});
