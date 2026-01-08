// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from './tags';
import * as ZonesAPI from './projects/zones';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Networks extends APIResource {
  /**
   * Provision a new network based on the passed in constraints. The network should
   * be destroyed after the machine is destroyed to free up resources.
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.networks.create({
   *     name: 'name',
   *     projectId: 'e058',
   *   });
   * ```
   */
  create(params: NetworkCreateParams, options?: RequestOptions): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/networks', { query: { apiVersion }, body, ...options });
  }

  /**
   * Get network with a given id
   *
   * @example
   * ```ts
   * const network = await client.iaas.api.networks.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: NetworkRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Network> {
    return this._client.get(path`/iaas/api/networks/${id}`, { query, ...options });
  }

  /**
   * Get all networks
   *
   * @example
   * ```ts
   * const networks = await client.iaas.api.networks.list();
   * ```
   */
  list(
    query: NetworkListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NetworkListResponse> {
    return this._client.get('/iaas/api/networks', { query, ...options });
  }

  /**
   * Delete a network with a given id
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.networks.delete('id');
   * ```
   */
  delete(
    id: string,
    params: NetworkDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, forceDelete } = params ?? {};
    return this._client.delete(path`/iaas/api/networks/${id}`, {
      query: { apiVersion, forceDelete },
      ...options,
    });
  }

  /**
   * Get associated network IP ranges for a network with a given id
   *
   * @example
   * ```ts
   * const network =
   *   await client.iaas.api.networks.retrieveNetworkIPRanges(
   *     'id',
   *   );
   * ```
   */
  retrieveNetworkIPRanges(
    id: string,
    query: NetworkRetrieveNetworkIPRangesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Network> {
    return this._client.get(path`/iaas/api/networks/${id}/network-ip-ranges`, { query, ...options });
  }
}

/**
 * The network object is an opaque reference to a logical network that network
 * interfaces are attached to.
 *
 * Based on settings specified by your cloud administrator, it may be a reference
 * to an existing network, or be backed by an on-demand network created for
 * isolation, or a security group that will be attached to machines as part of
 * provisioning.
 *
 * Networks are a limited resource, when it is not needed it should be deleted.
 * **HATEOAS** links: **self** - Network - Self link to this network
 */
export interface Network {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: Network._Links;

  /**
   * The external regionId of the resource.
   */
  externalRegionId: string;

  /**
   * IPv4 address range of the network in CIDR format
   */
  cidr?: string;

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

export namespace Network {
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
 * A constraint that is conveyed to the policy engine.
 */
export interface PlacementConstraint {
  /**
   * An expression of the form "[!]tag-key[:[tag-value]]", used to indicate a
   * constraint match on keys and values of tags.
   */
  expression: string;

  /**
   * Indicates whether this constraint should be strictly enforced or not.
   */
  mandatory: boolean;
}

/**
 * State object representing a query result of networks.
 */
export interface NetworkListResponse {
  /**
   * List of content items
   */
  content?: Array<Network>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface NetworkCreateParams {
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
   * Body param: Constraints that are used to drive placement policies for the
   * network that is produced from this specification, related with the network
   * profile. Constraint expressions are matched against tags on existing placement
   * targets.
   */
  constraints?: Array<PlacementConstraint>;

  /**
   * Body param: Flag to indicate if the network creation should create a gateway.
   * Default is true.
   */
  createGateway?: boolean;

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
   * Body param: Flag to indicate if the network needs to have outbound access or
   * not. Default is true. This field will be ignored if there is proper input for
   * networkType customProperty
   */
  outboundAccess?: boolean;

  /**
   * Body param: A set of tag keys and optional values that should be set on any
   * resource that is produced from this specification.
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface NetworkRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface NetworkListParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface NetworkDeleteParams {
  /**
   * Controls whether this is a force delete operation. If true, best effort is made
   * for deleting this network. Use with caution as force deleting may cause
   * inconsistencies between the cloud provider and VMware Aria Automation.
   */
  apiVersion?: string;

  /**
   * Controls whether this is a force delete operation. If true, best effort is made
   * for deleting this network. Use with caution as force deleting may cause
   * inconsistencies between the cloud provider and VMware Aria Automation..
   */
  forceDelete?: boolean;
}

export interface NetworkRetrieveNetworkIPRangesParams {
  /**
   * Number of records you want to skip.
   */
  $skip?: number;

  /**
   * Number of records you want to get.
   */
  $top?: number;

  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export declare namespace Networks {
  export {
    type Network as Network,
    type PlacementConstraint as PlacementConstraint,
    type NetworkListResponse as NetworkListResponse,
    type NetworkCreateParams as NetworkCreateParams,
    type NetworkRetrieveParams as NetworkRetrieveParams,
    type NetworkListParams as NetworkListParams,
    type NetworkDeleteParams as NetworkDeleteParams,
    type NetworkRetrieveNetworkIPRangesParams as NetworkRetrieveNetworkIPRangesParams,
  };
}
