// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource computeNats', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.iaas.api.computeNats.retrieve('id');
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
      client.iaas.api.computeNats.retrieve(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.iaas.api.computeNats.delete('id');
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
      client.iaas.api.computeNats.delete(
        'id',
        { apiVersion: 'apiVersion', forceDelete: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('computeNats: only required params', async () => {
    const responsePromise = client.iaas.api.computeNats.computeNats({
      gateway: 'gateway',
      name: 'name',
      natRules: [
        {
          index: 0,
          targetLink:
            '/iaas/api/load-balancers/try6-45ef, /iaas/api/machines/ht54-a472/network-interfaces/dyd6-d67e',
        },
      ],
      projectId: 'e058',
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
  test.skip('computeNats: required and optional params', async () => {
    const response = await client.iaas.api.computeNats.computeNats({
      gateway: 'gateway',
      name: 'name',
      natRules: [
        {
          index: 0,
          targetLink:
            '/iaas/api/load-balancers/try6-45ef, /iaas/api/machines/ht54-a472/network-interfaces/dyd6-d67e',
          description: 'description',
          destinationPorts: 'any, 80, 5000-5100',
          kind: 'NAT44',
          protocol: 'TCP, UDP',
          sourceIPs: 'any, 10.20.156.101',
          sourcePorts: 'any, 80, 5000-5100',
          translatedPorts: 'any, 80, 5000-5100',
          type: 'DNAT',
        },
      ],
      projectId: 'e058',
      apiVersion: 'apiVersion',
      customProperties: { foo: 'string' },
      deploymentId: '123e4567-e89b-12d3-a456-426655440000',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveComputeNats', async () => {
    const responsePromise = client.iaas.api.computeNats.retrieveComputeNats();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveComputeNats: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.computeNats.retrieveComputeNats(
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });
});
