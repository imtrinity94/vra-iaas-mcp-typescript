// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from './tags';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class FabricVsphereStoragePolicies extends APIResource {
  /**
   * Get fabric vSphere storage policy with a given id
   *
   * @example
   * ```ts
   * const fabricVsphereStoragePolicy =
   *   await client.iaas.api.fabricVsphereStoragePolicies.retrieve(
   *     'id',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: FabricVsphereStoragePolicyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricVsphereStoragePolicy> {
    return this._client.get(path`/iaas/api/fabric-vsphere-storage-policies/${id}`, { query, ...options });
  }

  /**
   * Get all fabric vSphere storage polices.
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.fabricVsphereStoragePolicies.retrieveFabricVsphereStoragePolicies();
   * ```
   */
  retrieveFabricVsphereStoragePolicies(
    query: FabricVsphereStoragePolicyRetrieveFabricVsphereStoragePoliciesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricVsphereStoragePolicyRetrieveFabricVsphereStoragePoliciesResponse> {
    return this._client.get('/iaas/api/fabric-vsphere-storage-policies', { query, ...options });
  }
}

/**
 * Represents a structure that holds details of vSphere storage policy.**HATEOAS**
 * links: **self** - FabricVsphereStoragePolicy - Self link to this storage policy
 */
export interface FabricVsphereStoragePolicy {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: FabricVsphereStoragePolicy._Links;

  /**
   * Set of ids of the cloud accounts this entity belongs to.
   */
  cloudAccountIds?: Array<string>;

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
   * Id of datacenter in which the storage policy is present.
   */
  externalRegionId?: string;

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
   * A set of tag keys and optional values that were set on this storage policy.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace FabricVsphereStoragePolicy {
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
 * State object representing a query result of vSphere storage policies.
 */
export interface FabricVsphereStoragePolicyRetrieveFabricVsphereStoragePoliciesResponse {
  /**
   * List of content items
   */
  content?: Array<FabricVsphereStoragePolicy>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface FabricVsphereStoragePolicyRetrieveParams {
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

export interface FabricVsphereStoragePolicyRetrieveFabricVsphereStoragePoliciesParams {
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

export declare namespace FabricVsphereStoragePolicies {
  export {
    type FabricVsphereStoragePolicy as FabricVsphereStoragePolicy,
    type FabricVsphereStoragePolicyRetrieveFabricVsphereStoragePoliciesResponse as FabricVsphereStoragePolicyRetrieveFabricVsphereStoragePoliciesResponse,
    type FabricVsphereStoragePolicyRetrieveParams as FabricVsphereStoragePolicyRetrieveParams,
    type FabricVsphereStoragePolicyRetrieveFabricVsphereStoragePoliciesParams as FabricVsphereStoragePolicyRetrieveFabricVsphereStoragePoliciesParams,
  };
}
