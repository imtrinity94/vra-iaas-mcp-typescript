// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class FabricAzureStorageAccounts extends APIResource {
  /**
   * Get fabric Azure storage account with a given id
   *
   * @example
   * ```ts
   * const fabricAzureStorageAccount =
   *   await client.iaas.api.fabricAzureStorageAccounts.retrieve(
   *     'id',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: FabricAzureStorageAccountRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricAzureStorageAccount> {
    return this._client.get(path`/iaas/api/fabric-azure-storage-accounts/${id}`, { query, ...options });
  }

  /**
   * Get all fabric Azure storage accounts.
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.fabricAzureStorageAccounts.retrieveFabricAzureStorageAccounts();
   * ```
   */
  retrieveFabricAzureStorageAccounts(
    query: FabricAzureStorageAccountRetrieveFabricAzureStorageAccountsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricAzureStorageAccountRetrieveFabricAzureStorageAccountsResponse> {
    return this._client.get('/iaas/api/fabric-azure-storage-accounts', { query, ...options });
  }
}

/**
 * Represents a structure that holds details of Azure endpoint's storage account.
 * **HATEOAS** links: **region** - Region - Region for the storage account.
 * **self** - FabricAzureStorageAccount - Self link to this storage account
 */
export interface FabricAzureStorageAccount {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: FabricAzureStorageAccount._Links;

  /**
   * Indicates the ID of region.
   */
  externalRegionId: string;

  /**
   * Set of ids of the cloud accounts this entity belongs to.
   */
  cloudAccountIds?: Array<string>;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * External entity Id on the provider side.
   */
  externalId?: string;

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
   * Indicates the performance tier for the storage type. Premium disks are SSD
   * backed and Standard disks are HDD backed.
   */
  type?: string;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace FabricAzureStorageAccount {
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
 * State object representing a query result of Azure storage accounts.
 */
export interface FabricAzureStorageAccountRetrieveFabricAzureStorageAccountsResponse {
  /**
   * List of content items
   */
  content?: Array<FabricAzureStorageAccount>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface FabricAzureStorageAccountRetrieveParams {
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

export interface FabricAzureStorageAccountRetrieveFabricAzureStorageAccountsParams {
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

export declare namespace FabricAzureStorageAccounts {
  export {
    type FabricAzureStorageAccount as FabricAzureStorageAccount,
    type FabricAzureStorageAccountRetrieveFabricAzureStorageAccountsResponse as FabricAzureStorageAccountRetrieveFabricAzureStorageAccountsResponse,
    type FabricAzureStorageAccountRetrieveParams as FabricAzureStorageAccountRetrieveParams,
    type FabricAzureStorageAccountRetrieveFabricAzureStorageAccountsParams as FabricAzureStorageAccountRetrieveFabricAzureStorageAccountsParams,
  };
}
