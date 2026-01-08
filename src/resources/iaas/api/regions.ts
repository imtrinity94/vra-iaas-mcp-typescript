// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Regions extends APIResource {
  /**
   * Get Region with a given id
   *
   * @example
   * ```ts
   * const region = await client.iaas.api.regions.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: RegionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Region> {
    return this._client.get(path`/iaas/api/regions/${id}`, { query, ...options });
  }

  /**
   * Get all regions
   *
   * @example
   * ```ts
   * const regions = await client.iaas.api.regions.list();
   * ```
   */
  list(
    query: RegionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RegionListResponse> {
    return this._client.get('/iaas/api/regions', { query, ...options });
  }
}

/**
 * State object representing a region in a cloud account. **HATEOAS** links:
 * **cloud-account** - CloudAccount - Cloud account for the region.**self** -
 * Region - Self link to this region
 */
export interface Region {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: Region._Links;

  /**
   * Unique identifier of region on the provider side.
   */
  externalRegionId: string;

  /**
   * The id of the cloud account this region belongs to. For some cloud accounts this
   * field will be populated with the associated cloud account id
   */
  cloudAccountId?: string;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * Name of region on the provider side. In vSphere, the name of the region is
   * different from its id.
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

export namespace Region {
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
 * State object representing a query result of regions.
 */
export interface RegionListResponse {
  /**
   * List of content items
   */
  content?: Array<Region>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface RegionRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface RegionListParams {
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

export declare namespace Regions {
  export {
    type Region as Region,
    type RegionListResponse as RegionListResponse,
    type RegionRetrieveParams as RegionRetrieveParams,
    type RegionListParams as RegionListParams,
  };
}
