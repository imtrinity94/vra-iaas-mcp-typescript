// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ZonesAPI from '../projects/zones';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Operations extends APIResource {
  /**
   * Second day revert snapshot operation for machine
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.machines.operations.update(
   *     'snapshotId',
   *     { id: 'id', apiVersion: 'apiVersion' },
   *   );
   * ```
   */
  update(
    snapshotID: string,
    params: OperationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { id, apiVersion } = params;
    return this._client.post(path`/iaas/api/machines/${id}/operations/revert/${snapshotID}`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Change security groups for a vSphere machine network interfaces. Securing group
   * that is part of the same deployment can be added or removed for a machine
   * network interface.
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.machines.operations.changeSecurityGroups(
   *     'id',
   *     {
   *       body_id: '9.0E49',
   *       _links: {},
   *     },
   *   );
   * ```
   */
  changeSecurityGroups(
    pathID: string,
    params: OperationChangeSecurityGroupsParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post(path`/iaas/api/machines/${pathID}/operations/change-security-groups`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Second day power-off operation for machine
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.machines.operations.powerOff('id');
   * ```
   */
  powerOff(
    id: string,
    params: OperationPowerOffParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params ?? {};
    return this._client.post(path`/iaas/api/machines/${id}/operations/power-off`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Second day power-on operation for machine
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.machines.operations.powerOn('id');
   * ```
   */
  powerOn(
    id: string,
    params: OperationPowerOnParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params ?? {};
    return this._client.post(path`/iaas/api/machines/${id}/operations/power-on`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Second day reboot operation for machine
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.machines.operations.reboot('id');
   * ```
   */
  reboot(
    id: string,
    params: OperationRebootParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params ?? {};
    return this._client.post(path`/iaas/api/machines/${id}/operations/reboot`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Second day reset operation for machine
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.machines.operations.reset('id');
   * ```
   */
  reset(
    id: string,
    params: OperationResetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params ?? {};
    return this._client.post(path`/iaas/api/machines/${id}/operations/reset`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Second day resize operation for machine
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.machines.operations.resize('id');
   * ```
   */
  resize(
    id: string,
    params: OperationResizeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, coreCount, cpuCount, flavorName, memoryInMB, rebootMachine } = params ?? {};
    return this._client.post(path`/iaas/api/machines/${id}/operations/resize`, {
      query: { apiVersion, coreCount, cpuCount, flavorName, memoryInMB, rebootMachine },
      ...options,
    });
  }

  /**
   * Second day restart operation for machine
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.machines.operations.restart('id');
   * ```
   */
  restart(
    id: string,
    params: OperationRestartParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params ?? {};
    return this._client.post(path`/iaas/api/machines/${id}/operations/restart`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Second day shut down operation machine
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.machines.operations.shutdown('id');
   * ```
   */
  shutdown(
    id: string,
    params: OperationShutdownParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params ?? {};
    return this._client.post(path`/iaas/api/machines/${id}/operations/shutdown`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Second day create snapshot operation for machine
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.machines.operations.snapshots(
   *     'id',
   *     {
   *       body_id: '9.0E49',
   *       _links: {},
   *     },
   *   );
   * ```
   */
  snapshots(
    pathID: string,
    params: OperationSnapshotsParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post(path`/iaas/api/machines/${pathID}/operations/snapshots`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Second day suspend operation for machine
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.machines.operations.suspend('id');
   * ```
   */
  suspend(
    id: string,
    params: OperationSuspendParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params ?? {};
    return this._client.post(path`/iaas/api/machines/${id}/operations/suspend`, {
      query: { apiVersion },
      ...options,
    });
  }

  /**
   * Unregister a vSphere provisioned machine
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.machines.operations.unregister(
   *     'id',
   *   );
   * ```
   */
  unregister(
    id: string,
    params: OperationUnregisterParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion } = params ?? {};
    return this._client.post(path`/iaas/api/machines/${id}/operations/unregister`, {
      query: { apiVersion },
      ...options,
    });
  }
}

/**
 * Specification for attaching nic to machine
 */
export interface NetworkInterfaceSpecification {
  /**
   * A list of IP addresses allocated or in use by this network interface.
   */
  addresses?: Array<string>;

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
   * Id of the fabric network for the network interface. Either networkId or
   * fabricNetworkId can be specified, not both.
   */
  fabricNetworkId?: string;

  /**
   * MAC address of the network interface.
   */
  macAddress?: string;

  /**
   * A human-friendly name used as an identifier in APIs that support this option.
   */
  name?: string;

  /**
   * Id of the network for the network interface. Either networkId or fabricNetworkId
   * can be specified, not both.
   */
  networkId?: string;

  /**
   * A list of security group ids which this network interface will be assigned to.
   */
  securityGroupIds?: Array<string>;
}

export interface OperationUpdateParams {
  /**
   * Path param: The id of the Machine.
   */
  id: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;
}

export interface OperationChangeSecurityGroupsParams {
  /**
   * Body param: The id of this resource instance
   */
  body_id: string;

  /**
   * Body param: HATEOAS of the entity
   */
  _links: OperationChangeSecurityGroupsParams._Links;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name?: string;

  /**
   * Body param: A set of network interface controller specifications for this
   * machine. If not specified, then no reconfiguration will be performed.
   */
  networkInterfaceSpecifications?: Array<NetworkInterfaceSpecification>;

  /**
   * Body param: The id of the organization this entity belongs to.
   */
  orgId?: string;

  /**
   * Body param: Email of the user or display name of the group that owns the entity.
   */
  owner?: string;

  /**
   * Body param: Type of a owner(user/ad_group) that owns the entity.
   */
  ownerType?: string;

  /**
   * Body param: Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace OperationChangeSecurityGroupsParams {
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
}

export interface OperationPowerOffParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface OperationPowerOnParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface OperationRebootParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface OperationResetParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface OperationResizeParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * The desired number of cores per socket to resize the Machine
   */
  coreCount?: string;

  /**
   * The desired number of CPUs to resize the
   */
  cpuCount?: string;

  /**
   * The desired flavor to resize the Machine.
   */
  flavorName?: string;

  /**
   * The desired memory in MBs to resize the Machine
   */
  memoryInMB?: string;

  /**
   * Only applicable for vSphere VMs with the CPU Hot Add or Memory Hot Plug options
   * enabled. If set to false, VM is resized without reboot.
   */
  rebootMachine?: boolean;
}

export interface OperationRestartParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface OperationShutdownParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface OperationSnapshotsParams {
  /**
   * Body param: The id of this resource instance
   */
  body_id: string;

  /**
   * Body param: HATEOAS of the entity
   */
  _links: OperationSnapshotsParams._Links;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * Body param: Additional custom properties that may be used to extend the
   * snapshot.
   */
  customProperties?: { [key: string]: string };

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name?: string;

  /**
   * Body param: The id of the organization this entity belongs to.
   */
  orgId?: string;

  /**
   * Body param: Email of the user or display name of the group that owns the entity.
   */
  owner?: string;

  /**
   * Body param: Type of a owner(user/ad_group) that owns the entity.
   */
  ownerType?: string;

  /**
   * Body param: Captures the full state of a running virtual machine, including the
   * memory.
   */
  snapshotMemory?: boolean;

  /**
   * Body param: Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace OperationSnapshotsParams {
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
}

export interface OperationSuspendParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface OperationUnregisterParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export declare namespace Operations {
  export {
    type NetworkInterfaceSpecification as NetworkInterfaceSpecification,
    type OperationUpdateParams as OperationUpdateParams,
    type OperationChangeSecurityGroupsParams as OperationChangeSecurityGroupsParams,
    type OperationPowerOffParams as OperationPowerOffParams,
    type OperationPowerOnParams as OperationPowerOnParams,
    type OperationRebootParams as OperationRebootParams,
    type OperationResetParams as OperationResetParams,
    type OperationResizeParams as OperationResizeParams,
    type OperationRestartParams as OperationRestartParams,
    type OperationShutdownParams as OperationShutdownParams,
    type OperationSnapshotsParams as OperationSnapshotsParams,
    type OperationSuspendParams as OperationSuspendParams,
    type OperationUnregisterParams as OperationUnregisterParams,
  };
}
