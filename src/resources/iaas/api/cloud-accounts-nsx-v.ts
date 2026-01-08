// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IntegrationsAPI from './integrations';
import * as TagsAPI from './tags';
import * as ZonesAPI from './projects/zones';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CloudAccountsNsxV extends APIResource {
  /**
   * Get an NSX-V cloud account with a given id
   *
   * @example
   * ```ts
   * const cloudAccountNsxV =
   *   await client.iaas.api.cloudAccountsNsxV.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: CloudAccountsNsxVRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccountNsxV> {
    return this._client.get(path`/iaas/api/cloud-accounts-nsx-v/${id}`, { query, ...options });
  }

  /**
   * Update NSX-V cloud account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsNsxV.update('id', {
   *     apiVersion: 'apiVersion',
   *     dcid: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
   *     hostName: 'nsxv.mycompany.com',
   *     name: 'name',
   *     password: 'cndhjslacd90ascdbasyoucbdh',
   *     username: 'administrator@mycompany.com',
   *   });
   * ```
   */
  update(
    id: string,
    params: CloudAccountsNsxVUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/cloud-accounts-nsx-v/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete a NSV-V cloud account with a given id
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsNsxV.delete('id', {
   *     apiVersion: 'apiVersion',
   *   });
   * ```
   */
  delete(
    id: string,
    params: CloudAccountsNsxVDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params;
    return this._client.delete(path`/iaas/api/cloud-accounts-nsx-v/${id}`, {
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
   *   await client.iaas.api.cloudAccountsNsxV.cloudAccountsNsxV(
   *     {
   *       apiVersion: 'apiVersion',
   *       dcid: '23959a1e-18bc-4f0c-ac49-b5aeb4b6eef4',
   *       hostName: 'nsxv.mycompany.com',
   *       name: 'name',
   *       password: 'cndhjslacd90ascdbasyoucbdh',
   *       username: 'administrator@mycompany.com',
   *     },
   *   );
   * ```
   */
  cloudAccountsNsxV(
    params: CloudAccountsNsxVCloudAccountsNsxVParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, validateOnly, ...body } = params;
    return this._client.post('/iaas/api/cloud-accounts-nsx-v', {
      query: { apiVersion, validateOnly },
      body,
      ...options,
    });
  }

  /**
   * Get all NSX-V cloud accounts within the current organization
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.cloudAccountsNsxV.retrieveCloudAccountsNsxV();
   * ```
   */
  retrieveCloudAccountsNsxV(
    query: CloudAccountsNsxVRetrieveCloudAccountsNsxVParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccountsNsxVRetrieveCloudAccountsNsxVResponse> {
    return this._client.get('/iaas/api/cloud-accounts-nsx-v', { query, ...options });
  }
}

/**
 * State object representing an Nsx-V cloud account.
 *
 * A cloud account identifies a cloud account type and an account-specific
 * deployment region or data center where the associated cloud account resources
 * are hosted. **HATEOAS** links: **self** - CloudAccountNsxV - Self link to this
 * cloud account
 */
export interface CloudAccountNsxV {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: CloudAccountNsxV._Links;

  /**
   * Host name for the Nsx-V cloud account
   */
  hostName: string;

  /**
   * Username to authenticate with the cloud account
   */
  username: string;

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

export namespace CloudAccountNsxV {
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
 * State object representing a query result of Nsx-V cloud accounts.
 */
export interface CloudAccountsNsxVRetrieveCloudAccountsNsxVResponse {
  /**
   * List of content items
   */
  content?: Array<CloudAccountNsxV>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface CloudAccountsNsxVRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface CloudAccountsNsxVUpdateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Identifier of a data collector vm deployed in the on premise
   * infrastructure. Refer to the data-collector API to create or list data
   * collectors. Note: Data collector endpoints are not available in VMware Aria
   * Automation (on-prem) release and hence the data collector Id is optional for
   * VMware Aria Automation (on-prem).
   */
  dcid: string;

  /**
   * Body param: Host name for the NSX-v endpoint
   */
  hostName: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: Password for the user used to authenticate with the cloud Account
   */
  password: string;

  /**
   * Body param: Username to authenticate with the cloud account
   */
  username: string;

  /**
   * Body param: Accept self signed certificate when connecting.
   */
  acceptSelfSignedCertificate?: boolean;

  /**
   * Body param: vSphere cloud account associated with this NSX-V cloud account.
   * NSX-V cloud account can be associated with a single vSphere cloud account.
   */
  associatedCloudAccountIds?: Array<string>;

  /**
   * Body param: Specification for certificate for a cloud account.
   */
  certificateInfo?: IntegrationsAPI.CertificateInfoSpecification;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: A set of tag keys and optional values to set on the Cloud Account
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface CloudAccountsNsxVDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export interface CloudAccountsNsxVCloudAccountsNsxVParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Identifier of a data collector vm deployed in the on premise
   * infrastructure. Refer to the data-collector API to create or list data
   * collectors. Note: Data collector endpoints are not available in VMware Aria
   * Automation (on-prem) release and hence the data collector Id is optional for
   * VMware Aria Automation (on-prem).
   */
  dcid: string;

  /**
   * Body param: Host name for the NSX-v endpoint
   */
  hostName: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: Password for the user used to authenticate with the cloud Account
   */
  password: string;

  /**
   * Body param: Username to authenticate with the cloud account
   */
  username: string;

  /**
   * Query param: If provided, it only validates the credentials in the Cloud Account
   * Specification, and cloud account will not be created.
   */
  validateOnly?: string;

  /**
   * Body param: Accept self signed certificate when connecting.
   */
  acceptSelfSignedCertificate?: boolean;

  /**
   * Body param: vSphere cloud account associated with this NSX-V cloud account.
   * NSX-V cloud account can be associated with a single vSphere cloud account.
   */
  associatedCloudAccountIds?: Array<string>;

  /**
   * Body param: Specification for certificate for a cloud account.
   */
  certificateInfo?: IntegrationsAPI.CertificateInfoSpecification;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: A set of tag keys and optional values to set on the Cloud Account
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface CloudAccountsNsxVRetrieveCloudAccountsNsxVParams {
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

export declare namespace CloudAccountsNsxV {
  export {
    type CloudAccountNsxV as CloudAccountNsxV,
    type CloudAccountsNsxVRetrieveCloudAccountsNsxVResponse as CloudAccountsNsxVRetrieveCloudAccountsNsxVResponse,
    type CloudAccountsNsxVRetrieveParams as CloudAccountsNsxVRetrieveParams,
    type CloudAccountsNsxVUpdateParams as CloudAccountsNsxVUpdateParams,
    type CloudAccountsNsxVDeleteParams as CloudAccountsNsxVDeleteParams,
    type CloudAccountsNsxVCloudAccountsNsxVParams as CloudAccountsNsxVCloudAccountsNsxVParams,
    type CloudAccountsNsxVRetrieveCloudAccountsNsxVParams as CloudAccountsNsxVRetrieveCloudAccountsNsxVParams,
  };
}
