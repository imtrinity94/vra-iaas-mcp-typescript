// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource configurationProperties', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.iaas.api.configurationProperties.retrieve('id', {
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
    const response = await client.iaas.api.configurationProperties.retrieve('id', {
      apiVersion: 'apiVersion',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.iaas.api.configurationProperties.delete('id', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.iaas.api.configurationProperties.delete('id', { apiVersion: 'apiVersion' });
  });

  // Prism tests are disabled
  test.skip('retrieveConfigurationProperties: only required params', async () => {
    const responsePromise = client.iaas.api.configurationProperties.retrieveConfigurationProperties({
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
  test.skip('retrieveConfigurationProperties: required and optional params', async () => {
    const response = await client.iaas.api.configurationProperties.retrieveConfigurationProperties({
      apiVersion: 'apiVersion',
    });
  });

  // Prism tests are disabled
  test.skip('updateConfigurationProperties: only required params', async () => {
    const responsePromise = client.iaas.api.configurationProperties.updateConfigurationProperties({
      apiVersion: 'apiVersion',
      key: 'SESSION_TIMEOUT_DURATION_MINUTES, RELEASE_IPADDRESS_PERIOD_MINUTES, NSXT_RETRY_DURATION_MINUTES',
      value: 'value',
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
  test.skip('updateConfigurationProperties: required and optional params', async () => {
    const response = await client.iaas.api.configurationProperties.updateConfigurationProperties({
      apiVersion: 'apiVersion',
      key: 'SESSION_TIMEOUT_DURATION_MINUTES, RELEASE_IPADDRESS_PERIOD_MINUTES, NSXT_RETRY_DURATION_MINUTES',
      value: 'value',
    });
  });
});
