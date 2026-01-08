// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ZonesAPI from '../projects/zones';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Snapshots extends APIResource {
  /**
   * Get snapshot with a given id for specific machine
   *
   * @example
   * ```ts
   * const snapshot =
   *   await client.iaas.api.machines.snapshots.retrieve(
   *     'snapshotId',
   *     { id: 'id' },
   *   );
   * ```
   */
  retrieve(
    snapshotID: string,
    params: SnapshotRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Snapshot> {
    const { id, ...query } = params;
    return this._client.get(path`/iaas/api/machines/${id}/snapshots/${snapshotID}`, { query, ...options });
  }

  /**
   * Get machine snapshots information
   *
   * @example
   * ```ts
   * const snapshot =
   *   await client.iaas.api.machines.snapshots.list('id');
   * ```
   */
  list(
    id: string,
    query: SnapshotListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Snapshot> {
    return this._client.get(path`/iaas/api/machines/${id}/snapshots`, { query, ...options });
  }

  /**
   * Second day delete snapshot operation for machine
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.machines.snapshots.delete(
   *     'snapshotId',
   *     { id: 'id' },
   *   );
   * ```
   */
  delete(
    snapshotID: string,
    params: SnapshotDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { id, apiVersion } = params;
    return this._client.delete(path`/iaas/api/machines/${id}/snapshots/${snapshotID}`, {
      query: { apiVersion },
      ...options,
    });
  }
}

/**
 * Represents a machine snapshot
 */
export interface Snapshot {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: Snapshot._Links;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * Indicates if the snapshot is the current snapshot for machine
   */
  isCurrent?: boolean;

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
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace Snapshot {
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
   * Path param: The ID of the machine.
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
   * Path param: The id of the Machine.
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
    type Snapshot as Snapshot,
    type SnapshotRetrieveParams as SnapshotRetrieveParams,
    type SnapshotListParams as SnapshotListParams,
    type SnapshotDeleteParams as SnapshotDeleteParams,
  };
}
