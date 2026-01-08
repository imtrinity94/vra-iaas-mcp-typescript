// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from './tags';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class FabricVsphereDatastores extends APIResource {
  /**
   * Get fabric vSphere datastore with a given id
   *
   * @example
   * ```ts
   * const fabricVsphereDatastore =
   *   await client.iaas.api.fabricVsphereDatastores.retrieve(
   *     'id',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: FabricVsphereDatastoreRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricVsphereDatastore> {
    return this._client.get(path`/iaas/api/fabric-vsphere-datastores/${id}`, { query, ...options });
  }

  /**
   * Update Fabric vSphere Datastore. Only tag updates are supported.
   *
   * @example
   * ```ts
   * const fabricVsphereDatastore =
   *   await client.iaas.api.fabricVsphereDatastores.update(
   *     'id',
   *   );
   * ```
   */
  update(
    id: string,
    params: FabricVsphereDatastoreUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FabricVsphereDatastore> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/fabric-vsphere-datastores/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Get all fabric vSphere datastores.
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.fabricVsphereDatastores.retrieveFabricVsphereDatastores();
   * ```
   */
  retrieveFabricVsphereDatastores(
    query: FabricVsphereDatastoreRetrieveFabricVsphereDatastoresParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricVsphereDatastoreRetrieveFabricVsphereDatastoresResponse> {
    return this._client.get('/iaas/api/fabric-vsphere-datastores', { query, ...options });
  }
}

/**
 * Represents a structure that holds details of vSphere datastore. **HATEOAS**
 * links: **self** - FabricVsphereDatastore - Self link to this data store
 */
export interface FabricVsphereDatastore {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: FabricVsphereDatastore._Links;

  /**
   * What byte amount is the space occupied by items that are NOT disks on the data
   * store.This property is NOT calculated or updated by VMware Aria Automation. It
   * is a static config propertypopulated by the customer if it is needed (e.g. in
   * the case of a big content library).
   */
  allocatedNonDiskStorageSpaceBytes?: number;

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
   * Id of datacenter in which the datastore is present.
   */
  externalRegionId?: string;

  /**
   * Indicates free size available in datastore.
   */
  freeSizeGB?: string;

  /**
   * What percent of the total available storage on the datastore will be used for
   * disk provisioning.This value can be more than 100. e.g. If the datastore has
   * 100gb of storage and this value is set to 80, then VMware Aria Automation will
   * act as if this datastore has only 80gb. If it is 120, then VMware Aria
   * Automation will act as if this datastore has 120g thus allowing 20gb
   * overallocation.
   */
  maximumAllowedStorageAllocationPercent?: number;

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
   * A set of tag keys and optional values that were set on this datastore /
   * datastore cluster.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Type of datastore.
   */
  type?: string;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace FabricVsphereDatastore {
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
 * State object representing a query result of vSphere datastores.
 */
export interface FabricVsphereDatastoreRetrieveFabricVsphereDatastoresResponse {
  /**
   * List of content items
   */
  content?: Array<FabricVsphereDatastore>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface FabricVsphereDatastoreRetrieveParams {
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

export interface FabricVsphereDatastoreUpdateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: What byte amount is the space occupied by items that are NOT disks
   * on the data store.This property is NOT calculated or updated by VMware Aria
   * Automation. It is a static config propertypopulated by the customer if it is
   * needed (e.g. in the case of a big content library).
   */
  allocatedNonDiskStorageSpaceBytes?: number;

  /**
   * Body param: What percent of the total available storage on the datastore will be
   * used for disk provisioning.This value can be more than 100. e.g. If the
   * datastore has 100gb of storage and this value is set to 80, then VMware Aria
   * Automation will act as if this datastore has only 80gb. If it is 120, then
   * VMware Aria Automation will act as if this datastore has 120g thus allowing 20gb
   * overallocation.
   */
  maximumAllowedStorageAllocationPercent?: number;

  /**
   * Body param: A set of tag keys and optional values that were set on this resource
   * instance.
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface FabricVsphereDatastoreRetrieveFabricVsphereDatastoresParams {
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

export declare namespace FabricVsphereDatastores {
  export {
    type FabricVsphereDatastore as FabricVsphereDatastore,
    type FabricVsphereDatastoreRetrieveFabricVsphereDatastoresResponse as FabricVsphereDatastoreRetrieveFabricVsphereDatastoresResponse,
    type FabricVsphereDatastoreRetrieveParams as FabricVsphereDatastoreRetrieveParams,
    type FabricVsphereDatastoreUpdateParams as FabricVsphereDatastoreUpdateParams,
    type FabricVsphereDatastoreRetrieveFabricVsphereDatastoresParams as FabricVsphereDatastoreRetrieveFabricVsphereDatastoresParams,
  };
}
