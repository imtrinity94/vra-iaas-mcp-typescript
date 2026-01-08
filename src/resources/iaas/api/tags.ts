// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tags extends APIResource {
  /**
   * Create a new tag
   *
   * @example
   * ```ts
   * const tag = await client.iaas.api.tags.create({
   *   key: 'key',
   * });
   * ```
   */
  create(params: TagCreateParams, options?: RequestOptions): APIPromise<Tag> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/tags', { query: { apiVersion }, body, ...options });
  }

  /**
   * Get all tags
   *
   * @example
   * ```ts
   * const tags = await client.iaas.api.tags.list();
   * ```
   */
  list(query: TagListParams | null | undefined = {}, options?: RequestOptions): APIPromise<TagListResponse> {
    return this._client.get('/iaas/api/tags', { query, ...options });
  }

  /**
   * Delete a tag by ID
   *
   * @example
   * ```ts
   * await client.iaas.api.tags.delete('id');
   * ```
   */
  delete(
    id: string,
    params: TagDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apiVersion, ignoreUsage } = params ?? {};
    return this._client.delete(path`/iaas/api/tags/${id}`, {
      query: { apiVersion, ignoreUsage },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get documents of all resources that are assigned with the provided tags
   *
   * @example
   * ```ts
   * await client.iaas.api.tags.tagsUsage();
   * ```
   */
  tagsUsage(params: TagTagsUsageParams, options?: RequestOptions): APIPromise<void> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/tags/tags-usage', {
      query: { apiVersion },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * A set of tag keys and optional values that were set on this resource.
 */
export interface Tag {
  /**
   * Tag's key.
   */
  key: string;

  /**
   * Tag's value.
   */
  value: string;

  /**
   * Tag's id.
   */
  id?: string;
}

/**
 * State object representing a query result of tags.
 */
export interface TagListResponse {
  /**
   * List of content items
   */
  content?: Array<Tag>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface TagCreateParams {
  /**
   * Body param: Tag's key.
   */
  key: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: Tag's value.
   */
  value?: string;
}

export interface TagListParams {
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

export interface TagDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Controls whether this is a delete operation while ignoring tag usage. If true,
   * best effort is made for deleting this tag. All the tag assignments are removed.
   * Only after successfully un-assigning the tag from resources, the tag is deleted
   * from VMware Aria Automation. Note, that a discovered tag, if deleted, gets
   * re-enumerated in the system after next data collection cycle and also gets
   * self-assigned to the discovered resources.
   */
  ignoreUsage?: boolean;
}

export interface TagTagsUsageParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: List of Tag IDs. All provided tags will be matched to all resources
   * containing that tag.
   */
  tagIds?: Array<string>;
}

export declare namespace Tags {
  export {
    type Tag as Tag,
    type TagListResponse as TagListResponse,
    type TagCreateParams as TagCreateParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
    type TagTagsUsageParams as TagTagsUsageParams,
  };
}
