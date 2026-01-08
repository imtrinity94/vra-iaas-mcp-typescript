// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from './tags';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class StorageProfilesGcp extends APIResource {
  /**
   * Get GCP storage profile with a given id
   *
   * @example
   * ```ts
   * const gcpStorageProfile =
   *   await client.iaas.api.storageProfilesGcp.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: StorageProfilesGcpRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GcpStorageProfile> {
    return this._client.get(path`/iaas/api/storage-profiles-gcp/${id}`, { query, ...options });
  }

  /**
   * Update GCP storage profile
   *
   * @example
   * ```ts
   * const gcpStorageProfile =
   *   await client.iaas.api.storageProfilesGcp.update('id', {
   *     name: 'name',
   *     persistentDiskType:
   *       'pd-standard / pd-ssd / pd-balanced / pd-extreme',
   *     regionId: '31186',
   *   });
   * ```
   */
  update(
    id: string,
    params: StorageProfilesGcpUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GcpStorageProfile> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/storage-profiles-gcp/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete GCP storage profile with a given id
   *
   * @example
   * ```ts
   * await client.iaas.api.storageProfilesGcp.delete('id');
   * ```
   */
  delete(
    id: string,
    params: StorageProfilesGcpDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apiVersion } = params ?? {};
    return this._client.delete(path`/iaas/api/storage-profiles-gcp/${id}`, {
      query: { apiVersion },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all GCP storage profiles
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.storageProfilesGcp.retrieveStorageProfilesGcp();
   * ```
   */
  retrieveStorageProfilesGcp(
    query: StorageProfilesGcpRetrieveStorageProfilesGcpParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StorageProfilesGcpRetrieveStorageProfilesGcpResponse> {
    return this._client.get('/iaas/api/storage-profiles-gcp', { query, ...options });
  }

  /**
   * Create GCP storage profile
   *
   * @example
   * ```ts
   * const gcpStorageProfile =
   *   await client.iaas.api.storageProfilesGcp.storageProfilesGcp(
   *     {
   *       name: 'name',
   *       persistentDiskType:
   *         'pd-standard / pd-ssd / pd-balanced / pd-extreme',
   *       regionId: '31186',
   *     },
   *   );
   * ```
   */
  storageProfilesGcp(
    params: StorageProfilesGcpStorageProfilesGcpParams,
    options?: RequestOptions,
  ): APIPromise<GcpStorageProfile> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/storage-profiles-gcp', { query: { apiVersion }, body, ...options });
  }
}

/**
 * Defines a structure that holds list of storage policies defined for GCP for a
 * specific region.**HATEOAS** links: **region** - Region - Region for the profile.
 * **self** - GcpStorageProfile - Self link to this gcp Storage Profile
 */
export interface GcpStorageProfile {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: GcpStorageProfile._Links;

  /**
   * Indicates whether this storage profile is default or not.
   */
  defaultItem: boolean;

  /**
   * Id of the cloud account this storage profile belongs to.
   */
  cloudAccountId?: string;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * The id of the region for which this profile is defined
   */
  externalRegionId?: string;

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
   * Indicates the type of storage device.
   */
  persistentDiskType?: string;

  /**
   * Indicates whether this storage profile supports encryption or not.
   */
  supportsEncryption?: boolean;

  /**
   * A list of tags that represent the capabilities of this storage profile
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace GcpStorageProfile {
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
 * Represents a specification of GCP storage profile.
 */
export interface StorageProfileGcpSpecification {
  /**
   * A human-friendly name used as an identifier in APIs that support this option.
   */
  name: string;

  /**
   * Indicates the type of disk.
   */
  persistentDiskType: string;

  /**
   * A link to the region that is associated with the storage profile.
   */
  regionId: string;

  /**
   * Indicates if a storage profile is default or not.
   */
  defaultItem?: boolean;

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * Indicates whether this storage profile supports encryption or not.
   */
  supportsEncryption?: boolean;

  /**
   * A list of tags that represent the capabilities of this storage profile
   */
  tags?: Array<TagsAPI.Tag>;
}

/**
 * State object representing a query result of Gcp storage profiles.
 */
export interface StorageProfilesGcpRetrieveStorageProfilesGcpResponse {
  /**
   * List of content items
   */
  content?: Array<GcpStorageProfile>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface StorageProfilesGcpRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface StorageProfilesGcpUpdateParams {
  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: Indicates the type of disk.
   */
  persistentDiskType: string;

  /**
   * Body param: A link to the region that is associated with the storage profile.
   */
  regionId: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: Indicates if a storage profile is default or not.
   */
  defaultItem?: boolean;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: Indicates whether this storage profile supports encryption or not.
   */
  supportsEncryption?: boolean;

  /**
   * Body param: A list of tags that represent the capabilities of this storage
   * profile
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface StorageProfilesGcpDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface StorageProfilesGcpRetrieveStorageProfilesGcpParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface StorageProfilesGcpStorageProfilesGcpParams {
  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: Indicates the type of disk.
   */
  persistentDiskType: string;

  /**
   * Body param: A link to the region that is associated with the storage profile.
   */
  regionId: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: Indicates if a storage profile is default or not.
   */
  defaultItem?: boolean;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: Indicates whether this storage profile supports encryption or not.
   */
  supportsEncryption?: boolean;

  /**
   * Body param: A list of tags that represent the capabilities of this storage
   * profile
   */
  tags?: Array<TagsAPI.Tag>;
}

export declare namespace StorageProfilesGcp {
  export {
    type GcpStorageProfile as GcpStorageProfile,
    type StorageProfileGcpSpecification as StorageProfileGcpSpecification,
    type StorageProfilesGcpRetrieveStorageProfilesGcpResponse as StorageProfilesGcpRetrieveStorageProfilesGcpResponse,
    type StorageProfilesGcpRetrieveParams as StorageProfilesGcpRetrieveParams,
    type StorageProfilesGcpUpdateParams as StorageProfilesGcpUpdateParams,
    type StorageProfilesGcpDeleteParams as StorageProfilesGcpDeleteParams,
    type StorageProfilesGcpRetrieveStorageProfilesGcpParams as StorageProfilesGcpRetrieveStorageProfilesGcpParams,
    type StorageProfilesGcpStorageProfilesGcpParams as StorageProfilesGcpStorageProfilesGcpParams,
  };
}
