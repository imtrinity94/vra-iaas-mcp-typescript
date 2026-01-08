// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from './tags';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ExternalNetworkIPRanges extends APIResource {
  /**
   * Get external IPAM network IP range with a given id
   *
   * @example
   * ```ts
   * const externalNetworkIPRange =
   *   await client.iaas.api.externalNetworkIPRanges.retrieve(
   *     'id',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ExternalNetworkIPRangeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExternalNetworkIPRange> {
    return this._client.get(path`/iaas/api/external-network-ip-ranges/${id}`, { query, ...options });
  }

  /**
   * Assign the external IPAM network IP range to a different network and/or change
   * the tags of the external IPAM network IP range.
   *
   * @example
   * ```ts
   * const externalNetworkIPRange =
   *   await client.iaas.api.externalNetworkIPRanges.update(
   *     'id',
   *   );
   * ```
   */
  update(
    id: string,
    params: ExternalNetworkIPRangeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ExternalNetworkIPRange> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/external-network-ip-ranges/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Get all external IPAM network IP ranges
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.externalNetworkIPRanges.retrieveExternalNetworkIPRanges();
   * ```
   */
  retrieveExternalNetworkIPRanges(
    query: ExternalNetworkIPRangeRetrieveExternalNetworkIPRangesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExternalNetworkIPRangeRetrieveExternalNetworkIPRangesResponse> {
    return this._client.get('/iaas/api/external-network-ip-ranges', { query, ...options });
  }
}

/**
 * State object representing an external IP address range for a Fabric Network.
 * **HATEOAS** links: **region** - Region - Region for the network. **self** -
 * NetworkIPRange - Self link to this IP address range
 */
export interface ExternalNetworkIPRange {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: ExternalNetworkIPRange._Links;

  /**
   * End IP address of the range.
   */
  endIPAddress: string;

  /**
   * Start IP address of the range.
   */
  startIPAddress: string;

  /**
   * Subnet prefix length (synonymous with "netmask")
   */
  subnetPrefixLength: number;

  /**
   * Address space that the range belongs to
   */
  addressSpaceId?: string;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * DNS domain search (in order)
   */
  dnsSearchDomains?: Array<string>;

  /**
   * DNS IP addresses of the range.
   */
  dnsServerAddresses?: Array<string>;

  /**
   * DNS domain of the range.
   */
  domain?: string;

  /**
   * External entity Id on the provider side.
   */
  externalId?: string;

  /**
   * The gateway address of the range
   */
  gatewayAddress?: string;

  /**
   * ID of the IPAM integration this IP range belongs to
   */
  integrationId?: string;

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

export namespace ExternalNetworkIPRange {
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
 * State object representing a query result of external IPAM network IP range.
 */
export interface ExternalNetworkIPRangeRetrieveExternalNetworkIPRangesResponse {
  /**
   * List of content items
   */
  content?: Array<ExternalNetworkIPRange>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface ExternalNetworkIPRangeRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface ExternalNetworkIPRangeUpdateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: A list of fabric network Ids that this IP range should be associated
   * with.
   */
  fabricNetworkIds?: Array<string>;
}

export interface ExternalNetworkIPRangeRetrieveExternalNetworkIPRangesParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export declare namespace ExternalNetworkIPRanges {
  export {
    type ExternalNetworkIPRange as ExternalNetworkIPRange,
    type ExternalNetworkIPRangeRetrieveExternalNetworkIPRangesResponse as ExternalNetworkIPRangeRetrieveExternalNetworkIPRangesResponse,
    type ExternalNetworkIPRangeRetrieveParams as ExternalNetworkIPRangeRetrieveParams,
    type ExternalNetworkIPRangeUpdateParams as ExternalNetworkIPRangeUpdateParams,
    type ExternalNetworkIPRangeRetrieveExternalNetworkIPRangesParams as ExternalNetworkIPRangeRetrieveExternalNetworkIPRangesParams,
  };
}
