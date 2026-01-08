// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FabricComputesAPI from './fabric-computes';
import * as TagsAPI from './tags';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Zones extends APIResource {
  /**
   * Create zone
   *
   * @example
   * ```ts
   * const zone = await client.iaas.api.zones.create({
   *   name: 'name',
   *   regionId: '9.0E49',
   * });
   * ```
   */
  create(params: ZoneCreateParams, options?: RequestOptions): APIPromise<Zone> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/zones', { query: { apiVersion }, body, ...options });
  }

  /**
   * Get zone with given id
   *
   * @example
   * ```ts
   * const zone = await client.iaas.api.zones.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: ZoneRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Zone> {
    return this._client.get(path`/iaas/api/zones/${id}`, { query, ...options });
  }

  /**
   * Update zone
   *
   * @example
   * ```ts
   * const zone = await client.iaas.api.zones.update('id', {
   *   name: 'name',
   *   regionId: '9.0E49',
   * });
   * ```
   */
  update(id: string, params: ZoneUpdateParams, options?: RequestOptions): APIPromise<Zone> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/zones/${id}`, { query: { apiVersion }, body, ...options });
  }

  /**
   * Get all zones
   *
   * @example
   * ```ts
   * const zones = await client.iaas.api.zones.list();
   * ```
   */
  list(
    query: ZoneListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZoneListResponse> {
    return this._client.get('/iaas/api/zones', { query, ...options });
  }

  /**
   * Delete a zone
   *
   * @example
   * ```ts
   * await client.iaas.api.zones.delete('id');
   * ```
   */
  delete(
    id: string,
    params: ZoneDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apiVersion } = params ?? {};
    return this._client.delete(path`/iaas/api/zones/${id}`, {
      query: { apiVersion },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get zone's computes by given zone ID
   *
   * @example
   * ```ts
   * const fabricComputeResult =
   *   await client.iaas.api.zones.retrieveComputes('id');
   * ```
   */
  retrieveComputes(
    id: string,
    query: ZoneRetrieveComputesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricComputeResult> {
    return this._client.get(path`/iaas/api/zones/${id}/computes`, { query, ...options });
  }
}

/**
 * State object representing a query result of cloud zone's computes.
 */
export interface FabricComputeResult {
  /**
   * List of content items
   */
  content?: Array<FabricComputesAPI.FabricCompute>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

/**
 * Description of a compute placement zone. This can be used to specify a subset of
 * compute resources within a region where machines can be placed. **HATEOAS**
 * links: **region** - Region - Region for the zone. **computes** - Computes -
 * Computes for the zone. **cloud-account** - CloudAccount - The cloud account that
 * the zone belongs to. **self** - Zone - Self link to this zone
 */
export interface Zone {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: Zone._Links;

  /**
   * Cloud account this zone belongs to.
   */
  cloudAccountId?: string;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * A list of key value pair of properties that will be used
   */
  customProperties?: { [key: string]: string };

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * The id of the region for which this zone is defined
   */
  externalRegionId?: string;

  /**
   * The folder relative path to the datacenter where resources are deployed to. If a
   * non-existent folder name is passed, a new folder will be created in the
   * respective datacenter when a machine is provisioned via the cloud zone. (only
   * applicable for vSphere cloud zones)
   */
  folder?: string;

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
   * The placement policy for the zone.
   */
  placementPolicy?: string;

  /**
   * A set of tag keys and optional values that were set on this placement.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * A set of tag keys and optional values for compute resource filtering.
   */
  tagsToMatch?: Array<TagsAPI.Tag>;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace Zone {
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
 * Specification for a zone.
 */
export interface ZoneSpecification {
  /**
   * A human-friendly name used as an identifier in APIs that support this option.
   */
  name: string;

  /**
   * The id of the region for which this profile is created
   */
  regionId: string;

  /**
   * The ids of the compute resources that will be explicitly assigned to this zone
   */
  computeIds?: Array<string>;

  /**
   * A list of key value pair of properties that will be used
   */
  customProperties?: { [key: string]: string };

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * The folder relative path to the datacenter where resources are deployed to.
   * (only applicable for vSphere cloud zones)
   */
  folder?: string;

  /**
   * Placement policy for the zone. One of DEFAULT, SPREAD, BINPACK or SPREAD_MEMORY.
   */
  placementPolicy?: string;

  /**
   * A set of tag keys and optional values that are effectively applied to all
   * compute resources in this zone, but only in the context of this zone.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * A set of tag keys and optional values that will be used
   */
  tagsToMatch?: Array<TagsAPI.Tag>;
}

/**
 * State object representing a query result of Zones.
 */
export interface ZoneListResponse {
  /**
   * List of content items
   */
  content?: Array<Zone>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface ZoneCreateParams {
  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: The id of the region for which this profile is created
   */
  regionId: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: The ids of the compute resources that will be explicitly assigned to
   * this zone
   */
  computeIds?: Array<string>;

  /**
   * Body param: A list of key value pair of properties that will be used
   */
  customProperties?: { [key: string]: string };

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: The folder relative path to the datacenter where resources are
   * deployed to. (only applicable for vSphere cloud zones)
   */
  folder?: string;

  /**
   * Body param: Placement policy for the zone. One of DEFAULT, SPREAD, BINPACK or
   * SPREAD_MEMORY.
   */
  placementPolicy?: string;

  /**
   * Body param: A set of tag keys and optional values that are effectively applied
   * to all compute resources in this zone, but only in the context of this zone.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Body param: A set of tag keys and optional values that will be used
   */
  tagsToMatch?: Array<TagsAPI.Tag>;
}

export interface ZoneRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface ZoneUpdateParams {
  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: The id of the region for which this profile is created
   */
  regionId: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: The ids of the compute resources that will be explicitly assigned to
   * this zone
   */
  computeIds?: Array<string>;

  /**
   * Body param: A list of key value pair of properties that will be used
   */
  customProperties?: { [key: string]: string };

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: The folder relative path to the datacenter where resources are
   * deployed to. (only applicable for vSphere cloud zones)
   */
  folder?: string;

  /**
   * Body param: Placement policy for the zone. One of DEFAULT, SPREAD, BINPACK or
   * SPREAD_MEMORY.
   */
  placementPolicy?: string;

  /**
   * Body param: A set of tag keys and optional values that are effectively applied
   * to all compute resources in this zone, but only in the context of this zone.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Body param: A set of tag keys and optional values that will be used
   */
  tagsToMatch?: Array<TagsAPI.Tag>;
}

export interface ZoneListParams {
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

export interface ZoneDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface ZoneRetrieveComputesParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export declare namespace Zones {
  export {
    type FabricComputeResult as FabricComputeResult,
    type Zone as Zone,
    type ZoneSpecification as ZoneSpecification,
    type ZoneListResponse as ZoneListResponse,
    type ZoneCreateParams as ZoneCreateParams,
    type ZoneRetrieveParams as ZoneRetrieveParams,
    type ZoneUpdateParams as ZoneUpdateParams,
    type ZoneListParams as ZoneListParams,
    type ZoneDeleteParams as ZoneDeleteParams,
    type ZoneRetrieveComputesParams as ZoneRetrieveComputesParams,
  };
}
