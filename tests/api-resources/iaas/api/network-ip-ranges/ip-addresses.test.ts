// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ipAddresses', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.iaas.api.networkIPRanges.ipAddresses.retrieve('ipAddressId', {
      networkIPRangeId: 'networkIPRangeId',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.iaas.api.networkIPRanges.ipAddresses.retrieve('ipAddressId', {
      networkIPRangeId: 'networkIPRangeId',
      apiVersion: 'apiVersion',
    });
  });

  // Prism tests are disabled
  test.skip('allocate: only required params', async () => {
    const responsePromise = client.iaas.api.networkIPRanges.ipAddresses.allocate('id', {
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
  test.skip('allocate: required and optional params', async () => {
    const response = await client.iaas.api.networkIPRanges.ipAddresses.allocate('id', {
      apiVersion: 'apiVersion',
      description: 'description',
      ipAddresses: [
        '["10.10.10.1","10.10.10.2"] or \n["fc00:10:118:136:fcd8:d68d:9701:8975","fc00:10:118:136:fcd8:d68d:9701:8985"]',
      ],
      numberOfIps: 0,
    });
  });

  // Prism tests are disabled
  test.skip('release', async () => {
    const responsePromise = client.iaas.api.networkIPRanges.ipAddresses.release('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveIPAddresses: only required params', async () => {
    const responsePromise = client.iaas.api.networkIPRanges.ipAddresses.retrieveIPAddresses('id', {
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
  test.skip('retrieveIPAddresses: required and optional params', async () => {
    const response = await client.iaas.api.networkIPRanges.ipAddresses.retrieveIPAddresses('id', {
      apiVersion: 'apiVersion',
    });
  });
});
