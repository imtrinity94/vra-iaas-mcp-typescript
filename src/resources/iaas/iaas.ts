// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIAPI from './api/api';
import {
  API,
  APILoginParams,
  APILoginResponse,
  APIRetrieveAboutResponse,
  APIRetrieveEventLogsParams,
  APIRetrieveEventLogsResponse,
  APIRetrieveFabricAwsVolumeTypesParams,
  APIRetrieveFabricAwsVolumeTypesResponse,
  APIRetrieveFabricAzureDiskEncryptionSetsParams,
  APIRetrieveFabricAzureDiskEncryptionSetsResponse,
  APIRetrieveFabricFlavorsParams,
  APIRetrieveFabricFlavorsResponse,
  APIRetrieveFlavorsParams,
  APIRetrieveFlavorsResponse,
  APIRetrieveFoldersParams,
  APIRetrieveFoldersResponse,
  APIRetrieveImagesParams,
  APIRetrieveImagesResponse,
  APIRetrieveParams,
  APIRetrieveRequestGraphParams,
  APIRetrieveRequestGraphResponse,
  APIRetrieveResponse,
} from './api/api';

export class Iaas extends APIResource {
  api: APIAPI.API = new APIAPI.API(this._client);
}

Iaas.API = API;

export declare namespace Iaas {
  export {
    API as API,
    type APIRetrieveResponse as APIRetrieveResponse,
    type APILoginResponse as APILoginResponse,
    type APIRetrieveAboutResponse as APIRetrieveAboutResponse,
    type APIRetrieveEventLogsResponse as APIRetrieveEventLogsResponse,
    type APIRetrieveFabricAwsVolumeTypesResponse as APIRetrieveFabricAwsVolumeTypesResponse,
    type APIRetrieveFabricAzureDiskEncryptionSetsResponse as APIRetrieveFabricAzureDiskEncryptionSetsResponse,
    type APIRetrieveFabricFlavorsResponse as APIRetrieveFabricFlavorsResponse,
    type APIRetrieveFlavorsResponse as APIRetrieveFlavorsResponse,
    type APIRetrieveFoldersResponse as APIRetrieveFoldersResponse,
    type APIRetrieveImagesResponse as APIRetrieveImagesResponse,
    type APIRetrieveRequestGraphResponse as APIRetrieveRequestGraphResponse,
    type APIRetrieveParams as APIRetrieveParams,
    type APILoginParams as APILoginParams,
    type APIRetrieveEventLogsParams as APIRetrieveEventLogsParams,
    type APIRetrieveFabricAwsVolumeTypesParams as APIRetrieveFabricAwsVolumeTypesParams,
    type APIRetrieveFabricAzureDiskEncryptionSetsParams as APIRetrieveFabricAzureDiskEncryptionSetsParams,
    type APIRetrieveFabricFlavorsParams as APIRetrieveFabricFlavorsParams,
    type APIRetrieveFlavorsParams as APIRetrieveFlavorsParams,
    type APIRetrieveFoldersParams as APIRetrieveFoldersParams,
    type APIRetrieveImagesParams as APIRetrieveImagesParams,
    type APIRetrieveRequestGraphParams as APIRetrieveRequestGraphParams,
  };
}
