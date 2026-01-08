// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TagsAPI from '../tags';
import * as ZonesAPI from '../projects/zones';
import * as OperationsAPI from './operations';
import { OperationReconfigureParams, Operations, Rule, SecurityGroupSpecification } from './operations';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class SecurityGroups extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);

  /**
   * Get security group with a given id
   *
   * @example
   * ```ts
   * const securityGroup =
   *   await client.iaas.api.securityGroups.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: SecurityGroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SecurityGroup> {
    return this._client.get(path`/iaas/api/security-groups/${id}`, { query, ...options });
  }

  /**
   * Update security group. Only tag updates are supported.
   *
   * @example
   * ```ts
   * const securityGroup =
   *   await client.iaas.api.securityGroups.update('id');
   * ```
   */
  update(id: string, params: SecurityGroupUpdateParams, options?: RequestOptions): APIPromise<SecurityGroup> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/security-groups/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete an on-demand security group with a given id
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.securityGroups.delete('id');
   * ```
   */
  delete(
    id: string,
    params: SecurityGroupDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, forceDelete } = params ?? {};
    return this._client.delete(path`/iaas/api/security-groups/${id}`, {
      query: { apiVersion, forceDelete },
      ...options,
    });
  }

  /**
   * Get all security groups
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.securityGroups.retrieveSecurityGroups();
   * ```
   */
  retrieveSecurityGroups(
    query: SecurityGroupRetrieveSecurityGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SecurityGroupRetrieveSecurityGroupsResponse> {
    return this._client.get('/iaas/api/security-groups', { query, ...options });
  }

  /**
   * Provision a new on-demand security group
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.securityGroups.securityGroups({
   *     name: 'name',
   *     projectId: 'e058',
   *   });
   * ```
   */
  securityGroups(
    params: SecurityGroupSecurityGroupsParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/security-groups', { query: { apiVersion }, body, ...options });
  }
}

/**
 * State object representing a security group. **HATEOAS** links:
 * **cloud-accounts** - array[CloudAccount] - List of cloud accounts where this
 * security group exists. **self** - SecurityGroup - Self link to this security
 * group
 */
export interface SecurityGroup {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: SecurityGroup._Links;

  /**
   * The external regionId of the resource.
   */
  externalRegionId: string;

  /**
   * List of security rules.
   */
  rules: Array<OperationsAPI.Rule>;

  /**
   * Set of ids of the cloud accounts this resource belongs to.
   */
  cloudAccountIds?: Array<string>;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * Additional properties that may be used to extend the base resource.
   */
  customProperties?: { [key: string]: string };

  /**
   * Deployment id that is associated with this resource.
   */
  deploymentId?: string;

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * External entity Id on the provider side.
   */
  externalId?: string;

  /**
   * The external zoneId of the resource.
   */
  externalZoneId?: string;

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
   * The id of the project this resource belongs to.
   */
  projectId?: string;

  /**
   * The provisioning status of the resource. One of three provisioning statuses.
   * `PROVISIONING`: The resource is being provisioned. `READY`: The resource is
   * already provisioned. `SUSPEND`: The resource is being destroyed.
   */
  provisioningStatus?: string;

  /**
   * A set of tag keys and optional values that were set on this resource.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace SecurityGroup {
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
 * State object representing a query result of security groups.
 */
export interface SecurityGroupRetrieveSecurityGroupsResponse {
  /**
   * List of content items
   */
  content?: Array<SecurityGroup>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface SecurityGroupRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface SecurityGroupUpdateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: A set of tag keys and optional values that should be set on any
   * resource that is produced from this specification.
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface SecurityGroupDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Controls whether this is a force delete operation. If true, best effort is made
   * for deleting this security group. Use with caution as force deleting may cause
   * inconsistencies between the cloud provider and VMware Aria Automation.
   */
  forceDelete?: boolean;
}

export interface SecurityGroupRetrieveSecurityGroupsParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface SecurityGroupSecurityGroupsParams {
  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: The id of the project the current user belongs to.
   */
  projectId: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: Additional custom properties that may be used to extend this
   * resource.
   */
  customProperties?: { [key: string]: string };

  /**
   * Body param: The id of the deployment that is associated with this resource
   */
  deploymentId?: string;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: List of security rules.
   */
  rules?: Array<OperationsAPI.Rule>;

  /**
   * Body param: A set of tag keys and optional values that should be set on any
   * resource that is produced from this specification.
   */
  tags?: Array<TagsAPI.Tag>;
}

SecurityGroups.Operations = Operations;

export declare namespace SecurityGroups {
  export {
    type SecurityGroup as SecurityGroup,
    type SecurityGroupRetrieveSecurityGroupsResponse as SecurityGroupRetrieveSecurityGroupsResponse,
    type SecurityGroupRetrieveParams as SecurityGroupRetrieveParams,
    type SecurityGroupUpdateParams as SecurityGroupUpdateParams,
    type SecurityGroupDeleteParams as SecurityGroupDeleteParams,
    type SecurityGroupRetrieveSecurityGroupsParams as SecurityGroupRetrieveSecurityGroupsParams,
    type SecurityGroupSecurityGroupsParams as SecurityGroupSecurityGroupsParams,
  };

  export {
    Operations as Operations,
    type Rule as Rule,
    type SecurityGroupSpecification as SecurityGroupSpecification,
    type OperationReconfigureParams as OperationReconfigureParams,
  };
}
