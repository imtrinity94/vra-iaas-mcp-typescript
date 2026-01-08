// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource imageProfiles', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.iaas.api.imageProfiles.retrieve('id');
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
      client.iaas.api.imageProfiles.retrieve(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.iaas.api.imageProfiles.update('id', {
      imageMapping: {
        ubuntu: {},
        centos: {},
      },
      name: 'name',
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
    const response = await client.iaas.api.imageProfiles.update('id', {
      imageMapping: {
        ubuntu: {
          id: '9e49',
          cloudConfig: 'runcmd:\n  - ["mkdir", "/imageFolder"]',
          constraints: [{ expression: 'ha:strong', mandatory: true }],
          externalId:
            'https://cloud-images.ubuntu.com/releases/16.04/release-20190605/ubuntu-16.04-server-cloudimg-amd64.ova',
          name: 'ami-ubuntu-16.04-1.9.1-00-1516139717',
        },
        centos: {
          id: '9e50',
          cloudConfig: 'runcmd:\n  - ["mkdir", "/imageFolder"]',
          constraints: [{ expression: 'ha:strong', mandatory: true }],
          externalId:
            'https://cloud-images.ubuntu.com/releases/16.04/release-20190605/ubuntu-16.04-server-cloudimg-amd64.ova',
          name: 'ami-centos-7-1.13.0-00-1543963388',
        },
      },
      name: 'name',
      apiVersion: 'apiVersion',
      description: 'description',
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.iaas.api.imageProfiles.delete('id');
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
      client.iaas.api.imageProfiles.delete(
        'id',
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('imageProfiles: only required params', async () => {
    const responsePromise = client.iaas.api.imageProfiles.imageProfiles({
      imageMapping: {
        ubuntu: {},
        centos: {},
      },
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
  test.skip('imageProfiles: required and optional params', async () => {
    const response = await client.iaas.api.imageProfiles.imageProfiles({
      imageMapping: {
        ubuntu: {
          id: '9e49',
          cloudConfig: 'runcmd:\n  - ["mkdir", "/imageFolder"]',
          constraints: [{ expression: 'ha:strong', mandatory: true }],
          externalId:
            'https://cloud-images.ubuntu.com/releases/16.04/release-20190605/ubuntu-16.04-server-cloudimg-amd64.ova',
          name: 'ami-ubuntu-16.04-1.9.1-00-1516139717',
        },
        centos: {
          id: '9e50',
          cloudConfig: 'runcmd:\n  - ["mkdir", "/imageFolder"]',
          constraints: [{ expression: 'ha:strong', mandatory: true }],
          externalId:
            'https://cloud-images.ubuntu.com/releases/16.04/release-20190605/ubuntu-16.04-server-cloudimg-amd64.ova',
          name: 'ami-centos-7-1.13.0-00-1543963388',
        },
      },
      name: 'name',
      regionId: '9.0E49',
      apiVersion: 'apiVersion',
      description: 'description',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveImageProfiles', async () => {
    const responsePromise = client.iaas.api.imageProfiles.retrieveImageProfiles();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveImageProfiles: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.imageProfiles.retrieveImageProfiles(
        { apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });
});
