// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class PackageImport extends APIResource {
  /**
   * Import IPAM package on chunks of specified size. This API implements the TUS
   * RFC: https://github.com/tus/tus-resumable-upload-protocol/blob/main/protocol.md
   *
   * @example
   * ```ts
   * await client.iaas.api.integrationsIpam.packageImport.update(
   *   'id',
   *   {
   *     'Tus-Resumable': '1.0.0',
   *     'Upload-Offset': 'Upload-Offset',
   *   },
   * );
   * ```
   */
  update(id: string, params: PackageImportUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { 'Tus-Resumable': tusResumable, 'Upload-Offset': uploadOffset, apiVersion, body } = params;
    return this._client.patch(path`/iaas/api/integrations-ipam/package-import/${id}`, {
      query: { apiVersion },
      body: body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', 'Tus-Resumable': tusResumable, 'Upload-Offset': uploadOffset },
        options?.headers,
      ]),
    });
  }

  /**
   * This operation has two purposes:
   *
   * 1. Make initial request for importing package. Location of the new package is
   *    returned as a response header if body is not provided.
   * 2. Finalize the import when all batches are sent to the server if bundleIdis
   *    provided or make the complete import if compressedBundle is provided
   *
   * This API implements the TUS RFC:
   * https://github.com/tus/tus-resumable-upload-protocol/blob/main/protocol.md
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.integrationsIpam.packageImport.packageImport(
   *     {
   *       'Tus-Resumable': '1.0.0',
   *       'Upload-Length': 'Upload-Length',
   *     },
   *   );
   * ```
   */
  packageImport(
    params: PackageImportPackageImportParams,
    options?: RequestOptions,
  ): APIPromise<PackageImportPackageImportResponse> {
    const { 'Tus-Resumable': tusResumable, 'Upload-Length': uploadLength, apiVersion, ...body } = params;
    return this._client.post('/iaas/api/integrations-ipam/package-import', {
      query: { apiVersion },
      body,
      ...options,
      headers: buildHeaders([
        { 'Tus-Resumable': tusResumable, 'Upload-Length': uploadLength },
        options?.headers,
      ]),
    });
  }
}

export interface PackageImportPackageImportResponse {
  logoIcon?: string;

  providerId?: string;

  providerName?: string;

  providerVersion?: string;
}

export interface PackageImportUpdateParams {
  /**
   * Header param: Tus version
   */
  'Tus-Resumable': string;

  /**
   * Header param: Upload offset
   */
  'Upload-Offset': string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param
   */
  body?: Uploadable;
}

export interface PackageImportPackageImportParams {
  /**
   * Header param: Tus version
   */
  'Tus-Resumable': string;

  /**
   * Header param: Length of file in bytes
   */
  'Upload-Length': string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param
   */
  bundleId?: string;

  /**
   * Body param
   */
  compressedBundle?: string;

  /**
   * Body param
   */
  option?: 'FAIL' | 'OVERWRITE';

  /**
   * Body param
   */
  properties?: { [key: string]: string };
}

export declare namespace PackageImport {
  export {
    type PackageImportPackageImportResponse as PackageImportPackageImportResponse,
    type PackageImportUpdateParams as PackageImportUpdateParams,
    type PackageImportPackageImportParams as PackageImportPackageImportParams,
  };
}
