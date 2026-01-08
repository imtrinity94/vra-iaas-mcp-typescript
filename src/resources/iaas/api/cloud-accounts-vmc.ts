// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CloudAccountsVsphereAPI from './cloud-accounts-vsphere';
import * as IntegrationsAPI from './integrations';
import * as RegionsAPI from './regions';
import * as TagsAPI from './tags';
import * as ZonesAPI from './projects/zones';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CloudAccountsVmc extends APIResource {
  /**
   * Get an VMC cloud account with a given id
   *
   * @example
   * ```ts
   * const cloudAccountVmc =
   *   await client.iaas.api.cloudAccountsVmc.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: CloudAccountsVmcRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccountVmc> {
    return this._client.get(path`/iaas/api/cloud-accounts-vmc/${id}`, { query, ...options });
  }

  /**
   * Update VMC cloud account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsVmc.update('id', {
   *     apiVersion: 'apiVersion',
   *     apiKey: 'apiKey',
   *     dcId: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
   *     hostName: 'vc1.vmware.com',
   *     name: 'name',
   *     nsxHostName:
   *       'nsxManager.sddc-52-12-8-145.vmwaretest.com',
   *     password: 'cndhjslacd90ascdbasyoucbdh',
   *     regions: [
   *       {
   *         externalRegionId: 'Datacenter:datacenter-3',
   *         name: 'Datacenter:datacenter-3',
   *       },
   *     ],
   *     sddcId: 'CMBU-PRD-NSXT-M8GA-090319',
   *     username: 'administrator@mycompany.com',
   *   });
   * ```
   */
  update(
    id: string,
    params: CloudAccountsVmcUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/cloud-accounts-vmc/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete an VMC cloud account with a given id
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsVmc.delete('id', {
   *     apiVersion: 'apiVersion',
   *   });
   * ```
   */
  delete(
    id: string,
    params: CloudAccountsVmcDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params;
    return this._client.delete(path`/iaas/api/cloud-accounts-vmc/${id}`, {
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
   *   await client.iaas.api.cloudAccountsVmc.cloudAccountsVmc({
   *     apiVersion: 'apiVersion',
   *     apiKey: 'apiKey',
   *     dcId: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
   *     hostName: 'vc1.vmware.com',
   *     name: 'name',
   *     nsxHostName:
   *       'nsxManager.sddc-52-12-8-145.vmwaretest.com',
   *     password: 'cndhjslacd90ascdbasyoucbdh',
   *     regions: [
   *       {
   *         externalRegionId: 'Datacenter:datacenter-3',
   *         name: 'Datacenter:datacenter-3',
   *       },
   *     ],
   *     sddcId: 'CMBU-PRD-NSXT-M8GA-090319',
   *     username: 'administrator@mycompany.com',
   *   });
   * ```
   */
  cloudAccountsVmc(
    params: CloudAccountsVmcCloudAccountsVmcParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, validateOnly, ...body } = params;
    return this._client.post('/iaas/api/cloud-accounts-vmc', {
      query: { apiVersion, validateOnly },
      body,
      ...options,
    });
  }

  /**
   * Enumerate all private images for enabled regions of the specified VMC account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsVmc.privateImageEnumeration(
   *     'id',
   *   );
   * ```
   */
  privateImageEnumeration(
    id: string,
    params: CloudAccountsVmcPrivateImageEnumerationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params ?? {};
    return this._client.post(path`/iaas/api/cloud-accounts-vmc/${id}/private-image-enumeration`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Get the available regions for specified VMC cloud account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsVmc.regionEnumeration({
   *     apiVersion: 'apiVersion',
   *   });
   * ```
   */
  regionEnumeration(
    params: CloudAccountsVmcRegionEnumerationParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/cloud-accounts-vmc/region-enumeration', {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Get all VMC cloud accounts within the current organization
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.cloudAccountsVmc.retrieveCloudAccountsVmc();
   * ```
   */
  retrieveCloudAccountsVmc(
    query: CloudAccountsVmcRetrieveCloudAccountsVmcParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccountsVmcRetrieveCloudAccountsVmcResponse> {
    return this._client.get('/iaas/api/cloud-accounts-vmc', { query, ...options });
  }
}

/**
 * State object representing a Vmc cloud account.
 *
 * A cloud account identifies a cloud account type and an account-specific
 * deployment region or data center where the associated cloud account resources
 * are hosted. **HATEOAS** links: **regions** - array[Region] - List of regions
 * that are enabled for this cloud account. **self** - CloudAccountVmc - Self link
 * to this cloud account
 */
export interface CloudAccountVmc {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: CloudAccountVmc._Links;

  /**
   * SDDC environment.
   */
  sddc: string;

  /**
   * Username to authenticate to vCenter
   */
  username: string;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * Create default cloud zones for the enabled regions.
   */
  createDefaultZones?: boolean;

  /**
   * Additional properties that may be used to extend the base type.
   */
  customProperties?: { [key: string]: string };

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * A list of regions that are enabled for provisioning on this cloud account
   */
  enabledRegions?: Array<RegionsAPI.Region>;

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
   * A set of tag keys and optional values to set on the Cloud Account.Cloud account
   * capability tags may enable different features.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace CloudAccountVmc {
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
 * State object representing a query result of Vmc cloud accounts.
 */
export interface CloudAccountsVmcRetrieveCloudAccountsVmcResponse {
  /**
   * List of content items
   */
  content?: Array<CloudAccountVmc>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface CloudAccountsVmcRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface CloudAccountsVmcUpdateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: VMC API access key. Optional when updating.
   */
  apiKey: string;

  /**
   * Body param: Identifier of a data collector vm deployed in the on premise
   * infrastructure. Refer to the data-collector API to create or list data
   * collectors.
   */
  dcId: string;

  /**
   * Body param: Enter the IP address or FQDN of the vCenter Server in the specified
   * SDDC. The cloud proxy belongs on this vCenter.
   */
  hostName: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: The IP address of the NSX Manager server in the specified SDDC /
   * FQDN.
   */
  nsxHostName: string;

  /**
   * Body param: Password for the user used to authenticate with the cloud Account.
   */
  password: string;

  /**
   * Body param: A set of regions to enable provisioning on.Refer to
   * /iaas/api/cloud-accounts/region-enumeration.
   */
  regions: Array<CloudAccountsVsphereAPI.RegionSpecification>;

  /**
   * Body param: Identifier of the on-premise SDDC to be used by this cloud account.
   * Note that NSX-V SDDCs are not supported.
   */
  sddcId: string;

  /**
   * Body param: vCenter user name for the specified SDDC.The specified user requires
   * CloudAdmin credentials. The user does not require CloudGlobalAdmin credentials.
   */
  username: string;

  /**
   * Body param: Accept self signed certificate when connecting to vSphere
   */
  acceptSelfSignedCertificate?: boolean;

  /**
   * Body param: Specification for certificate for a cloud account.
   */
  certificateInfo?: IntegrationsAPI.CertificateInfoSpecification;

  /**
   * Body param: Create default cloud zones for the enabled regions.
   */
  createDefaultZones?: boolean;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * @deprecated Body param: The environment where the agent has been deployed. When
   * the agent has been deployed using the "Add Ons" in VMC UI or Api use "aap".
   */
  environment?: string;

  /**
   * Body param: A set of tag keys and optional values to set on the Cloud
   * Account.Cloud account capability tags may enable different features.
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface CloudAccountsVmcDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export interface CloudAccountsVmcCloudAccountsVmcParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: VMC API access key.
   */
  apiKey: string;

  /**
   * Body param: Identifier of a data collector vm deployed in the on premise
   * infrastructure. Refer to the data-collector API to create or list data
   * collectors.
   */
  dcId: string;

  /**
   * Body param: Enter the IP address or FQDN of the vCenter Server in the specified
   * SDDC. The cloud proxy belongs on this vCenter.
   */
  hostName: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: The IP address of the NSX Manager server in the specified SDDC /
   * FQDN.
   */
  nsxHostName: string;

  /**
   * Body param: Password for the user used to authenticate with the cloud Account.
   */
  password: string;

  /**
   * Body param: A set of regions to enable provisioning on.Refer to
   * /iaas/api/cloud-accounts/region-enumeration.
   */
  regions: Array<CloudAccountsVsphereAPI.RegionSpecification>;

  /**
   * Body param: Identifier of the on-premise SDDC to be used by this cloud account.
   * Note that NSX-V SDDCs are not supported.
   */
  sddcId: string;

  /**
   * Body param: vCenter user name for the specified SDDC.The specified user requires
   * CloudAdmin credentials. The user does not require CloudGlobalAdmin credentials.
   */
  username: string;

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
   * Body param: Specification for certificate for a cloud account.
   */
  certificateInfo?: IntegrationsAPI.CertificateInfoSpecification;

  /**
   * Body param: Create default cloud zones for the enabled regions.
   */
  createDefaultZones?: boolean;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * @deprecated Body param: The environment where the agent has been deployed. When
   * the agent has been deployed using the "Add Ons" in VMC UI or Api use "aap".
   */
  environment?: string;

  /**
   * Body param: A set of tag keys and optional values to set on the Cloud
   * Account.Cloud account capability tags may enable different features.
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface CloudAccountsVmcPrivateImageEnumerationParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface CloudAccountsVmcRegionEnumerationParams {
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
   * Body param: VMC API access key. Either provide apiKey or provide a
   * cloudAccountId of an existing account.
   */
  apiKey?: string;

  /**
   * Body param: Specification for certificate for a cloud account.
   */
  certificateInfo?: IntegrationsAPI.CertificateInfoSpecification;

  /**
   * Body param: Existing cloud account id. Either provide existing cloud account Id,
   * or apiKey, sddcId, username, password, hostName, nsxHostName.
   */
  cloudAccountId?: string;

  /**
   * Body param: The host name of the CSP service.
   */
  cspHostName?: string;

  /**
   * Body param: Identifier of a data collector vm deployed in the on premise
   * infrastructure. Refer to the data-collector API to create or list data
   * collectors
   */
  dcId?: string;

  /**
   * @deprecated Body param: The environment where the agent has been deployed. When
   * the agent has been deployed using the "Add Ons" in VMC UI or Api use "aap".
   */
  environment?: string;

  /**
   * Body param: Enter the IP address or FQDN of the vCenter Server in the specified
   * SDDC. The cloud proxy belongs on this vCenter. Either provide hostName or
   * provide a cloudAccountId of an existing account.
   */
  hostName?: string;

  /**
   * Body param: The IP address of the NSX Manager server in the specified SDDC /
   * FQDN.Either provide nsxHostName or provide a cloudAccountId of an existing
   * account.
   */
  nsxHostName?: string;

  /**
   * Body param: Password for the user used to authenticate with the cloud Account.
   * Either provide password or provide a cloudAccountId of an existing account.
   */
  password?: string;

  /**
   * Body param: Identifier of the on-premise SDDC to be used by this cloud account.
   * Note that NSX-V SDDCs are not supported. Either provide sddcId or provide a
   * cloudAccountId of an existing account.
   */
  sddcId?: string;

  /**
   * Body param: vCenter user name for the specified SDDC.The specified user requires
   * CloudAdmin credentials. The user does not require CloudGlobalAdmin
   * credentials.Either provide username or provide a cloudAccountId of an existing
   * account.
   */
  username?: string;
}

export interface CloudAccountsVmcRetrieveCloudAccountsVmcParams {
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

export declare namespace CloudAccountsVmc {
  export {
    type CloudAccountVmc as CloudAccountVmc,
    type CloudAccountsVmcRetrieveCloudAccountsVmcResponse as CloudAccountsVmcRetrieveCloudAccountsVmcResponse,
    type CloudAccountsVmcRetrieveParams as CloudAccountsVmcRetrieveParams,
    type CloudAccountsVmcUpdateParams as CloudAccountsVmcUpdateParams,
    type CloudAccountsVmcDeleteParams as CloudAccountsVmcDeleteParams,
    type CloudAccountsVmcCloudAccountsVmcParams as CloudAccountsVmcCloudAccountsVmcParams,
    type CloudAccountsVmcPrivateImageEnumerationParams as CloudAccountsVmcPrivateImageEnumerationParams,
    type CloudAccountsVmcRegionEnumerationParams as CloudAccountsVmcRegionEnumerationParams,
    type CloudAccountsVmcRetrieveCloudAccountsVmcParams as CloudAccountsVmcRetrieveCloudAccountsVmcParams,
  };
}
