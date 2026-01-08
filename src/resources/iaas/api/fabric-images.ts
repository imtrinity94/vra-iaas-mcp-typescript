// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class FabricImages extends APIResource {
  /**
   * Get enumerated fabric image with a given id. Fabric images are enumerated images
   * from a specific region, which could be used in image mappings.
   *
   * @example
   * ```ts
   * const fabricImage =
   *   await client.iaas.api.fabricImages.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: FabricImageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricImage> {
    return this._client.get(path`/iaas/api/fabric-images/${id}`, { query, ...options });
  }

  /**
   * Get all enumerated fabric images
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.fabricImages.retrieveFabricImages();
   * ```
   */
  retrieveFabricImages(
    query: FabricImageRetrieveFabricImagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricImageRetrieveFabricImagesResponse> {
    return this._client.get('/iaas/api/fabric-images', { query, ...options });
  }
}

/**
 * Represents a fabric image from the corresponding cloud end-point. **HATEOAS**
 * links: **region** - Region - Region for the image. **self** - FabricImage - Self
 * link to this image
 */
export interface FabricImage {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: FabricImage._Links;

  /**
   * Optional link to the endpoint the image belongs to. This will be blanc if the
   * image is public/global Either this property or externalRegionId property will be
   * present
   */
  cloudAccountId?: string;

  /**
   * Set of ids of the cloud accounts this entity belongs to.
   */
  cloudAccountIds?: Array<string>;

  /**
   * Name of the cloud account this entity belongs to.
   */
  cloudAccountName?: string;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * Additional properties that may be used to extend the base type.
   */
  customProperties?: { [key: string]: string };

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * List of disk config for the image
   */
  diskConfigs?: Array<FabricImage.DiskConfig>;

  /**
   * External entity Id on the provider side.
   */
  externalId?: string;

  /**
   * The regionId of the image
   */
  externalRegionId?: string;

  /**
   * The region name of the image
   */
  externalRegionName?: string;

  /**
   * Indicates whether this fabric image is private. For vSphere, private images are
   * considered to be templates and snapshots and public are Content Library Items
   */
  isPrivate?: boolean;

  /**
   * A human-friendly name used as an identifier in APIs that support this option.
   */
  name?: string;

  /**
   * List of network config for the image
   */
  networkConfigs?: Array<FabricImage.NetworkConfig>;

  /**
   * The id of the organization this entity belongs to.
   */
  orgId?: string;

  /**
   * Operating System family of the image.
   */
  osFamily?: string;

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

export namespace FabricImage {
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

  /**
   * Represents the properties of a data disk in an image.
   */
  export interface DiskConfig {
    /**
     * Identifier of the disk.
     */
    id?: string;

    /**
     * Size of the disk in Mega Bytes.
     */
    capacityMBytes?: number;

    /**
     * Encryption status of the disk.
     */
    encrypted?: boolean;

    /**
     * Persistence capability of the disk across reboots.
     */
    persistent?: boolean;
  }

  /**
   * Represents the properties of a network in an image.
   */
  export interface NetworkConfig {
    /**
     * Network identifier
     */
    id?: string;

    /**
     * Network name
     */
    name?: string;

    /**
     * This is used to save network configuration resource sub type. For OVA/OVF use
     * case its saved for ResourceType=10
     */
    resourceSubType?: string;
  }
}

/**
 * State object representing a query result of fabric images.
 */
export interface FabricImageRetrieveFabricImagesResponse {
  /**
   * List of content items
   */
  content?: Array<FabricImage>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface FabricImageRetrieveParams {
  /**
   * Select a subset of properties to include in the response.
   */
  $select?: string;

  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface FabricImageRetrieveFabricImagesParams {
  /**
   * Flag which when specified, regardless of the assigned value, shows the total
   * number of records. If the collection has a filter it shows the number of records
   * matching the filter.
   */
  $count?: boolean;

  /**
   * Filter the results by a specified predicate expression. Operators: eq, ne, and,
   * or.
   */
  $filter?: string;

  /**
   * Select a subset of properties to include in the response.
   */
  $select?: string;

  /**
   * Number of records you want to skip.
   */
  $skip?: number;

  /**
   * Number of records you want to get.
   */
  $top?: number;

  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export declare namespace FabricImages {
  export {
    type FabricImage as FabricImage,
    type FabricImageRetrieveFabricImagesResponse as FabricImageRetrieveFabricImagesResponse,
    type FabricImageRetrieveParams as FabricImageRetrieveParams,
    type FabricImageRetrieveFabricImagesParams as FabricImageRetrieveFabricImagesParams,
  };
}
