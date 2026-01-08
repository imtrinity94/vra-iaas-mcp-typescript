// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource operations', () => {
  // Prism tests are disabled
  test.skip('reconfigure: only required params', async () => {
    const responsePromise = client.iaas.api.securityGroups.operations.reconfigure('id', {
      name: 'name',
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
  test.skip('reconfigure: required and optional params', async () => {
    const response = await client.iaas.api.securityGroups.operations.reconfigure('id', {
      name: 'name',
      projectId: 'e058',
      apiVersion: 'apiVersion',
      customProperties: { foo: 'string' },
      deploymentId: '123e4567-e89b-12d3-a456-426655440000',
      description: 'description',
      rules: [
        {
          access: 'Allow',
          direction: 'Outbound',
          ipRangeCidr: '66.170.99.2/32',
          ports: '443, 1-655535',
          name: '5756f7e2',
          protocol: 'ANY, TCP, UDP',
          service: 'HTTPS, SSH',
        },
      ],
      tags: [{ key: 'group', value: 'ssh' }],
    });
  });
});
