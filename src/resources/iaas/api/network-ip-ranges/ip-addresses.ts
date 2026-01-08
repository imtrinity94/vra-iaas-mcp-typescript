// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ZonesAPI from '../projects/zones';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class IPAddresses extends APIResource {
  /**
   * Get an allocated or released address of an IPAM network IP range
   *
   * @example
   * ```ts
   * const networkIPAddress =
   *   await client.iaas.api.networkIPRanges.ipAddresses.retrieve(
   *     'ipAddressId',
   *     {
   *       networkIPRangeId: 'networkIPRangeId',
   *       apiVersion: 'apiVersion',
   *     },
   *   );
   * ```
   */
  retrieve(
    ipAddressID: string,
    params: IPAddressRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<NetworkIPAddress> {
    const { networkIPRangeId, ...query } = params;
    return this._client.get(
      path`/iaas/api/network-ip-ranges/${networkIPRangeId}/ip-addresses/${ipAddressID}`,
      { query, ...options },
    );
  }

  /**
   * allocate network IPs by user
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.networkIPRanges.ipAddresses.allocate(
   *     'id',
   *     { apiVersion: 'apiVersion' },
   *   );
   * ```
   */
  allocate(
    id: string,
    params: IPAddressAllocateParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post(path`/iaas/api/network-ip-ranges/${id}/ip-addresses/allocate`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * release network IPs by user
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.networkIPRanges.ipAddresses.release(
   *     'id',
   *   );
   * ```
   */
  release(
    id: string,
    params: IPAddressReleaseParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post(path`/iaas/api/network-ip-ranges/${id}/ip-addresses/release`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Get all allocated and released addresses of an IPAM network IP range
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.networkIPRanges.ipAddresses.retrieveIPAddresses(
   *     'id',
   *     { apiVersion: 'apiVersion' },
   *   );
   * ```
   */
  retrieveIPAddresses(
    id: string,
    query: IPAddressRetrieveIPAddressesParams,
    options?: RequestOptions,
  ): APIPromise<IPAddressRetrieveIPAddressesResponse> {
    return this._client.get(path`/iaas/api/network-ip-ranges/${id}/ip-addresses`, { query, ...options });
  }
}

/**
 * State object representing an IP address. **HATEOAS** links: **self** -
 * NetworkIPAddress - Self link to this IP address **network-ip-range** - Network
 * IP Range - Network IP Range that the ip address belongs to.
 * **connected-resource** - Connected Resource - Resource that the ip address is
 * connected to.
 */
export interface NetworkIPAddress {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: NetworkIPAddress._Links;

  /**
   * IP address.
   */
  ipAddress: string;

  /**
   * Decimal value of the ip address.
   */
  ipAddressDecimalValue: number;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * External entity Id on the provider side.
   */
  externalId?: string;

  /**
   * IP address status
   */
  ipAddressStatus?: 'ALLOCATED' | 'RELEASED' | 'AVAILABLE' | 'UNREGISTERED';

  /**
   * IP Allocation type
   */
  ipAllocationType?: 'SYSTEM' | 'USER' | 'NONE';

  /**
   * IP address version: IPv4 or IPv6. Default: IPv4.
   */
  ipVersion?: 'IPv4' | 'IPv6';

  /**
   * A human-friendly name used as an identifier in APIs that support this option.
   */
  name?: string;

  /**
   * The id of the organization this entity belongs to.
   */
  orgId?: string;

  /**
   * Email of the user or display name of the group that owns the entity.
   */
  owner?: string;

  /**
   * Type of a owner(user/ad_group) that owns the entity.
   */
  ownerType?: string;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace NetworkIPAddress {
  /**
   * HATEOAS of the entity
   */
  export interface _Links {
    empty?: boolean;

    [k: string]: _Links.Href | boolean | undefined;
  }

  export namespace _Links {
    /**
     * HATEOAS of the entity
     */
    export interface Href {
      href?: string;

      hrefs?: Array<string>;
    }
  }

  /**
   * HATEOAS of the entity
   */
  export interface Href {
    href?: string;

    hrefs?: Array<string>;
  }

  /**
   * HATEOAS of the entity
   */
  export interface Href {
    href?: string;

    hrefs?: Array<string>;
  }
}

/**
 * State object representing a query result of network IP address.
 */
export interface IPAddressRetrieveIPAddressesResponse {
  /**
   * List of content items
   */
  content?: Array<NetworkIPAddress>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface IPAddressRetrieveParams {
  /**
   * Path param: The ID of a network IP range.
   */
  networkIPRangeId: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;
}

export interface IPAddressAllocateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Description
   */
  description?: string;

  /**
   * Body param: A set of ip addresses IPv4 or IPv6.
   */
  ipAddresses?: Array<string>;

  /**
   * Body param: Number of ip addresses to allocate from the network ip range.
   */
  numberOfIps?: number;
}

export interface IPAddressReleaseParams {
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

export interface IPAddressRetrieveIPAddressesParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export declare namespace IPAddresses {
  export {
    type NetworkIPAddress as NetworkIPAddress,
    type IPAddressRetrieveIPAddressesResponse as IPAddressRetrieveIPAddressesResponse,
    type IPAddressRetrieveParams as IPAddressRetrieveParams,
    type IPAddressAllocateParams as IPAddressAllocateParams,
    type IPAddressReleaseParams as IPAddressReleaseParams,
    type IPAddressRetrieveIPAddressesParams as IPAddressRetrieveIPAddressesParams,
  };
}
