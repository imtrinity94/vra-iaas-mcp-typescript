// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tags', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.iaas.api.tags.create({ key: 'key' });
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
    const response = await client.iaas.api.tags.create({
      key: 'key',
      apiVersion: 'apiVersion',
      value: 'value',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.iaas.api.tags.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.tags.list(
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

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.iaas.api.tags.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.tags.delete(
        'id',
        { apiVersion: 'apiVersion', ignoreUsage: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('tagsUsage', async () => {
    const responsePromise = client.iaas.api.tags.tagsUsage({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
