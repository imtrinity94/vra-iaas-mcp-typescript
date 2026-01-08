// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TagsAPI from '../tags';
import * as ZonesAPI from '../projects/zones';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Operations extends APIResource {
  /**
   * Day-2 reconfigure operation for new security groups provisioned by VMware Aria
   * Automation. This is not supported for 'existing' security groups
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.securityGroups.operations.reconfigure(
   *     'id',
   *     { name: 'name', projectId: 'e058' },
   *   );
   * ```
   */
  reconfigure(
    id: string,
    params: OperationReconfigureParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post(path`/iaas/api/security-groups/${id}/operations/reconfigure`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }
}

/**
 * A rule used in a security group.
 */
export interface Rule {
  /**
   * Type of access (Allow, Deny or Drop) for the security rule. Allow is default.
   * Traffic that does not match any rules will be denied.
   */
  access: 'Allow' | 'Deny' | 'Drop';

  /**
   * Direction of the security rule (inbound or outboud).
   */
  direction: 'Inbound' | 'Outbound';

  /**
   * IP address(es) in CIDR format which the security rule applies to.
   */
  ipRangeCidr: string;

  /**
   * Ports the security rule applies to.
   */
  ports: string;

  /**
   * Name of security rule.
   */
  name?: string;

  /**
   * Protocol the security rule applies to.
   */
  protocol?: string;

  /**
   * Service defined by the provider (such as: SSH, HTTPS). Either service or
   * protocol have to be specified.
   */
  service?: string;
}

/**
 * Specification for a cloud security group
 */
export interface SecurityGroupSpecification {
  /**
   * A human-friendly name used as an identifier in APIs that support this option.
   */
  name: string;

  /**
   * The id of the project the current user belongs to.
   */
  projectId: string;

  /**
   * Additional custom properties that may be used to extend this resource.
   */
  customProperties?: { [key: string]: string };

  /**
   * The id of the deployment that is associated with this resource
   */
  deploymentId?: string;

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * List of security rules.
   */
  rules?: Array<Rule>;

  /**
   * A set of tag keys and optional values that should be set on any resource that is
   * produced from this specification.
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface OperationReconfigureParams {
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
  rules?: Array<Rule>;

  /**
   * Body param: A set of tag keys and optional values that should be set on any
   * resource that is produced from this specification.
   */
  tags?: Array<TagsAPI.Tag>;
}

export declare namespace Operations {
  export {
    type Rule as Rule,
    type SecurityGroupSpecification as SecurityGroupSpecification,
    type OperationReconfigureParams as OperationReconfigureParams,
  };
}
