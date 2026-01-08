// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TagsAPI from '../tags';
import * as StorageProfileAssociationsAPI from './storage-profile-associations';
import {
  StorageProfileAssociationRetrieveStorageProfileAssociationsParams,
  StorageProfileAssociationRetrieveStorageProfileAssociationsResponse,
  StorageProfileAssociationUpdateStorageProfileAssociationsParams,
  StorageProfileAssociationUpdateStorageProfileAssociationsResponse,
} from './storage-profile-associations';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class StorageProfiles extends APIResource {
  storageProfileAssociations: StorageProfileAssociationsAPI.StorageProfileAssociations =
    new StorageProfileAssociationsAPI.StorageProfileAssociations(this._client);

  /**
   * Get storage profile with a given id
   *
   * @example
   * ```ts
   * const storageProfile =
   *   await client.iaas.api.storageProfiles.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: StorageProfileRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StorageProfile> {
    return this._client.get(path`/iaas/api/storage-profiles/${id}`, { query, ...options });
  }

  /**
   * Replace storage profile with a given id
   *
   * @example
   * ```ts
   * const storageProfile =
   *   await client.iaas.api.storageProfiles.update('id', {
   *     defaultItem: true,
   *     name: 'name',
   *     regionId: '31186',
   *   });
   * ```
   */
  update(
    id: string,
    params: StorageProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<StorageProfile> {
    const { apiVersion, ...body } = params;
    return this._client.put(path`/iaas/api/storage-profiles/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete storage profile with a given id
   *
   * @example
   * ```ts
   * await client.iaas.api.storageProfiles.delete('id');
   * ```
   */
  delete(
    id: string,
    params: StorageProfileDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apiVersion } = params ?? {};
    return this._client.delete(path`/iaas/api/storage-profiles/${id}`, {
      query: { apiVersion },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all storage profiles
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.storageProfiles.retrieveStorageProfiles();
   * ```
   */
  retrieveStorageProfiles(
    query: StorageProfileRetrieveStorageProfilesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StorageProfileRetrieveStorageProfilesResponse> {
    return this._client.get('/iaas/api/storage-profiles', { query, ...options });
  }

  /**
   * Create storage profile
   *
   * @example
   * ```ts
   * const storageProfile =
   *   await client.iaas.api.storageProfiles.storageProfiles({
   *     defaultItem: true,
   *     name: 'name',
   *     regionId: '31186',
   *   });
   * ```
   */
  storageProfiles(
    params: StorageProfileStorageProfilesParams,
    options?: RequestOptions,
  ): APIPromise<StorageProfile> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/storage-profiles', { query: { apiVersion }, body, ...options });
  }
}

/**
 * Represents a structure that holds details of storage profile linked to a cloud
 * zone / region.**HATEOAS** links: **region** - Region - Region for the profile.
 * **self** - StorageProfile - Self link to this storage profile. **datastore** -
 * FabricVsphereDatastore - Datastore of this storage profile. **storage-policy** -
 * FabricVsphereStoragePolicy - vSphere storage policy for this profile.
 * **storage-account** - FabricAzureStorageAccount - Azure storage account for this
 * profile.
 */
export interface StorageProfile {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: StorageProfile._Links;

  /**
   * Indicates if a storage profile is default profile or not.
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
   * Map of storage properties that are to be applied on disk while provisioning.
   */
  diskProperties?: { [key: string]: string };

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
   * Defines the priority of the storage profile with the highest priority being 0.
   * Defaults to the value of 1.
   */
  priority?: number;

  /**
   * Defines filter type for adding storage objects (datastores) to the storage
   * profile. Defaults to INCLUDE_ALL.
   */
  storageFilterType?: 'INCLUDE_ALL' | 'TAG_BASED' | 'MANUAL';

  /**
   * Indicates whether this storage profile supports encryption or not.
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

export namespace StorageProfile {
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
 * Represents a specification of Storage Profile datastore associations.
 */
export interface StorageProfileAssociations {
  /**
   * List of storage profile data store associations.
   */
  associations: Array<StorageProfileAssociations.Association>;

  /**
   * Defines request type for data stores associations to the storage profile.
   */
  requestType: 'CREATE' | 'UPDATE' | 'DELETE';
}

export namespace StorageProfileAssociations {
  /**
   * Storage Profile Data Store Associations.
   */
  export interface Association {
    /**
     * Id of the Datastore to be associated with the storage profile.
     */
    dataStoreId: string;

    /**
     * Priority for the datastore to be associated with the highest priority being 0.
     * Defaults to the value of 1.
     */
    priority: number;
  }
}

/**
 * Represents a specification of generic storage profile.
 */
export interface StorageProfileSpecification {
  /**
   * Indicates if a storage profile is a default profile.
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
   * A human-friendly description.
   */
  description?: string;

  /**
   * Map of storage properties that are to be applied on disk while provisioning.
   */
  diskProperties?: { [key: string]: string };

  /**
   * Map of storage placements to know where the disk is provisioned. 'datastoreId'
   * is deprecated, instead use 'storageProfileAssociations' parameter to associate
   * datastores with the storage profile.
   */
  diskTargetProperties?: { [key: string]: string };

  /**
   * Defines the priority of the storage profile with the highest priority being 0.
   * Defaults to the value of 1.
   */
  priority?: number;

  /**
   * Defines filter type for adding storage objects (datastores) to the storage
   * profile. Defaults to INCLUDE_ALL. For INCLUDE_ALL and TAG_BASED all the valid
   * Data stores will be associated with the priority 1.
   */
  storageFilterType?: 'INCLUDE_ALL' | 'TAG_BASED' | 'MANUAL';

  /**
   * Defines a specification of Storage Profile datastore associations.
   */
  storageProfileAssociations?: Array<StorageProfileAssociations>;

  /**
   * Indicates whether this storage profile supports encryption or not.
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
}

/**
 * State object representing a query result of storage profiles.
 */
export interface StorageProfileRetrieveStorageProfilesResponse {
  /**
   * List of content items
   */
  content?: Array<StorageProfile>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface StorageProfileRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface StorageProfileUpdateParams {
  /**
   * Body param: Indicates if a storage profile is a default profile.
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
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: Map of storage properties that are to be applied on disk while
   * provisioning.
   */
  diskProperties?: { [key: string]: string };

  /**
   * Body param: Map of storage placements to know where the disk is provisioned.
   * 'datastoreId' is deprecated, instead use 'storageProfileAssociations' parameter
   * to associate datastores with the storage profile.
   */
  diskTargetProperties?: { [key: string]: string };

  /**
   * Body param: Defines the priority of the storage profile with the highest
   * priority being 0. Defaults to the value of 1.
   */
  priority?: number;

  /**
   * Body param: Defines filter type for adding storage objects (datastores) to the
   * storage profile. Defaults to INCLUDE_ALL. For INCLUDE_ALL and TAG_BASED all the
   * valid Data stores will be associated with the priority 1.
   */
  storageFilterType?: 'INCLUDE_ALL' | 'TAG_BASED' | 'MANUAL';

  /**
   * Body param: Defines a specification of Storage Profile datastore associations.
   */
  storageProfileAssociations?: Array<StorageProfileAssociations>;

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
   * Body param: A set of tag keys and optional values to be set on datastores to be
   * included in this storage profile based on the storageFilterType: TAG_BASED.
   */
  tagsToMatch?: Array<TagsAPI.Tag>;
}

export interface StorageProfileDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface StorageProfileRetrieveStorageProfilesParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface StorageProfileStorageProfilesParams {
  /**
   * Body param: Indicates if a storage profile is a default profile.
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
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: Map of storage properties that are to be applied on disk while
   * provisioning.
   */
  diskProperties?: { [key: string]: string };

  /**
   * Body param: Map of storage placements to know where the disk is provisioned.
   * 'datastoreId' is deprecated, instead use 'storageProfileAssociations' parameter
   * to associate datastores with the storage profile.
   */
  diskTargetProperties?: { [key: string]: string };

  /**
   * Body param: Defines the priority of the storage profile with the highest
   * priority being 0. Defaults to the value of 1.
   */
  priority?: number;

  /**
   * Body param: Defines filter type for adding storage objects (datastores) to the
   * storage profile. Defaults to INCLUDE_ALL. For INCLUDE_ALL and TAG_BASED all the
   * valid Data stores will be associated with the priority 1.
   */
  storageFilterType?: 'INCLUDE_ALL' | 'TAG_BASED' | 'MANUAL';

  /**
   * Body param: Defines a specification of Storage Profile datastore associations.
   */
  storageProfileAssociations?: Array<StorageProfileAssociations>;

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
   * Body param: A set of tag keys and optional values to be set on datastores to be
   * included in this storage profile based on the storageFilterType: TAG_BASED.
   */
  tagsToMatch?: Array<TagsAPI.Tag>;
}

export declare namespace StorageProfiles {
  export {
    type StorageProfile as StorageProfile,
    type StorageProfileAssociations as StorageProfileAssociations,
    type StorageProfileSpecification as StorageProfileSpecification,
    type StorageProfileRetrieveStorageProfilesResponse as StorageProfileRetrieveStorageProfilesResponse,
    type StorageProfileRetrieveParams as StorageProfileRetrieveParams,
    type StorageProfileUpdateParams as StorageProfileUpdateParams,
    type StorageProfileDeleteParams as StorageProfileDeleteParams,
    type StorageProfileRetrieveStorageProfilesParams as StorageProfileRetrieveStorageProfilesParams,
    type StorageProfileStorageProfilesParams as StorageProfileStorageProfilesParams,
  };

  export {
    type StorageProfileAssociationRetrieveStorageProfileAssociationsResponse as StorageProfileAssociationRetrieveStorageProfileAssociationsResponse,
    type StorageProfileAssociationUpdateStorageProfileAssociationsResponse as StorageProfileAssociationUpdateStorageProfileAssociationsResponse,
    type StorageProfileAssociationRetrieveStorageProfileAssociationsParams as StorageProfileAssociationRetrieveStorageProfileAssociationsParams,
    type StorageProfileAssociationUpdateStorageProfileAssociationsParams as StorageProfileAssociationUpdateStorageProfileAssociationsParams,
  };
}
