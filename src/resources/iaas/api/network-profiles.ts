// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from './tags';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class NetworkProfiles extends APIResource {
  /**
   * Get network profile with a given id
   *
   * @example
   * ```ts
   * const networkProfile =
   *   await client.iaas.api.networkProfiles.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: NetworkProfileRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NetworkProfile> {
    return this._client.get(path`/iaas/api/network-profiles/${id}`, { query, ...options });
  }

  /**
   * Update network profile
   *
   * @example
   * ```ts
   * const networkProfile =
   *   await client.iaas.api.networkProfiles.update('id', {
   *     name: 'name',
   *     regionId: '9.0E49',
   *   });
   * ```
   */
  update(
    id: string,
    params: NetworkProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<NetworkProfile> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/network-profiles/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Delete network profile with a given id
   *
   * @example
   * ```ts
   * await client.iaas.api.networkProfiles.delete('id');
   * ```
   */
  delete(
    id: string,
    params: NetworkProfileDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apiVersion } = params ?? {};
    return this._client.delete(path`/iaas/api/network-profiles/${id}`, {
      query: { apiVersion },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create network profile
   *
   * @example
   * ```ts
   * const networkProfile =
   *   await client.iaas.api.networkProfiles.networkProfiles({
   *     name: 'name',
   *     regionId: '9.0E49',
   *   });
   * ```
   */
  networkProfiles(
    params: NetworkProfileNetworkProfilesParams,
    options?: RequestOptions,
  ): APIPromise<NetworkProfile> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/network-profiles', { query: { apiVersion }, body, ...options });
  }

  /**
   * Get all network profiles
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.networkProfiles.retrieveNetworkProfiles();
   * ```
   */
  retrieveNetworkProfiles(
    query: NetworkProfileRetrieveNetworkProfilesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NetworkProfileRetrieveNetworkProfilesResponse> {
    return this._client.get('/iaas/api/network-profiles', { query, ...options });
  }
}

/**
 * Represents a network Profile. **HATEOAS** links: **fabric-networks** -
 * array[FabricNetwork] - Fabric networks defined in this profile.
 * **security-groups** - array[SecurityGroup] - List of security groups for this
 * profile. **network-domains** - array[NetworkDomain] - List of network domains
 * for this profile. **isolated-external-fabric-networks** - array[FabricNetwork] -
 * Isolated external fabric networks in this profile. **self** - NetowrkProfile -
 * Self link to this network profile
 */
export interface NetworkProfile {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: NetworkProfile._Links;

  /**
   * Id of the cloud account this profile belongs to.
   */
  cloudAccountId?: string;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * Additional properties that may be used to extend the Network Profile object that
   * is produced from this specification. For isolationType security group,
   * datastoreId identifies the Compute Resource Edge datastore. computeCluster and
   * resourcePoolId identify the Compute Resource Edge cluster. For isolationType
   * subnet, distributedLogicalRouterStateLink identifies the on-demand network
   * distributed local router (NSX-V only). For isolationType subnet,
   * tier0LogicalRouterStateLink identifies the on-demand network tier-0 logical
   * router (NSX-T only). onDemandNetworkIPAssignmentType identifies the on-demand
   * network IP range assignment type static, dynamic, or mixed.
   */
  customProperties?: { [key: string]: string };

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * The id of the region for which this profile is defined
   */
  externalRegionId?: string;

  /**
   * The CIDR prefix length to be used for the isolated networks that are created
   * with the network profile.
   */
  isolatedNetworkCIDRPrefix?: number;

  /**
   * CIDR of the isolation network domain.
   */
  isolationNetworkDomainCIDR?: string;

  /**
   * Specifies the isolation type e.g. none, subnet or security group
   */
  isolationType?: 'NONE' | 'SUBNET' | 'SECURITY_GROUP';

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
   * A set of tag keys and optional values that were set on this Network Profile.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace NetworkProfile {
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

export interface NetworkProfileSpecification {
  /**
   * A human-friendly name used as an identifier in APIs that support this option.
   */
  name: string;

  /**
   * The Id of the region for which this profile is created
   */
  regionId: string;

  /**
   * Additional properties that may be used to extend the Network Profile object that
   * is produced from this specification. For isolationType security group,
   * datastoreId identifies the Compute Resource Edge datastore. computeCluster and
   * resourcePoolId identify the Compute Resource Edge cluster. For isolationType
   * subnet, distributedLogicalRouterStateLink identifies the on-demand network
   * distributed local router (NSX-V only). For isolationType subnet,
   * tier0LogicalRouterStateLink identifies the on-demand network tier-0 logical
   * router (NSX-T only). onDemandNetworkIPAssignmentType identifies the on-demand
   * network IP range assignment type static, dynamic, or mixed.
   */
  customProperties?: { [key: string]: string };

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * List of external IP blocks coming from an external IPAM provider that can be
   * used to create subnetworks inside them
   */
  externalIpBlockIds?: Array<string>;

  /**
   * A list of fabric network Ids which are assigned to the network profile.
   */
  fabricNetworkIds?: Array<string>;

  /**
   * The CIDR prefix length to be used for the isolated networks that are created
   * with the network profile.
   */
  isolatedNetworkCIDRPrefix?: number;

  /**
   * The Id of the fabric network used for outbound access.
   */
  isolationExternalFabricNetworkId?: string;

  /**
   * CIDR of the isolation network domain.
   */
  isolationNetworkDomainCIDR?: string;

  /**
   * The Id of the network domain used for creating isolated networks.
   */
  isolationNetworkDomainId?: string;

  /**
   * Specifies the isolation type e.g. none, subnet or security group
   */
  isolationType?: 'NONE' | 'SUBNET' | 'SECURITY_GROUP';

  /**
   * A list of load balancers which are assigned to the network profile.
   */
  loadBalancerIds?: Array<string>;

  /**
   * A list of security group Ids which are assigned to the network profile.
   */
  securityGroupIds?: Array<string>;

  /**
   * A set of tag keys and optional values that should be set on any resource that is
   * produced from this specification.
   */
  tags?: Array<TagsAPI.Tag>;
}

/**
 * State object representing a query result of network profiles.
 */
export interface NetworkProfileRetrieveNetworkProfilesResponse {
  /**
   * List of content items
   */
  content?: Array<NetworkProfile>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface NetworkProfileRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface NetworkProfileUpdateParams {
  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: The Id of the region for which this profile is created
   */
  regionId: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: Additional properties that may be used to extend the Network Profile
   * object that is produced from this specification. For isolationType security
   * group, datastoreId identifies the Compute Resource Edge datastore.
   * computeCluster and resourcePoolId identify the Compute Resource Edge cluster.
   * For isolationType subnet, distributedLogicalRouterStateLink identifies the
   * on-demand network distributed local router (NSX-V only). For isolationType
   * subnet, tier0LogicalRouterStateLink identifies the on-demand network tier-0
   * logical router (NSX-T only). onDemandNetworkIPAssignmentType identifies the
   * on-demand network IP range assignment type static, dynamic, or mixed.
   */
  customProperties?: { [key: string]: string };

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: List of external IP blocks coming from an external IPAM provider
   * that can be used to create subnetworks inside them
   */
  externalIpBlockIds?: Array<string>;

  /**
   * Body param: A list of fabric network Ids which are assigned to the network
   * profile.
   */
  fabricNetworkIds?: Array<string>;

  /**
   * Body param: The CIDR prefix length to be used for the isolated networks that are
   * created with the network profile.
   */
  isolatedNetworkCIDRPrefix?: number;

  /**
   * Body param: The Id of the fabric network used for outbound access.
   */
  isolationExternalFabricNetworkId?: string;

  /**
   * Body param: CIDR of the isolation network domain.
   */
  isolationNetworkDomainCIDR?: string;

  /**
   * Body param: The Id of the network domain used for creating isolated networks.
   */
  isolationNetworkDomainId?: string;

  /**
   * Body param: Specifies the isolation type e.g. none, subnet or security group
   */
  isolationType?: 'NONE' | 'SUBNET' | 'SECURITY_GROUP';

  /**
   * Body param: A list of load balancers which are assigned to the network profile.
   */
  loadBalancerIds?: Array<string>;

  /**
   * Body param: A list of security group Ids which are assigned to the network
   * profile.
   */
  securityGroupIds?: Array<string>;

  /**
   * Body param: A set of tag keys and optional values that should be set on any
   * resource that is produced from this specification.
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface NetworkProfileDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface NetworkProfileNetworkProfilesParams {
  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Body param: The Id of the region for which this profile is created
   */
  regionId: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: Additional properties that may be used to extend the Network Profile
   * object that is produced from this specification. For isolationType security
   * group, datastoreId identifies the Compute Resource Edge datastore.
   * computeCluster and resourcePoolId identify the Compute Resource Edge cluster.
   * For isolationType subnet, distributedLogicalRouterStateLink identifies the
   * on-demand network distributed local router (NSX-V only). For isolationType
   * subnet, tier0LogicalRouterStateLink identifies the on-demand network tier-0
   * logical router (NSX-T only). onDemandNetworkIPAssignmentType identifies the
   * on-demand network IP range assignment type static, dynamic, or mixed.
   */
  customProperties?: { [key: string]: string };

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: List of external IP blocks coming from an external IPAM provider
   * that can be used to create subnetworks inside them
   */
  externalIpBlockIds?: Array<string>;

  /**
   * Body param: A list of fabric network Ids which are assigned to the network
   * profile.
   */
  fabricNetworkIds?: Array<string>;

  /**
   * Body param: The CIDR prefix length to be used for the isolated networks that are
   * created with the network profile.
   */
  isolatedNetworkCIDRPrefix?: number;

  /**
   * Body param: The Id of the fabric network used for outbound access.
   */
  isolationExternalFabricNetworkId?: string;

  /**
   * Body param: CIDR of the isolation network domain.
   */
  isolationNetworkDomainCIDR?: string;

  /**
   * Body param: The Id of the network domain used for creating isolated networks.
   */
  isolationNetworkDomainId?: string;

  /**
   * Body param: Specifies the isolation type e.g. none, subnet or security group
   */
  isolationType?: 'NONE' | 'SUBNET' | 'SECURITY_GROUP';

  /**
   * Body param: A list of load balancers which are assigned to the network profile.
   */
  loadBalancerIds?: Array<string>;

  /**
   * Body param: A list of security group Ids which are assigned to the network
   * profile.
   */
  securityGroupIds?: Array<string>;

  /**
   * Body param: A set of tag keys and optional values that should be set on any
   * resource that is produced from this specification.
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface NetworkProfileRetrieveNetworkProfilesParams {
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

  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export declare namespace NetworkProfiles {
  export {
    type NetworkProfile as NetworkProfile,
    type NetworkProfileSpecification as NetworkProfileSpecification,
    type NetworkProfileRetrieveNetworkProfilesResponse as NetworkProfileRetrieveNetworkProfilesResponse,
    type NetworkProfileRetrieveParams as NetworkProfileRetrieveParams,
    type NetworkProfileUpdateParams as NetworkProfileUpdateParams,
    type NetworkProfileDeleteParams as NetworkProfileDeleteParams,
    type NetworkProfileNetworkProfilesParams as NetworkProfileNetworkProfilesParams,
    type NetworkProfileRetrieveNetworkProfilesParams as NetworkProfileRetrieveNetworkProfilesParams,
  };
}
