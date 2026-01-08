// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from './tags';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class StorageProfilesAzure extends APIResource {
  /**
   * Get Azure storage profile with a given id
   *
   * @example
   * ```ts
   * const azureStorageProfile =
   *   await client.iaas.api.storageProfilesAzure.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: StorageProfilesAzureRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AzureStorageProfile> {
    return this._client.get(path`/iaas/api/storage-profiles-azure/${id}`, { query, ...options });
  }

  /**
   * Update Azure storage profile
   *
   * @example
   * ```ts
   * const azureStorageProfile =
   *   await client.iaas.api.storageProfilesAzure.update('id', {
   *     name: 'name',
   *     regionId: '31186',
   *   });
   * ```
   */
  update(
    id: string,
    params: StorageProfilesAzureUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AzureStorageProfile> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/storage-profiles-azure/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete Azure storage profile with a given id
   *
   * @example
   * ```ts
   * await client.iaas.api.storageProfilesAzure.delete('id');
   * ```
   */
  delete(
    id: string,
    params: StorageProfilesAzureDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apiVersion } = params ?? {};
    return this._client.delete(path`/iaas/api/storage-profiles-azure/${id}`, {
      query: { apiVersion },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all Azure storage profiles
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.storageProfilesAzure.retrieveStorageProfilesAzure();
   * ```
   */
  retrieveStorageProfilesAzure(
    query: StorageProfilesAzureRetrieveStorageProfilesAzureParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StorageProfilesAzureRetrieveStorageProfilesAzureResponse> {
    return this._client.get('/iaas/api/storage-profiles-azure', { query, ...options });
  }

  /**
   * Create Azure storage profile
   *
   * @example
   * ```ts
   * const azureStorageProfile =
   *   await client.iaas.api.storageProfilesAzure.storageProfilesAzure(
   *     { name: 'name', regionId: '31186' },
   *   );
   * ```
   */
  storageProfilesAzure(
    params: StorageProfilesAzureStorageProfilesAzureParams,
    options?: RequestOptions,
  ): APIPromise<AzureStorageProfile> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/storage-profiles-azure', { query: { apiVersion }, body, ...options });
  }
}

/**
 * Defines a structure that holds list of storage policies defined for Azure for a
 * specific region.**HATEOAS** links: **storage-account** -
 * FabricAzureStorageAccount - Storage account for the profile. **region** -
 * Region - Region for the profile. **self** - AzureStorageProfile - Self link to
 * this Azure storage profile.
 */
export interface AzureStorageProfile {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: AzureStorageProfile._Links;

  /**
   * Indicates if a storage profile contains default storage properties.
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
   * Indicates the caching mechanism for additional disk.
   */
  dataDiskCaching?: string;

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * Indicates the id of disk encryption set.
   */
  diskEncryptionSetId?: string;

  /**
   * Indicates the performance tier for the storage type. Premium disks are SSD
   * backed and Standard disks are HDD backed.
   */
  diskType?: string;

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
   * Indicates the caching mechanism for OS disk. Default policy for OS disks is
   * Read/Write.
   */
  osDiskCaching?: string;

  /**
   * Email of the user or display name of the group that owns the entity.
   */
  owner?: string;

  /**
   * Type of a owner(user/ad_group) that owns the entity.
   */
  ownerType?: string;

  /**
   * Indicates whether this storage profile should support encryption or not.
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

export namespace AzureStorageProfile {
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
 * Represents a specification of Azure storage profile.
 */
export interface StorageProfileAzureSpecification {
  /**
   * A human-friendly name used as an identifier in APIs that support this option.
   */
  name: string;

  /**
   * The If of the region that is associated with the storage profile.
   */
  regionId: string;

  /**
   * Indicates the caching mechanism for additional disk.
   */
  dataDiskCaching?: string;

  /**
   * Indicates if a storage policy contains default storage properties.
   */
  defaultItem?: boolean;

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * Indicates the id of disk encryption set.
   */
  diskEncryptionSetId?: string;

  /**
   * Indicates the performance tier for the storage type. Premium disks are SSD
   * backed and Standard disks are HDD backed.
   */
  diskType?: string;

  /**
   * Indicates the caching mechanism for OS disk. Default policy for OS disks is
   * Read/Write.
   */
  osDiskCaching?: string;

  /**
   * Id of a storage account where in the disk is placed.
   */
  storageAccountId?: string;

  /**
   * Indicates whether this storage policy should support encryption or not.
   */
  supportsEncryption?: boolean;

  /**
   * A set of tag keys and optional values for a storage policy which define set of
   * specifications for creating a disk.
   */
  tags?: Array<TagsAPI.Tag>;
}

/**
 * State object representing a query result of Azure storage profiles.
 */
export interface StorageProfilesAzureRetrieveStorageProfilesAzureResponse {
  /**
   * List of content items
   */
  content?: Array<AzureStorageProfile>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface StorageProfilesAzureRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface StorageProfilesAzureUpdateParams {
  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: The If of the region that is associated with the storage profile.
   */
  regionId: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: Indicates the caching mechanism for additional disk.
   */
  dataDiskCaching?: string;

  /**
   * Body param: Indicates if a storage policy contains default storage properties.
   */
  defaultItem?: boolean;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: Indicates the id of disk encryption set.
   */
  diskEncryptionSetId?: string;

  /**
   * Body param: Indicates the performance tier for the storage type. Premium disks
   * are SSD backed and Standard disks are HDD backed.
   */
  diskType?: string;

  /**
   * Body param: Indicates the caching mechanism for OS disk. Default policy for OS
   * disks is Read/Write.
   */
  osDiskCaching?: string;

  /**
   * Body param: Id of a storage account where in the disk is placed.
   */
  storageAccountId?: string;

  /**
   * Body param: Indicates whether this storage policy should support encryption or
   * not.
   */
  supportsEncryption?: boolean;

  /**
   * Body param: A set of tag keys and optional values for a storage policy which
   * define set of specifications for creating a disk.
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface StorageProfilesAzureDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface StorageProfilesAzureRetrieveStorageProfilesAzureParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface StorageProfilesAzureStorageProfilesAzureParams {
  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: The If of the region that is associated with the storage profile.
   */
  regionId: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: Indicates the caching mechanism for additional disk.
   */
  dataDiskCaching?: string;

  /**
   * Body param: Indicates if a storage policy contains default storage properties.
   */
  defaultItem?: boolean;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: Indicates the id of disk encryption set.
   */
  diskEncryptionSetId?: string;

  /**
   * Body param: Indicates the performance tier for the storage type. Premium disks
   * are SSD backed and Standard disks are HDD backed.
   */
  diskType?: string;

  /**
   * Body param: Indicates the caching mechanism for OS disk. Default policy for OS
   * disks is Read/Write.
   */
  osDiskCaching?: string;

  /**
   * Body param: Id of a storage account where in the disk is placed.
   */
  storageAccountId?: string;

  /**
   * Body param: Indicates whether this storage policy should support encryption or
   * not.
   */
  supportsEncryption?: boolean;

  /**
   * Body param: A set of tag keys and optional values for a storage policy which
   * define set of specifications for creating a disk.
   */
  tags?: Array<TagsAPI.Tag>;
}

export declare namespace StorageProfilesAzure {
  export {
    type AzureStorageProfile as AzureStorageProfile,
    type StorageProfileAzureSpecification as StorageProfileAzureSpecification,
    type StorageProfilesAzureRetrieveStorageProfilesAzureResponse as StorageProfilesAzureRetrieveStorageProfilesAzureResponse,
    type StorageProfilesAzureRetrieveParams as StorageProfilesAzureRetrieveParams,
    type StorageProfilesAzureUpdateParams as StorageProfilesAzureUpdateParams,
    type StorageProfilesAzureDeleteParams as StorageProfilesAzureDeleteParams,
    type StorageProfilesAzureRetrieveStorageProfilesAzureParams as StorageProfilesAzureRetrieveStorageProfilesAzureParams,
    type StorageProfilesAzureStorageProfilesAzureParams as StorageProfilesAzureStorageProfilesAzureParams,
  };
}
