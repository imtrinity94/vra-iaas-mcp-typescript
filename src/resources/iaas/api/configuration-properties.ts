// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ConfigurationProperties extends APIResource {
  /**
   * Get single configuration property
   *
   * @example
   * ```ts
   * const configurationPropertyResult =
   *   await client.iaas.api.configurationProperties.retrieve(
   *     'id',
   *     { apiVersion: 'apiVersion' },
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ConfigurationPropertyRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ConfigurationPropertyResult> {
    return this._client.get(path`/iaas/api/configuration-properties/${id}`, { query, ...options });
  }

  /**
   * Delete a configuration property
   *
   * @example
   * ```ts
   * const configurationProperty =
   *   await client.iaas.api.configurationProperties.delete(
   *     'id',
   *     { apiVersion: 'apiVersion' },
   *   );
   * ```
   */
  delete(
    id: string,
    params: ConfigurationPropertyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ConfigurationProperty> {
    const { apiVersion } = params;
    return this._client.delete(path`/iaas/api/configuration-properties/${id}`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Get all configuration properties
   *
   * @example
   * ```ts
   * const configurationPropertyResult =
   *   await client.iaas.api.configurationProperties.retrieveConfigurationProperties(
   *     { apiVersion: 'apiVersion' },
   *   );
   * ```
   */
  retrieveConfigurationProperties(
    query: ConfigurationPropertyRetrieveConfigurationPropertiesParams,
    options?: RequestOptions,
  ): APIPromise<ConfigurationPropertyResult> {
    return this._client.get('/iaas/api/configuration-properties', { query, ...options });
  }

  /**
   * Update or create configuration property.
   *
   * @example
   * ```ts
   * const configurationProperty =
   *   await client.iaas.api.configurationProperties.updateConfigurationProperties(
   *     {
   *       apiVersion: 'apiVersion',
   *       key: 'SESSION_TIMEOUT_DURATION_MINUTES, RELEASE_IPADDRESS_PERIOD_MINUTES, NSXT_RETRY_DURATION_MINUTES',
   *       value: 'value',
   *     },
   *   );
   * ```
   */
  updateConfigurationProperties(
    params: ConfigurationPropertyUpdateConfigurationPropertiesParams,
    options?: RequestOptions,
  ): APIPromise<ConfigurationProperty> {
    const { apiVersion, ...body } = params;
    return this._client.patch('/iaas/api/configuration-properties', {
      query: { apiVersion },
      body,
      ...options,
    });
  }
}

/**
 * A representation of a configuration property.
 */
export interface ConfigurationProperty {
  /**
   * The key of the property.
   */
  key: 'SESSION_TIMEOUT_DURATION_MINUTES, RELEASE_IPADDRESS_PERIOD_MINUTES, NSXT_RETRY_DURATION_MINUTES';

  /**
   * The value of the property.
   */
  value: string;
}

/**
 * State object representing a query result of configuration properties.
 */
export interface ConfigurationPropertyResult {
  /**
   * List of content items
   */
  content?: Array<ConfigurationProperty>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface ConfigurationPropertyRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export interface ConfigurationPropertyDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export interface ConfigurationPropertyRetrieveConfigurationPropertiesParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export interface ConfigurationPropertyUpdateConfigurationPropertiesParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: The key of the property.
   */
  key: 'SESSION_TIMEOUT_DURATION_MINUTES, RELEASE_IPADDRESS_PERIOD_MINUTES, NSXT_RETRY_DURATION_MINUTES';

  /**
   * Body param: The value of the property.
   */
  value: string;
}

export declare namespace ConfigurationProperties {
  export {
    type ConfigurationProperty as ConfigurationProperty,
    type ConfigurationPropertyResult as ConfigurationPropertyResult,
    type ConfigurationPropertyRetrieveParams as ConfigurationPropertyRetrieveParams,
    type ConfigurationPropertyDeleteParams as ConfigurationPropertyDeleteParams,
    type ConfigurationPropertyRetrieveConfigurationPropertiesParams as ConfigurationPropertyRetrieveConfigurationPropertiesParams,
    type ConfigurationPropertyUpdateConfigurationPropertiesParams as ConfigurationPropertyUpdateConfigurationPropertiesParams,
  };
}
