// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TagsAPI from '../tags';
import * as ZonesAPI from '../projects/zones';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Operations extends APIResource {
  /**
   * Second day promote operation on disk. Applicable for vSphere Block Devices only
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.blockDevices.operations.promote(
   *     'id',
   *   );
   * ```
   */
  promote(
    id: string,
    params: OperationPromoteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params ?? {};
    return this._client.post(path`/iaas/api/block-devices/${id}/operations/promote`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Second day revert snapshot operation for Block device
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.blockDevices.operations.revert(
   *     'diskId',
   *     { id: 'id' },
   *   );
   * ```
   */
  revert(
    diskID: string,
    params: OperationRevertParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { id, apiVersion } = params;
    return this._client.post(path`/iaas/api/block-devices/${diskID}/operations/revert`, {
      query: { id, apiVersion },
      ...options,
    });
  }

  /**
   * Second day create snapshot operation for Block device
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.blockDevices.operations.snapshots(
   *     'id',
   *   );
   * ```
   */
  snapshots(
    id: string,
    params: OperationSnapshotsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params ?? {};
    return this._client.post(path`/iaas/api/block-devices/${id}/operations/snapshots`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }
}

export interface OperationPromoteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface OperationRevertParams {
  /**
   * Snapshot id to revert.
   */
  id: string;

  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface OperationSnapshotsParams {
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
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name?: string;

  /**
   * Body param: Cloud specific snapshot properties supplied in as name value pairs
   */
  snapshotProperties?: { [key: string]: string };

  /**
   * Body param: A set of tag keys and optional values that have to be set on the
   * snapshot in the cloud. Currently supported for Azure Snapshots
   */
  tags?: Array<TagsAPI.Tag>;
}

export declare namespace Operations {
  export {
    type OperationPromoteParams as OperationPromoteParams,
    type OperationRevertParams as OperationRevertParams,
    type OperationSnapshotsParams as OperationSnapshotsParams,
  };
}
