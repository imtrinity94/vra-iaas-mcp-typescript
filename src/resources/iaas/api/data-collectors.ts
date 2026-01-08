// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class DataCollectors extends APIResource {
  /**
   * Get Data Collector with a given id.
   *
   * Note: Data collector endpoints are not available in VMware Aria Automation
   * (on-prem) release.
   *
   * @example
   * ```ts
   * const dataCollector =
   *   await client.iaas.api.dataCollectors.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: DataCollectorRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DataCollector> {
    return this._client.get(path`/iaas/api/data-collectors/${id}`, { query, ...options });
  }

  /**
   * Delete Data Collector with a given id.
   *
   * Note: Data collector endpoints are not available in VMware Aria Automation
   * (on-prem) release.
   *
   * @example
   * ```ts
   * await client.iaas.api.dataCollectors.delete('id');
   * ```
   */
  delete(
    id: string,
    params: DataCollectorDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apiVersion } = params ?? {};
    return this._client.delete(path`/iaas/api/data-collectors/${id}`, {
      query: { apiVersion },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a new Data Collector.
   *
   * Note: Data collector endpoints are not available in VMware Aria Automation
   * (on-prem) release.
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.dataCollectors.dataCollectors();
   * ```
   */
  dataCollectors(
    params: DataCollectorDataCollectorsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DataCollectorDataCollectorsResponse> {
    const { apiVersion } = params ?? {};
    return this._client.post('/iaas/api/data-collectors', { query: { apiVersion }, ...options });
  }

  /**
   * Get all Data Collectors.
   *
   * Note: Data collector endpoints are not available in VMware Aria Automation
   * (on-prem) release.
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.dataCollectors.retrieveDataCollectors();
   * ```
   */
  retrieveDataCollectors(
    query: DataCollectorRetrieveDataCollectorsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DataCollectorRetrieveDataCollectorsResponse> {
    return this._client.get('/iaas/api/data-collectors', { query, ...options });
  }
}

/**
 * State object representing a data collector. The data collector is an OVA tool
 * that contains the credentials and protocols needed to create a connection
 * between a data collector appliance on a host vCenter and a vCenter-based cloud
 * account.
 *
 * Filtering is currently possible for some of the data collector fields via
 * $filter. Supported fields: services proxyId creationTimeMicros customProperties
 *
 * Supported operators: eq, ne, lt, gt, and, or.
 *
 * By default, the obtained list contains the enabled data collectors. A query
 * parameter "disabled=true" can be added to obtain disabled data collectors.
 *
 * Special case: If the user specifies $filter=((services.item ne
 * 'cloud_assembly_extensibility') and (services.item ne 'cloud_assembly')), which
 * is equivalent to disabled=true, and does not specify the "disabled" parameter,
 * the resulting query will be equivalent to ((disabled=true) and
 * (disabled=false)). This call will return an empty list.
 */
export interface DataCollector {
  /**
   * Data collector identifier
   */
  dcId: string;

  /**
   * Data collector host name
   */
  hostName: string;

  /**
   * Ip Address of the data collector VM
   */
  ipAddress: string;

  /**
   * Data collector name
   */
  name: string;

  /**
   * Current status of the data collector
   */
  status: string;
}

/**
 * Data collector registration object. The supplied data collector is an OVA tool
 * that contains the credentials and protocols needed to create a connection
 * between a data collector appliance on a host vCenter and a vCenter-based cloud
 * account. . The process of deploying data collector is:
 *
 * 1. Download the data collector ova from the "ovaLink".
 * 2. Import the .ova file to the vCenter Server and start the installation.
 * 3. When asked for the key, copy and use the "key" provided.
 * 4. It takes a few minutes to detect your Data Collector after it is deployed and
 *    powered on in vCenter.
 */
export interface DataCollectorDataCollectorsResponse {
  /**
   * A registration key for the data collector
   */
  key: string;

  /**
   * Data collector OVA Link
   */
  ovaLink: string;
}

/**
 * State object representing a query result of data collectors.
 */
export interface DataCollectorRetrieveDataCollectorsResponse {
  /**
   * List of content items
   */
  content?: Array<DataCollector>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface DataCollectorRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface DataCollectorDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface DataCollectorDataCollectorsParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface DataCollectorRetrieveDataCollectorsParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * If query param is provided with value equals to true, only disabled data
   * collectors will be retrieved.
   */
  disabled?: boolean;
}

export declare namespace DataCollectors {
  export {
    type DataCollector as DataCollector,
    type DataCollectorDataCollectorsResponse as DataCollectorDataCollectorsResponse,
    type DataCollectorRetrieveDataCollectorsResponse as DataCollectorRetrieveDataCollectorsResponse,
    type DataCollectorRetrieveParams as DataCollectorRetrieveParams,
    type DataCollectorDeleteParams as DataCollectorDeleteParams,
    type DataCollectorDataCollectorsParams as DataCollectorDataCollectorsParams,
    type DataCollectorRetrieveDataCollectorsParams as DataCollectorRetrieveDataCollectorsParams,
  };
}
