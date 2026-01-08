// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TagsAPI from '../tags';
import * as ZonesAPI from '../projects/zones';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Snapshots extends APIResource {
  /**
   * Get snapshot with a given id for specific disk
   *
   * @example
   * ```ts
   * const diskSnapshot =
   *   await client.iaas.api.blockDevices.snapshots.retrieve(
   *     'id1',
   *     { id: 'id' },
   *   );
   * ```
   */
  retrieve(id1: string, params: SnapshotRetrieveParams, options?: RequestOptions): APIPromise<DiskSnapshot> {
    const { id, ...query } = params;
    return this._client.get(path`/iaas/api/block-devices/${id}/snapshots/${id1}`, { query, ...options });
  }

  /**
   * Get disk snapshots information
   *
   * @example
   * ```ts
   * const diskSnapshot =
   *   await client.iaas.api.blockDevices.snapshots.list('id');
   * ```
   */
  list(
    id: string,
    query: SnapshotListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DiskSnapshot> {
    return this._client.get(path`/iaas/api/block-devices/${id}/snapshots`, { query, ...options });
  }

  /**
   * Second day delete snapshot operation for Block device
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.blockDevices.snapshots.delete(
   *     'id1',
   *     { id: 'id' },
   *   );
   * ```
   */
  delete(
    id1: string,
    params: SnapshotDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { id, apiVersion } = params;
    return this._client.delete(path`/iaas/api/block-devices/${id}/snapshots/${id1}`, {
      query: { apiVersion },
      ...options,
    });
  }
}

/**
 * Represents a disk snapshot
 */
export interface DiskSnapshot {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: DiskSnapshot._Links;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * A human-friendly description.
   */
  desc?: string;

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
   * Snapshot specific properties
   */
  snapshotProperties?: { [key: string]: string };

  /**
   * A set of tag keys and optional values that have to be set on the snapshot in the
   * cloud. Currently supported for Azure Snapshots
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace DiskSnapshot {
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

export interface SnapshotRetrieveParams {
  /**
   * Path param: The ID of the disk.
   */
  id: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface SnapshotListParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface SnapshotDeleteParams {
  /**
   * Path param: The ID of the block device.
   */
  id: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;
}

export declare namespace Snapshots {
  export {
    type DiskSnapshot as DiskSnapshot,
    type SnapshotRetrieveParams as SnapshotRetrieveParams,
    type SnapshotListParams as SnapshotListParams,
    type SnapshotDeleteParams as SnapshotDeleteParams,
  };
}
