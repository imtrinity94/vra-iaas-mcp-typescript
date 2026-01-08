// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CloudAccountsVsphereAPI from '../cloud-accounts-vsphere';
import * as IntegrationsAPI from '../integrations';
import * as ZonesAPI from '../projects/zones';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class RegionEnumeration extends APIResource {
  /**
   * Get region enumeration response for a given id
   *
   * @example
   * ```ts
   * const regionEnumeration =
   *   await client.iaas.api.cloudAccounts.regionEnumeration.retrieve(
   *     'id',
   *     { apiVersion: 'apiVersion' },
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: RegionEnumerationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RegionEnumerationRetrieveResponse> {
    return this._client.get(path`/iaas/api/cloud-accounts/region-enumeration/${id}`, { query, ...options });
  }

  /**
   * Get the available regions for specified cloud account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccounts.regionEnumeration.regionEnumeration(
   *     {
   *       apiVersion: 'apiVersion',
   *       cloudAccountProperties: {
   *         supportPublicImages: 'true',
   *         acceptSelfSignedCertificate: 'true',
   *       },
   *     },
   *   );
   * ```
   */
  regionEnumeration(
    params: RegionEnumerationRegionEnumerationParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/cloud-accounts/region-enumeration', {
      query: { apiVersion },
      body,
      ...options,
    });
  }
}

/**
 * State object representing cloud account region.
 *
 * **externalRegions** - array[RegionSpecification] - Set of regions that can be
 * enabled for this cloud account. **externalRegionIds** - array[String] - Set of
 * ids of regions that can be enabled for this cloud account.
 */
export interface RegionEnumerationRetrieveResponse {
  /**
   * A set of regions that can be enabled for this cloud account.
   */
  externalRegions?: Array<CloudAccountsVsphereAPI.RegionSpecification>;
}

export interface RegionEnumerationRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export interface RegionEnumerationRegionEnumerationParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Cloud Account specific properties supplied in as name value pairs.
   */
  cloudAccountProperties: { [key: string]: string };

  /**
   * Body param: Specification for certificate for a cloud account.
   */
  certificateInfo?: IntegrationsAPI.CertificateInfoSpecification;

  /**
   * Body param: Existing cloud account id. Either provide existing cloud account Id,
   * or privateKeyId/privateKey credentials pair.
   */
  cloudAccountId?: string;

  /**
   * Body param: Cloud account type
   */
  cloudAccountType?: string;

  /**
   * Body param: Secret access key or password to be used to authenticate with the
   * cloud account. Either provide privateKey or provide a cloudAccountId of an
   * existing account.
   */
  privateKey?: string;

  /**
   * Body param: Access key id or username to be used to authenticate with the cloud
   * account. Either provide privateKeyId or provide a cloudAccountId of an existing
   * account.
   */
  privateKeyId?: string;
}

export declare namespace RegionEnumeration {
  export {
    type RegionEnumerationRetrieveResponse as RegionEnumerationRetrieveResponse,
    type RegionEnumerationRetrieveParams as RegionEnumerationRetrieveParams,
    type RegionEnumerationRegionEnumerationParams as RegionEnumerationRegionEnumerationParams,
  };
}
