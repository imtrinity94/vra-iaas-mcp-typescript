// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TagsAPI from '../tags';
import * as OperationsAPI from './operations';
import {
  LoadBalancerSpecification,
  OperationDeleteParams,
  OperationScaleParams,
  Operations,
  RouteConfiguration,
} from './operations';
import * as MachinesOperationsAPI from '../machines/operations';
import * as ZonesAPI from '../projects/zones';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class LoadBalancers extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);

  /**
   * Get load balancer with a given id
   *
   * @example
   * ```ts
   * const loadBalancer =
   *   await client.iaas.api.loadBalancers.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: LoadBalancerRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LoadBalancer> {
    return this._client.get(path`/iaas/api/load-balancers/${id}`, { query, ...options });
  }

  /**
   * Delete load balancer with a given id
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.loadBalancers.delete('id');
   * ```
   */
  delete(
    id: string,
    params: LoadBalancerDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, forceDelete } = params ?? {};
    return this._client.delete(path`/iaas/api/load-balancers/${id}`, {
      query: { apiVersion, forceDelete },
      ...options,
    });
  }

  /**
   * Create load balancer
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.loadBalancers.loadBalancers({
   *     name: 'name',
   *     nics: [{}],
   *     projectId: 'e058',
   *     routes: [
   *       {
   *         memberPort: '80',
   *         memberProtocol: 'TCP, UDP',
   *         port: '80',
   *         protocol: 'TCP, UDP',
   *       },
   *     ],
   *   });
   * ```
   */
  loadBalancers(
    params: LoadBalancerLoadBalancersParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/load-balancers', { query: { apiVersion }, body, ...options });
  }

  /**
   * Get all load balancers
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.loadBalancers.retrieveLoadBalancers();
   * ```
   */
  retrieveLoadBalancers(
    query: LoadBalancerRetrieveLoadBalancersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LoadBalancerRetrieveLoadBalancersResponse> {
    return this._client.get('/iaas/api/load-balancers', { query, ...options });
  }
}

/**
 * Represents a load balancer. **HATEOAS** links: **load-balancer-targets** -
 * array[Machine] - List of load balancer target machines. **cloud-account** -
 * CloudAccount - Cloud account where this LB is deployed. **self** -
 * LoadBalancer - Self link to this load balancer
 */
export interface LoadBalancer {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: LoadBalancer._Links;

  /**
   * The external regionId of the resource.
   */
  externalRegionId: string;

  /**
   * The load balancer route configuration regarding ports and protocols.
   */
  routes: Array<OperationsAPI.RouteConfiguration>;

  /**
   * Primary address allocated or in use by this load balancer. The address could be
   * an in the form of a publicly resolvable DNS name or an IP address.
   */
  address?: string;

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
   * Defines logging level for collecting load balancer traffic logs.
   */
  loggingLevel?: string;

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
   * Define the type/variant of load balancer numbers e.g.for NSX the number virtual
   * servers and pool members load balancer can host
   */
  type?: string;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace LoadBalancer {
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
 * State object representing a query result of load balancecrs.
 */
export interface LoadBalancerRetrieveLoadBalancersResponse {
  /**
   * List of content items
   */
  content?: Array<LoadBalancer>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface LoadBalancerRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface LoadBalancerDeleteParams {
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

export interface LoadBalancerLoadBalancersParams {
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
  routes: Array<OperationsAPI.RouteConfiguration>;

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

export interface LoadBalancerRetrieveLoadBalancersParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

LoadBalancers.Operations = Operations;

export declare namespace LoadBalancers {
  export {
    type LoadBalancer as LoadBalancer,
    type LoadBalancerRetrieveLoadBalancersResponse as LoadBalancerRetrieveLoadBalancersResponse,
    type LoadBalancerRetrieveParams as LoadBalancerRetrieveParams,
    type LoadBalancerDeleteParams as LoadBalancerDeleteParams,
    type LoadBalancerLoadBalancersParams as LoadBalancerLoadBalancersParams,
    type LoadBalancerRetrieveLoadBalancersParams as LoadBalancerRetrieveLoadBalancersParams,
  };

  export {
    Operations as Operations,
    type LoadBalancerSpecification as LoadBalancerSpecification,
    type RouteConfiguration as RouteConfiguration,
    type OperationDeleteParams as OperationDeleteParams,
    type OperationScaleParams as OperationScaleParams,
  };
}
