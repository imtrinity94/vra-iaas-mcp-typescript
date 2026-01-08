// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ZonesAPI from '../projects/zones';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class UnregisteredIPAddresses extends APIResource {
  /**
   * release unregistered network IPs
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.networkIPRanges.unregisteredIPAddresses.release(
   *     'id',
   *   );
   * ```
   */
  release(
    id: string,
    params: UnregisteredIPAddressReleaseParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post(path`/iaas/api/network-ip-ranges/${id}/unregistered-ip-addresses/release`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }
}

/**
 * Specification for releasing ip addresses managed by the user
 */
export interface IPAddressReleaseSpecification {
  /**
   * A set of ip addresses IPv4 or IPv6.
   */
  ipAddresses?: Array<string>;
}

export interface UnregisteredIPAddressReleaseParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: A set of ip addresses IPv4 or IPv6.
   */
  ipAddresses?: Array<string>;
}

export declare namespace UnregisteredIPAddresses {
  export {
    type IPAddressReleaseSpecification as IPAddressReleaseSpecification,
    type UnregisteredIPAddressReleaseParams as UnregisteredIPAddressReleaseParams,
  };
}
