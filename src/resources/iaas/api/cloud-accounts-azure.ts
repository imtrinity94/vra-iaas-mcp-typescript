// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CloudAccountsVsphereAPI from './cloud-accounts-vsphere';
import * as RegionsAPI from './regions';
import * as TagsAPI from './tags';
import * as ZonesAPI from './projects/zones';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CloudAccountsAzure extends APIResource {
  /**
   * Get an Azure Cloud Account with a given id
   *
   * @example
   * ```ts
   * const cloudAccountAzure =
   *   await client.iaas.api.cloudAccountsAzure.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: CloudAccountsAzureRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccountAzure> {
    return this._client.get(path`/iaas/api/cloud-accounts-azure/${id}`, { query, ...options });
  }

  /**
   * Update Azure cloud account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsAzure.update('id', {
   *     apiVersion: 'apiVersion',
   *     clientApplicationId:
   *       '3287dd6e-76d8-41b7-9856-2584969e7739',
   *     clientApplicationSecretKey:
   *       'GDfdasDasdASFas321das32cas2x3dsXCSA76xdcasg=',
   *     name: 'name',
   *     regions: [
   *       { externalRegionId: 'eastasia', name: 'East Asia' },
   *     ],
   *     subscriptionId: '064865b2-e914-4717-b415-8806d17948f7',
   *     tenantId: '9a13d920-4691-4e2d-b5d5-9c4c1279bc9a',
   *   });
   * ```
   */
  update(
    id: string,
    params: CloudAccountsAzureUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/cloud-accounts-azure/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete an Azure Cloud Account with a given id
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsAzure.delete('id', {
   *     apiVersion: 'apiVersion',
   *   });
   * ```
   */
  delete(
    id: string,
    params: CloudAccountsAzureDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params;
    return this._client.delete(path`/iaas/api/cloud-accounts-azure/${id}`, {
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
   *   await client.iaas.api.cloudAccountsAzure.cloudAccountsAzure(
   *     {
   *       apiVersion: 'apiVersion',
   *       clientApplicationId:
   *         '3287dd6e-76d8-41b7-9856-2584969e7739',
   *       clientApplicationSecretKey:
   *         'GDfdasDasdASFas321das32cas2x3dsXCSA76xdcasg=',
   *       name: 'name',
   *       regions: [
   *         { externalRegionId: 'eastasia', name: 'East Asia' },
   *       ],
   *       subscriptionId:
   *         '064865b2-e914-4717-b415-8806d17948f7',
   *       tenantId: '9a13d920-4691-4e2d-b5d5-9c4c1279bc9a',
   *     },
   *   );
   * ```
   */
  cloudAccountsAzure(
    params: CloudAccountsAzureCloudAccountsAzureParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, validateOnly, ...body } = params;
    return this._client.post('/iaas/api/cloud-accounts-azure', {
      query: { apiVersion, validateOnly },
      body,
      ...options,
    });
  }

  /**
   * Enumerate all private images for enabled regions of the specified Azure account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsAzure.privateImageEnumeration(
   *     'id',
   *   );
   * ```
   */
  privateImageEnumeration(
    id: string,
    params: CloudAccountsAzurePrivateImageEnumerationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params ?? {};
    return this._client.post(path`/iaas/api/cloud-accounts-azure/${id}/private-image-enumeration`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Get the available regions for specified Azure cloud account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsAzure.regionEnumeration(
   *     { apiVersion: 'apiVersion' },
   *   );
   * ```
   */
  regionEnumeration(
    params: CloudAccountsAzureRegionEnumerationParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/cloud-accounts-azure/region-enumeration', {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Get all Azure cloud accounts within the current organization
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.cloudAccountsAzure.retrieveCloudAccountsAzure();
   * ```
   */
  retrieveCloudAccountsAzure(
    query: CloudAccountsAzureRetrieveCloudAccountsAzureParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccountsAzureRetrieveCloudAccountsAzureResponse> {
    return this._client.get('/iaas/api/cloud-accounts-azure', { query, ...options });
  }
}

/**
 * State object representing an Azure cloud account.
 *
 * A cloud account identifies a cloud account type and an account-specific
 * deployment region or data center where the associated cloud account resources
 * are hosted. **HATEOAS** links: **regions** - array[Region] - List of regions
 * that are enabled for this cloud account. **self** - CloudAccountAzure - Self
 * link to this cloud account
 */
export interface CloudAccountAzure {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: CloudAccountAzure._Links;

  /**
   * Azure Client Application IDaccount.
   */
  clientApplicationId: string;

  /**
   * Azure Subscription IDaccount.
   */
  subscriptionId: string;

  /**
   * Azure Tenant Idaccount.
   */
  tenantId: string;

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
   * A set of tag keys and optional values that were set on on the Cloud Account
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace CloudAccountAzure {
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
 * State object representing a query result of Azure cloud accounts.
 */
export interface CloudAccountsAzureRetrieveCloudAccountsAzureResponse {
  /**
   * List of content items
   */
  content?: Array<CloudAccountAzure>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface CloudAccountsAzureRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface CloudAccountsAzureUpdateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Azure Client Application ID
   */
  clientApplicationId: string;

  /**
   * Body param: Azure Client Application Secret Key
   */
  clientApplicationSecretKey: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: A set of regions to enable provisioning on.Refer to
   * /iaas/api/cloud-accounts/region-enumeration.
   */
  regions: Array<CloudAccountsVsphereAPI.RegionSpecification>;

  /**
   * Body param: Azure Subscribtion ID
   */
  subscriptionId: string;

  /**
   * Body param: Azure Tenant ID
   */
  tenantId: string;

  /**
   * Body param: Create default cloud zones for the enabled regions.
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

export interface CloudAccountsAzureDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export interface CloudAccountsAzureCloudAccountsAzureParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Azure Client Application ID
   */
  clientApplicationId: string;

  /**
   * Body param: Azure Client Application Secret Key
   */
  clientApplicationSecretKey: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: A set of regions to enable provisioning on.Refer to
   * /iaas/api/cloud-accounts/region-enumeration.
   */
  regions: Array<CloudAccountsVsphereAPI.RegionSpecification>;

  /**
   * Body param: Azure Subscribtion ID
   */
  subscriptionId: string;

  /**
   * Body param: Azure Tenant ID
   */
  tenantId: string;

  /**
   * Query param: If provided, it only validates the credentials in the Cloud Account
   * Specification, and cloud account will not be created.
   */
  validateOnly?: string;

  /**
   * Body param: Create default cloud zones for the enabled regions.
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

export interface CloudAccountsAzurePrivateImageEnumerationParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface CloudAccountsAzureRegionEnumerationParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Azure Client Application ID. Either provide clientApplicationId or
   * provide a cloudAccountId of an existing account.
   */
  clientApplicationId?: string;

  /**
   * Body param: Azure Client Application Secret Key. Either provide
   * clientApplicationSecretKey or provide a cloudAccountId of an existing account.
   */
  clientApplicationSecretKey?: string;

  /**
   * Body param: Existing cloud account id. Either provide id of existing account, or
   * cloud account credentials: clientApplicationId, clientApplicationSecretKey and
   * tenantId.
   */
  cloudAccountId?: string;

  /**
   * Body param: Azure Subscribtion ID. Either provide subscriptionId or provide a
   * cloudAccountId of an existing account.
   */
  subscriptionId?: string;

  /**
   * Body param: Azure Tenant ID. Either provide tenantId or provide a cloudAccountId
   * of an existing account.
   */
  tenantId?: string;
}

export interface CloudAccountsAzureRetrieveCloudAccountsAzureParams {
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

export declare namespace CloudAccountsAzure {
  export {
    type CloudAccountAzure as CloudAccountAzure,
    type CloudAccountsAzureRetrieveCloudAccountsAzureResponse as CloudAccountsAzureRetrieveCloudAccountsAzureResponse,
    type CloudAccountsAzureRetrieveParams as CloudAccountsAzureRetrieveParams,
    type CloudAccountsAzureUpdateParams as CloudAccountsAzureUpdateParams,
    type CloudAccountsAzureDeleteParams as CloudAccountsAzureDeleteParams,
    type CloudAccountsAzureCloudAccountsAzureParams as CloudAccountsAzureCloudAccountsAzureParams,
    type CloudAccountsAzurePrivateImageEnumerationParams as CloudAccountsAzurePrivateImageEnumerationParams,
    type CloudAccountsAzureRegionEnumerationParams as CloudAccountsAzureRegionEnumerationParams,
    type CloudAccountsAzureRetrieveCloudAccountsAzureParams as CloudAccountsAzureRetrieveCloudAccountsAzureParams,
  };
}
