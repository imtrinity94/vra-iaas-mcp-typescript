// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource regionEnumeration', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccounts.regionEnumeration.retrieve('id', {
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
    const response = await client.iaas.api.cloudAccounts.regionEnumeration.retrieve('id', {
      apiVersion: 'apiVersion',
    });
  });

  // Prism tests are disabled
  test.skip('regionEnumeration: only required params', async () => {
    const responsePromise = client.iaas.api.cloudAccounts.regionEnumeration.regionEnumeration({
      apiVersion: 'apiVersion',
      cloudAccountProperties: { supportPublicImages: 'true', acceptSelfSignedCertificate: 'true' },
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
  test.skip('regionEnumeration: required and optional params', async () => {
    const response = await client.iaas.api.cloudAccounts.regionEnumeration.regionEnumeration({
      apiVersion: 'apiVersion',
      cloudAccountProperties: { supportPublicImages: 'true', acceptSelfSignedCertificate: 'true' },
      certificateInfo: {
        certificate:
          '-----BEGIN CERTIFICATE-----\nMIIDHjCCAoegAwIBAgIBATANBgkqhkiG9w0BAQsFADCBpjEUMBIGA1UEChMLVk13\nYXJlIEluYAAc1pw18GT3iAqQRPx0PrjzJhgjIJMla\n/1Kg4byY4FPSacNiRgY/FG2bPCqZk1yRfzmkFYCW/vU+Dg==\n-----END CERTIFICATE-----\n-',
      },
      cloudAccountId: 'b8b7a918-342e-4a53-a3b0-b935da0fe601',
      cloudAccountType: 'vsphere, aws, azure, nsxv, nsxt',
      privateKey: 'gfsScK345sGGaVdds222dasdfDDSSasdfdsa34fS',
      privateKeyId: 'ACDC55DB4MFH6ADG75KK',
    });
  });
});
