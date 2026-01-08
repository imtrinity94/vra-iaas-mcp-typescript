// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource loadBalancers', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.iaas.api.loadBalancers.retrieve('id');
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
      client.iaas.api.loadBalancers.retrieve(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.iaas.api.loadBalancers.delete('id');
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
      client.iaas.api.loadBalancers.delete(
        'id',
        { apiVersion: 'apiVersion', forceDelete: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('loadBalancers: only required params', async () => {
    const responsePromise = client.iaas.api.loadBalancers.loadBalancers({
      name: 'name',
      nics: [{}],
      projectId: 'e058',
      routes: [
        {
          memberPort: '80',
          memberProtocol: 'TCP, UDP',
          port: '80',
          protocol: 'TCP, UDP',
        },
      ],
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
  test.skip('loadBalancers: required and optional params', async () => {
    const response = await client.iaas.api.loadBalancers.loadBalancers({
      name: 'name',
      nics: [
        {
          addresses: ['10.1.2.190'],
          customProperties: { awaitIp: 'true' },
          description: 'description',
          deviceIndex: 1,
          fabricNetworkId: '54097407-4532-460c-94a8-8f9e18f4c925',
          macAddress: '["00:50:56:99:d8:34"]',
          name: 'name',
          networkId: '54097407-4532-460c-94a8-8f9e18f4c925',
          securityGroupIds: ['string'],
        },
      ],
      projectId: 'e058',
      routes: [
        {
          memberPort: '80',
          memberProtocol: 'TCP, UDP',
          port: '80',
          protocol: 'TCP, UDP',
          algorithm: 'ROUND_ROBIN',
          algorithmParameters: 'uriLength=10\nurlParam=section',
          healthCheckConfiguration: {
            healthyThreshold: 2,
            httpMethod: 'GET, OPTIONS, POST, HEAD, PUT',
            intervalSeconds: 60,
            passiveMonitor: false,
            port: '80',
            protocol: 'HTTP, HTTPS',
            requestBody: 'http_request.body',
            responseBody: 'http_response.body',
            timeoutSeconds: 5,
            unhealthyThreshold: 5,
            urlPath: '/index.html',
          },
        },
      ],
      apiVersion: 'apiVersion',
      customProperties: { foo: 'string' },
      deploymentId: '123e4567-e89b-12d3-a456-426655440000',
      description: 'description',
      internetFacing: true,
      loggingLevel: 'ERROR, WARNING, INFO, DEBUG',
      tags: [{ key: 'ownedBy', value: 'Rainpole' }],
      targetLinks: ['/iaas/machines/eac3d'],
      type: 'SMALL, MEDIUM, LARGE',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveLoadBalancers', async () => {
    const responsePromise = client.iaas.api.loadBalancers.retrieveLoadBalancers();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveLoadBalancers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.loadBalancers.retrieveLoadBalancers(
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });
});
