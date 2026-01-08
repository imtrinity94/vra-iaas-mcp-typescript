// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from './tags';
import * as OperationsAPI from './compute-nats/operations';
import * as ZonesAPI from './projects/zones';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ComputeGateways extends APIResource {
  /**
   * Get compute gateway with a given id
   *
   * @example
   * ```ts
   * const computeGateway =
   *   await client.iaas.api.computeGateways.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: ComputeGatewayRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ComputeGateway> {
    return this._client.get(path`/iaas/api/compute-gateways/${id}`, { query, ...options });
  }

  /**
   * Delete compute gateway with a given id
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.computeGateways.delete('id');
   * ```
   */
  delete(
    id: string,
    params: ComputeGatewayDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, forceDelete } = params ?? {};
    return this._client.delete(path`/iaas/api/compute-gateways/${id}`, {
      query: { apiVersion, forceDelete },
      ...options,
    });
  }

  /**
   * Create a new compute gateway.
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.computeGateways.computeGateways({
   *     name: 'name',
   *     natRules: [
   *       {
   *         index: 0,
   *         targetLink:
   *           '/iaas/api/load-balancers/try6-45ef, /iaas/api/machines/ht54-a472/network-interfaces/dyd6-d67e',
   *       },
   *     ],
   *     networks: ['string'],
   *     projectId: 'e058',
   *   });
   * ```
   */
  computeGateways(
    params: ComputeGatewayComputeGatewaysParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/compute-gateways', { query: { apiVersion }, body, ...options });
  }

  /**
   * Get all compute gateways
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.computeGateways.retrieveComputeGateways();
   * ```
   */
  retrieveComputeGateways(
    query: ComputeGatewayRetrieveComputeGatewaysParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ComputeGatewayRetrieveComputeGatewaysResponse> {
    return this._client.get('/iaas/api/compute-gateways', { query, ...options });
  }
}

/**
 * The compute gateway object is a logical entity attached to a network. It is used
 * to configure NAT rules on the Edge Gateway or Tier-1 logical router in NSX to
 * enable port forwarding. **HATEOAS** links: **self** - Compute Gateway - Self
 * link to this compute gateway
 */
export interface ComputeGateway {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: ComputeGateway._Links;

  /**
   * The external regionId of the resource.
   */
  externalRegionId: string;

  /**
   * A list of id(s) of the network(s) to which the compute gateway is attached
   */
  networks: Array<string>;

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

export namespace ComputeGateway {
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
 * State object representing a query result of compute-gateways.
 */
export interface ComputeGatewayRetrieveComputeGatewaysResponse {
  /**
   * List of content items
   */
  content?: Array<ComputeGateway>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface ComputeGatewayRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface ComputeGatewayDeleteParams {
  /**
   * Controls whether this is a force delete operation. If true, best effort is made
   * for deleting this compute gateway. Use with caution as force deleting may cause
   * inconsistencies between the cloud provider and VMware Aria Automation.
   */
  apiVersion?: string;

  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  forceDelete?: boolean;
}

export interface ComputeGatewayComputeGatewaysParams {
  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: List of NAT Rules
   */
  natRules: Array<OperationsAPI.NatRule>;

  /**
   * Body param: List of networks
   */
  networks: Array<string>;

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
}

export interface ComputeGatewayRetrieveComputeGatewaysParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export declare namespace ComputeGateways {
  export {
    type ComputeGateway as ComputeGateway,
    type ComputeGatewayRetrieveComputeGatewaysResponse as ComputeGatewayRetrieveComputeGatewaysResponse,
    type ComputeGatewayRetrieveParams as ComputeGatewayRetrieveParams,
    type ComputeGatewayDeleteParams as ComputeGatewayDeleteParams,
    type ComputeGatewayComputeGatewaysParams as ComputeGatewayComputeGatewaysParams,
    type ComputeGatewayRetrieveComputeGatewaysParams as ComputeGatewayRetrieveComputeGatewaysParams,
  };
}
