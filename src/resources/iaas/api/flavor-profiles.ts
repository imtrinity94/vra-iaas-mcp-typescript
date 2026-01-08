// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class FlavorProfiles extends APIResource {
  /**
   * Get flavor profile with a given id
   *
   * @example
   * ```ts
   * const flavorProfile =
   *   await client.iaas.api.flavorProfiles.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: FlavorProfileRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlavorProfile> {
    return this._client.get(path`/iaas/api/flavor-profiles/${id}`, { query, ...options });
  }

  /**
   * Update flavor profile
   *
   * @example
   * ```ts
   * const flavorProfile = await client.iaas.api.flavorProfiles.update('id', {
   *   flavorMapping: {
   *     '0': { ... },
   *     '1': { ... },
   *     '2': { ... },
   *     '3': { ... },
   *     '4': { ... },
   *     '5': { ... },
   *     '6': { ... },
   *     '7': { ... },
   *     '8': { ... },
   *     '9': { ... },
   *     '10': { ... },
   *     '11': { ... },
   *     '12': { ... },
   *     '13': { ... },
   *     '14': { ... },
   *     '15': { ... },
   *     '16': { ... },
   *     '17': { ... },
   *     '18': { ... },
   *     '19': { ... },
   *     '20': { ... },
   *     '21': { ... },
   *     '22': { ... },
   *     '23': { ... },
   *     '24': { ... },
   *     '25': { ... },
   *     '26': { ... },
   *     '27': { ... },
   *     '28': { ... },
   *     '29': { ... },
   *     '30': { ... },
   *     '31': { ... },
   *     '32': { ... },
   *     '33': { ... },
   *     '34': { ... },
   *     '35': { ... },
   *     '36': { ... },
   *     '37': { ... },
   *     '38': { ... },
   *     '39': { ... },
   *     '40': { ... },
   *     '41': { ... },
   *     '42': { ... },
   *     '43': { ... },
   *     '44': { ... },
   *     '45': { ... },
   *     '46': { ... },
   *     '47': { ... },
   *     '48': { ... },
   *     '49': { ... },
   *     '50': { ... },
   *     '51': { ... },
   *     '52': { ... },
   *     '53': { ... },
   *     '54': { ... },
   *     '55': { ... },
   *     '56': { ... },
   *     '57': { ... },
   *     '58': { ... },
   *     '59': { ... },
   *     '60': { ... },
   *     '61': { ... },
   *     '62': { ... },
   *     '63': { ... },
   *     '64': { ... },
   *     '65': { ... },
   *     '66': { ... },
   *     '67': { ... },
   *     '68': { ... },
   *     '69': { ... },
   *     '70': { ... },
   *     '71': { ... },
   *     '72': { ... },
   *     '73': { ... },
   *     '74': { ... },
   *     '75': { ... },
   *     '76': { ... },
   *     '77': { ... },
   *     '78': { ... },
   *     '79': { ... },
   *     '80': { ... },
   *     '81': { ... },
   *     '82': { ... },
   *     '83': { ... },
   *     '84': { ... },
   *     '85': { ... },
   *     '86': { ... },
   *     '87': { ... },
   *     '88': { ... },
   *     '89': { ... },
   *     '90': { ... },
   *     '91': { ... },
   *     '92': { ... },
   *     '93': { ... },
   *     '94': { ... },
   *     '95': { ... },
   *     '96': { ... },
   *     '97': { ... },
   *     '98': { ... },
   *     '99': { ... },
   *     '100': { ... },
   *     '101': { ... },
   *     '102': { ... },
   *     '103': { ... },
   *     '104': { ... },
   *     '105': { ... },
   *     '106': { ... },
   *     '107': { ... },
   *     '108': { ... },
   *     '109': { ... },
   *     '110': { ... },
   *     '111': { ... },
   *     '112': { ... },
   *     '113': { ... },
   *     '114': { ... },
   *     '115': { ... },
   *     '116': { ... },
   *     '117': { ... },
   *     '118': { ... },
   *     '119': { ... },
   *     '120': { ... },
   *     '121': { ... },
   *     '122': { ... },
   *     '123': { ... },
   *     '124': { ... },
   *     '125': { ... },
   *     '126': { ... },
   *     '127': { ... },
   *     '128': { ... },
   *     '129': { ... },
   *     '130': { ... },
   *     '131': { ... },
   *     '132': { ... },
   *     '133': { ... },
   *     '134': { ... },
   *     '135': { ... },
   *     '136': { ... },
   *     '137': { ... },
   *     '138': { ... },
   *     '139': { ... },
   *     '140': { ... },
   *     '141': { ... },
   *     '142': { ... },
   *     '143': { ... },
   *     '144': { ... },
   *     '145': { ... },
   *     '146': { ... },
   *     '147': { ... },
   *     '148': { ... },
   *     '149': { ... },
   *     '150': { ... },
   *     '151': { ... },
   *     '152': { ... },
   *     '153': { ... },
   *     '154': { ... },
   *     '155': { ... },
   *     '156': { ... },
   *     '157': { ... },
   *     '158': { ... },
   *     '159': { ... },
   *     '160': { ... },
   *     '161': { ... },
   *     '162': { ... },
   *     '163': { ... },
   *     '164': { ... },
   *     '165': { ... },
   *     '166': { ... },
   *     '167': { ... },
   *     '168': { ... },
   *     '169': { ... },
   *     '170': { ... },
   *     '171': { ... },
   *     '172': { ... },
   *     '173': { ... },
   *     '174': { ... },
   *     '175': { ... },
   *     '176': { ... },
   *     '177': { ... },
   *     '178': { ... },
   *     '179': { ... },
   *     '180': { ... },
   *     '181': { ... },
   *     '182': { ... },
   *     '183': { ... },
   *     '184': { ... },
   *     '185': { ... },
   *     '186': { ... },
   *     '187': { ... },
   *   },
   *   name: 'name',
   * });
   * ```
   */
  update(id: string, params: FlavorProfileUpdateParams, options?: RequestOptions): APIPromise<FlavorProfile> {
    const { apiVersion, includeCores, ...body } = params;
    return this._client.patch(path`/iaas/api/flavor-profiles/${id}`, {
      query: { apiVersion, includeCores },
      body,
      ...options,
    });
  }

  /**
   * Delete flavor profile with a given id
   *
   * @example
   * ```ts
   * await client.iaas.api.flavorProfiles.delete('id');
   * ```
   */
  delete(
    id: string,
    params: FlavorProfileDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apiVersion } = params ?? {};
    return this._client.delete(path`/iaas/api/flavor-profiles/${id}`, {
      query: { apiVersion },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create flavor profile
   *
   * @example
   * ```ts
   * const flavorProfile = await client.iaas.api.flavorProfiles.flavorProfiles({
   *   flavorMapping: {
   *     '0': { ... },
   *     '1': { ... },
   *     '2': { ... },
   *     '3': { ... },
   *     '4': { ... },
   *     '5': { ... },
   *     '6': { ... },
   *     '7': { ... },
   *     '8': { ... },
   *     '9': { ... },
   *     '10': { ... },
   *     '11': { ... },
   *     '12': { ... },
   *     '13': { ... },
   *     '14': { ... },
   *     '15': { ... },
   *     '16': { ... },
   *     '17': { ... },
   *     '18': { ... },
   *     '19': { ... },
   *     '20': { ... },
   *     '21': { ... },
   *     '22': { ... },
   *     '23': { ... },
   *     '24': { ... },
   *     '25': { ... },
   *     '26': { ... },
   *     '27': { ... },
   *     '28': { ... },
   *     '29': { ... },
   *     '30': { ... },
   *     '31': { ... },
   *     '32': { ... },
   *     '33': { ... },
   *     '34': { ... },
   *     '35': { ... },
   *     '36': { ... },
   *     '37': { ... },
   *     '38': { ... },
   *     '39': { ... },
   *     '40': { ... },
   *     '41': { ... },
   *     '42': { ... },
   *     '43': { ... },
   *     '44': { ... },
   *     '45': { ... },
   *     '46': { ... },
   *     '47': { ... },
   *     '48': { ... },
   *     '49': { ... },
   *     '50': { ... },
   *     '51': { ... },
   *     '52': { ... },
   *     '53': { ... },
   *     '54': { ... },
   *     '55': { ... },
   *     '56': { ... },
   *     '57': { ... },
   *     '58': { ... },
   *     '59': { ... },
   *     '60': { ... },
   *     '61': { ... },
   *     '62': { ... },
   *     '63': { ... },
   *     '64': { ... },
   *     '65': { ... },
   *     '66': { ... },
   *     '67': { ... },
   *     '68': { ... },
   *     '69': { ... },
   *     '70': { ... },
   *     '71': { ... },
   *     '72': { ... },
   *     '73': { ... },
   *     '74': { ... },
   *     '75': { ... },
   *     '76': { ... },
   *     '77': { ... },
   *     '78': { ... },
   *     '79': { ... },
   *     '80': { ... },
   *     '81': { ... },
   *     '82': { ... },
   *     '83': { ... },
   *     '84': { ... },
   *     '85': { ... },
   *     '86': { ... },
   *     '87': { ... },
   *     '88': { ... },
   *     '89': { ... },
   *     '90': { ... },
   *     '91': { ... },
   *     '92': { ... },
   *     '93': { ... },
   *     '94': { ... },
   *     '95': { ... },
   *     '96': { ... },
   *     '97': { ... },
   *     '98': { ... },
   *     '99': { ... },
   *     '100': { ... },
   *     '101': { ... },
   *     '102': { ... },
   *     '103': { ... },
   *     '104': { ... },
   *     '105': { ... },
   *     '106': { ... },
   *     '107': { ... },
   *     '108': { ... },
   *     '109': { ... },
   *     '110': { ... },
   *     '111': { ... },
   *     '112': { ... },
   *     '113': { ... },
   *     '114': { ... },
   *     '115': { ... },
   *     '116': { ... },
   *     '117': { ... },
   *     '118': { ... },
   *     '119': { ... },
   *     '120': { ... },
   *     '121': { ... },
   *     '122': { ... },
   *     '123': { ... },
   *     '124': { ... },
   *     '125': { ... },
   *     '126': { ... },
   *     '127': { ... },
   *     '128': { ... },
   *     '129': { ... },
   *     '130': { ... },
   *     '131': { ... },
   *     '132': { ... },
   *     '133': { ... },
   *     '134': { ... },
   *     '135': { ... },
   *     '136': { ... },
   *     '137': { ... },
   *     '138': { ... },
   *     '139': { ... },
   *     '140': { ... },
   *     '141': { ... },
   *     '142': { ... },
   *     '143': { ... },
   *     '144': { ... },
   *     '145': { ... },
   *     '146': { ... },
   *     '147': { ... },
   *     '148': { ... },
   *     '149': { ... },
   *     '150': { ... },
   *     '151': { ... },
   *     '152': { ... },
   *     '153': { ... },
   *     '154': { ... },
   *     '155': { ... },
   *     '156': { ... },
   *     '157': { ... },
   *     '158': { ... },
   *     '159': { ... },
   *     '160': { ... },
   *     '161': { ... },
   *     '162': { ... },
   *     '163': { ... },
   *     '164': { ... },
   *     '165': { ... },
   *     '166': { ... },
   *     '167': { ... },
   *     '168': { ... },
   *     '169': { ... },
   *     '170': { ... },
   *     '171': { ... },
   *     '172': { ... },
   *     '173': { ... },
   *     '174': { ... },
   *     '175': { ... },
   *     '176': { ... },
   *     '177': { ... },
   *     '178': { ... },
   *     '179': { ... },
   *     '180': { ... },
   *     '181': { ... },
   *     '182': { ... },
   *     '183': { ... },
   *     '184': { ... },
   *     '185': { ... },
   *     '186': { ... },
   *     '187': { ... },
   *   },
   *   name: 'name',
   *   regionId: '9.0E49',
   * });
   * ```
   */
  flavorProfiles(
    params: FlavorProfileFlavorProfilesParams,
    options?: RequestOptions,
  ): APIPromise<FlavorProfile> {
    const { apiVersion, includeCores, ...body } = params;
    return this._client.post('/iaas/api/flavor-profiles', {
      query: { apiVersion, includeCores },
      body,
      ...options,
    });
  }

  /**
   * Get all flavor profile
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.flavorProfiles.retrieveFlavorProfiles();
   * ```
   */
  retrieveFlavorProfiles(
    query: FlavorProfileRetrieveFlavorProfilesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlavorProfileRetrieveFlavorProfilesResponse> {
    return this._client.get('/iaas/api/flavor-profiles', { query, ...options });
  }
}

/**
 * Describes a flavor mapping between a global fabric flavor key and fabric flavor.
 * **HATEOAS** links: **region** - Region - Region for the mapping.
 */
export interface FlavorMapping {
  /**
   * HATEOAS of the entity
   */
  _links: FlavorMapping._Links;

  /**
   * Flavors defined for the particular region. Keyed by global flavor key.
   */
  mapping: { [key: string]: FlavorMapping.Mapping };

  /**
   * The id of the region for which this mapping is defined.
   */
  externalRegionId?: string;
}

export namespace FlavorMapping {
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
   * Represents a fabric flavor from the corresponding cloud end-point
   */
  export interface Mapping {
    /**
     * The internal identification used by the corresponding cloud end-point
     */
    id?: string;

    /**
     * Size of the boot disk (in megabytes). Not populated when inapplicable.
     */
    bootDiskSizeInMB?: number;

    /**
     * Number of Core per Socket. Not populated when inapplicable.
     */
    coreCount?: number;

    /**
     * Number of CPU cores. Not populated when inapplicable.
     */
    cpuCount?: number;

    /**
     * Number of data disks. Not populated when inapplicable.
     */
    dataDiskMaxCount?: number;

    /**
     * Size of the data disks (in megabytes). Not populated when inapplicable.
     */
    dataDiskSizeInMB?: number;

    /**
     * Total amount of memory (in megabytes). Not populated when inapplicable.
     */
    memoryInMB?: number;

    /**
     * The value of the instance type in the corresponding cloud.
     */
    name?: string;

    /**
     * The type of network supported by this instance type. Not populated when
     * inapplicable.
     */
    networkType?: string;

    /**
     * The type of storage supported by this instance type. Not populated when
     * inapplicable.
     */
    storageType?: string;
  }
}

/**
 * Represents a structure that holds flavor mappings defined for the corresponding
 * cloud end-point region. **HATEOAS** links: **region** - Region - Region for the
 * profile. **self** - FlavorProfile - Self link to this flavor profile
 */
export interface FlavorProfile {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: FlavorProfile._Links;

  /**
   * Describes a flavor mapping between a global fabric flavor key and fabric flavor.
   * **HATEOAS** links: **region** - Region - Region for the mapping.
   */
  flavorMappings: FlavorMapping;

  /**
   * Id of the cloud account this flavor profile belongs to.
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

export namespace FlavorProfile {
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
 * State object representing a query result of flavor profiles.
 */
export interface FlavorProfileRetrieveFlavorProfilesResponse {
  /**
   * List of content items
   */
  content?: Array<FlavorProfile>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface FlavorProfileRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * If set to true will include cores in response.
   */
  includeCores?: boolean;
}

export interface FlavorProfileUpdateParams {
  /**
   * Body param: Map between global fabric flavor keys <String> and fabric flavor
   * descriptions <FabricFlavorDescription>
   */
  flavorMapping: { [key: string]: FlavorProfileUpdateParams.FlavorMapping };

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
   * Query param: If set to true will include cores in response.
   */
  includeCores?: boolean;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;
}

export namespace FlavorProfileUpdateParams {
  /**
   * Represents fabric flavor instance type description. Used when creating flavor
   * profiles.
   */
  export interface FlavorMapping {
    /**
     * The id of the instance type in the corresponding cloud.
     */
    id?: string;

    /**
     * Number of Cores per Socket. Mandatory for private clouds such as vSphere. Not
     * populated when inapplicable.
     */
    coreCount?: number;

    /**
     * Number of CPU cores. Mandatory for private clouds such as vSphere. Not populated
     * when inapplicable.
     */
    cpuCount?: number;

    /**
     * Total amount of memory (in megabytes). Mandatory for private clouds such as
     * vSphere. Not populated when inapplicable.
     */
    memoryInMB?: number;

    /**
     * The value of the instance type in the corresponding cloud. Valid and mandatory
     * for public clouds
     */
    name?: string;
  }
}

export interface FlavorProfileDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface FlavorProfileFlavorProfilesParams {
  /**
   * Body param: Map between global fabric flavor keys <String> and fabric flavor
   * descriptions <FabricFlavorDescription>
   */
  flavorMapping: { [key: string]: FlavorProfileFlavorProfilesParams.FlavorMapping };

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
   * Query param: If set to true will include cores in response.
   */
  includeCores?: boolean;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;
}

export namespace FlavorProfileFlavorProfilesParams {
  /**
   * Represents fabric flavor instance type description. Used when creating flavor
   * profiles.
   */
  export interface FlavorMapping {
    /**
     * The id of the instance type in the corresponding cloud.
     */
    id?: string;

    /**
     * Number of Cores per Socket. Mandatory for private clouds such as vSphere. Not
     * populated when inapplicable.
     */
    coreCount?: number;

    /**
     * Number of CPU cores. Mandatory for private clouds such as vSphere. Not populated
     * when inapplicable.
     */
    cpuCount?: number;

    /**
     * Total amount of memory (in megabytes). Mandatory for private clouds such as
     * vSphere. Not populated when inapplicable.
     */
    memoryInMB?: number;

    /**
     * The value of the instance type in the corresponding cloud. Valid and mandatory
     * for public clouds
     */
    name?: string;
  }
}

export interface FlavorProfileRetrieveFlavorProfilesParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * If set to true will include cores in response.
   */
  includeCores?: boolean;
}

export declare namespace FlavorProfiles {
  export {
    type FlavorMapping as FlavorMapping,
    type FlavorProfile as FlavorProfile,
    type FlavorProfileRetrieveFlavorProfilesResponse as FlavorProfileRetrieveFlavorProfilesResponse,
    type FlavorProfileRetrieveParams as FlavorProfileRetrieveParams,
    type FlavorProfileUpdateParams as FlavorProfileUpdateParams,
    type FlavorProfileDeleteParams as FlavorProfileDeleteParams,
    type FlavorProfileFlavorProfilesParams as FlavorProfileFlavorProfilesParams,
    type FlavorProfileRetrieveFlavorProfilesParams as FlavorProfileRetrieveFlavorProfilesParams,
  };
}
