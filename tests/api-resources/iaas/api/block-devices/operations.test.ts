// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource operations', () => {
  // Prism tests are disabled
  test.skip('promote', async () => {
    const responsePromise = client.iaas.api.blockDevices.operations.promote('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('promote: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.blockDevices.operations.promote(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('revert: only required params', async () => {
    const responsePromise = client.iaas.api.blockDevices.operations.revert('diskId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('revert: required and optional params', async () => {
    const response = await client.iaas.api.blockDevices.operations.revert('diskId', {
      id: 'id',
      apiVersion: 'apiVersion',
    });
  });

  // Prism tests are disabled
  test.skip('snapshots', async () => {
    const responsePromise = client.iaas.api.blockDevices.operations.snapshots('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('snapshots: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.blockDevices.operations.snapshots(
        'id',
        {
          apiVersion: 'apiVersion',
          description: 'description',
          name: 'name',
          snapshotProperties: {
            '0': '{',
            '1': '"',
            '2': 'i',
            '3': 'n',
            '4': 'c',
            '5': 'r',
            '6': 'e',
            '7': 'm',
            '8': 'e',
            '9': 'n',
            '10': 't',
            '11': 'a',
            '12': 'l',
            '13': '"',
            '14': ':',
            '15': ' ',
            '16': '"',
            '17': 't',
            '18': 'r',
            '19': 'u',
            '20': 'e',
            '21': '"',
            '22': ',',
          },
          tags: [{ key: 'env', value: 'dev' }],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });
});
