// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TagsAPI from '../tags';
import * as IPAddressesAPI from './ip-addresses';
import {
  IPAddressAllocateParams,
  IPAddressReleaseParams,
  IPAddressRetrieveIPAddressesParams,
  IPAddressRetrieveIPAddressesResponse,
  IPAddressRetrieveParams,
  IPAddresses,
  NetworkIPAddress,
} from './ip-addresses';
import * as UnregisteredIPAddressesAPI from './unregistered-ip-addresses';
import {
  IPAddressReleaseSpecification,
  UnregisteredIPAddressReleaseParams,
  UnregisteredIPAddresses,
} from './unregistered-ip-addresses';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class NetworkIPRanges extends APIResource {
  unregisteredIPAddresses: UnregisteredIPAddressesAPI.UnregisteredIPAddresses =
    new UnregisteredIPAddressesAPI.UnregisteredIPAddresses(this._client);
  ipAddresses: IPAddressesAPI.IPAddresses = new IPAddressesAPI.IPAddresses(this._client);

  /**
   * Get internal IPAM network IP range with a given id
   *
   * @example
   * ```ts
   * const networkIPRange =
   *   await client.iaas.api.networkIPRanges.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: NetworkIPRangeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NetworkIPRangeRetrieveResponse> {
    return this._client.get(path`/iaas/api/network-ip-ranges/${id}`, { query, ...options });
  }

  /**
   * Update internal network IP range.
   *
   * @example
   * ```ts
   * const networkIPRangeBase =
   *   await client.iaas.api.networkIPRanges.update('id', {
   *     endIPAddress: 'endIPAddress',
   *     name: 'name',
   *     startIPAddress: 'startIPAddress',
   *   });
   * ```
   */
  update(
    id: string,
    params: NetworkIPRangeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<NetworkIPRangeBase> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/network-ip-ranges/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete internal network IP range with a given id
   *
   * @example
   * ```ts
   * await client.iaas.api.networkIPRanges.delete('id');
   * ```
   */
  delete(
    id: string,
    params: NetworkIPRangeDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apiVersion } = params ?? {};
    return this._client.delete(path`/iaas/api/network-ip-ranges/${id}`, {
      query: { apiVersion },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates an internal network IP range.
   *
   * @example
   * ```ts
   * const networkIPRangeBase =
   *   await client.iaas.api.networkIPRanges.networkIPRanges({
   *     endIPAddress: 'endIPAddress',
   *     name: 'name',
   *     startIPAddress: 'startIPAddress',
   *   });
   * ```
   */
  networkIPRanges(
    params: NetworkIPRangeNetworkIPRangesParams,
    options?: RequestOptions,
  ): APIPromise<NetworkIPRangeBase> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/network-ip-ranges', { query: { apiVersion }, body, ...options });
  }

  /**
   * Get all internal IPAM network IP ranges
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.networkIPRanges.retrieveNetworkIPRanges();
   * ```
   */
  retrieveNetworkIPRanges(
    query: NetworkIPRangeRetrieveNetworkIPRangesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NetworkIPRangeRetrieveNetworkIPRangesResponse> {
    return this._client.get('/iaas/api/network-ip-ranges', { query, ...options });
  }
}

/**
 * State object representing an IP address range for a Fabric Network. **HATEOAS**
 * links: **region** - Region - Region for the network. **self** - NetworkIPRange -
 * Self link to this IP address range
 */
export interface NetworkIPRangeBase {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: NetworkIPRangeBase._Links;

  /**
   * End IP address of the range.
   */
  endIPAddress: string;

  /**
   * Start IP address of the range.
   */
  startIPAddress: string;

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
   * A set of tag keys and optional values that were set on this resource instance.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace NetworkIPRangeBase {
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
 * Specification for creating or updating a NetworkIPRange
 */
export interface NetworkIPRangeSpecification {
  /**
   * End IP address of the range.
   */
  endIPAddress: string;

  /**
   * A human-friendly name used as an identifier in APIs that support this option.
   */
  name: string;

  /**
   * Start IP address of the range.
   */
  startIPAddress: string;

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * The Ids of the fabric networks.
   */
  fabricNetworkIds?: Array<string>;

  /**
   * IP address version: IPv4 or IPv6. Default: IPv4.
   */
  ipVersion?: 'IPv4' | 'IPv6';

  /**
   * A set of tag keys and optional values that were set on this resource instance.
   */
  tags?: Array<TagsAPI.Tag>;
}

/**
 * State object representing an internal IP address range for a Fabric Network.
 * **HATEOAS** links: **region** - Region - Region for the network. **self** -
 * NetworkIPRange - Self link to this IP address range
 */
export interface NetworkIPRangeRetrieveResponse {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: NetworkIPRangeRetrieveResponse._Links;

  /**
   * End IP address of the range.
   */
  endIPAddress: string;

  /**
   * Start IP address of the range.
   */
  startIPAddress: string;

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
   * IP address version: IPv4 or IPv6. Default: IPv4.
   */
  ipVersion?: 'IPv4' | 'IPv6';

  /**
   * A human-friendly name used as an identifier in APIs that support this option.
   */
  name?: string;

  /**
   * Number of IP addresses in range that are allocated.
   */
  numberOfAllocatedIPs?: number;

  /**
   * Number of IP addresses in range that are available.
   */
  numberOfAvailableIPs?: number;

  /**
   * Number of IP addresses in range that have been released but are not available.
   */
  numberOfReleasedIPs?: number;

  /**
   * Number of IP addresses allocated by system.
   */
  numberOfSystemAllocatedIPs?: number;

  /**
   * Number of IP addresses allocated by user.
   */
  numberOfUserAllocatedIPs?: number;

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
   * A set of tag keys and optional values that were set on this resource instance.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Total number of IP addresses in range.
   */
  totalNumberOfIPs?: number;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace NetworkIPRangeRetrieveResponse {
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
 * State object representing a query result of network IP range.
 */
export interface NetworkIPRangeRetrieveNetworkIPRangesResponse {
  /**
   * List of content items
   */
  content?: Array<NetworkIPRangeBase>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface NetworkIPRangeRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface NetworkIPRangeUpdateParams {
  /**
   * Body param: End IP address of the range.
   */
  endIPAddress: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: Start IP address of the range.
   */
  startIPAddress: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: The Ids of the fabric networks.
   */
  fabricNetworkIds?: Array<string>;

  /**
   * Body param: IP address version: IPv4 or IPv6. Default: IPv4.
   */
  ipVersion?: 'IPv4' | 'IPv6';

  /**
   * Body param: A set of tag keys and optional values that were set on this resource
   * instance.
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface NetworkIPRangeDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface NetworkIPRangeNetworkIPRangesParams {
  /**
   * Body param: End IP address of the range.
   */
  endIPAddress: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: Start IP address of the range.
   */
  startIPAddress: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: The Ids of the fabric networks.
   */
  fabricNetworkIds?: Array<string>;

  /**
   * Body param: IP address version: IPv4 or IPv6. Default: IPv4.
   */
  ipVersion?: 'IPv4' | 'IPv6';

  /**
   * Body param: A set of tag keys and optional values that were set on this resource
   * instance.
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface NetworkIPRangeRetrieveNetworkIPRangesParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

NetworkIPRanges.UnregisteredIPAddresses = UnregisteredIPAddresses;
NetworkIPRanges.IPAddresses = IPAddresses;

export declare namespace NetworkIPRanges {
  export {
    type NetworkIPRangeBase as NetworkIPRangeBase,
    type NetworkIPRangeSpecification as NetworkIPRangeSpecification,
    type NetworkIPRangeRetrieveResponse as NetworkIPRangeRetrieveResponse,
    type NetworkIPRangeRetrieveNetworkIPRangesResponse as NetworkIPRangeRetrieveNetworkIPRangesResponse,
    type NetworkIPRangeRetrieveParams as NetworkIPRangeRetrieveParams,
    type NetworkIPRangeUpdateParams as NetworkIPRangeUpdateParams,
    type NetworkIPRangeDeleteParams as NetworkIPRangeDeleteParams,
    type NetworkIPRangeNetworkIPRangesParams as NetworkIPRangeNetworkIPRangesParams,
    type NetworkIPRangeRetrieveNetworkIPRangesParams as NetworkIPRangeRetrieveNetworkIPRangesParams,
  };

  export {
    UnregisteredIPAddresses as UnregisteredIPAddresses,
    type IPAddressReleaseSpecification as IPAddressReleaseSpecification,
    type UnregisteredIPAddressReleaseParams as UnregisteredIPAddressReleaseParams,
  };

  export {
    IPAddresses as IPAddresses,
    type NetworkIPAddress as NetworkIPAddress,
    type IPAddressRetrieveIPAddressesResponse as IPAddressRetrieveIPAddressesResponse,
    type IPAddressRetrieveParams as IPAddressRetrieveParams,
    type IPAddressAllocateParams as IPAddressAllocateParams,
    type IPAddressReleaseParams as IPAddressReleaseParams,
    type IPAddressRetrieveIPAddressesParams as IPAddressRetrieveIPAddressesParams,
  };
}
