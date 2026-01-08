// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from './tags';
import * as StorageProfilesAPI from './storage-profiles/storage-profiles';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class StorageProfilesVsphere extends APIResource {
  /**
   * Get vSphere storage profile with a given id
   *
   * @example
   * ```ts
   * const vsphereStorageProfile =
   *   await client.iaas.api.storageProfilesVsphere.retrieve(
   *     'id',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: StorageProfilesVsphereRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VsphereStorageProfile> {
    return this._client.get(path`/iaas/api/storage-profiles-vsphere/${id}`, { query, ...options });
  }

  /**
   * Update vSphere storage profile
   *
   * @example
   * ```ts
   * const vsphereStorageProfile =
   *   await client.iaas.api.storageProfilesVsphere.update(
   *     'id',
   *     {
   *       defaultItem: true,
   *       name: 'name',
   *       regionId: '31186',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: StorageProfilesVsphereUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VsphereStorageProfile> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/storage-profiles-vsphere/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete vSphere storage profile with a given id
   *
   * @example
   * ```ts
   * await client.iaas.api.storageProfilesVsphere.delete('id');
   * ```
   */
  delete(
    id: string,
    params: StorageProfilesVsphereDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apiVersion } = params ?? {};
    return this._client.delete(path`/iaas/api/storage-profiles-vsphere/${id}`, {
      query: { apiVersion },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all vSphere storage profiles
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.storageProfilesVsphere.retrieveStorageProfilesVsphere();
   * ```
   */
  retrieveStorageProfilesVsphere(
    query: StorageProfilesVsphereRetrieveStorageProfilesVsphereParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StorageProfilesVsphereRetrieveStorageProfilesVsphereResponse> {
    return this._client.get('/iaas/api/storage-profiles-vsphere', { query, ...options });
  }

  /**
   * Create vSphere storage profile
   *
   * @example
   * ```ts
   * const vsphereStorageProfile =
   *   await client.iaas.api.storageProfilesVsphere.storageProfilesVsphere(
   *     {
   *       defaultItem: true,
   *       name: 'name',
   *       regionId: '31186',
   *     },
   *   );
   * ```
   */
  storageProfilesVsphere(
    params: StorageProfilesVsphereStorageProfilesVsphereParams,
    options?: RequestOptions,
  ): APIPromise<VsphereStorageProfile> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/storage-profiles-vsphere', {
      query: { apiVersion },
      body,
      ...options,
    });
  }
}

/**
 * Represents a specification of vSphere storage profile.
 */
export interface StorageProfileVsphereSpecification {
  /**
   * Indicates if a storage profile acts as a default storage profile for a disk.
   */
  defaultItem: boolean;

  /**
   * A human-friendly name used as an identifier in APIs that support this option.
   */
  name: string;

  /**
   * The Id of the region that is associated with the storage profile.
   */
  regionId: string;

  /**
   * The compute host Id to be associated with the storage profile.
   */
  computeHostId?: string;

  /**
   * @deprecated Id of the vSphere Datastore for placing disk and VM. Deprecated,
   * instead use 'storageProfileAssociations' parameter to associate datastores with
   * the storage profile.
   */
  datastoreId?: string;

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * Type of mode for the disk
   */
  diskMode?: string;

  /**
   * Disk types are specified as
   *
   * Standard - Simple vSphere virtual disks which cannot be managed independently
   * without an attached VM. First Class - Improved version of standard virtual
   * disks, designed to be fully mananged independent storage objects.
   *
   * Empty value is considered as Standard
   */
  diskType?: string;

  /**
   * The upper bound for the I/O operations per second allocated for each virtual
   * disk.
   */
  limitIops?: string;

  /**
   * Defines the priority of the storage profile with the highest priority being 0.
   * Defaults to the value of 1.
   */
  priority?: number;

  /**
   * Type of provisioning policy for the disk.
   */
  provisioningType?: string;

  /**
   * A specific number of shares assigned to each virtual machine.
   */
  shares?: string;

  /**
   * Shares are specified as High, Normal, Low or Custom and these values specify
   * share values with a 4:2:1 ratio, respectively.
   */
  sharesLevel?: string;

  /**
   * Defines filter type for adding storage objects (data stores) to the storage
   * profile. Defaults to INCLUDE_ALL.
   */
  storageFilterType?: 'INCLUDE_ALL' | 'TAG_BASED' | 'MANUAL';

  /**
   * Id of the vSphere Storage Policy to be applied.
   */
  storagePolicyId?: string;

  /**
   * Defines a specification of Storage Profile datastore associations.
   */
  storageProfileAssociations?: Array<StorageProfilesAPI.StorageProfileAssociations>;

  /**
   * Indicates whether this storage profile supports encryption or not.
   */
  supportsEncryption?: boolean;

  /**
   * A list of tags that represent the capabilities of this storage profile.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * A set of tag keys and optional values to be set on data stores to be included in
   * this storage profile based on the storageFilterType: TAG_BASED.
   */
  tagsToMatch?: Array<TagsAPI.Tag>;
}

/**
 * Defines a structure that holds storage profile details defined for vSphere for a
 * specific region.**HATEOAS** links: **datastore** - FabricVsphereDatastore -
 * Datastore for this storage profile. **storage-policy** -
 * FabricVsphereStoragePolicy - vSphere storage policy for this storage profile.
 * **region** - Region - Region for the profile. **self** - VsphereStorageProfile -
 * Self link to this vSphere storage profile.
 */
export interface VsphereStorageProfile {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: VsphereStorageProfile._Links;

  /**
   * Indicates if a storage profile contains default storage properties.
   */
  defaultItem: boolean;

  /**
   * Id of the cloud account this storage profile belongs to.
   */
  cloudAccountId?: string;

  /**
   * The compute host Id to be associated with the storage profile.
   */
  computeHostId?: string;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * Type of mode for the disk
   */
  diskMode?: string;

  /**
   * Disk types are specified as Standard - Simple vSphere virtual disks which cannot
   * be managed independently without an attached VM. First Class - Improved version
   * of standard virtual disks, designed to be fully mananged independent storage
   * objects. Empty value is considered as Standard
   */
  diskType?: string;

  /**
   * The id of the region for which this profile is defined
   */
  externalRegionId?: string;

  /**
   * The upper bound for the I/O operations per second allocated for each disk.
   */
  limitIops?: string;

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
   * Defines the priority of the storage profile with the highest priority being 0.
   * Defaults to the value of 1.
   */
  priority?: number;

  /**
   * Type of format for the disk.
   */
  provisioningType?: string;

  /**
   * A specific number of shares assigned to each virtual machine.
   */
  shares?: string;

  /**
   * Shares level are specified as High, Normal, Low or Custom.
   */
  sharesLevel?: string;

  /**
   * Defines filter type for adding storage objects (datastores) to the storage
   * profile. Defaults to INCLUDE_ALL.
   */
  storageFilterType?: 'INCLUDE_ALL' | 'TAG_BASED' | 'MANUAL';

  /**
   * Indicates whether this storage profile should support encryption or not.
   */
  supportsEncryption?: boolean;

  /**
   * A list of tags that represent the capabilities of this storage profile
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * A set of tag keys and optional values to be set on datastores to be included in
   * this storage profile based on the storageFilterType: TAG_BASED.
   */
  tagsToMatch?: Array<TagsAPI.Tag>;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace VsphereStorageProfile {
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
 * State object representing a query result of vShpere storage profiles.
 */
export interface StorageProfilesVsphereRetrieveStorageProfilesVsphereResponse {
  /**
   * List of content items
   */
  content?: Array<VsphereStorageProfile>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface StorageProfilesVsphereRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface StorageProfilesVsphereUpdateParams {
  /**
   * Body param: Indicates if a storage profile acts as a default storage profile for
   * a disk.
   */
  defaultItem: boolean;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: The Id of the region that is associated with the storage profile.
   */
  regionId: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: The compute host Id to be associated with the storage profile.
   */
  computeHostId?: string;

  /**
   * @deprecated Body param: Id of the vSphere Datastore for placing disk and VM.
   * Deprecated, instead use 'storageProfileAssociations' parameter to associate
   * datastores with the storage profile.
   */
  datastoreId?: string;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: Type of mode for the disk
   */
  diskMode?: string;

  /**
   * Body param: Disk types are specified as
   *
   * Standard - Simple vSphere virtual disks which cannot be managed independently
   * without an attached VM. First Class - Improved version of standard virtual
   * disks, designed to be fully mananged independent storage objects.
   *
   * Empty value is considered as Standard
   */
  diskType?: string;

  /**
   * Body param: The upper bound for the I/O operations per second allocated for each
   * virtual disk.
   */
  limitIops?: string;

  /**
   * Body param: Defines the priority of the storage profile with the highest
   * priority being 0. Defaults to the value of 1.
   */
  priority?: number;

  /**
   * Body param: Type of provisioning policy for the disk.
   */
  provisioningType?: string;

  /**
   * Body param: A specific number of shares assigned to each virtual machine.
   */
  shares?: string;

  /**
   * Body param: Shares are specified as High, Normal, Low or Custom and these values
   * specify share values with a 4:2:1 ratio, respectively.
   */
  sharesLevel?: string;

  /**
   * Body param: Defines filter type for adding storage objects (data stores) to the
   * storage profile. Defaults to INCLUDE_ALL.
   */
  storageFilterType?: 'INCLUDE_ALL' | 'TAG_BASED' | 'MANUAL';

  /**
   * Body param: Id of the vSphere Storage Policy to be applied.
   */
  storagePolicyId?: string;

  /**
   * Body param: Defines a specification of Storage Profile datastore associations.
   */
  storageProfileAssociations?: Array<StorageProfilesAPI.StorageProfileAssociations>;

  /**
   * Body param: Indicates whether this storage profile supports encryption or not.
   */
  supportsEncryption?: boolean;

  /**
   * Body param: A list of tags that represent the capabilities of this storage
   * profile.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Body param: A set of tag keys and optional values to be set on data stores to be
   * included in this storage profile based on the storageFilterType: TAG_BASED.
   */
  tagsToMatch?: Array<TagsAPI.Tag>;
}

export interface StorageProfilesVsphereDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface StorageProfilesVsphereRetrieveStorageProfilesVsphereParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface StorageProfilesVsphereStorageProfilesVsphereParams {
  /**
   * Body param: Indicates if a storage profile acts as a default storage profile for
   * a disk.
   */
  defaultItem: boolean;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: The Id of the region that is associated with the storage profile.
   */
  regionId: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: The compute host Id to be associated with the storage profile.
   */
  computeHostId?: string;

  /**
   * @deprecated Body param: Id of the vSphere Datastore for placing disk and VM.
   * Deprecated, instead use 'storageProfileAssociations' parameter to associate
   * datastores with the storage profile.
   */
  datastoreId?: string;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: Type of mode for the disk
   */
  diskMode?: string;

  /**
   * Body param: Disk types are specified as
   *
   * Standard - Simple vSphere virtual disks which cannot be managed independently
   * without an attached VM. First Class - Improved version of standard virtual
   * disks, designed to be fully mananged independent storage objects.
   *
   * Empty value is considered as Standard
   */
  diskType?: string;

  /**
   * Body param: The upper bound for the I/O operations per second allocated for each
   * virtual disk.
   */
  limitIops?: string;

  /**
   * Body param: Defines the priority of the storage profile with the highest
   * priority being 0. Defaults to the value of 1.
   */
  priority?: number;

  /**
   * Body param: Type of provisioning policy for the disk.
   */
  provisioningType?: string;

  /**
   * Body param: A specific number of shares assigned to each virtual machine.
   */
  shares?: string;

  /**
   * Body param: Shares are specified as High, Normal, Low or Custom and these values
   * specify share values with a 4:2:1 ratio, respectively.
   */
  sharesLevel?: string;

  /**
   * Body param: Defines filter type for adding storage objects (data stores) to the
   * storage profile. Defaults to INCLUDE_ALL.
   */
  storageFilterType?: 'INCLUDE_ALL' | 'TAG_BASED' | 'MANUAL';

  /**
   * Body param: Id of the vSphere Storage Policy to be applied.
   */
  storagePolicyId?: string;

  /**
   * Body param: Defines a specification of Storage Profile datastore associations.
   */
  storageProfileAssociations?: Array<StorageProfilesAPI.StorageProfileAssociations>;

  /**
   * Body param: Indicates whether this storage profile supports encryption or not.
   */
  supportsEncryption?: boolean;

  /**
   * Body param: A list of tags that represent the capabilities of this storage
   * profile.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Body param: A set of tag keys and optional values to be set on data stores to be
   * included in this storage profile based on the storageFilterType: TAG_BASED.
   */
  tagsToMatch?: Array<TagsAPI.Tag>;
}

export declare namespace StorageProfilesVsphere {
  export {
    type StorageProfileVsphereSpecification as StorageProfileVsphereSpecification,
    type VsphereStorageProfile as VsphereStorageProfile,
    type StorageProfilesVsphereRetrieveStorageProfilesVsphereResponse as StorageProfilesVsphereRetrieveStorageProfilesVsphereResponse,
    type StorageProfilesVsphereRetrieveParams as StorageProfilesVsphereRetrieveParams,
    type StorageProfilesVsphereUpdateParams as StorageProfilesVsphereUpdateParams,
    type StorageProfilesVsphereDeleteParams as StorageProfilesVsphereDeleteParams,
    type StorageProfilesVsphereRetrieveStorageProfilesVsphereParams as StorageProfilesVsphereRetrieveStorageProfilesVsphereParams,
    type StorageProfilesVsphereStorageProfilesVsphereParams as StorageProfilesVsphereStorageProfilesVsphereParams,
  };
}
