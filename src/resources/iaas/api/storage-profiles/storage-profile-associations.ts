// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TagsAPI from '../tags';
import * as StorageProfilesAPI from './storage-profiles';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class StorageProfileAssociations extends APIResource {
  /**
   * Get all storage profile Associations with a given storage profile id
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.storageProfiles.storageProfileAssociations.retrieveStorageProfileAssociations(
   *     'id',
   *   );
   * ```
   */
  retrieveStorageProfileAssociations(
    id: string,
    query: StorageProfileAssociationRetrieveStorageProfileAssociationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StorageProfileAssociationRetrieveStorageProfileAssociationsResponse> {
    return this._client.get(path`/iaas/api/storage-profiles/${id}/storage-profile-associations`, {
      query,
      ...options,
    });
  }

  /**
   * Update storage profile associations
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.storageProfiles.storageProfileAssociations.updateStorageProfileAssociations(
   *     'id',
   *     {
   *       regionId: '31186',
   *       storageProfileAssociations: [
   *         {
   *           associations: [
   *             {
   *               dataStoreId:
   *                 'a42d016e-6b0e-4265-9881-692e90b76684',
   *               priority: 0,
   *             },
   *           ],
   *           requestType: 'CREATE',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  updateStorageProfileAssociations(
    id: string,
    params: StorageProfileAssociationUpdateStorageProfileAssociationsParams,
    options?: RequestOptions,
  ): APIPromise<StorageProfileAssociationUpdateStorageProfileAssociationsResponse> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/storage-profiles/${id}/storage-profile-associations`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }
}

/**
 * State object representing a query result of storage profiles association state.
 */
export interface StorageProfileAssociationRetrieveStorageProfileAssociationsResponse {
  /**
   * List of content items
   */
  content?: Array<StorageProfileAssociationRetrieveStorageProfileAssociationsResponse.Content>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export namespace StorageProfileAssociationRetrieveStorageProfileAssociationsResponse {
  /**
   * Represents a structure that holds details of storage profile association state
   * linked to one single datastore or multiple datastores.
   */
  export interface Content {
    /**
     * The id of this resource instance
     */
    id: string;

    /**
     * HATEOAS of the entity
     */
    _links: Content._Links;

    /**
     * Datastore ID associated with this storage profile.
     */
    dataStoreId: string;

    /**
     * Datestore ID associated with this storage profile.
     */
    dataStoreName: string;

    /**
     * Defines the priority of the storage profile with the highest priority being 0.
     * Defaults to the value of 1.
     */
    priority: number;

    /**
     * Defines the Id of the storage Profile.
     */
    storageProfileId: string;

    /**
     * Date when the entity was created. The date is in ISO 8601 and UTC.
     */
    createdAt?: string;

    /**
     * A human-friendly description.
     */
    description?: string;

    /**
     * Link reference to the cloud account endpoint of this host.
     */
    endpointLinks?: Array<string>;

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
     * The ID of the region that is associated with this storage profile.
     */
    regionId?: string;

    /**
     * A set of tag keys and optional values that were set on the Storage Profile
     * Association Datastores.
     */
    tags?: Array<TagsAPI.Tag>;

    /**
     * Date when the entity was last updated. The date is ISO 8601 and UTC.
     */
    updatedAt?: string;
  }

  export namespace Content {
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
}

/**
 * Represents storage profile associations for a storage profile id.
 */
export interface StorageProfileAssociationUpdateStorageProfileAssociationsResponse {
  /**
   * Represents an HTTP url
   */
  associationsLink: StorageProfileAssociationUpdateStorageProfileAssociationsResponse.AssociationsLink;
}

export namespace StorageProfileAssociationUpdateStorageProfileAssociationsResponse {
  /**
   * Represents an HTTP url
   */
  export interface AssociationsLink {
    /**
     * The target URL.
     */
    href: string;

    /**
     * Relationship to the target.
     */
    rel: string;
  }
}

export interface StorageProfileAssociationRetrieveStorageProfileAssociationsParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Results page you want to retrieve (0..N)
   */
  page?: number;

  /**
   * Number of records per page.
   */
  size?: number;
}

export interface StorageProfileAssociationUpdateStorageProfileAssociationsParams {
  /**
   * Body param: The Id of the region that is associated with the storage profile.
   */
  regionId: string;

  /**
   * Body param: Defines a specification of Storage Profile datastore associations.
   */
  storageProfileAssociations: Array<StorageProfilesAPI.StorageProfileAssociations>;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;
}

export declare namespace StorageProfileAssociations {
  export {
    type StorageProfileAssociationRetrieveStorageProfileAssociationsResponse as StorageProfileAssociationRetrieveStorageProfileAssociationsResponse,
    type StorageProfileAssociationUpdateStorageProfileAssociationsResponse as StorageProfileAssociationUpdateStorageProfileAssociationsResponse,
    type StorageProfileAssociationRetrieveStorageProfileAssociationsParams as StorageProfileAssociationRetrieveStorageProfileAssociationsParams,
    type StorageProfileAssociationUpdateStorageProfileAssociationsParams as StorageProfileAssociationUpdateStorageProfileAssociationsParams,
  };
}
