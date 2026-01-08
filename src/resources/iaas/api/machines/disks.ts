// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BlockDevicesAPI from '../block-devices/block-devices';
import * as ZonesAPI from '../projects/zones';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Disks extends APIResource {
  /**
   * Attach a disk to a machine.
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.machines.disks.create('id', {
   *     blockDeviceId: '1298765',
   *   });
   * ```
   */
  create(
    id: string,
    params: DiskCreateParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post(path`/iaas/api/machines/${id}/disks`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Get disk with a given id for specific machine
   *
   * @example
   * ```ts
   * const blockDevice =
   *   await client.iaas.api.machines.disks.retrieve('diskId', {
   *     id: 'id',
   *   });
   * ```
   */
  retrieve(
    diskID: string,
    params: DiskRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BlockDevicesAPI.BlockDevice> {
    const { id, ...query } = params;
    return this._client.get(path`/iaas/api/machines/${id}/disks/${diskID}`, { query, ...options });
  }

  /**
   * Get all machine disks
   *
   * @example
   * ```ts
   * const blockDeviceResult =
   *   await client.iaas.api.machines.disks.list('id');
   * ```
   */
  list(
    id: string,
    query: DiskListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlockDeviceResult> {
    return this._client.get(path`/iaas/api/machines/${id}/disks`, { query, ...options });
  }

  /**
   * Remove a disk from a given machine.
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.machines.disks.delete('diskId', {
   *     id: 'id',
   *   });
   * ```
   */
  delete(
    diskID: string,
    params: DiskDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { id, apiVersion } = params;
    return this._client.delete(path`/iaas/api/machines/${id}/disks/${diskID}`, {
      query: { apiVersion },
      ...options,
    });
  }
}

/**
 * State object representing a query result of block device.
 */
export interface BlockDeviceResult {
  /**
   * List of content items
   */
  content?: Array<BlockDevicesAPI.BlockDevice>;

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
 * Specification for attaching disk to a machine
 */
export interface DiskAttachmentSpecification {
  /**
   * The id of the existing block device
   */
  blockDeviceId: string;

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * Disk Attachment specific properties
   */
  diskAttachmentProperties?: { [key: string]: string };

  /**
   * A human-friendly name used as an identifier in APIs that support this option.
   */
  name?: string;

  /**
   * @deprecated Deprecated: The SCSI controller to be assigned
   */
  scsiController?: string;

  /**
   * @deprecated Deprecated: The Unit Number to be assigned
   */
  unitNumber?: string;
}

export interface DiskCreateParams {
  /**
   * Body param: The id of the existing block device
   */
  blockDeviceId: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: Disk Attachment specific properties
   */
  diskAttachmentProperties?: { [key: string]: string };

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name?: string;

  /**
   * @deprecated Body param: Deprecated: The SCSI controller to be assigned
   */
  scsiController?: string;

  /**
   * @deprecated Body param: Deprecated: The Unit Number to be assigned
   */
  unitNumber?: string;
}

export interface DiskRetrieveParams {
  /**
   * Path param: The ID of the machine.
   */
  id: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface DiskListParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface DiskDeleteParams {
  /**
   * Path param: The ID of the machine.
   */
  id: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;
}

export declare namespace Disks {
  export {
    type BlockDeviceResult as BlockDeviceResult,
    type DiskAttachmentSpecification as DiskAttachmentSpecification,
    type DiskCreateParams as DiskCreateParams,
    type DiskRetrieveParams as DiskRetrieveParams,
    type DiskListParams as DiskListParams,
    type DiskDeleteParams as DiskDeleteParams,
  };
}
