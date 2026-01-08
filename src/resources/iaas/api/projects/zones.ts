// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Zones extends APIResource {
  /**
   * Update all zone assignments to a project asynchronously
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.projects.zones.create('id');
   * ```
   */
  create(id: string, params: ZoneCreateParams, options?: RequestOptions): APIPromise<RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.put(path`/iaas/api/projects/${id}/zones`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Get all zones assigned to a project by pages
   *
   * @example
   * ```ts
   * const zones = await client.iaas.api.projects.zones.list(
   *   'id',
   * );
   * ```
   */
  list(
    id: string,
    query: ZoneListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZoneListResponse> {
    return this._client.get(path`/iaas/api/projects/${id}/zones`, { query, ...options });
  }
}

/**
 * An object used to track long-running operations.
 */
export interface RequestTracker {
  /**
   * ID of this request.
   */
  id: string;

  /**
   * Progress of the request as percentage.
   */
  progress: number;

  /**
   * Self link of this request.
   */
  selfLink: string;

  /**
   * Status of the request.
   */
  status: 'FINISHED' | 'INPROGRESS' | 'FAILED';

  /**
   * ID of the deployment, this request is connected to.
   */
  deploymentId?: string;

  /**
   * Status message of the request.
   */
  message?: string;

  /**
   * Name of the operation.
   */
  name?: string;

  /**
   * Collection of resources.
   */
  resources?: Array<string>;
}

/**
 * A zone assignment
 */
export interface ZoneAssignment {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links?: ZoneAssignment._Links;

  /**
   * The amount of CPUs currently allocated.
   */
  allocatedCpu?: number;

  /**
   * The number of resource instances currently allocated
   */
  allocatedInstancesCount?: number;

  /**
   * The amount of memory currently allocated.
   */
  allocatedMemoryMB?: number;

  /**
   * The amount of storage currently allocated.
   */
  allocatedStorageGB?: number;

  /**
   * The maximum amount of cpus that can be used by this cloud zone. Default is 0
   * (unlimited cpu).
   */
  cpuLimit?: number;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * The maximum number of instances that can be provisioned in this cloud zone.
   * Default is 0 (unlimited instances).
   */
  maxNumberInstances?: number;

  /**
   * The maximum amount of memory that can be used by this cloud zone. Default is 0
   * (unlimited memory).
   */
  memoryLimitMB?: number;

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
   * The priority of this zone in the current project. Lower numbers mean higher
   * priority. Default is 0 (highest)
   */
  priority?: number;

  /**
   * Defines an upper limit on storage that can be requested from a cloud zone which
   * is part of this project. Default is 0 (unlimited storage). Please note that this
   * feature is supported only for vSphere cloud zones. Not valid for other cloud
   * zone types.
   */
  storageLimitGB?: number;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;

  /**
   * The Cloud Zone Id
   */
  zoneId?: string;
}

export namespace ZoneAssignment {
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
 * A zone assignment configuration
 */
export interface ZoneAssignmentSpecification {
  /**
   * The maximum amount of cpus that can be used by this cloud zone. Default is 0
   * (unlimited cpu).
   */
  cpuLimit?: number;

  /**
   * The maximum number of instances that can be provisioned in this cloud zone.
   * Default is 0 (unlimited instances).
   */
  maxNumberInstances?: number;

  /**
   * The maximum amount of memory that can be used by this cloud zone. Default is 0
   * (unlimited memory).
   */
  memoryLimitMB?: number;

  /**
   * The priority of this zone in the current project. Lower numbers mean higher
   * priority. Default is 0 (highest)
   */
  priority?: number;

  /**
   * Defines an upper limit on storage that can be requested from a cloud zone which
   * is part of this project. Default is 0 (unlimited storage). Please note that this
   * feature is supported only for vSphere cloud zones. Not valid for other cloud
   * zone types.
   */
  storageLimitGB?: number;

  /**
   * The Cloud Zone Id
   */
  zoneId?: string;
}

/**
 * State object representing a query result of project zone settings.
 */
export interface ZoneListResponse {
  /**
   * List of content items
   */
  content?: Array<ZoneAssignment>;

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
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: List of configurations for zone assignment to a project
   */
  zoneAssignmentSpecifications?: Array<ZoneAssignmentSpecification>;
}

export interface ZoneListParams {
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

export declare namespace Zones {
  export {
    type RequestTracker as RequestTracker,
    type ZoneAssignment as ZoneAssignment,
    type ZoneAssignmentSpecification as ZoneAssignmentSpecification,
    type ZoneListResponse as ZoneListResponse,
    type ZoneCreateParams as ZoneCreateParams,
    type ZoneListParams as ZoneListParams,
  };
}
