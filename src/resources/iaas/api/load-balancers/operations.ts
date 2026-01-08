// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TagsAPI from '../tags';
import * as MachinesOperationsAPI from '../machines/operations';
import * as ZonesAPI from '../projects/zones';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Operations extends APIResource {
  /**
   * Second day delete operation for load balancer
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.loadBalancers.operations.delete(
   *     'id',
   *   );
   * ```
   */
  delete(
    id: string,
    params: OperationDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, forceDelete } = params ?? {};
    return this._client.post(path`/iaas/api/load-balancers/${id}/operations/delete`, {
      query: { apiVersion, forceDelete },
      ...options,
    });
  }

  /**
   * Second day scale operation for load balancer
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.loadBalancers.operations.scale(
   *     'id',
   *     {
   *       name: 'name',
   *       nics: [{}],
   *       projectId: 'e058',
   *       routes: [
   *         {
   *           memberPort: '80',
   *           memberProtocol: 'TCP, UDP',
   *           port: '80',
   *           protocol: 'TCP, UDP',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  scale(
    id: string,
    params: OperationScaleParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post(path`/iaas/api/load-balancers/${id}/operations/scale`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }
}

/**
 * Load balancer configuration.
 */
export interface LoadBalancerSpecification {
  /**
   * A human-friendly name used as an identifier in APIs that support this option.
   */
  name: string;

  /**
   * A set of network interface specifications for this load balancer.
   */
  nics: Array<MachinesOperationsAPI.NetworkInterfaceSpecification>;

  /**
   * The id of the project the current user belongs to.
   */
  projectId: string;

  /**
   * The load balancer route configuration regarding ports and protocols.
   */
  routes: Array<RouteConfiguration>;

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
   * An Internet-facing load balancer has a publicly resolvable DNS name, so it can
   * route requests from clients over the Internet to the instances that are
   * registered with the load balancer.
   */
  internetFacing?: boolean;

  /**
   * Defines logging level for collecting load balancer traffic logs.
   */
  loggingLevel?: string;

  /**
   * A set of tag keys and optional values that should be set on any resource that is
   * produced from this specification.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * A list of links to target load balancer pool members. Links can be to either a
   * machine or a machine's network interface.
   */
  targetLinks?: Array<string>;

  /**
   * Define the type/variant of load balancer numbers e.g.for NSX the number virtual
   * servers and pool members load balancer can host
   */
  type?: string;
}

/**
 * Load balancer route configuration.
 */
export interface RouteConfiguration {
  /**
   * Member port where the traffic is routed to.
   */
  memberPort: string;

  /**
   * The protocol of the member traffic.
   */
  memberProtocol: string;

  /**
   * Port which the load balancer is listening to.
   */
  port: string;

  /**
   * The protocol of the incoming load balancer requests.
   */
  protocol: string;

  /**
   * Algorithm employed for load balancing.
   */
  algorithm?: string;

  /**
   * Parameters need for load balancing algorithm.Use newline to separate multiple
   * parameters.
   */
  algorithmParameters?: string;

  /**
   * Load balancer health check configuration.
   */
  healthCheckConfiguration?: RouteConfiguration.HealthCheckConfiguration;
}

export namespace RouteConfiguration {
  /**
   * Load balancer health check configuration.
   */
  export interface HealthCheckConfiguration {
    /**
     * Number of consecutive successful checks before considering a particular back-end
     * instance as healthy.
     */
    healthyThreshold?: number;

    /**
     * HTTP or HTTPS method to use when sending a health check request.
     */
    httpMethod?: string;

    /**
     * Interval (in seconds) at which the health checks will be performed.
     */
    intervalSeconds?: number;

    /**
     * Enable passive monitor mode. This setting only applies to NSX-T.
     */
    passiveMonitor?: boolean;

    /**
     * Port on the back-end instance machine to use for the health check.
     */
    port?: string;

    /**
     * The protocol used for the health check.
     */
    protocol?: string;

    /**
     * Request body. Used by HTTP, HTTPS, TCP, UDP.
     */
    requestBody?: string;

    /**
     * Expected response body. Used by HTTP, HTTPS, TCP, UDP.
     */
    responseBody?: string;

    /**
     * Timeout (in seconds) to wait for a response from the back-end instance.
     */
    timeoutSeconds?: number;

    /**
     * Number of consecutive check failures before considering a particular back-end
     * instance as unhealthy.
     */
    unhealthyThreshold?: number;

    /**
     * URL path on the back-end instance against which a request will be performed for
     * the health check. Useful when the health check protocol is HTTP/HTTPS.
     */
    urlPath?: string;
  }
}

export interface OperationDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Controls whether this is a force delete operation. If true, best effort is made
   * for deleting this load balancer. Use with caution as force deleting may cause
   * inconsistencies between the cloud provider and VMware Aria Automation.
   */
  forceDelete?: boolean;
}

export interface OperationScaleParams {
  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: A set of network interface specifications for this load balancer.
   */
  nics: Array<MachinesOperationsAPI.NetworkInterfaceSpecification>;

  /**
   * Body param: The id of the project the current user belongs to.
   */
  projectId: string;

  /**
   * Body param: The load balancer route configuration regarding ports and protocols.
   */
  routes: Array<RouteConfiguration>;

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
   * Body param: An Internet-facing load balancer has a publicly resolvable DNS name,
   * so it can route requests from clients over the Internet to the instances that
   * are registered with the load balancer.
   */
  internetFacing?: boolean;

  /**
   * Body param: Defines logging level for collecting load balancer traffic logs.
   */
  loggingLevel?: string;

  /**
   * Body param: A set of tag keys and optional values that should be set on any
   * resource that is produced from this specification.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Body param: A list of links to target load balancer pool members. Links can be
   * to either a machine or a machine's network interface.
   */
  targetLinks?: Array<string>;

  /**
   * Body param: Define the type/variant of load balancer numbers e.g.for NSX the
   * number virtual servers and pool members load balancer can host
   */
  type?: string;
}

export declare namespace Operations {
  export {
    type LoadBalancerSpecification as LoadBalancerSpecification,
    type RouteConfiguration as RouteConfiguration,
    type OperationDeleteParams as OperationDeleteParams,
    type OperationScaleParams as OperationScaleParams,
  };
}
