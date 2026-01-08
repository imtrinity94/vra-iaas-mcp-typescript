// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IntegrationsAPI from './integrations';
import * as RegionsAPI from './regions';
import * as TagsAPI from './tags';
import * as ZonesAPI from './projects/zones';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CloudAccountsVsphere extends APIResource {
  /**
   * Get an vSphere cloud account with a given id
   *
   * @example
   * ```ts
   * const cloudAccountVsphere =
   *   await client.iaas.api.cloudAccountsVsphere.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: CloudAccountsVsphereRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccountVsphere> {
    return this._client.get(path`/iaas/api/cloud-accounts-vsphere/${id}`, { query, ...options });
  }

  /**
   * Update vSphere cloud account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsVsphere.update('id', {
   *     apiVersion: 'apiVersion',
   *     hostName: 'vc.mycompany.com',
   *     name: 'name',
   *     regions: [
   *       {
   *         externalRegionId: 'Datacenter:datacenter-3',
   *         name: 'Datacenter:datacenter-3',
   *       },
   *     ],
   *   });
   * ```
   */
  update(
    id: string,
    params: CloudAccountsVsphereUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/cloud-accounts-vsphere/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete a vSphere Cloud Account with a given id
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsVsphere.delete('id', {
   *     apiVersion: 'apiVersion',
   *   });
   * ```
   */
  delete(
    id: string,
    params: CloudAccountsVsphereDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params;
    return this._client.delete(path`/iaas/api/cloud-accounts-vsphere/${id}`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Create a cloud account in the current organization
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsVsphere.cloudAccountsVsphere(
   *     {
   *       apiVersion: 'apiVersion',
   *       hostName: 'vc.mycompany.com',
   *       name: 'name',
   *       regions: [
   *         {
   *           externalRegionId: 'Datacenter:datacenter-3',
   *           name: 'Datacenter:datacenter-3',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  cloudAccountsVsphere(
    params: CloudAccountsVsphereCloudAccountsVsphereParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, validateOnly, ...body } = params;
    return this._client.post('/iaas/api/cloud-accounts-vsphere', {
      query: { apiVersion, validateOnly },
      body,
      ...options,
    });
  }

  /**
   * Enumerate all private images for enabled regions of the specified vSphere
   * account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsVsphere.privateImageEnumeration(
   *     'id',
   *   );
   * ```
   */
  privateImageEnumeration(
    id: string,
    params: CloudAccountsVspherePrivateImageEnumerationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params ?? {};
    return this._client.post(path`/iaas/api/cloud-accounts-vsphere/${id}/private-image-enumeration`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Get the available regions for specified vSphere cloud account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsVsphere.regionEnumeration(
   *     { apiVersion: 'apiVersion' },
   *   );
   * ```
   */
  regionEnumeration(
    params: CloudAccountsVsphereRegionEnumerationParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/cloud-accounts-vsphere/region-enumeration', {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Get all vSphere cloud accounts within the current organization
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.cloudAccountsVsphere.retrieveCloudAccountsVsphere();
   * ```
   */
  retrieveCloudAccountsVsphere(
    query: CloudAccountsVsphereRetrieveCloudAccountsVsphereParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccountsVsphereRetrieveCloudAccountsVsphereResponse> {
    return this._client.get('/iaas/api/cloud-accounts-vsphere', { query, ...options });
  }
}

/**
 * State object representing a vSphere cloud account.
 *
 * A cloud account identifies a cloud account type and an account-specific
 * deployment region or data center where the associated cloud account resources
 * are hosted. **HATEOAS** links: **regions** - array[Region] - List of regions
 * that are enabled for this cloud account. **self** - CloudAccountVsphere - Self
 * link to this cloud account.
 */
export interface CloudAccountVsphere {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: CloudAccountVsphere._Links;

  /**
   * Host name for the vSphere cloud account
   */
  hostName: string;

  /**
   * Username to authenticate with the cloud account
   */
  username: string;

  /**
   * Workload mobility associations to other vSphere cloud accounts. ID refers to an
   * associated cloud account, and directionality can be unidirectional or
   * bidirectional.
   */
  associatedMobilityCloudAccountIds?: { [key: string]: 'UNIDIRECTIONAL' | 'BIDIRECTIONAL' };

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * Additional properties that may be used to extend the base type.
   */
  customProperties?: { [key: string]: string };

  /**
   * Identifier of a data collector vm deployed in the on premise infrastructure.
   */
  dcid?: string;

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * A list of regions that are enabled for provisioning on this cloud account
   */
  enabledRegions?: Array<RegionsAPI.Region>;

  /**
   * @deprecated Environment of the data collector, will be available and set as
   * 'aap' for vSphere+ cloud accounts
   */
  environment?: string;

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
   * A set of tag keys and optional values that were set on the Cloud Account
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace CloudAccountVsphere {
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
 * Specification for a region in a cloud account.
 */
export interface RegionSpecification {
  /**
   * Unique identifier of region on the provider side.
   */
  externalRegionId: string;

  /**
   * Name of region on the provider side. In vSphere, the name of the region is
   * different from its id.
   */
  name: string;
}

/**
 * State object representing a query result of vSphere cloud accounts.
 */
export interface CloudAccountsVsphereRetrieveCloudAccountsVsphereResponse {
  /**
   * List of content items
   */
  content?: Array<CloudAccountVsphere>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface CloudAccountsVsphereRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface CloudAccountsVsphereUpdateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Host name for the vSphere endpoint
   */
  hostName: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: A set of regions to enable provisioning on.Refer to
   * /iaas/api/cloud-accounts/region-enumeration.
   */
  regions: Array<RegionSpecification>;

  /**
   * Body param: Accept self signed certificate when connecting to vSphere
   */
  acceptSelfSignedCertificate?: boolean;

  /**
   * Body param: NSX-V or NSX-T account to associate with this vSphere cloud account.
   * vSphere cloud account can be a single NSX-V cloud account or a single NSX-T
   * cloud account.
   */
  associatedCloudAccountIds?: Array<string>;

  /**
   * Body param: Cloud account IDs and directionalities create associations to other
   * vSphere cloud accounts that can be used for workload mobility. ID refers to an
   * associated cloud account, and directionality can be unidirectional or
   * bidirectional.
   */
  associatedMobilityCloudAccountIds?: { [key: string]: 'UNIDIRECTIONAL' | 'BIDIRECTIONAL' };

  /**
   * Body param: Specification for certificate for a cloud account.
   */
  certificateInfo?: IntegrationsAPI.CertificateInfoSpecification;

  /**
   * Body param: Create default cloud zones for the enabled regions.
   */
  createDefaultZones?: boolean;

  /**
   * Body param: Identifier of a data collector vm deployed in the on premise
   * infrastructure. Refer to the data-collector API to create or list data
   * collectors. Note: Data collector endpoints are not available in VMware Aria
   * Automation (on-prem) release.
   */
  dcid?: string;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * @deprecated Body param: The environment where data collectors are deployed. When
   * the data collectors are deployed on an aap-based cloud gateway appliance, use
   * "aap".
   */
  environment?: string;

  /**
   * Body param: Password for the user used to authenticate with the cloud Account.
   */
  password?: string;

  /**
   * Body param: A set of tag keys and optional values to set on the Cloud Account
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Body param: Username to authenticate with the cloud account.
   */
  username?: string;
}

export interface CloudAccountsVsphereDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export interface CloudAccountsVsphereCloudAccountsVsphereParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Host name for the vSphere endpoint
   */
  hostName: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: A set of regions to enable provisioning on.Refer to
   * /iaas/api/cloud-accounts/region-enumeration.
   */
  regions: Array<RegionSpecification>;

  /**
   * Query param: If provided, it only validates the credentials in the Cloud Account
   * Specification, and cloud account will not be created.
   */
  validateOnly?: string;

  /**
   * Body param: Accept self signed certificate when connecting to vSphere
   */
  acceptSelfSignedCertificate?: boolean;

  /**
   * Body param: NSX-V or NSX-T account to associate with this vSphere cloud account.
   * vSphere cloud account can be a single NSX-V cloud account or a single NSX-T
   * cloud account.
   */
  associatedCloudAccountIds?: Array<string>;

  /**
   * Body param: Cloud account IDs and directionalities create associations to other
   * vSphere cloud accounts that can be used for workload mobility. ID refers to an
   * associated cloud account, and directionality can be unidirectional or
   * bidirectional.
   */
  associatedMobilityCloudAccountIds?: { [key: string]: 'UNIDIRECTIONAL' | 'BIDIRECTIONAL' };

  /**
   * Body param: Specification for certificate for a cloud account.
   */
  certificateInfo?: IntegrationsAPI.CertificateInfoSpecification;

  /**
   * Body param: Create default cloud zones for the enabled regions.
   */
  createDefaultZones?: boolean;

  /**
   * Body param: Identifier of a data collector vm deployed in the on premise
   * infrastructure. Refer to the data-collector API to create or list data
   * collectors. Note: Data collector endpoints are not available in VMware Aria
   * Automation (on-prem) release.
   */
  dcid?: string;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * @deprecated Body param: The environment where data collectors are deployed. When
   * the data collectors are deployed on an aap-based cloud gateway appliance, use
   * "aap".
   */
  environment?: string;

  /**
   * Body param: Password for the user used to authenticate with the cloud Account.
   */
  password?: string;

  /**
   * Body param: A set of tag keys and optional values to set on the Cloud Account
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Body param: Username to authenticate with the cloud account.
   */
  username?: string;
}

export interface CloudAccountsVspherePrivateImageEnumerationParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface CloudAccountsVsphereRegionEnumerationParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Accept self signed certificate when connecting to vSphere
   */
  acceptSelfSignedCertificate?: boolean;

  /**
   * Body param: Specification for certificate for a cloud account.
   */
  certificateInfo?: IntegrationsAPI.CertificateInfoSpecification;

  /**
   * Body param: Existing cloud account id. Either provide existing cloud account Id,
   * or hostName, username, password.
   */
  cloudAccountId?: string;

  /**
   * Body param: Identifier of a data collector vm deployed in the on premise
   * infrastructure. Refer to the data-collector API to create or list data
   * collectors. Note: Data collector endpoints are not available in VMware Aria
   * Automation (on-prem) release.
   */
  dcid?: string;

  /**
   * @deprecated Body param: The environment where data collectors are deployed. When
   * the data collectors are deployed on a cloud gateway appliance, use "aap".
   */
  environment?: string;

  /**
   * Body param: Host name for the vSphere endpoint. Either provide hostName or
   * provide a cloudAccountId of an existing account.
   */
  hostName?: string;

  /**
   * Body param: Password for the user used to authenticate with the cloud Account.
   * Either provide password or provide a cloudAccountId of an existing account.
   */
  password?: string;

  /**
   * Body param: Username to authenticate with the cloud account. Either provide
   * username or provide a cloudAccountId of an existing account.
   */
  username?: string;
}

export interface CloudAccountsVsphereRetrieveCloudAccountsVsphereParams {
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

export declare namespace CloudAccountsVsphere {
  export {
    type CloudAccountVsphere as CloudAccountVsphere,
    type RegionSpecification as RegionSpecification,
    type CloudAccountsVsphereRetrieveCloudAccountsVsphereResponse as CloudAccountsVsphereRetrieveCloudAccountsVsphereResponse,
    type CloudAccountsVsphereRetrieveParams as CloudAccountsVsphereRetrieveParams,
    type CloudAccountsVsphereUpdateParams as CloudAccountsVsphereUpdateParams,
    type CloudAccountsVsphereDeleteParams as CloudAccountsVsphereDeleteParams,
    type CloudAccountsVsphereCloudAccountsVsphereParams as CloudAccountsVsphereCloudAccountsVsphereParams,
    type CloudAccountsVspherePrivateImageEnumerationParams as CloudAccountsVspherePrivateImageEnumerationParams,
    type CloudAccountsVsphereRegionEnumerationParams as CloudAccountsVsphereRegionEnumerationParams,
    type CloudAccountsVsphereRetrieveCloudAccountsVsphereParams as CloudAccountsVsphereRetrieveCloudAccountsVsphereParams,
  };
}
