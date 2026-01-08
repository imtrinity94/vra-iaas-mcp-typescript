// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from './tags';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class NetworkDomains extends APIResource {
  /**
   * Get network domain with a given id
   *
   * @example
   * ```ts
   * const networkDomain =
   *   await client.iaas.api.networkDomains.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: NetworkDomainRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NetworkDomain> {
    return this._client.get(path`/iaas/api/network-domains/${id}`, { query, ...options });
  }

  /**
   * Get all network domains.
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.networkDomains.retrieveNetworkDomains();
   * ```
   */
  retrieveNetworkDomains(
    query: NetworkDomainRetrieveNetworkDomainsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NetworkDomainRetrieveNetworkDomainsResponse> {
    return this._client.get('/iaas/api/network-domains', { query, ...options });
  }
}

/**
 * The network domain object is the parent of related subnets that are configured
 * together. Subnets within a domain must have non-overlapping address spaces.
 * **HATEOAS** links: **cloud-accounts** - array[CloudAccount] - List of cloud
 * accounts where this network domain exists. **self** - NetworkDomain - Self link
 * to this network domain
 */
export interface NetworkDomain {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: NetworkDomain._Links;

  /**
   * IPv4 address range of the network domain in CIDR format
   */
  cidr: string;

  /**
   * The external regionId of the network domain.
   */
  externalRegionId: string;

  /**
   * Set of ids of the cloud accounts this entity belongs to.
   */
  cloudAccountIds?: Array<string>;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * Additional properties that may be used to extend the base type.
   */
  customProperties?: { [key: string]: string };

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * External entity Id on the provider side.
   */
  externalId?: string;

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
   * A set of tag keys and optional values that were set on this network domain.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace NetworkDomain {
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
 * State object representing a query result of network domains.
 */
export interface NetworkDomainRetrieveNetworkDomainsResponse {
  /**
   * List of content items
   */
  content?: Array<NetworkDomain>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface NetworkDomainRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface NetworkDomainRetrieveNetworkDomainsParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export declare namespace NetworkDomains {
  export {
    type NetworkDomain as NetworkDomain,
    type NetworkDomainRetrieveNetworkDomainsResponse as NetworkDomainRetrieveNetworkDomainsResponse,
    type NetworkDomainRetrieveParams as NetworkDomainRetrieveParams,
    type NetworkDomainRetrieveNetworkDomainsParams as NetworkDomainRetrieveNetworkDomainsParams,
  };
}
