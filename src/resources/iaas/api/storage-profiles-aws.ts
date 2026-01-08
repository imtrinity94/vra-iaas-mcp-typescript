// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from './tags';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class StorageProfilesAws extends APIResource {
  /**
   * Get AWS storage profile with a given id
   *
   * @example
   * ```ts
   * const awsStorageProfile =
   *   await client.iaas.api.storageProfilesAws.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: StorageProfilesAwRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AwsStorageProfile> {
    return this._client.get(path`/iaas/api/storage-profiles-aws/${id}`, { query, ...options });
  }

  /**
   * Update AWS storage profile
   *
   * @example
   * ```ts
   * const awsStorageProfile =
   *   await client.iaas.api.storageProfilesAws.update('id', {
   *     deviceType: 'ebs / instance-store',
   *     name: 'name',
   *     regionId: '31186',
   *   });
   * ```
   */
  update(
    id: string,
    params: StorageProfilesAwUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AwsStorageProfile> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/storage-profiles-aws/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete AWS storage profile with a given id
   *
   * @example
   * ```ts
   * await client.iaas.api.storageProfilesAws.delete('id');
   * ```
   */
  delete(
    id: string,
    params: StorageProfilesAwDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apiVersion } = params ?? {};
    return this._client.delete(path`/iaas/api/storage-profiles-aws/${id}`, {
      query: { apiVersion },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all AWS storage profiles
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.storageProfilesAws.retrieveStorageProfilesAws();
   * ```
   */
  retrieveStorageProfilesAws(
    query: StorageProfilesAwRetrieveStorageProfilesAwsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StorageProfilesAwRetrieveStorageProfilesAwsResponse> {
    return this._client.get('/iaas/api/storage-profiles-aws', { query, ...options });
  }

  /**
   * Create AWS storage profile
   *
   * @example
   * ```ts
   * const awsStorageProfile =
   *   await client.iaas.api.storageProfilesAws.storageProfilesAws(
   *     {
   *       deviceType: 'ebs / instance-store',
   *       name: 'name',
   *       regionId: '31186',
   *     },
   *   );
   * ```
   */
  storageProfilesAws(
    params: StorageProfilesAwStorageProfilesAwsParams,
    options?: RequestOptions,
  ): APIPromise<AwsStorageProfile> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/storage-profiles-aws', { query: { apiVersion }, body, ...options });
  }
}

/**
 * Defines a structure that holds list of storage policies defined for AWS for a
 * specific region.**HATEOAS** links: **region** - Region - Region for the profile.
 * **self** - AwsStorageProfile - Self link to this aws Storage Profile
 */
export interface AwsStorageProfile {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: AwsStorageProfile._Links;

  /**
   * Indicates whether this storage profile is default or not..
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
   * Indicates the type of storage device.
   */
  deviceType?: string;

  /**
   * The id of the region for which this profile is defined
   */
  externalRegionId?: string;

  /**
   * Indicates maximum I/O operations per second.
   */
  iops?: string;

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

  /**
   * Indicates the type of volume associated with type of storage device.
   */
  volumeType?: string;
}

export namespace AwsStorageProfile {
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
 * Represents a specification of AWS storage profile.
 */
export interface StorageProfileAwsSpecification {
  /**
   * Indicates the type of storage.
   */
  deviceType: string;

  /**
   * A human-friendly name used as an identifier in APIs that support this option.
   */
  name: string;

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
   * Indicates maximum I/O operations per second.
   */
  iops?: string;

  /**
   * Indicates whether this storage profile supports encryption or not.
   */
  supportsEncryption?: boolean;

  /**
   * A list of tags that represent the capabilities of this storage profile
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Indicates the type of volume associated with type of storage.
   */
  volumeType?: string;
}

/**
 * State object representing a query result of Aws storage profiles.
 */
export interface StorageProfilesAwRetrieveStorageProfilesAwsResponse {
  /**
   * List of content items
   */
  content?: Array<AwsStorageProfile>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface StorageProfilesAwRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface StorageProfilesAwUpdateParams {
  /**
   * Body param: Indicates the type of storage.
   */
  deviceType: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

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
   * Body param: Indicates maximum I/O operations per second.
   */
  iops?: string;

  /**
   * Body param: Indicates whether this storage profile supports encryption or not.
   */
  supportsEncryption?: boolean;

  /**
   * Body param: A list of tags that represent the capabilities of this storage
   * profile
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Body param: Indicates the type of volume associated with type of storage.
   */
  volumeType?: string;
}

export interface StorageProfilesAwDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface StorageProfilesAwRetrieveStorageProfilesAwsParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface StorageProfilesAwStorageProfilesAwsParams {
  /**
   * Body param: Indicates the type of storage.
   */
  deviceType: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

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
   * Body param: Indicates maximum I/O operations per second.
   */
  iops?: string;

  /**
   * Body param: Indicates whether this storage profile supports encryption or not.
   */
  supportsEncryption?: boolean;

  /**
   * Body param: A list of tags that represent the capabilities of this storage
   * profile
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Body param: Indicates the type of volume associated with type of storage.
   */
  volumeType?: string;
}

export declare namespace StorageProfilesAws {
  export {
    type AwsStorageProfile as AwsStorageProfile,
    type StorageProfileAwsSpecification as StorageProfileAwsSpecification,
    type StorageProfilesAwRetrieveStorageProfilesAwsResponse as StorageProfilesAwRetrieveStorageProfilesAwsResponse,
    type StorageProfilesAwRetrieveParams as StorageProfilesAwRetrieveParams,
    type StorageProfilesAwUpdateParams as StorageProfilesAwUpdateParams,
    type StorageProfilesAwDeleteParams as StorageProfilesAwDeleteParams,
    type StorageProfilesAwRetrieveStorageProfilesAwsParams as StorageProfilesAwRetrieveStorageProfilesAwsParams,
    type StorageProfilesAwStorageProfilesAwsParams as StorageProfilesAwStorageProfilesAwsParams,
  };
}
