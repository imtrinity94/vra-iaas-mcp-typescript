// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ZonesAPI from './projects/zones';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Deployments extends APIResource {
  /**
   * Create a new Deployment.
   *
   * @example
   * ```ts
   * const deployment = await client.iaas.api.deployments.create(
   *   { name: 'name', projectId: 'e058' },
   * );
   * ```
   */
  create(params: DeploymentCreateParams, options?: RequestOptions): APIPromise<Deployment> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/deployments', { query: { apiVersion }, body, ...options });
  }

  /**
   * Get a single deployment.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.iaas.api.deployments.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: DeploymentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Deployment> {
    return this._client.get(path`/iaas/api/deployments/${id}`, { query, ...options });
  }

  /**
   * Get all deployments.
   *
   * @example
   * ```ts
   * const deployments =
   *   await client.iaas.api.deployments.list();
   * ```
   */
  list(
    query: DeploymentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeploymentListResponse> {
    return this._client.get('/iaas/api/deployments', { query, ...options });
  }

  /**
   * Delete a deployment.
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.deployments.delete('id');
   * ```
   */
  delete(
    id: string,
    params: DeploymentDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, forceDelete } = params ?? {};
    return this._client.delete(path`/iaas/api/deployments/${id}`, {
      query: { apiVersion, forceDelete },
      ...options,
    });
  }
}

/**
 * State object representing a deployment. **HATEOAS** links: **self** -
 * Deployment - Self link to this deployment
 */
export interface Deployment {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: Deployment._Links;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * A human-friendly description.
   */
  description?: string;

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

  projectId?: string;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace Deployment {
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
 * State object representing a query result of deployments.
 */
export interface DeploymentListResponse {
  /**
   * List of content items
   */
  content?: Array<Deployment>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface DeploymentCreateParams {
  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: The id of the project the current user belongs to.
   */
  projectId: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;
}

export interface DeploymentRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface DeploymentListParams {
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

export interface DeploymentDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * If true, best effort is made for deleting this deployment and all related
   * resources. In some situations, this may leave provisioned infrastructure
   * resources behind. Please ensure you remove them manually. If false, a standard
   * delete action will be executed.
   */
  forceDelete?: boolean;
}

export declare namespace Deployments {
  export {
    type Deployment as Deployment,
    type DeploymentListResponse as DeploymentListResponse,
    type DeploymentCreateParams as DeploymentCreateParams,
    type DeploymentRetrieveParams as DeploymentRetrieveParams,
    type DeploymentListParams as DeploymentListParams,
    type DeploymentDeleteParams as DeploymentDeleteParams,
  };
}
