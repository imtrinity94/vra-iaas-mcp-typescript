// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PackageImportAPI from './package-import';
import {
  PackageImport,
  PackageImportPackageImportParams,
  PackageImportPackageImportResponse,
  PackageImportUpdateParams,
} from './package-import';

export class IntegrationsIpam extends APIResource {
  packageImport: PackageImportAPI.PackageImport = new PackageImportAPI.PackageImport(this._client);
}

IntegrationsIpam.PackageImport = PackageImport;

export declare namespace IntegrationsIpam {
  export {
    PackageImport as PackageImport,
    type PackageImportPackageImportResponse as PackageImportPackageImportResponse,
    type PackageImportUpdateParams as PackageImportUpdateParams,
    type PackageImportPackageImportParams as PackageImportPackageImportParams,
  };
}
