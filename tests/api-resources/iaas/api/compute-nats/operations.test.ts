// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource operations', () => {
  // Prism tests are disabled
  test.skip('reconfigure: only required params', async () => {
    const responsePromise = client.iaas.api.computeNats.operations.reconfigure('id', {
      natRules: [
        {
          index: 0,
          targetLink:
            '/iaas/api/load-balancers/try6-45ef, /iaas/api/machines/ht54-a472/network-interfaces/dyd6-d67e',
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
  test.skip('reconfigure: required and optional params', async () => {
    const response = await client.iaas.api.computeNats.operations.reconfigure('id', {
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
      apiVersion: 'apiVersion',
    });
  });
});
