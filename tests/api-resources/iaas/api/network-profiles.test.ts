// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource networkProfiles', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.iaas.api.networkProfiles.retrieve('id');
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
      client.iaas.api.networkProfiles.retrieve(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iaas.api.networkProfiles.update('id', {
      name: 'name',
      regionId: '9.0E49',
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
    const response = await client.iaas.api.networkProfiles.update('id', {
      name: 'name',
      regionId: '9.0E49',
      apiVersion: 'apiVersion',
      customProperties: {
        resourcePoolId: 'resource-pool-1',
        datastoreId: 'StoragePod:group-p87839',
        computeCluster: '/resources/compute/1234',
        distributedLogicalRouterStateLink: '/resources/routers/1234',
        tier0LogicalRouterStateLink: '/resources/routers/2345',
        onDemandNetworkIPAssignmentType: 'dynamic',
      },
      description: 'description',
      externalIpBlockIds: ['3e2bb9bc-6a6a-11ea-bc55-0242ac130003'],
      fabricNetworkIds: ['6543'],
      isolatedNetworkCIDRPrefix: 24,
      isolationExternalFabricNetworkId: '1234',
      isolationNetworkDomainCIDR: '10.10.10.0/24',
      isolationNetworkDomainId: '1234',
      isolationType: 'SUBNET',
      loadBalancerIds: ['6545'],
      securityGroupIds: ['6545'],
      tags: [{ key: 'dev', value: 'hard' }],
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.iaas.api.networkProfiles.delete('id');
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
      client.iaas.api.networkProfiles.delete(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('networkProfiles: only required params', async () => {
    const responsePromise = client.iaas.api.networkProfiles.networkProfiles({
      name: 'name',
      regionId: '9.0E49',
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
  test.skip('networkProfiles: required and optional params', async () => {
    const response = await client.iaas.api.networkProfiles.networkProfiles({
      name: 'name',
      regionId: '9.0E49',
      apiVersion: 'apiVersion',
      customProperties: {
        resourcePoolId: 'resource-pool-1',
        datastoreId: 'StoragePod:group-p87839',
        computeCluster: '/resources/compute/1234',
        distributedLogicalRouterStateLink: '/resources/routers/1234',
        tier0LogicalRouterStateLink: '/resources/routers/2345',
        onDemandNetworkIPAssignmentType: 'dynamic',
      },
      description: 'description',
      externalIpBlockIds: ['3e2bb9bc-6a6a-11ea-bc55-0242ac130003'],
      fabricNetworkIds: ['6543'],
      isolatedNetworkCIDRPrefix: 24,
      isolationExternalFabricNetworkId: '1234',
      isolationNetworkDomainCIDR: '10.10.10.0/24',
      isolationNetworkDomainId: '1234',
      isolationType: 'SUBNET',
      loadBalancerIds: ['6545'],
      securityGroupIds: ['6545'],
      tags: [{ key: 'dev', value: 'hard' }],
    });
  });

  // Prism tests are disabled
  test.skip('retrieveNetworkProfiles', async () => {
    const responsePromise = client.iaas.api.networkProfiles.retrieveNetworkProfiles();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveNetworkProfiles: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.networkProfiles.retrieveNetworkProfiles(
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
});
