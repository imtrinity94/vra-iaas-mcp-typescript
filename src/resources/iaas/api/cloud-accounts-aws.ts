// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CloudAccountsVsphereAPI from './cloud-accounts-vsphere';
import * as RegionsAPI from './regions';
import * as TagsAPI from './tags';
import * as ZonesAPI from './projects/zones';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CloudAccountsAws extends APIResource {
  /**
   * Get an AWS cloud account with a given id
   *
   * @example
   * ```ts
   * const cloudAccountAws =
   *   await client.iaas.api.cloudAccountsAws.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: CloudAccountsAwRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccountAws> {
    return this._client.get(path`/iaas/api/cloud-accounts-aws/${id}`, { query, ...options });
  }

  /**
   * Update AWS cloud account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsAws.update('id', {
   *     apiVersion: 'apiVersion',
   *     name: 'name',
   *   });
   * ```
   */
  update(
    id: string,
    params: CloudAccountsAwUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/cloud-accounts-aws/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete an AWS cloud account with a given id
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsAws.delete('id', {
   *     apiVersion: 'apiVersion',
   *   });
   * ```
   */
  delete(
    id: string,
    params: CloudAccountsAwDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params;
    return this._client.delete(path`/iaas/api/cloud-accounts-aws/${id}`, {
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
   *   await client.iaas.api.cloudAccountsAws.cloudAccountsAws({
   *     apiVersion: 'apiVersion',
   *     name: 'name',
   *   });
   * ```
   */
  cloudAccountsAws(
    params: CloudAccountsAwCloudAccountsAwsParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, validateOnly, ...body } = params;
    return this._client.post('/iaas/api/cloud-accounts-aws', {
      query: { apiVersion, validateOnly },
      body,
      ...options,
    });
  }

  /**
   * Enumerate all private images for enabled regions of the specified AWS account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsAws.privateImageEnumeration(
   *     'id',
   *   );
   * ```
   */
  privateImageEnumeration(
    id: string,
    params: CloudAccountsAwPrivateImageEnumerationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params ?? {};
    return this._client.post(path`/iaas/api/cloud-accounts-aws/${id}/private-image-enumeration`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Get the available regions for specified AWS cloud account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsAws.regionEnumeration({
   *     apiVersion: 'apiVersion',
   *   });
   * ```
   */
  regionEnumeration(
    params: CloudAccountsAwRegionEnumerationParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/cloud-accounts-aws/region-enumeration', {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Get all AWS cloud accounts within the current organization
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.cloudAccountsAws.retrieveCloudAccountsAws();
   * ```
   */
  retrieveCloudAccountsAws(
    query: CloudAccountsAwRetrieveCloudAccountsAwsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccountsAwRetrieveCloudAccountsAwsResponse> {
    return this._client.get('/iaas/api/cloud-accounts-aws', { query, ...options });
  }
}

/**
 * State object representing a AWS cloud account.
 *
 * A cloud account identifies a cloud account type and an account-specific
 * deployment region or data center where the associated cloud account resources
 * are hosted. **HATEOAS** links: **regions** - array[Region] - List of regions
 * that are enabled for this cloud account. **self** - CloudAccountAws - Self link
 * to this cloud account
 */
export interface CloudAccountAws {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: CloudAccountAws._Links;

  /**
   * Access key id for Aws.
   */
  accessKeyId: string;

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

export namespace CloudAccountAws {
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
 * State object representing a query result of Aws cloud accounts.
 */
export interface CloudAccountsAwRetrieveCloudAccountsAwsResponse {
  /**
   * List of content items
   */
  content?: Array<CloudAccountAws>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface CloudAccountsAwRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface CloudAccountsAwUpdateParams {
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
   * Body param: Aws Access key ID
   */
  accessKeyId?: string;

  /**
   * Body param: Create default cloud zones for the enabled regions.
   */
  createDefaultZones?: boolean;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: Aws ARN role to be assumed by Aria Auto account
   */
  iamRoleArn?: string;

  /**
   * Body param: A set of regions to enable provisioning on.Refer to
   * /iaas/api/cloud-accounts/region-enumeration.
   */
  regions?: Array<CloudAccountsVsphereAPI.RegionSpecification>;

  /**
   * Body param: Aws Secret Access Key
   */
  secretAccessKey?: string;

  /**
   * Body param: A set of tag keys and optional values to set on the Cloud Account
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Body param: Create the account as trusted.
   */
  trustedAccount?: boolean;
}

export interface CloudAccountsAwDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export interface CloudAccountsAwCloudAccountsAwsParams {
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
   * Query param: If provided, it only validates the credentials in the Cloud Account
   * Specification, and cloud account will not be created.
   */
  validateOnly?: string;

  /**
   * Body param: Aws Access key ID
   */
  accessKeyId?: string;

  /**
   * Body param: Create default cloud zones for the enabled regions.
   */
  createDefaultZones?: boolean;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: Aws ARN role to be assumed by Aria Auto account
   */
  iamRoleArn?: string;

  /**
   * Body param: A set of regions to enable provisioning on.Refer to
   * /iaas/api/cloud-accounts/region-enumeration.
   */
  regions?: Array<CloudAccountsVsphereAPI.RegionSpecification>;

  /**
   * Body param: Aws Secret Access Key
   */
  secretAccessKey?: string;

  /**
   * Body param: A set of tag keys and optional values to set on the Cloud Account
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Body param: Create the account as trusted.
   */
  trustedAccount?: boolean;
}

export interface CloudAccountsAwPrivateImageEnumerationParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface CloudAccountsAwRegionEnumerationParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Aws Access key ID. Either provide accessKeyId or provide a
   * cloudAccountId of an existing account.
   */
  accessKeyId?: string;

  /**
   * Body param: Existing cloud account id. Either provide existing cloud account id,
   * or accessKeyId/secretAccessKey credentials pair.
   */
  cloudAccountId?: string;

  /**
   * Body param: Aws Secret Access Key. Either provide secretAccessKey or provide a
   * cloudAccountId of an existing account.
   */
  secretAccessKey?: string;
}

export interface CloudAccountsAwRetrieveCloudAccountsAwsParams {
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

export declare namespace CloudAccountsAws {
  export {
    type CloudAccountAws as CloudAccountAws,
    type CloudAccountsAwRetrieveCloudAccountsAwsResponse as CloudAccountsAwRetrieveCloudAccountsAwsResponse,
    type CloudAccountsAwRetrieveParams as CloudAccountsAwRetrieveParams,
    type CloudAccountsAwUpdateParams as CloudAccountsAwUpdateParams,
    type CloudAccountsAwDeleteParams as CloudAccountsAwDeleteParams,
    type CloudAccountsAwCloudAccountsAwsParams as CloudAccountsAwCloudAccountsAwsParams,
    type CloudAccountsAwPrivateImageEnumerationParams as CloudAccountsAwPrivateImageEnumerationParams,
    type CloudAccountsAwRegionEnumerationParams as CloudAccountsAwRegionEnumerationParams,
    type CloudAccountsAwRetrieveCloudAccountsAwsParams as CloudAccountsAwRetrieveCloudAccountsAwsParams,
  };
}
