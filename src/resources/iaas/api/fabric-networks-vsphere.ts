// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from './tags';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class FabricNetworksVsphere extends APIResource {
  /**
   * Get vSphere fabric network with a given id
   *
   * @example
   * ```ts
   * const fabricNetworkVsphere =
   *   await client.iaas.api.fabricNetworksVsphere.retrieve(
   *     'id',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: FabricNetworksVsphereRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricNetworkVsphere> {
    return this._client.get(path`/iaas/api/fabric-networks-vsphere/${id}`, { query, ...options });
  }

  /**
   * Update vSphere fabric network.
   *
   * @example
   * ```ts
   * const fabricNetworkVsphere =
   *   await client.iaas.api.fabricNetworksVsphere.update('id');
   * ```
   */
  update(
    id: string,
    params: FabricNetworksVsphereUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FabricNetworkVsphere> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/fabric-networks-vsphere/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Get all vSphere fabric networks.
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.fabricNetworksVsphere.retrieveFabricNetworksVsphere();
   * ```
   */
  retrieveFabricNetworksVsphere(
    query: FabricNetworksVsphereRetrieveFabricNetworksVsphereParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricNetworksVsphereRetrieveFabricNetworksVsphereResponse> {
    return this._client.get('/iaas/api/fabric-networks-vsphere', { query, ...options });
  }

  /**
   * Get associated fabric network IP ranges for a fabric vSphere network with a
   * given id
   *
   * @example
   * ```ts
   * const fabricNetworkVsphere =
   *   await client.iaas.api.fabricNetworksVsphere.retrieveNetworkIPRanges(
   *     'id',
   *   );
   * ```
   */
  retrieveNetworkIPRanges(
    id: string,
    query: FabricNetworksVsphereRetrieveNetworkIPRangesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricNetworkVsphere> {
    return this._client.get(path`/iaas/api/fabric-networks-vsphere/${id}/network-ip-ranges`, {
      query,
      ...options,
    });
  }
}

/**
 * State object representing a vSphere network on a external cloud provider.
 * **domain** - domain for the vSphere network. **defaultGateway** - default IPv4
 * gateway for the vSphere network. **defaultIPv6Gateway** - default IPv6 gateway
 * for the vSphere network. **dnsServerAddresses** - list of dns server address for
 * the vSphere network. **dnsSearchDomains** - ist of dns search domains for the
 * vSphere network
 */
export interface FabricNetworkVsphere {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: FabricNetworkVsphere._Links;

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
   * IPv4 default gateway to be used.
   */
  defaultGateway?: string;

  /**
   * IPv6 default gateway to be used.
   */
  defaultIpv6Gateway?: string;

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * A list of DNS search domains that were set on this resource instance.
   */
  dnsSearchDomains?: Array<string>;

  /**
   * A list of DNS server addresses that were set on this resource instance.
   */
  dnsServerAddresses?: Array<string>;

  /**
   * Domain value.
   */
  domain?: string;

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
}

export namespace FabricNetworkVsphere {
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
export interface FabricNetworksVsphereRetrieveFabricNetworksVsphereResponse {
  /**
   * List of content items
   */
  content?: Array<FabricNetworkVsphere>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface FabricNetworksVsphereRetrieveParams {
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

export interface FabricNetworksVsphereUpdateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: Network CIDR to be used.
   */
  cidr?: string;

  /**
   * Body param: IPv4 default gateway to be used.
   */
  defaultGateway?: string;

  /**
   * Body param: IPv6 default gateway to be used.
   */
  defaultIpv6Gateway?: string;

  /**
   * Body param: A list of DNS search domains that were set on this resource
   * instance.
   */
  dnsSearchDomains?: Array<string>;

  /**
   * Body param: A list of DNS server addresses that were set on this resource
   * instance.
   */
  dnsServerAddresses?: Array<string>;

  /**
   * Body param: Domain value.
   */
  domain?: string;

  /**
   * Body param: Network IPv6 CIDR to be used.
   */
  ipv6Cidr?: string;

  /**
   * Body param: Indicates whether this is the default subnet for the zone.
   */
  isDefault?: boolean;

  /**
   * Body param: Indicates whether the sub-network supports public IP assignment.
   */
  isPublic?: boolean;

  /**
   * Body param: A set of tag keys and optional values that were set on this resource
   * instance.
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface FabricNetworksVsphereRetrieveFabricNetworksVsphereParams {
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

export interface FabricNetworksVsphereRetrieveNetworkIPRangesParams {
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

export declare namespace FabricNetworksVsphere {
  export {
    type FabricNetworkVsphere as FabricNetworkVsphere,
    type FabricNetworksVsphereRetrieveFabricNetworksVsphereResponse as FabricNetworksVsphereRetrieveFabricNetworksVsphereResponse,
    type FabricNetworksVsphereRetrieveParams as FabricNetworksVsphereRetrieveParams,
    type FabricNetworksVsphereUpdateParams as FabricNetworksVsphereUpdateParams,
    type FabricNetworksVsphereRetrieveFabricNetworksVsphereParams as FabricNetworksVsphereRetrieveFabricNetworksVsphereParams,
    type FabricNetworksVsphereRetrieveNetworkIPRangesParams as FabricNetworksVsphereRetrieveNetworkIPRangesParams,
  };
}
