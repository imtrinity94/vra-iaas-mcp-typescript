// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CloudAccountsVsphereAPI from '../cloud-accounts-vsphere';
import * as IntegrationsAPI from '../integrations';
import * as RegionsAPI from '../regions';
import * as TagsAPI from '../tags';
import * as RegionEnumerationAPI from './region-enumeration';
import {
  RegionEnumeration,
  RegionEnumerationRegionEnumerationParams,
  RegionEnumerationRetrieveParams,
  RegionEnumerationRetrieveResponse,
} from './region-enumeration';
import * as ZonesAPI from '../projects/zones';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class CloudAccounts extends APIResource {
  regionEnumeration: RegionEnumerationAPI.RegionEnumeration = new RegionEnumerationAPI.RegionEnumeration(
    this._client,
  );

  /**
   * Get cloud account with a given id
   *
   * @example
   * ```ts
   * const cloudAccount =
   *   await client.iaas.api.cloudAccounts.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: CloudAccountRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccount> {
    return this._client.get(path`/iaas/api/cloud-accounts/${id}`, { query, ...options });
  }

  /**
   * Update a single CloudAccount
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccounts.update('id', {
   *     apiVersion: 'apiVersion',
   *     cloudAccountProperties: {
   *       supportPublicImages: 'true',
   *       acceptSelfSignedCertificate: 'true',
   *     },
   *     name: 'name',
   *     regions: [
   *       { externalRegionId: 'eastasia', name: 'East Asia' },
   *     ],
   *   });
   * ```
   */
  update(
    id: string,
    params: CloudAccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/cloud-accounts/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete a cloud account with a given id
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccounts.delete('id', {
   *     apiVersion: 'apiVersion',
   *   });
   * ```
   */
  delete(
    id: string,
    params: CloudAccountDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, forceDelete } = params;
    return this._client.delete(path`/iaas/api/cloud-accounts/${id}`, {
      query: { apiVersion, forceDelete },
      ...options,
    });
  }

  /**
   * Create a cloud account in the current organization
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccounts.cloudAccounts({
   *     apiVersion: 'apiVersion',
   *     cloudAccountProperties: {
   *       supportPublicImages: 'true',
   *       acceptSelfSignedCertificate: 'true',
   *     },
   *     cloudAccountType:
   *       'vsphere, aws, azure, nsxv, nsxt, vmc, avilb',
   *     name: 'name',
   *     regions: [
   *       { externalRegionId: 'eastasia', name: 'East Asia' },
   *     ],
   *   });
   * ```
   */
  cloudAccounts(
    params: CloudAccountCloudAccountsParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, validateOnly, ...body } = params;
    return this._client.post('/iaas/api/cloud-accounts', {
      query: { apiVersion, validateOnly },
      body,
      ...options,
    });
  }

  /**
   * Starts cloud account health check identified by its endpoint state
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccounts.healthCheck('id');
   * ```
   */
  healthCheck(
    id: string,
    params: CloudAccountHealthCheckParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, periodicHealthCheckId } = params ?? {};
    return this._client.post(path`/iaas/api/cloud-accounts/${id}/health-check`, {
      query: { apiVersion, periodicHealthCheckId },
      ...options,
    });
  }

  /**
   * Enumerate all private images for enabled regions of the specified cloud account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccounts.privateImageEnumeration(
   *     'id',
   *   );
   * ```
   */
  privateImageEnumeration(
    id: string,
    params: CloudAccountPrivateImageEnumerationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params ?? {};
    return this._client.post(path`/iaas/api/cloud-accounts/${id}/private-image-enumeration`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Get all cloud accounts within the current organization
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.cloudAccounts.retrieveCloudAccounts();
   * ```
   */
  retrieveCloudAccounts(
    query: CloudAccountRetrieveCloudAccountsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccountRetrieveCloudAccountsResponse> {
    return this._client.get('/iaas/api/cloud-accounts', { query, ...options });
  }
}

/**
 * State object representing a cloud account.
 *
 * A cloud account identifies a cloud account type and an account-specific
 * deployment region or data center where the associated cloud account resources
 * are hosted. **HATEOAS** links: **associated-cloud-accounts** -
 * array[CloudAccount] - Cloud accounts associated to this cloud account. For
 * example an NSX endpoint linked to a vSphere cloud account. **regions** -
 * array[Region] - List of regions that are enabled for this cloud account.
 * **self** - CloudAccount - Self link to this cloud account
 */
export interface CloudAccount {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: CloudAccount._Links;

  /**
   * Cloud account specific properties
   */
  cloudAccountProperties: { [key: string]: string };

  /**
   * Cloud account type
   */
  cloudAccountType: string;

  /**
   * Workload mobility associations to other vSphere cloud accounts. ID refers to an
   * associated cloud account, and directionality can be unidirectional or
   * bidirectional. Only supported on vSphere Cloud Accounts.
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
   * A human-friendly description.
   */
  description?: string;

  /**
   * A list of regions that are enabled for provisioning on this cloud account
   */
  enabledRegions?: Array<RegionsAPI.Region>;

  /**
   * Indicates the health of the cloud account. If false, this means there is no
   * connectivity to the cloud provider or the credentials are invalid.
   */
  healthy?: boolean;

  /**
   * Indicates if the cloud account is undergoing maintenance. If true, it can't be
   * used for provisioning and scheduled enumeration is not triggered.
   */
  inMaintenanceMode?: boolean;

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

export namespace CloudAccount {
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
 * State object representing a query result of cloud accounts.
 */
export interface CloudAccountRetrieveCloudAccountsResponse {
  /**
   * List of content items
   */
  content?: Array<CloudAccount>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface CloudAccountRetrieveParams {
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

export interface CloudAccountUpdateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Cloud Account specific properties supplied in as name value pairs
   */
  cloudAccountProperties: { [key: string]: string };

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: A set of regions to enable provisioning on.Refer to
   * /iaas/api/cloud-accounts/region-enumeration. 'regionInfos' is a required
   * parameter for AWS, AZURE, GCP, VSPHERE, VMC, VCF cloud account types.
   */
  regions: Array<CloudAccountsVsphereAPI.RegionSpecification>;

  /**
   * Body param: Cloud accounts to associate with this cloud account
   */
  associatedCloudAccountIds?: Array<string>;

  /**
   * Body param: Cloud Account IDs and directionalities create associations to other
   * vSphere cloud accounts that can be used for workload mobility. ID refers to an
   * associated cloud account, and directionality can be unidirectional or
   * bidirectional. Only supported on vSphere cloud accounts.
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
   * Body param: Additional custom properties that may be used to extend the Cloud
   * Account.
   */
  customProperties?: { [key: string]: string };

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: Secret access key or password to be used to authenticate with the
   * cloud account.
   */
  privateKey?: string;

  /**
   * Body param: Access key id or username to be used to authenticate with the cloud
   * account
   */
  privateKeyId?: string;

  /**
   * Body param: A set of tag keys and optional values to set on the Cloud Account
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface CloudAccountDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * If true, best effort is made for deleting this endpoint and all related
   * resources. In some situations, this may leave provisioned infrastructure
   * resources behind. Please ensure you remove them manually. If false, a standard
   * delete action will be executed.
   */
  forceDelete?: boolean;
}

export interface CloudAccountCloudAccountsParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Cloud Account specific properties supplied in as name value pairs
   */
  cloudAccountProperties: { [key: string]: string };

  /**
   * Body param: Cloud account type
   */
  cloudAccountType: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: A set of regions to enable provisioning on.Refer to
   * /iaas/api/cloud-accounts/region-enumeration. 'regionInfos' is a required
   * parameter for AWS, AZURE, GCP, VSPHERE, VMC, VCF cloud account types.
   */
  regions: Array<CloudAccountsVsphereAPI.RegionSpecification>;

  /**
   * Query param: If provided, it only validates the credentials in the Cloud Account
   * Specification, and cloud account will not be created.
   */
  validateOnly?: string;

  /**
   * Body param: Cloud accounts to associate with this cloud account
   */
  associatedCloudAccountIds?: Array<string>;

  /**
   * Body param: Cloud Account IDs and directionalities create associations to other
   * vSphere cloud accounts that can be used for workload mobility. ID refers to an
   * associated cloud account, and directionality can be unidirectional or
   * bidirectional. Only supported on vSphere cloud accounts.
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
   * Body param: Additional custom properties that may be used to extend the Cloud
   * Account.
   */
  customProperties?: { [key: string]: string };

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: Secret access key or password to be used to authenticate with the
   * cloud account.
   */
  privateKey?: string;

  /**
   * Body param: Access key id or username to be used to authenticate with the cloud
   * account
   */
  privateKeyId?: string;

  /**
   * Body param: A set of tag keys and optional values to set on the Cloud Account
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface CloudAccountHealthCheckParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * If query param is provided then the endpoint health check is not started
   * manually from the UI, but after a scheduled process.
   */
  periodicHealthCheckId?: string;
}

export interface CloudAccountPrivateImageEnumerationParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface CloudAccountRetrieveCloudAccountsParams {
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

CloudAccounts.RegionEnumeration = RegionEnumeration;

export declare namespace CloudAccounts {
  export {
    type CloudAccount as CloudAccount,
    type CloudAccountRetrieveCloudAccountsResponse as CloudAccountRetrieveCloudAccountsResponse,
    type CloudAccountRetrieveParams as CloudAccountRetrieveParams,
    type CloudAccountUpdateParams as CloudAccountUpdateParams,
    type CloudAccountDeleteParams as CloudAccountDeleteParams,
    type CloudAccountCloudAccountsParams as CloudAccountCloudAccountsParams,
    type CloudAccountHealthCheckParams as CloudAccountHealthCheckParams,
    type CloudAccountPrivateImageEnumerationParams as CloudAccountPrivateImageEnumerationParams,
    type CloudAccountRetrieveCloudAccountsParams as CloudAccountRetrieveCloudAccountsParams,
  };

  export {
    RegionEnumeration as RegionEnumeration,
    type RegionEnumerationRetrieveResponse as RegionEnumerationRetrieveResponse,
    type RegionEnumerationRetrieveParams as RegionEnumerationRetrieveParams,
    type RegionEnumerationRegionEnumerationParams as RegionEnumerationRegionEnumerationParams,
  };
}
