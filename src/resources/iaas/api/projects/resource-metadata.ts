// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TagsAPI from '../tags';
import * as ProjectsAPI from './projects';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ResourceMetadata extends APIResource {
  /**
   * Get project resource metadata by a given project id
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.projects.resourceMetadata.retrieveResourceMetadata(
   *     'id',
   *   );
   * ```
   */
  retrieveResourceMetadata(
    id: string,
    query: ResourceMetadataRetrieveResourceMetadataParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResourceMetadataRetrieveResourceMetadataResponse> {
    return this._client.get(path`/iaas/api/projects/${id}/resource-metadata`, { query, ...options });
  }

  /**
   * Update project resource metadata by a given project id
   *
   * @example
   * ```ts
   * const project =
   *   await client.iaas.api.projects.resourceMetadata.updateResourceMetadata(
   *     'id',
   *   );
   * ```
   */
  updateResourceMetadata(
    id: string,
    params: ResourceMetadataUpdateResourceMetadataParams,
    options?: RequestOptions,
  ): APIPromise<ProjectsAPI.Project> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/projects/${id}/resource-metadata`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }
}

/**
 * Represents the resource metadata associated with a project
 */
export interface ResourceMetadataRetrieveResourceMetadataResponse {
  /**
   * A list of keys and optional values to be applied to compute resources
   * provisioned in a project
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface ResourceMetadataRetrieveResourceMetadataParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface ResourceMetadataUpdateResourceMetadataParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: A list of keys and optional values to be applied to compute
   * resources provisioned in a project
   */
  tags?: Array<TagsAPI.Tag>;
}

export declare namespace ResourceMetadata {
  export {
    type ResourceMetadataRetrieveResourceMetadataResponse as ResourceMetadataRetrieveResourceMetadataResponse,
    type ResourceMetadataRetrieveResourceMetadataParams as ResourceMetadataRetrieveResourceMetadataParams,
    type ResourceMetadataUpdateResourceMetadataParams as ResourceMetadataUpdateResourceMetadataParams,
  };
}
