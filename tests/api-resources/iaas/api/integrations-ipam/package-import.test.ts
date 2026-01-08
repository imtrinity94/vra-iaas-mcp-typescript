// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas, { toFile } from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource packageImport', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iaas.api.integrationsIpam.packageImport.update('id', {
      'Tus-Resumable': '1.0.0',
      'Upload-Offset': 'Upload-Offset',
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
    const response = await client.iaas.api.integrationsIpam.packageImport.update('id', {
      'Tus-Resumable': '1.0.0',
      'Upload-Offset': 'Upload-Offset',
      apiVersion: 'apiVersion',
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // Prism tests are disabled
  test.skip('packageImport: only required params', async () => {
    const responsePromise = client.iaas.api.integrationsIpam.packageImport.packageImport({
      'Tus-Resumable': '1.0.0',
      'Upload-Length': 'Upload-Length',
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
  test.skip('packageImport: required and optional params', async () => {
    const response = await client.iaas.api.integrationsIpam.packageImport.packageImport({
      'Tus-Resumable': '1.0.0',
      'Upload-Length': 'Upload-Length',
      apiVersion: 'apiVersion',
      bundleId: 'bundleId',
      compressedBundle: 'U3RhaW5sZXNzIHJvY2tz',
      option: 'FAIL',
      properties: { foo: 'string' },
    });
  });
});
