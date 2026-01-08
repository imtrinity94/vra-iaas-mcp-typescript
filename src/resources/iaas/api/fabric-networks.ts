// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from './tags';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class FabricNetworks extends APIResource {
  /**
   * Get fabric network with a given id
   *
   * @example
   * ```ts
   * const fabricNetwork =
   *   await client.iaas.api.fabricNetworks.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: FabricNetworkRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricNetwork> {
    return this._client.get(path`/iaas/api/fabric-networks/${id}`, { query, ...options });
  }

  /**
   * Update fabric network. Only tag updates are supported.
   *
   * @example
   * ```ts
   * const fabricNetwork =
   *   await client.iaas.api.fabricNetworks.update('id');
   * ```
   */
  update(id: string, params: FabricNetworkUpdateParams, options?: RequestOptions): APIPromise<FabricNetwork> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/fabric-networks/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Get all fabric networks.
   *
   * @example
   * ```ts
   * const fabricNetworkResult =
   *   await client.iaas.api.fabricNetworks.retrieveFabricNetworks();
   * ```
   */
  retrieveFabricNetworks(
    query: FabricNetworkRetrieveFabricNetworksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricNetworkResult> {
    return this._client.get('/iaas/api/fabric-networks', { query, ...options });
  }

  /**
   * Get associated fabric network IP ranges for a fabric network with a given id
   *
   * @example
   * ```ts
   * const fabricNetwork =
   *   await client.iaas.api.fabricNetworks.retrieveNetworkIPRanges(
   *     'id',
   *   );
   * ```
   */
  retrieveNetworkIPRanges(
    id: string,
    query: FabricNetworkRetrieveNetworkIPRangesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricNetwork> {
    return this._client.get(path`/iaas/api/fabric-networks/${id}/network-ip-ranges`, { query, ...options });
  }
}

/**
 * State object representing a network on a external cloud provider. **HATEOAS**
 * links: **region** - Region - Region for the network. **network-domain** -
 * Network domain - Network domain for the network. **self** - FabricNetwork - Self
 * link to this network
 */
export interface FabricNetwork {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: FabricNetwork._Links;

  /**
   * Network CIDR to be used.
   */
  cidr?: string;

  /**
   * Set of ids of the cloud accounts this entity belongs to.
   */
  cloudAccountIds?: Array<string>;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * Custom properties of the fabric network instance
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
   * The id of the region for which this network is defined.
   */
  externalRegionId?: string;

  /**
   * Network IPv6 CIDR to be used.
   */
  ipv6Cidr?: string;

  /**
   * Indicates whether this is the default subnet for the zone.
   */
  isDefault?: boolean;

  /**
   * Indicates whether the sub-network supports public IP assignment.
   */
  isPublic?: boolean;

  /**
   * A human-friendly name used as an identifier in APIs that support this option.
   */
  name?: string;

  /**
   * The id of the network domain, that contains this fabric network.
   */
  networkDomainId?: string;

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

  /**
   * The availability zone for which this network is defined.
   */
  zoneId?: string;
}

export namespace FabricNetwork {
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
 * State object representing a query result of fabric networks.
 */
export interface FabricNetworkResult {
  /**
   * List of content items
   */
  content?: Array<FabricNetwork>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface FabricNetworkRetrieveParams {
  /**
   * Select a subset of properties to include in the response.
   */
  $select?: string;

  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface FabricNetworkUpdateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: A set of tag keys and optional values that were set on this resource
   * instance.
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface FabricNetworkRetrieveFabricNetworksParams {
  /**
   * Flag which when specified, regardless of the assigned value, shows the total
   * number of records. If the collection has a filter it shows the number of records
   * matching the filter.
   */
  $count?: boolean;

  /**
   * Filter the results by a specified predicate expression. Operators: eq, ne, and,
   * or.
   */
  $filter?: string;

  /**
   * Select a subset of properties to include in the response.
   */
  $select?: string;

  /**
   * Number of records you want to skip.
   */
  $skip?: number;

  /**
   * Number of records you want to get.
   */
  $top?: number;

  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface FabricNetworkRetrieveNetworkIPRangesParams {
  /**
   * Number of records you want to skip.
   */
  $skip?: number;

  /**
   * Number of records you want to get.
   */
  $top?: number;

  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export declare namespace FabricNetworks {
  export {
    type FabricNetwork as FabricNetwork,
    type FabricNetworkResult as FabricNetworkResult,
    type FabricNetworkRetrieveParams as FabricNetworkRetrieveParams,
    type FabricNetworkUpdateParams as FabricNetworkUpdateParams,
    type FabricNetworkRetrieveFabricNetworksParams as FabricNetworkRetrieveFabricNetworksParams,
    type FabricNetworkRetrieveNetworkIPRangesParams as FabricNetworkRetrieveNetworkIPRangesParams,
  };
}
