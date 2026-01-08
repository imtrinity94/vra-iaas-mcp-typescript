// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NetworksAPI from './networks';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ImageProfiles extends APIResource {
  /**
   * Get image profile with a given id
   *
   * @example
   * ```ts
   * const imageProfile =
   *   await client.iaas.api.imageProfiles.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: ImageProfileRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImageProfile> {
    return this._client.get(path`/iaas/api/image-profiles/${id}`, { query, ...options });
  }

  /**
   * Update image profile. All existing image mapping definitions for the specified
   * region will be replaced with the payload provided and if you want to keep the
   * existing definitions, they should be added to the payload.
   *
   * @example
   * ```ts
   * const imageProfile =
   *   await client.iaas.api.imageProfiles.update('id', {
   *     imageMapping: {
   *       ubuntu: {},
   *       centos: {},
   *     },
   *     name: 'name',
   *   });
   * ```
   */
  update(id: string, params: ImageProfileUpdateParams, options?: RequestOptions): APIPromise<ImageProfile> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/image-profiles/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete image profile with a given id
   *
   * @example
   * ```ts
   * await client.iaas.api.imageProfiles.delete('id');
   * ```
   */
  delete(
    id: string,
    params: ImageProfileDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apiVersion } = params ?? {};
    return this._client.delete(path`/iaas/api/image-profiles/${id}`, {
      query: { apiVersion },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create image profile. This image profile is created for the specific region.
   * Image mapping definitions are created together with the profile. All existing
   * image mapping definitions for the specified region will be replaced with the
   * payload provided and if you want to keep the existing definitions, they should
   * be added to the payload.
   *
   * @example
   * ```ts
   * const imageProfile =
   *   await client.iaas.api.imageProfiles.imageProfiles({
   *     imageMapping: {
   *       ubuntu: {},
   *       centos: {},
   *     },
   *     name: 'name',
   *     regionId: '9.0E49',
   *   });
   * ```
   */
  imageProfiles(params: ImageProfileImageProfilesParams, options?: RequestOptions): APIPromise<ImageProfile> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/image-profiles', { query: { apiVersion }, body, ...options });
  }

  /**
   * Get all image profiles
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.imageProfiles.retrieveImageProfiles();
   * ```
   */
  retrieveImageProfiles(
    query: ImageProfileRetrieveImageProfilesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImageProfileRetrieveImageProfilesResponse> {
    return this._client.get('/iaas/api/image-profiles', { query, ...options });
  }
}

/**
 * Describes an image mapping between image key and fabric image. **HATEOAS**
 * links: **region** - Region - Region for the mapping.
 */
export interface ImageMapping {
  /**
   * HATEOAS of the entity
   */
  _links: ImageMapping._Links;

  /**
   * Image mapping defined for the particular region.
   */
  mapping: { [key: string]: ImageMapping.Mapping };

  /**
   * The id of the region for which this mapping is defined.
   */
  externalRegionId?: string;
}

export namespace ImageMapping {
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
   * Represents a fabric image from the corresponding cloud end-point with additional
   * cloud configuration script that will be executed on provisioning
   */
  export interface Mapping {
    /**
     * The id of this resource instance
     */
    id: string;

    /**
     * HATEOAS of the entity
     */
    _links: Mapping._Links;

    /**
     * Set of ids of the cloud accounts this entity belongs to.
     */
    cloudAccountIds?: Array<string>;

    /**
     * Name of the cloud account this entity belongs to.
     */
    cloudAccountName?: string;

    /**
     * Cloud config for this image. This cloud config will be merged during
     * provisioning with other cloud configurations such as the bootConfig provided in
     * MachineSpecification.
     */
    cloudConfig?: string;

    /**
     * Constraints that are used to drive placement policies for the image that is
     * produced from this mapping.Constraint expressions are matched against tags on
     * existing placement targets.
     */
    constraints?: Array<NetworksAPI.PlacementConstraint>;

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
    diskConfigs?: Array<Mapping.DiskConfig>;

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
    networkConfigs?: Array<Mapping.NetworkConfig>;

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

  export namespace Mapping {
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
}

/**
 * Represents a structure that holds a list of image mappings defined for the
 * particular region. **HATEOAS** links: **region** - Region - Region for the
 * profile. **self** - ImageProfile - Self link to this image profile
 */
export interface ImageProfile {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: ImageProfile._Links;

  /**
   * Describes an image mapping between image key and fabric image. **HATEOAS**
   * links: **region** - Region - Region for the mapping.
   */
  imageMappings: ImageMapping;

  /**
   * Id of the cloud account this image profile belongs to.
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
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace ImageProfile {
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
 * State object representing a query result of image profiles.
 */
export interface ImageProfileRetrieveImageProfilesResponse {
  /**
   * List of content items
   */
  content?: Array<ImageProfile>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface ImageProfileRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface ImageProfileUpdateParams {
  /**
   * Body param: Image mapping defined for the corresponding region.
   */
  imageMapping: { [key: string]: ImageProfileUpdateParams.ImageMapping };

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;
}

export namespace ImageProfileUpdateParams {
  /**
   * Represents fabric image description. Used when creating image profiles.
   */
  export interface ImageMapping {
    /**
     * The id of the fabric image. This ID could be taken from id field of response of
     * GET /iaas/api/fabric-images
     */
    id?: string;

    /**
     * Cloud config for this image. This cloud config will be merged during
     * provisioning with other cloud configurations such as the bootConfig provided in
     * MachineSpecification.
     */
    cloudConfig?: string;

    /**
     * Constraints that are used to drive placement policies for the image that is
     * produced from this mapping.Constraint expressions are matched against tags on
     * existing placement targets.
     */
    constraints?: Array<NetworksAPI.PlacementConstraint>;

    /**
     * External entity Id. Valid if id and name are not provided.
     */
    externalId?: string;

    /**
     * Fabric image name. Valid if id not provided. This name could be taken from name
     * field of response of GET /iaas/api/fabric-images
     */
    name?: string;
  }
}

export interface ImageProfileDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface ImageProfileImageProfilesParams {
  /**
   * Body param: Image mapping defined for the corresponding region.
   */
  imageMapping: { [key: string]: ImageProfileImageProfilesParams.ImageMapping };

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: The id of the region for which this profile is created
   */
  regionId: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;
}

export namespace ImageProfileImageProfilesParams {
  /**
   * Represents fabric image description. Used when creating image profiles.
   */
  export interface ImageMapping {
    /**
     * The id of the fabric image. This ID could be taken from id field of response of
     * GET /iaas/api/fabric-images
     */
    id?: string;

    /**
     * Cloud config for this image. This cloud config will be merged during
     * provisioning with other cloud configurations such as the bootConfig provided in
     * MachineSpecification.
     */
    cloudConfig?: string;

    /**
     * Constraints that are used to drive placement policies for the image that is
     * produced from this mapping.Constraint expressions are matched against tags on
     * existing placement targets.
     */
    constraints?: Array<NetworksAPI.PlacementConstraint>;

    /**
     * External entity Id. Valid if id and name are not provided.
     */
    externalId?: string;

    /**
     * Fabric image name. Valid if id not provided. This name could be taken from name
     * field of response of GET /iaas/api/fabric-images
     */
    name?: string;
  }
}

export interface ImageProfileRetrieveImageProfilesParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export declare namespace ImageProfiles {
  export {
    type ImageMapping as ImageMapping,
    type ImageProfile as ImageProfile,
    type ImageProfileRetrieveImageProfilesResponse as ImageProfileRetrieveImageProfilesResponse,
    type ImageProfileRetrieveParams as ImageProfileRetrieveParams,
    type ImageProfileUpdateParams as ImageProfileUpdateParams,
    type ImageProfileDeleteParams as ImageProfileDeleteParams,
    type ImageProfileImageProfilesParams as ImageProfileImageProfilesParams,
    type ImageProfileRetrieveImageProfilesParams as ImageProfileRetrieveImageProfilesParams,
  };
}
