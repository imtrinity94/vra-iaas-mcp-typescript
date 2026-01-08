// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CloudAccountsVsphereAPI from './cloud-accounts-vsphere';
import * as RegionsAPI from './regions';
import * as TagsAPI from './tags';
import * as ZonesAPI from './projects/zones';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CloudAccountsGcp extends APIResource {
  /**
   * Get an GCP cloud account with a given id
   *
   * @example
   * ```ts
   * const cloudAccountGcp =
   *   await client.iaas.api.cloudAccountsGcp.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: CloudAccountsGcpRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccountGcp> {
    return this._client.get(path`/iaas/api/cloud-accounts-gcp/${id}`, { query, ...options });
  }

  /**
   * Update GCP cloud account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsGcp.update('id', {
   *     apiVersion: 'apiVersion',
   *     clientEmail:
   *       '321743978432-compute@developer.gserviceaccount.com',
   *     name: 'name',
   *     privateKey:
   *       '-----BEGIN PRIVATE KEY-----\nMIICXgIHAASBgSDHikastc8+I81zCg/qWW8dMr8mqvXQ3qbPAmu0RjxoZVI47tvs\nkYlFAXOf0sPrhO2nUuooJngnHV0639iTTEYG1vckNaW2R6U5QTdQ5Rq5u+uV3pMk\n7w7Vs4n3urQ4jnqt7rTXbC1DNa/PFeAZatbf7ffBBy0IGO0zc128IshYcwIDAQAB\nAoGBALTNl2JxTvq4SDW/3VH0fZkQXWH1MM10oeMbB2qO5beWb11FGaOO77nGKfWc\nbYgfp5Ogrql2yhBvLAXnxH8bcqqwORtFhlyV68U1y4R+8WxDNh0aevxH8hRS/1X5\n963DJm1JlU0E+vStiktN0tC3ebH5hE+1OxbIHSZ+WOWLYX7JAkEA5uigRgKp8ScG\nauUijvdOLZIhHWq9y5Wz+nOHUuDw8P7wOTKU34QJAoWEe771p9Pf/GTA/kr0BQnP\nQvWUDxGzJwJBAN05C6krwPeryFKrKtjOGJIbiIoY72wRnoNcdEEs3HDRhf48YWFo\nriRbZylzzzNFy/gmzT6XJQTfktGqq+FZD9UCQGIJaGrxHJgfmpDuAhMzGsUsYtTr\niRox0D1Iqa7dhE693t5aBG010OF6MLqdZA1CXrn5SRtuVVaCSLZEL/2J5UcCQQDA\nd3MXucNnN4NPuS/L9HMYJWD7lPoosaORcgyK77bSSNgk+u9WSjbH1uYIAIPSffUZ\nbti+jc2dUg5wb+aeZlgJAkEAurrpmpqj5vg087ZngKfFGR5rozDiTsK5DceTV97K\na1Y+Nzl+XWTxDBWk4YPh2ZlKv402hZEfWBYxUDn5ZkH/bw==\n-----END PRIVATE KEY-----\n',
   *     privateKeyId:
   *       '027f73d50a19452eedf5775a9b42c5083678abdf',
   *     projectId: 'example-gcp-project',
   *     regions: [
   *       {
   *         externalRegionId: 'europe-west2',
   *         name: 'europe-west2',
   *       },
   *     ],
   *   });
   * ```
   */
  update(
    id: string,
    params: CloudAccountsGcpUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/cloud-accounts-gcp/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete an GCP cloud account with a given id
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsGcp.delete('id', {
   *     apiVersion: 'apiVersion',
   *   });
   * ```
   */
  delete(
    id: string,
    params: CloudAccountsGcpDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params;
    return this._client.delete(path`/iaas/api/cloud-accounts-gcp/${id}`, {
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
   *   await client.iaas.api.cloudAccountsGcp.cloudAccountsGcp({
   *     apiVersion: 'apiVersion',
   *     clientEmail:
   *       '321743978432-compute@developer.gserviceaccount.com',
   *     name: 'name',
   *     privateKey:
   *       '-----BEGIN PRIVATE KEY-----\nMIICXgIHAASBgSDHikastc8+I81zCg/qWW8dMr8mqvXQ3qbPAmu0RjxoZVI47tvs\nkYlFAXOf0sPrhO2nUuooJngnHV0639iTTEYG1vckNaW2R6U5QTdQ5Rq5u+uV3pMk\n7w7Vs4n3urQ4jnqt7rTXbC1DNa/PFeAZatbf7ffBBy0IGO0zc128IshYcwIDAQAB\nAoGBALTNl2JxTvq4SDW/3VH0fZkQXWH1MM10oeMbB2qO5beWb11FGaOO77nGKfWc\nbYgfp5Ogrql2yhBvLAXnxH8bcqqwORtFhlyV68U1y4R+8WxDNh0aevxH8hRS/1X5\n963DJm1JlU0E+vStiktN0tC3ebH5hE+1OxbIHSZ+WOWLYX7JAkEA5uigRgKp8ScG\nauUijvdOLZIhHWq9y5Wz+nOHUuDw8P7wOTKU34QJAoWEe771p9Pf/GTA/kr0BQnP\nQvWUDxGzJwJBAN05C6krwPeryFKrKtjOGJIbiIoY72wRnoNcdEEs3HDRhf48YWFo\nriRbZylzzzNFy/gmzT6XJQTfktGqq+FZD9UCQGIJaGrxHJgfmpDuAhMzGsUsYtTr\niRox0D1Iqa7dhE693t5aBG010OF6MLqdZA1CXrn5SRtuVVaCSLZEL/2J5UcCQQDA\nd3MXucNnN4NPuS/L9HMYJWD7lPoosaORcgyK77bSSNgk+u9WSjbH1uYIAIPSffUZ\nbti+jc2dUg5wb+aeZlgJAkEAurrpmpqj5vg087ZngKfFGR5rozDiTsK5DceTV97K\na1Y+Nzl+XWTxDBWk4YPh2ZlKv402hZEfWBYxUDn5ZkH/bw==\n-----END PRIVATE KEY-----\n',
   *     privateKeyId:
   *       '027f73d50a19452eedf5775a9b42c5083678abdf',
   *     projectId: 'example-gcp-project',
   *     regions: [
   *       {
   *         externalRegionId: 'europe-west2',
   *         name: 'europe-west2',
   *       },
   *     ],
   *   });
   * ```
   */
  cloudAccountsGcp(
    params: CloudAccountsGcpCloudAccountsGcpParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, validateOnly, ...body } = params;
    return this._client.post('/iaas/api/cloud-accounts-gcp', {
      query: { apiVersion, validateOnly },
      body,
      ...options,
    });
  }

  /**
   * Enumerate all private images for enabled regions of the specified GCP account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsGcp.privateImageEnumeration(
   *     'id',
   *   );
   * ```
   */
  privateImageEnumeration(
    id: string,
    params: CloudAccountsGcpPrivateImageEnumerationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params ?? {};
    return this._client.post(path`/iaas/api/cloud-accounts-gcp/${id}/private-image-enumeration`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Get the available regions for specified GCP cloud account
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.cloudAccountsGcp.regionEnumeration({
   *     apiVersion: 'apiVersion',
   *   });
   * ```
   */
  regionEnumeration(
    params: CloudAccountsGcpRegionEnumerationParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/cloud-accounts-gcp/region-enumeration', {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Get all GCP cloud accounts within the current organization
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.cloudAccountsGcp.retrieveCloudAccountsGcp();
   * ```
   */
  retrieveCloudAccountsGcp(
    query: CloudAccountsGcpRetrieveCloudAccountsGcpParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudAccountsGcpRetrieveCloudAccountsGcpResponse> {
    return this._client.get('/iaas/api/cloud-accounts-gcp', { query, ...options });
  }
}

/**
 * State object representing a GCP cloud account.
 *
 * A cloud account identifies a cloud account type and an account-specific
 * deployment region where the associated cloud account resources are hosted.
 * **HATEOAS** links: **regions** - array[Region] - List of regions that are
 * enabled for this cloud account. **self** - CloudAccountGcp - Self link to this
 * cloud account
 */
export interface CloudAccountGcp {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: CloudAccountGcp._Links;

  /**
   * GCP Client email
   */
  clientEmail: string;

  /**
   * GCP Private key ID
   */
  privateKeyId: string;

  /**
   * GCP Project ID
   */
  projectId: string;

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

export namespace CloudAccountGcp {
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
 * State object representing a query result of GCP cloud accounts.
 */
export interface CloudAccountsGcpRetrieveCloudAccountsGcpResponse {
  /**
   * List of content items
   */
  content?: Array<CloudAccountGcp>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface CloudAccountsGcpRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface CloudAccountsGcpUpdateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: GCP Client email
   */
  clientEmail: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: GCP Private key
   */
  privateKey: string;

  /**
   * Body param: GCP Private key ID
   */
  privateKeyId: string;

  /**
   * Body param: GCP Project ID
   */
  projectId: string;

  /**
   * Body param: A set of regions to enable provisioning on.Refer to
   * /iaas/api/cloud-accounts/region-enumeration.
   */
  regions: Array<CloudAccountsVsphereAPI.RegionSpecification>;

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

export interface CloudAccountsGcpDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export interface CloudAccountsGcpCloudAccountsGcpParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: GCP Client email
   */
  clientEmail: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: GCP Private key
   */
  privateKey: string;

  /**
   * Body param: GCP Private key ID
   */
  privateKeyId: string;

  /**
   * Body param: GCP Project ID
   */
  projectId: string;

  /**
   * Body param: A set of regions to enable provisioning on.Refer to
   * /iaas/api/cloud-accounts/region-enumeration.
   */
  regions: Array<CloudAccountsVsphereAPI.RegionSpecification>;

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

export interface CloudAccountsGcpPrivateImageEnumerationParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface CloudAccountsGcpRegionEnumerationParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: GCP Client email. Either provide clientEmail or provide a
   * cloudAccountId of an existing account.
   */
  clientEmail?: string;

  /**
   * Body param: Existing cloud account id. Either provide id of existing account, or
   * cloud account credentials: projectId, privateKeyId, privateKey and clientEmail.
   */
  cloudAccountId?: string;

  /**
   * Body param: GCP Private key. Either provide privateKey or provide a
   * cloudAccountId of an existing account.
   */
  privateKey?: string;

  /**
   * Body param: GCP Private key ID. Either provide privateKeyId or provide a
   * cloudAccountId of an existing account.
   */
  privateKeyId?: string;

  /**
   * Body param: GCP Project ID. Either provide projectId or provide a cloudAccountId
   * of an existing account.
   */
  projectId?: string;
}

export interface CloudAccountsGcpRetrieveCloudAccountsGcpParams {
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

export declare namespace CloudAccountsGcp {
  export {
    type CloudAccountGcp as CloudAccountGcp,
    type CloudAccountsGcpRetrieveCloudAccountsGcpResponse as CloudAccountsGcpRetrieveCloudAccountsGcpResponse,
    type CloudAccountsGcpRetrieveParams as CloudAccountsGcpRetrieveParams,
    type CloudAccountsGcpUpdateParams as CloudAccountsGcpUpdateParams,
    type CloudAccountsGcpDeleteParams as CloudAccountsGcpDeleteParams,
    type CloudAccountsGcpCloudAccountsGcpParams as CloudAccountsGcpCloudAccountsGcpParams,
    type CloudAccountsGcpPrivateImageEnumerationParams as CloudAccountsGcpPrivateImageEnumerationParams,
    type CloudAccountsGcpRegionEnumerationParams as CloudAccountsGcpRegionEnumerationParams,
    type CloudAccountsGcpRetrieveCloudAccountsGcpParams as CloudAccountsGcpRetrieveCloudAccountsGcpParams,
  };
}
