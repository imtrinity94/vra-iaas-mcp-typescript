// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TagsAPI from '../tags';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class NetworkInterfaces extends APIResource {
  /**
   * Get network interface with a given id for specific machine
   *
   * @example
   * ```ts
   * const networkInterface =
   *   await client.iaas.api.machines.networkInterfaces.retrieve(
   *     'networkId',
   *     { id: 'id' },
   *   );
   * ```
   */
  retrieve(
    networkID: string,
    params: NetworkInterfaceRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<NetworkInterface> {
    const { id, ...query } = params;
    return this._client.get(path`/iaas/api/machines/${id}/network-interfaces/${networkID}`, {
      query,
      ...options,
    });
  }

  /**
   * Patch network interface with a given id for specific machine. Only name,
   * description, IPv4 address and custom property updates are supported. The change
   * to name and IPv4 address will not propagate to cloud endpoint for provisioned
   * machines.
   *
   * @example
   * ```ts
   * const networkInterface =
   *   await client.iaas.api.machines.networkInterfaces.update(
   *     'networkId',
   *     { id: 'id', apiVersion: 'apiVersion' },
   *   );
   * ```
   */
  update(
    networkID: string,
    params: NetworkInterfaceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<NetworkInterface> {
    const { id, apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/machines/${id}/network-interfaces/${networkID}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }
}

/**
 * Represents a network interface. **HATEOAS** links: **cloud-accounts** -
 * array[CloudAccount] - List of cloud accounts where this network domain exists.
 * **security-groups** - array[SecurityGroup] - List of security groups for this
 * network interface. **self** - NetworkInterface - Self link to this network
 * interface
 */
export interface NetworkInterface {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: NetworkInterface._Links;

  /**
   * The external regionId of the network interface.
   */
  externalRegionId: string;

  /**
   * A list of IP addresses allocated or in use by this network interface.
   */
  addresses?: Array<string>;

  /**
   * Set of ids of the cloud accounts this entity belongs to.
   */
  cloudAccountIds?: Array<string>;

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
   * The device index of this network interface.
   */
  deviceIndex?: number;

  /**
   * External entity Id on the provider side.
   */
  externalId?: string;

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
   * A list of security group ids this network interface is associated with
   */
  securityGroupIds?: Array<string>;

  /**
   * A set of tag keys and optional values that were set on this network interface.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace NetworkInterface {
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

export interface NetworkInterfaceRetrieveParams {
  /**
   * Path param: The ID of the machine.
   */
  id: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface NetworkInterfaceUpdateParams {
  /**
   * Path param: The ID of the machine.
   */
  id: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param: Set IPv4 address for the machine network interface. The change will
   * not propagate to cloud endpoint for provisioned machines.
   */
  address?: string;

  /**
   * Body param: Additional custom properties that may be used to extend the machine.
   * Internal custom properties (for example, prefixed with: "\_\_") can not be
   * updated.
   */
  customProperties?: { [key: string]: string };

  /**
   * Body param: Describes the network interface of the machine within the scope of
   * your organization and is not propagated to the cloud
   */
  description?: string;

  /**
   * Body param: Network interface name used during machine network interface
   * provisioning. This property only takes effect if it is set before machine
   * provisioning starts. The change will not propagate to cloud endpoint for
   * provisioned machines.
   */
  name?: string;
}

export declare namespace NetworkInterfaces {
  export {
    type NetworkInterface as NetworkInterface,
    type NetworkInterfaceRetrieveParams as NetworkInterfaceRetrieveParams,
    type NetworkInterfaceUpdateParams as NetworkInterfaceUpdateParams,
  };
}
