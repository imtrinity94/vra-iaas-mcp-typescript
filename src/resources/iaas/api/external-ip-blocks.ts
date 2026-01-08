// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FabricNetworksAPI from './fabric-networks';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ExternalIPBlocks extends APIResource {
  /**
   * An external IP block is network coming from external IPAM provider that can be
   * used to create subnetworks inside it
   *
   * @example
   * ```ts
   * const fabricNetwork =
   *   await client.iaas.api.externalIPBlocks.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: ExternalIPBlockRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricNetworksAPI.FabricNetwork> {
    return this._client.get(path`/iaas/api/external-ip-blocks/${id}`, { query, ...options });
  }

  /**
   * An external IP block is network coming from external IPAM provider that can be
   * used to create subnetworks inside it
   *
   * @example
   * ```ts
   * const fabricNetworkResult =
   *   await client.iaas.api.externalIPBlocks.retrieveExternalIPBlocks();
   * ```
   */
  retrieveExternalIPBlocks(
    query: ExternalIPBlockRetrieveExternalIPBlocksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricNetworksAPI.FabricNetworkResult> {
    return this._client.get('/iaas/api/external-ip-blocks', { query, ...options });
  }
}

export interface ExternalIPBlockRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface ExternalIPBlockRetrieveExternalIPBlocksParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export declare namespace ExternalIPBlocks {
  export {
    type ExternalIPBlockRetrieveParams as ExternalIPBlockRetrieveParams,
    type ExternalIPBlockRetrieveExternalIPBlocksParams as ExternalIPBlockRetrieveExternalIPBlocksParams,
  };
}
