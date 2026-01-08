// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from './tags';
import * as ZonesAPI from './projects/zones';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Integrations extends APIResource {
  /**
   * Create an integration in the current organization asynchronously
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.integrations.create({
   *     apiVersion: 'apiVersion',
   *     integrationProperties: {
   *       supportPublicImages: 'true',
   *       acceptSelfSignedCertificate: 'true',
   *     },
   *     integrationType:
   *       'Active directory, Ansible, IPAM, vRO, GitHub',
   *     name: 'name',
   *   });
   * ```
   */
  create(params: IntegrationCreateParams, options?: RequestOptions): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, validateOnly, ...body } = params;
    return this._client.post('/iaas/api/integrations', {
      query: { apiVersion, validateOnly },
      body,
      ...options,
    });
  }

  /**
   * Get an integration with a given id
   *
   * @example
   * ```ts
   * const integration =
   *   await client.iaas.api.integrations.retrieve('id', {
   *     apiVersion: 'apiVersion',
   *   });
   * ```
   */
  retrieve(id: string, query: IntegrationRetrieveParams, options?: RequestOptions): APIPromise<Integration> {
    return this._client.get(path`/iaas/api/integrations/${id}`, { query, ...options });
  }

  /**
   * Update a single integration asynchronously
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.integrations.update('id', {
   *     apiVersion: 'apiVersion',
   *     integrationProperties: { providerId: 'providerID' },
   *     name: 'name',
   *   });
   * ```
   */
  update(
    id: string,
    params: IntegrationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/integrations/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Get all integrations within the current organization
   *
   * @example
   * ```ts
   * const integrations =
   *   await client.iaas.api.integrations.list({
   *     apiVersion: 'apiVersion',
   *   });
   * ```
   */
  list(query: IntegrationListParams, options?: RequestOptions): APIPromise<IntegrationListResponse> {
    return this._client.get('/iaas/api/integrations', { query, ...options });
  }

  /**
   * Delete an integration with a given id asynchronously
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.integrations.delete('id', {
   *     apiVersion: 'apiVersion',
   *   });
   * ```
   */
  delete(
    id: string,
    params: IntegrationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params;
    return this._client.delete(path`/iaas/api/integrations/${id}`, { query: { apiVersion }, ...options });
  }
}

/**
 * Specification for certificate for a cloud account.
 */
export interface CertificateInfoSpecification {
  /**
   * The certificate in string format.
   */
  certificate: string;
}

/**
 * State object representing an integration.
 *
 * An integration identifies an integration type and an integration-specific
 * properties. **HATEOAS** links: **self** - Integration - Self link to this
 * integration
 */
export interface Integration {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: Integration._Links;

  /**
   * Integration specific propertiesNote: Integration Properties can be blank for
   * integrations requiring only username and password.
   */
  integrationProperties: { [key: string]: string };

  /**
   * Integration type
   */
  integrationType: string;

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
   * A set of tag keys and optional values that were set on the Integration
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace Integration {
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
 * State object representing a query result of integrations.
 */
export interface IntegrationListResponse {
  /**
   * List of content items
   */
  content?: Array<Integration>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface IntegrationCreateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Integration specific properties supplied in as name value pairs
   */
  integrationProperties: { [key: string]: string };

  /**
   * Body param: Integration type
   */
  integrationType: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Query param: Only validate provided Integration Specification. Integration will
   * not be created.
   */
  validateOnly?: string;

  /**
   * Body param: Cloud accounts to associate with this integration
   */
  associatedCloudAccountIds?: Array<string>;

  /**
   * Body param: Specification for certificate for a cloud account.
   */
  certificateInfo?: CertificateInfoSpecification;

  /**
   * Body param: Additional custom properties that may be used to extend the
   * Integration.
   */
  customProperties?: { [key: string]: string };

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: Secret access key or password to be used to authenticate with the
   * integration
   */
  privateKey?: string;

  /**
   * Body param: Access key id or username to be used to authenticate with the
   * integration
   */
  privateKeyId?: string;

  /**
   * Body param: A set of tag keys and optional values to set on the Integration
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface IntegrationRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Select a subset of properties to include in the response.
   */
  $select?: string;
}

export interface IntegrationUpdateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Integration specific properties supplied in as name value pairs
   */
  integrationProperties: { [key: string]: string };

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: Cloud accounts to associate with this integration
   */
  associatedCloudAccountIds?: Array<string>;

  /**
   * Body param: Specification for certificate for a cloud account.
   */
  certificateInfo?: CertificateInfoSpecification;

  /**
   * Body param: Additional custom properties that may be used to extend the
   * Integration.
   */
  customProperties?: { [key: string]: string };

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: Secret access key or password to be used to authenticate with the
   * integration
   */
  privateKey?: string;

  /**
   * Body param: Access key id or username to be used to authenticate with the
   * integration
   */
  privateKeyId?: string;

  /**
   * Body param: A set of tag keys and optional values to set on the Integration
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface IntegrationListParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;

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
}

export interface IntegrationDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export declare namespace Integrations {
  export {
    type CertificateInfoSpecification as CertificateInfoSpecification,
    type Integration as Integration,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationCreateParams as IntegrationCreateParams,
    type IntegrationRetrieveParams as IntegrationRetrieveParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationDeleteParams as IntegrationDeleteParams,
  };
}
