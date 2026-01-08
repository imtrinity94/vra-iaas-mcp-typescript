// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ZonesAPI from './projects/zones';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class RequestTracker extends APIResource {
  /**
   * Get request tracker with a given id
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.requestTracker.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: RequestTrackerRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    return this._client.get(path`/iaas/api/request-tracker/${id}`, { query, ...options });
  }

  /**
   * Delete a single Request
   *
   * @example
   * ```ts
   * await client.iaas.api.requestTracker.delete('id');
   * ```
   */
  delete(
    id: string,
    params: RequestTrackerDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apiVersion } = params ?? {};
    return this._client.delete(path`/iaas/api/request-tracker/${id}`, {
      query: { apiVersion },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all request trackers
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.requestTracker.retrieveRequestTracker();
   * ```
   */
  retrieveRequestTracker(
    query: RequestTrackerRetrieveRequestTrackerParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RequestTrackerRetrieveRequestTrackerResponse> {
    return this._client.get('/iaas/api/request-tracker', { query, ...options });
  }
}

/**
 * State object representing a query result of request tracker objects.
 */
export interface RequestTrackerRetrieveRequestTrackerResponse {
  /**
   * List of content items
   */
  content?: Array<ZonesAPI.RequestTracker>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface RequestTrackerRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface RequestTrackerDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface RequestTrackerRetrieveRequestTrackerParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export declare namespace RequestTracker {
  export {
    type RequestTrackerRetrieveRequestTrackerResponse as RequestTrackerRetrieveRequestTrackerResponse,
    type RequestTrackerRetrieveParams as RequestTrackerRetrieveParams,
    type RequestTrackerDeleteParams as RequestTrackerDeleteParams,
    type RequestTrackerRetrieveRequestTrackerParams as RequestTrackerRetrieveRequestTrackerParams,
  };
}
