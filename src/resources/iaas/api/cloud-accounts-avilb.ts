// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CloudAccountsVsphereAPI from './cloud-accounts-vsphere';
import * as IntegrationsAPI from './integrations';
import * as TagsAPI from './tags';
import * as ZonesAPI from './projects/zones';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CloudAccountsAvilb extends APIResource {
  /**
   * Get an AVI Load Balancer with a given id
   *
   * @example
   * ```ts
   * const cloudAccountAviLb =
   *   await client.iaas.api.cloudAccountsAvilb.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: CloudAccountsAvilbRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccountAviLb> {
    return this._client.get(path`/iaas/api/cloud-accounts-avilb/${id}`, { query, ...options });
  }

  /**
   * Update AVI Load Balancer cloud account asynchronously
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsAvilb.update('id', {
   *     apiVersion: 'apiVersion',
   *     hostName: 'avilb.mycompany.com',
   *     name: 'name',
   *     password: 'cndhjslacd90ascdbasyoucbdh',
   *     regions: [
   *       {
   *         externalRegionId: 'europe-west2',
   *         name: 'europe-west2',
   *       },
   *     ],
   *     username: 'administrator@mycompany.com',
   *   });
   * ```
   */
  update(
    id: string,
    params: CloudAccountsAvilbUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/cloud-accounts-avilb/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete an AVI Load Balancer cloud account with a given id
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsAvilb.delete('id', {
   *     apiVersion: 'apiVersion',
   *   });
   * ```
   */
  delete(
    id: string,
    params: CloudAccountsAvilbDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params;
    return this._client.delete(path`/iaas/api/cloud-accounts-avilb/${id}`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Create an AVI Load Balancer cloud account in the current organization
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsAvilb.cloudAccountsAvilb(
   *     {
   *       apiVersion: 'apiVersion',
   *       hostName: 'avilb.mycompany.com',
   *       name: 'name',
   *       password: 'cndhjslacd90ascdbasyoucbdh',
   *       regions: [
   *         {
   *           externalRegionId: 'europe-west2',
   *           name: 'europe-west2',
   *         },
   *       ],
   *       username: 'administrator@mycompany.com',
   *     },
   *   );
   * ```
   */
  cloudAccountsAvilb(
    params: CloudAccountsAvilbCloudAccountsAvilbParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/cloud-accounts-avilb', { query: { apiVersion }, body, ...options });
  }

  /**
   * Get all AVI Load Balancer cloud accounts within the current organization
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.cloudAccountsAvilb.retrieveCloudAccountsAvilb();
   * ```
   */
  retrieveCloudAccountsAvilb(
    query: CloudAccountsAvilbRetrieveCloudAccountsAvilbParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccountsAvilbRetrieveCloudAccountsAvilbResponse> {
    return this._client.get('/iaas/api/cloud-accounts-avilb', { query, ...options });
  }
}

/**
 * State object representing an AVI Load Balancer cloud account.
 *
 * A cloud account identifies a cloud account type and an account-specific
 * deployment endpoint. **HATEOAS** links: **self** - CloudAccountAviLb - Self link
 * to this cloud account
 */
export interface CloudAccountAviLb {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: CloudAccountAviLb._Links;

  /**
   * Host name for the AVI Load Balancer cloud account
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

export namespace CloudAccountAviLb {
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
 * State object representing a query result of AVI Load Balancer cloud accounts.
 */
export interface CloudAccountsAvilbRetrieveCloudAccountsAvilbResponse {
  /**
   * List of content items
   */
  content?: Array<CloudAccountAviLb>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface CloudAccountsAvilbRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface CloudAccountsAvilbUpdateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Host name for the AVI Load Balancer endpoint
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
   * Body param: A set of regions to enable provisioning on.Refer to
   * /iaas/api/cloud-accounts/region-enumeration.
   */
  regions: Array<CloudAccountsVsphereAPI.RegionSpecification>;

  /**
   * Body param: Username to authenticate with the cloud account
   */
  username: string;

  /**
   * Body param: Accept self signed certificate when connecting.
   */
  acceptSelfSignedCertificate?: boolean;

  /**
   * Body param: Specification for certificate for a cloud account.
   */
  certificateInfo?: IntegrationsAPI.CertificateInfoSpecification;

  /**
   * Body param: Cloud Account specific properties supplied in as name value pairs
   */
  cloudAccountProperties?: { [key: string]: string };

  /**
   * Body param: Create default cloud zones for the enabled regions
   */
  createDefaultZones?: boolean;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: A set of tag keys and optional values to set on the Cloud Account
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface CloudAccountsAvilbDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export interface CloudAccountsAvilbCloudAccountsAvilbParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Host name for the AVI Load Balancer endpoint
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
   * Body param: A set of regions to enable provisioning on.Refer to
   * /iaas/api/cloud-accounts/region-enumeration.
   */
  regions: Array<CloudAccountsVsphereAPI.RegionSpecification>;

  /**
   * Body param: Username to authenticate with the cloud account
   */
  username: string;

  /**
   * Body param: Accept self signed certificate when connecting.
   */
  acceptSelfSignedCertificate?: boolean;

  /**
   * Body param: Specification for certificate for a cloud account.
   */
  certificateInfo?: IntegrationsAPI.CertificateInfoSpecification;

  /**
   * Body param: Cloud Account specific properties supplied in as name value pairs
   */
  cloudAccountProperties?: { [key: string]: string };

  /**
   * Body param: Create default cloud zones for the enabled regions
   */
  createDefaultZones?: boolean;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: A set of tag keys and optional values to set on the Cloud Account
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface CloudAccountsAvilbRetrieveCloudAccountsAvilbParams {
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

export declare namespace CloudAccountsAvilb {
  export {
    type CloudAccountAviLb as CloudAccountAviLb,
    type CloudAccountsAvilbRetrieveCloudAccountsAvilbResponse as CloudAccountsAvilbRetrieveCloudAccountsAvilbResponse,
    type CloudAccountsAvilbRetrieveParams as CloudAccountsAvilbRetrieveParams,
    type CloudAccountsAvilbUpdateParams as CloudAccountsAvilbUpdateParams,
    type CloudAccountsAvilbDeleteParams as CloudAccountsAvilbDeleteParams,
    type CloudAccountsAvilbCloudAccountsAvilbParams as CloudAccountsAvilbCloudAccountsAvilbParams,
    type CloudAccountsAvilbRetrieveCloudAccountsAvilbParams as CloudAccountsAvilbRetrieveCloudAccountsAvilbParams,
  };
}
