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

export class CloudAccountsVcf extends APIResource {
  /**
   * Get an VCF cloud account with a given id
   *
   * @example
   * ```ts
   * const cloudAccountVcf =
   *   await client.iaas.api.cloudAccountsVcf.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: CloudAccountsVcfRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccountVcf> {
    return this._client.get(path`/iaas/api/cloud-accounts-vcf/${id}`, { query, ...options });
  }

  /**
   * Update VCF cloud account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsVcf.update('id', {
   *     apiVersion: 'apiVersion',
   *     name: 'name',
   *     nsxHostName: 'nsxt.mycompany.com',
   *     nsxPassword: 'cndhjslacd90ascdbasyoucbdh',
   *     nsxUsername: 'administrator@mycompany.com',
   *     regions: [
   *       { externalRegionId: 'us-east-1', name: 'us-east-1' },
   *     ],
   *     vcenterHostName: 'vc.mycompany.com',
   *     vcenterPassword: 'cndhjslacd90ascdbasyoucbdh',
   *     vcenterUsername: 'administrator@mycompany.com',
   *     workloadDomainId: 'workloadDomainId',
   *     workloadDomainName: 'Management',
   *   });
   * ```
   */
  update(
    id: string,
    params: CloudAccountsVcfUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/cloud-accounts-vcf/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete an VCF cloud account with a given id
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsVcf.delete('id', {
   *     apiVersion: 'apiVersion',
   *   });
   * ```
   */
  delete(
    id: string,
    params: CloudAccountsVcfDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params;
    return this._client.delete(path`/iaas/api/cloud-accounts-vcf/${id}`, {
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
   *   await client.iaas.api.cloudAccountsVcf.cloudAccountsVcf({
   *     apiVersion: 'apiVersion',
   *     name: 'name',
   *     nsxHostName: 'nsxt.mycompany.com',
   *     nsxPassword: 'cndhjslacd90ascdbasyoucbdh',
   *     nsxUsername: 'administrator@mycompany.com',
   *     regions: [
   *       { externalRegionId: 'us-east-1', name: 'us-east-1' },
   *     ],
   *     vcenterHostName: 'vc.mycompany.com',
   *     vcenterPassword: 'cndhjslacd90ascdbasyoucbdh',
   *     vcenterUsername: 'administrator@mycompany.com',
   *     workloadDomainId: 'workloadDomainId',
   *     workloadDomainName: 'Management',
   *   });
   * ```
   */
  cloudAccountsVcf(
    params: CloudAccountsVcfCloudAccountsVcfParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, validateOnly, ...body } = params;
    return this._client.post('/iaas/api/cloud-accounts-vcf', {
      query: { apiVersion, validateOnly },
      body,
      ...options,
    });
  }

  /**
   * Enumerate all private images for enabled regions of the specified VCF account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsVcf.privateImageEnumeration(
   *     'id',
   *   );
   * ```
   */
  privateImageEnumeration(
    id: string,
    params: CloudAccountsVcfPrivateImageEnumerationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params ?? {};
    return this._client.post(path`/iaas/api/cloud-accounts-vcf/${id}/private-image-enumeration`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Get the available regions for specified VCF cloud account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsVcf.regionEnumeration({
   *     apiVersion: 'apiVersion',
   *   });
   * ```
   */
  regionEnumeration(
    params: CloudAccountsVcfRegionEnumerationParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/cloud-accounts-vcf/region-enumeration', {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Get all VCF cloud accounts within the current organization
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.cloudAccountsVcf.retrieveCloudAccountsVcf();
   * ```
   */
  retrieveCloudAccountsVcf(
    query: CloudAccountsVcfRetrieveCloudAccountsVcfParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccountsVcfRetrieveCloudAccountsVcfResponse> {
    return this._client.get('/iaas/api/cloud-accounts-vcf', { query, ...options });
  }
}

/**
 * State object representing a VCF cloud account.
 *
 * A cloud account identifies a cloud account type and an account-specific
 * deployment region or data center where the associated cloud account resources
 * are hosted. **HATEOAS** links: **regions** - array[Region] - List of regions
 * that are enabled for this cloud account. **self** - CloudAccountVcf - Self link
 * to this cloud account
 */
export interface CloudAccountVcf {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: CloudAccountVcf._Links;

  /**
   * NSX Hostname in a workload domain
   */
  nsxHostName: string;

  /**
   * Username to authenticate to NSX manager in workload domain
   */
  nsxUsername: string;

  /**
   * SDDC Manager ID
   */
  sddcManagerId: string;

  /**
   * vCenter Hostname in a workload domain
   */
  vcenterHostName: string;

  /**
   * Username to authenticate to vCenter Server in workload domain
   */
  vcenterUsername: string;

  /**
   * Id of the VCF worload domain.
   */
  vcfDomainId: string;

  /**
   * Name of the VCF worload domain.
   */
  vcfDomainName: string;

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

export namespace CloudAccountVcf {
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
 * State object representing a query result of VCF cloud accounts.
 */
export interface CloudAccountsVcfRetrieveCloudAccountsVcfResponse {
  /**
   * List of content items
   */
  content?: Array<CloudAccountVcf>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface CloudAccountsVcfRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface CloudAccountsVcfUpdateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: Host name for the NSX endpoint from the specified workload domain.
   */
  nsxHostName: string;

  /**
   * Body param: Password for the user used to authenticate with the NSX-T manager in
   * VCF cloud account
   */
  nsxPassword: string;

  /**
   * Body param: User name for the NSX manager in the specified workload domain.
   */
  nsxUsername: string;

  /**
   * Body param: A set of regions to enable provisioning on.Refer to
   * /iaas/api/cloud-accounts/region-enumeration.
   */
  regions: Array<CloudAccountsVsphereAPI.RegionSpecification>;

  /**
   * Body param: Host name for the vSphere from the specified workload domain.
   */
  vcenterHostName: string;

  /**
   * Body param: Password for the user used to authenticate with the vCenter in VCF
   * cloud account
   */
  vcenterPassword: string;

  /**
   * Body param: vCenter user name for the specified workload domain.The specified
   * user requires CloudAdmin credentials. The user does not require CloudGlobalAdmin
   * credentials.
   */
  vcenterUsername: string;

  /**
   * Body param: Id of the workload domain to add as VCF cloud account.
   */
  workloadDomainId: string;

  /**
   * Body param: Name of the workload domain to add as VCF cloud account.
   */
  workloadDomainName: string;

  /**
   * Body param: Accept self signed certificate when connecting to vSphere and NSX-T
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
   * Body param: Identifier of a data collector vm deployed in the on premise
   * infrastructure. Refer to the data-collector API to create or list data
   * collectors. Note: Data collector endpoints are not available in VMware Aria
   * Automation (on-prem) release.
   */
  dcId?: string;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: NSX Certificate
   */
  nsxCertificate?: string;

  /**
   * Body param: SDDC manager integration id
   */
  sddcManagerId?: string;

  /**
   * Body param: A set of tag keys and optional values to set on the Cloud
   * Account.Cloud account capability tags may enable different features.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Body param: vCenter Certificate
   */
  vcenterCertificate?: string;
}

export interface CloudAccountsVcfDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export interface CloudAccountsVcfCloudAccountsVcfParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: Host name for the NSX endpoint from the specified workload domain.
   */
  nsxHostName: string;

  /**
   * Body param: Password for the user used to authenticate with the NSX-T manager in
   * VCF cloud account
   */
  nsxPassword: string;

  /**
   * Body param: User name for the NSX manager in the specified workload domain.
   */
  nsxUsername: string;

  /**
   * Body param: A set of regions to enable provisioning on.Refer to
   * /iaas/api/cloud-accounts/region-enumeration.
   */
  regions: Array<CloudAccountsVsphereAPI.RegionSpecification>;

  /**
   * Body param: Host name for the vSphere from the specified workload domain.
   */
  vcenterHostName: string;

  /**
   * Body param: Password for the user used to authenticate with the vCenter in VCF
   * cloud account
   */
  vcenterPassword: string;

  /**
   * Body param: vCenter user name for the specified workload domain.The specified
   * user requires CloudAdmin credentials. The user does not require CloudGlobalAdmin
   * credentials.
   */
  vcenterUsername: string;

  /**
   * Body param: Id of the workload domain to add as VCF cloud account.
   */
  workloadDomainId: string;

  /**
   * Body param: Name of the workload domain to add as VCF cloud account.
   */
  workloadDomainName: string;

  /**
   * Query param: If provided, it only validates the credentials in the Cloud Account
   * Specification, and cloud account will not be created.
   */
  validateOnly?: string;

  /**
   * Body param: Accept self signed certificate when connecting to vSphere and NSX-T
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
   * Body param: Identifier of a data collector vm deployed in the on premise
   * infrastructure. Refer to the data-collector API to create or list data
   * collectors. Note: Data collector endpoints are not available in VMware Aria
   * Automation (on-prem) release.
   */
  dcId?: string;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: NSX Certificate
   */
  nsxCertificate?: string;

  /**
   * Body param: SDDC manager integration id
   */
  sddcManagerId?: string;

  /**
   * Body param: A set of tag keys and optional values to set on the Cloud
   * Account.Cloud account capability tags may enable different features.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Body param: vCenter Certificate
   */
  vcenterCertificate?: string;
}

export interface CloudAccountsVcfPrivateImageEnumerationParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface CloudAccountsVcfRegionEnumerationParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Accept self signed certificate when connecting to vSphere and NSX-T
   */
  acceptSelfSignedCertificate?: boolean;

  /**
   * Body param: Specification for certificate for a cloud account.
   */
  certificateInfo?: IntegrationsAPI.CertificateInfoSpecification;

  /**
   * Body param: Existing cloud account id. Either provide existing cloud account Id,
   * or workloadDomainId, workloadDomainName, vcenterHostName, vcenterUsername,
   * vcenterPassword, nsxHostName, nsxUsername and nsxPassword.
   */
  cloudAccountId?: string;

  /**
   * Body param: Identifier of a data collector vm deployed in the on premise
   * infrastructure. Refer to the data-collector API to create or list data
   * collectors. Note: Data collector endpoints are not available in VMware Aria
   * Automation (on-prem) release.
   */
  dcId?: string;

  /**
   * Body param: NSX Certificate
   */
  nsxCertificate?: string;

  /**
   * Body param: Host name for the NSX endpoint from the specified workload domain.
   * Either provide nsxHostName or provide a cloudAccountId of an existing account.
   */
  nsxHostName?: string;

  /**
   * Body param: Password for the user used to authenticate with the NSX-T manager in
   * VCF cloud account. Either provide nsxPassword or provide a cloudAccountId of an
   * existing account.
   */
  nsxPassword?: string;

  /**
   * Body param: User name for the NSX manager in the specified workload domain.
   * Either provide nsxUsername or provide a cloudAccountId of an existing account.
   */
  nsxUsername?: string;

  /**
   * Body param: SDDC manager integration id. Either provide sddcManagerId or provide
   * a cloudAccountId of an existing account.
   */
  sddcManagerId?: string;

  /**
   * Body param: vCenter Certificate
   */
  vcenterCertificate?: string;

  /**
   * Body param: Host name for the vSphere from the specified workload domain. Either
   * provide vcenterHostName or provide a cloudAccountId of an existing account.
   */
  vcenterHostName?: string;

  /**
   * Body param: Password for the user used to authenticate with the vCenter in VCF
   * cloud account. Either provide vcenterPassword or provide a cloudAccountId of an
   * existing account.
   */
  vcenterPassword?: string;

  /**
   * Body param: vCenter user name for the specified workload domain.The specified
   * user requires CloudAdmin credentials. The user does not require CloudGlobalAdmin
   * credentials.
   */
  vcenterUsername?: string;

  /**
   * Body param: Id of the workload domain to add as VCF cloud account. Either
   * provide workloadDomainId or provide a cloudAccountId of an existing account.
   */
  workloadDomainId?: string;

  /**
   * Body param: Name of the workload domain to add as VCF cloud account. Either
   * provide workloadDomainName or provide a cloudAccountId of an existing account.
   */
  workloadDomainName?: string;
}

export interface CloudAccountsVcfRetrieveCloudAccountsVcfParams {
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

export declare namespace CloudAccountsVcf {
  export {
    type CloudAccountVcf as CloudAccountVcf,
    type CloudAccountsVcfRetrieveCloudAccountsVcfResponse as CloudAccountsVcfRetrieveCloudAccountsVcfResponse,
    type CloudAccountsVcfRetrieveParams as CloudAccountsVcfRetrieveParams,
    type CloudAccountsVcfUpdateParams as CloudAccountsVcfUpdateParams,
    type CloudAccountsVcfDeleteParams as CloudAccountsVcfDeleteParams,
    type CloudAccountsVcfCloudAccountsVcfParams as CloudAccountsVcfCloudAccountsVcfParams,
    type CloudAccountsVcfPrivateImageEnumerationParams as CloudAccountsVcfPrivateImageEnumerationParams,
    type CloudAccountsVcfRegionEnumerationParams as CloudAccountsVcfRegionEnumerationParams,
    type CloudAccountsVcfRetrieveCloudAccountsVcfParams as CloudAccountsVcfRetrieveCloudAccountsVcfParams,
  };
}
