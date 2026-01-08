// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as NetworksAPI from '../networks';
import * as TagsAPI from '../tags';
import * as DisksAPI from './disks';
import {
  BlockDeviceResult,
  DiskAttachmentSpecification,
  DiskCreateParams,
  DiskDeleteParams,
  DiskListParams,
  DiskRetrieveParams,
  Disks,
} from './disks';
import * as NetworkInterfacesAPI from './network-interfaces';
import {
  NetworkInterface,
  NetworkInterfaceRetrieveParams,
  NetworkInterfaceUpdateParams,
  NetworkInterfaces,
} from './network-interfaces';
import * as OperationsAPI from './operations';
import {
  NetworkInterfaceSpecification,
  OperationChangeSecurityGroupsParams,
  OperationPowerOffParams,
  OperationPowerOnParams,
  OperationRebootParams,
  OperationResetParams,
  OperationResizeParams,
  OperationRestartParams,
  OperationShutdownParams,
  OperationSnapshotsParams,
  OperationSuspendParams,
  OperationUnregisterParams,
  OperationUpdateParams,
  Operations,
} from './operations';
import * as SnapshotsAPI from './snapshots';
import {
  Snapshot,
  SnapshotDeleteParams,
  SnapshotListParams,
  SnapshotRetrieveParams,
  Snapshots,
} from './snapshots';
import * as ZonesAPI from '../projects/zones';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Machines extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);
  disks: DisksAPI.Disks = new DisksAPI.Disks(this._client);
  networkInterfaces: NetworkInterfacesAPI.NetworkInterfaces = new NetworkInterfacesAPI.NetworkInterfaces(
    this._client,
  );
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);

  /**
   * Create machine
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.machines.create({
   *     flavor: 'small, medium, large',
   *     flavorRef: 't2.micro',
   *     image:
   *       'vmware-gold-master, ubuntu-latest, rhel-compliant, windows',
   *     imageRef: 'ami-f6795a8c',
   *     name: 'name',
   *     projectId: 'e058',
   *   });
   * ```
   */
  create(params: MachineCreateParams, options?: RequestOptions): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/machines', { query: { apiVersion }, body, ...options });
  }

  /**
   * Get machine with a given id
   *
   * @example
   * ```ts
   * const machine = await client.iaas.api.machines.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: MachineRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Machine> {
    return this._client.get(path`/iaas/api/machines/${id}`, { query, ...options });
  }

  /**
   * Update machine. Only description, tag, custom property and bootConfig updates
   * are supported. Please note that all existing tags, assigned to this machine,
   * that are not implicitly added in the Patch body, will be unassigned from this
   * machine!All other properties in the MachineSpecification body are ignored.
   *
   * @example
   * ```ts
   * const machine = await client.iaas.api.machines.update('id');
   * ```
   */
  update(id: string, params: MachineUpdateParams, options?: RequestOptions): APIPromise<Machine> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/machines/${id}`, { query: { apiVersion }, body, ...options });
  }

  /**
   * Get all machines
   *
   * @example
   * ```ts
   * const machines = await client.iaas.api.machines.list();
   * ```
   */
  list(
    query: MachineListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MachineListResponse> {
    return this._client.get('/iaas/api/machines', { query, ...options });
  }

  /**
   * Delete Machine with a given id
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.machines.delete('id');
   * ```
   */
  delete(
    id: string,
    params: MachineDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, forceDelete } = params ?? {};
    return this._client.delete(path`/iaas/api/machines/${id}`, {
      query: { apiVersion, forceDelete },
      ...options,
    });
  }
}

/**
 * Represents a cloud agnostic machine. **HATEOAS** links: **operations** -
 * array[String] - Supported operations for the machine. **network-interfaces** -
 * array[NetworkInterface] - Network interfaces for the machine. **disks** -
 * array[MachineDisk] - disks for the machine. **deployment** - Deployment -
 * Deployment that this machine is part of. **cloud-accounts** -
 * array[CloudAccount] - Cloud accounts where this machine is provisioned.
 * **self** - Machine - Self link to this machine
 */
export interface Machine {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: Machine._Links;

  /**
   * The external regionId of the resource.
   */
  externalRegionId: string;

  /**
   * Power state of machine.
   */
  powerState: 'ON' | 'OFF' | 'GUEST_OFF' | 'UNKNOWN' | 'SUSPEND';

  /**
   * Primary address allocated or in use by this machine. The actual type of the
   * address depends on the adapter type. Typically it is either the public or the
   * external IP address.
   */
  address?: string;

  /**
   * Machine boot config that will be passed to the instance that can be used to
   * perform common automated configuration tasks and even run scripts after the
   * instance starts.
   */
  bootConfig?: MachineBootConfig;

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
   * Hostname associated with this machine instance.
   */
  hostname?: string;

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
   * Represents salt configuration settings that has to be applied on the machine. To
   * successfully apply the configurations, remoteAccess property is mandatory.The
   * supported remoteAccess authentication types are usernamePassword and
   * generatedPublicPrivateKey
   */
  saltConfiguration?: SaltConfiguration;

  /**
   * A set of tag keys and optional values that were set on this resource.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace Machine {
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
 * Machine boot config that will be passed to the instance that can be used to
 * perform common automated configuration tasks and even run scripts after the
 * instance starts.
 */
export interface MachineBootConfig {
  /**
   * A valid cloud config data in json-escaped yaml syntax
   */
  content?: string;
}

/**
 * Represents salt configuration settings that has to be applied on the machine. To
 * successfully apply the configurations, remoteAccess property is mandatory.The
 * supported remoteAccess authentication types are usernamePassword and
 * generatedPublicPrivateKey
 */
export interface SaltConfiguration {
  /**
   * Additional auth params that can be passed in for provisioning the salt minion.
   * Refer: https://docs.saltproject.io/en/master/topics/cloud/profiles.html
   */
  additionalAuthParams?: { [key: string]: string };

  /**
   * Additional configuration parameters for the salt minion, to be passed in as
   * dictionary. Refer:
   * https://docs.saltproject.io/en/latest/ref/configuration/minion.html
   */
  additionalMinionParams?: { [key: string]: string };

  /**
   * Salt minion installer file name on the master. This property is currently not
   * being used by any SaltStack operation.
   */
  installerFileName?: string;

  /**
   * Salt master id to which the Salt minion will be connected to.
   */
  masterId?: string;

  /**
   * Salt minion ID to be assigned to the deployed minion.
   */
  minionId?: string;

  /**
   * Pillar environment to use when running state files. Refer:
   * https://docs.saltproject.io/en/latest/ref/modules/all/salt.modules.state.html
   */
  pillarEnvironment?: string;

  /**
   * Salt environment to use when running state files.
   */
  saltEnvironment?: string;

  /**
   * List of state files to run on the deployed minion.
   */
  stateFiles?: Array<string>;

  /**
   * Parameters required by the state file to run on the deployed minion.
   */
  variables?: { [key: string]: string };
}

/**
 * State object representing a query result of machines.
 */
export interface MachineListResponse {
  /**
   * List of content items
   */
  content?: Array<Machine>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface MachineCreateParams {
  /**
   * Body param: Flavor of machine instance.
   */
  flavor: string;

  /**
   * Body param: Provider specific flavor reference. Valid if no flavor property is
   * provided
   */
  flavorRef: string;

  /**
   * Body param: Type of image used for this machine.
   */
  image: string;

  /**
   * Body param: Direct image reference used for this machine (name, path, location,
   * uri, etc.). Valid if no image property is provided
   */
  imageRef: string;

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
   * Body param: Machine boot config that will be passed to the instance that can be
   * used to perform common automated configuration tasks and even run scripts after
   * the instance starts.
   */
  bootConfig?: MachineBootConfig;

  /**
   * Body param: Machine boot config settings that will define how the provisioning
   * will handle the boot config script execution.
   */
  bootConfigSettings?: MachineCreateParams.BootConfigSettings;

  /**
   * Body param: Constraints that are used to drive placement policies for the
   * virtual machine that is produced from this specification. Constraint expressions
   * are matched against tags on existing placement targets.
   */
  constraints?: Array<NetworksAPI.PlacementConstraint>;

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
   * Body param: Describes machine within the scope of your organization and is not
   * propagated to the cloud
   */
  description?: string;

  /**
   * Body param: A set of disk specifications for this machine.
   */
  disks?: Array<DisksAPI.DiskAttachmentSpecification>;

  /**
   * Body param: Constraints that are used to drive placement policies for the image
   * disk. Constraint expressions are matched against tags on existing placement
   * targets.
   */
  imageDiskConstraints?: Array<NetworksAPI.PlacementConstraint>;

  /**
   * Body param: Number of machines to provision - default 1.
   */
  machineCount?: number;

  /**
   * Body param: A set of network interface controller specifications for this
   * machine. If not specified, then a default network connection will be created.
   */
  nics?: Array<OperationsAPI.NetworkInterfaceSpecification>;

  /**
   * Body param: Represents a specification for machine's remote access settings.
   */
  remoteAccess?: MachineCreateParams.RemoteAccess;

  /**
   * Body param: Represents salt configuration settings that has to be applied on the
   * machine. To successfully apply the configurations, remoteAccess property is
   * mandatory.The supported remoteAccess authentication types are usernamePassword
   * and generatedPublicPrivateKey
   */
  saltConfiguration?: SaltConfiguration;

  /**
   * Body param: A set of tag keys and optional values that should be set on any
   * resource that is produced from this specification.
   */
  tags?: Array<TagsAPI.Tag>;
}

export namespace MachineCreateParams {
  /**
   * Machine boot config settings that will define how the provisioning will handle
   * the boot config script execution.
   */
  export interface BootConfigSettings {
    /**
     * In case an error is thrown while processing cloud-config whether the
     * provisioning process should fail or continue.
     */
    deploymentFailOnCloudConfigRuntimeError?: boolean;

    /**
     * In case a timeout occurs whether the provisioning process should fail or
     * continue.
     */
    phoneHomeFailOnTimeout?: boolean;

    /**
     * A phone_home module will be added to the Cloud Config and the provisioning will
     * wait on a callback prior proceeding
     */
    phoneHomeShouldWait?: boolean;

    /**
     * The period of time to wait for the phone_home module callback to occur
     */
    phoneHomeTimeoutSeconds?: number;
  }

  /**
   * Represents a specification for machine's remote access settings.
   */
  export interface RemoteAccess {
    /**
     * One of four authentication types. `generatedPublicPrivateKey`: The provisioned
     * machine generates the public/private key pair and enables SSH to use them
     * without user input. `publicPrivateKey`: The user enters the private key in the
     * SSH command. See remoteAccess.sshKey. `usernamePassword`: The user enters a
     * username and password for remote access. `keyPairName`: The user enters an
     * already existing keyPair name. See remoteAccess.keyPair
     */
    authentication: string;

    /**
     * Key Pair Name.
     */
    keyPair?: string;

    /**
     * Remote access password for the Azure machine.
     */
    password?: string;

    /**
     * Remote access Skip user creation for machine.
     */
    skipUserCreation?: boolean;

    /**
     * In key pair authentication, the public key on the provisioned machine. Users are
     * expected to log in with their private key and a default username from the cloud
     * provider. An AWS Ubuntu image comes with default user ubuntu, and Azure comes
     * with default user azureuser. To log in by SSH:
     * `ssh -i <private-key-path> ubuntu@52.90.80.153`
     * `ssh -i <private-key-path> azureuser@40.76.14.255`
     */
    sshKey?: string;

    /**
     * Remote access username for the Azure machine.
     */
    username?: string;
  }
}

export interface MachineRetrieveParams {
  /**
   * Select a subset of properties to include in the response.
   */
  $select?: string;

  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface MachineUpdateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: Machine boot config that will be passed to the instance that can be
   * used to perform common automated configuration tasks and even run scripts after
   * the instance starts.
   */
  bootConfig?: MachineBootConfig;

  /**
   * Body param: Additional custom properties that may be used to extend the machine.
   * Internal custom properties (for example, prefixed with: "\_\_") are discarded.
   */
  customProperties?: { [key: string]: string };

  /**
   * Body param: Describes machine within the scope of your organization and is not
   * propagated to the cloud
   */
  description?: string;

  /**
   * Body param: A set of tag keys and optional values that should be set on any
   * resource that is produced from this specification.
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface MachineListParams {
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

  /**
   * If set to true will not return operation links.
   */
  skipOperationLinks?: boolean;
}

export interface MachineDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Controls whether this is a force delete operation. If true, best effort is made
   * for deleting this machine. Use with caution as force deleting may cause
   * inconsistencies between the cloud provider and VMware Aria Automation.
   */
  forceDelete?: boolean;
}

Machines.Operations = Operations;
Machines.Disks = Disks;
Machines.NetworkInterfaces = NetworkInterfaces;
Machines.Snapshots = Snapshots;

export declare namespace Machines {
  export {
    type Machine as Machine,
    type MachineBootConfig as MachineBootConfig,
    type SaltConfiguration as SaltConfiguration,
    type MachineListResponse as MachineListResponse,
    type MachineCreateParams as MachineCreateParams,
    type MachineRetrieveParams as MachineRetrieveParams,
    type MachineUpdateParams as MachineUpdateParams,
    type MachineListParams as MachineListParams,
    type MachineDeleteParams as MachineDeleteParams,
  };

  export {
    Operations as Operations,
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

  export {
    Disks as Disks,
    type BlockDeviceResult as BlockDeviceResult,
    type DiskAttachmentSpecification as DiskAttachmentSpecification,
    type DiskCreateParams as DiskCreateParams,
    type DiskRetrieveParams as DiskRetrieveParams,
    type DiskListParams as DiskListParams,
    type DiskDeleteParams as DiskDeleteParams,
  };

  export {
    NetworkInterfaces as NetworkInterfaces,
    type NetworkInterface as NetworkInterface,
    type NetworkInterfaceRetrieveParams as NetworkInterfaceRetrieveParams,
    type NetworkInterfaceUpdateParams as NetworkInterfaceUpdateParams,
  };

  export {
    Snapshots as Snapshots,
    type Snapshot as Snapshot,
    type SnapshotRetrieveParams as SnapshotRetrieveParams,
    type SnapshotListParams as SnapshotListParams,
    type SnapshotDeleteParams as SnapshotDeleteParams,
  };
}
