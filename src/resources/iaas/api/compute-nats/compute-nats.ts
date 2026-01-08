// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TagsAPI from '../tags';
import * as OperationsAPI from './operations';
import { NatRule, OperationReconfigureParams, Operations } from './operations';
import * as ZonesAPI from '../projects/zones';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ComputeNats extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);

  /**
   * Get Compute Nat with a given id
   *
   * @example
   * ```ts
   * const computeNat =
   *   await client.iaas.api.computeNats.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: ComputeNatRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ComputeNat> {
    return this._client.get(path`/iaas/api/compute-nats/${id}`, { query, ...options });
  }

  /**
   * Delete compute nat with a given id
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.computeNats.delete('id');
   * ```
   */
  delete(
    id: string,
    params: ComputeNatDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, forceDelete } = params ?? {};
    return this._client.delete(path`/iaas/api/compute-nats/${id}`, {
      query: { apiVersion, forceDelete },
      ...options,
    });
  }

  /**
   * Create a new Compute Nat.
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.computeNats.computeNats({
   *     gateway: 'gateway',
   *     name: 'name',
   *     natRules: [
   *       {
   *         index: 0,
   *         targetLink:
   *           '/iaas/api/load-balancers/try6-45ef, /iaas/api/machines/ht54-a472/network-interfaces/dyd6-d67e',
   *       },
   *     ],
   *     projectId: 'e058',
   *   });
   * ```
   */
  computeNats(
    params: ComputeNatComputeNatsParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/compute-nats', { query: { apiVersion }, body, ...options });
  }

  /**
   * Get all Compute Nats
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.computeNats.retrieveComputeNats();
   * ```
   */
  retrieveComputeNats(
    query: ComputeNatRetrieveComputeNatsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ComputeNatRetrieveComputeNatsResponse> {
    return this._client.get('/iaas/api/compute-nats', { query, ...options });
  }
}

/**
 * The compute nat object is used to configure NAT rules on the Edge Gateway or
 * Tier-1 logical router in NSX to enable port forwarding. **HATEOAS** links:
 * **self** - Nat - Self link to this nat
 */
export interface ComputeNat {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: ComputeNat._Links;

  /**
   * The external regionId of the resource.
   */
  externalRegionId: string;

  /**
   * The compute gateway to which the compute nat is attached
   */
  gateway: string;

  /**
   * A list of NAT rule(s) to be created on the NSX network
   */
  natRules: Array<OperationsAPI.NatRule>;

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

export namespace ComputeNat {
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
 * State object representing a query result of compute-nats.
 */
export interface ComputeNatRetrieveComputeNatsResponse {
  /**
   * List of content items
   */
  content?: Array<ComputeNat>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface ComputeNatRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface ComputeNatDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Controls whether this is a force delete operation. If true, best effort is made
   * for deleting this nat. Use with caution as force deleting may cause
   * inconsistencies between the cloud provider and VMware Aria Automation.
   */
  forceDelete?: boolean;
}

export interface ComputeNatComputeNatsParams {
  /**
   * Body param: Id of the Compute Gateway to which the Compute Nat resource will be
   * attached
   */
  gateway: string;

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

export interface ComputeNatRetrieveComputeNatsParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

ComputeNats.Operations = Operations;

export declare namespace ComputeNats {
  export {
    type ComputeNat as ComputeNat,
    type ComputeNatRetrieveComputeNatsResponse as ComputeNatRetrieveComputeNatsResponse,
    type ComputeNatRetrieveParams as ComputeNatRetrieveParams,
    type ComputeNatDeleteParams as ComputeNatDeleteParams,
    type ComputeNatComputeNatsParams as ComputeNatComputeNatsParams,
    type ComputeNatRetrieveComputeNatsParams as ComputeNatRetrieveComputeNatsParams,
  };

  export {
    Operations as Operations,
    type NatRule as NatRule,
    type OperationReconfigureParams as OperationReconfigureParams,
  };
}
