// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as NetworksAPI from '../networks';
import * as TagsAPI from '../tags';
import * as OperationsAPI from './operations';
import {
  OperationPromoteParams,
  OperationRevertParams,
  OperationSnapshotsParams,
  Operations,
} from './operations';
import * as SnapshotsAPI from './snapshots';
import {
  DiskSnapshot,
  SnapshotDeleteParams,
  SnapshotListParams,
  SnapshotRetrieveParams,
  Snapshots,
} from './snapshots';
import * as DisksAPI from '../machines/disks';
import * as ZonesAPI from '../projects/zones';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BlockDevices extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);

  /**
   * Get a single BlockDevice
   *
   * @example
   * ```ts
   * const blockDevice =
   *   await client.iaas.api.blockDevices.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: BlockDeviceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlockDevice> {
    return this._client.get(path`/iaas/api/block-devices/${id}`, { query, ...options });
  }

  /**
   * Resize operation on block device.
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.blockDevices.update('id', {
   *     capacityInGB: 0,
   *   });
   * ```
   */
  update(
    id: string,
    params: BlockDeviceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { capacityInGB, apiVersion, useSdrs } = params;
    return this._client.post(path`/iaas/api/block-devices/${id}`, {
      query: { capacityInGB, apiVersion, useSdrs },
      ...options,
    });
  }

  /**
   * Delete a BlockDevice
   *
   * 1. A block device cannot be deleted when attached to a machine.
   *
   * 2. A block device with persistent property set to 'false' is deleted.
   *
   * 3. A block device with persistent property set to 'true' needs an additional
   *    parameter 'purge' to be set to true, for deletion.
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.blockDevices.delete('id');
   * ```
   */
  delete(
    id: string,
    params: BlockDeviceDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, forceDelete, purge } = params ?? {};
    return this._client.delete(path`/iaas/api/block-devices/${id}`, {
      query: { apiVersion, forceDelete, purge },
      ...options,
    });
  }

  /**
   * Following disk custom properties can be passed while creating a block device:
   *
   *     1. dataStore: Defines name of the datastore in which the disk has to be provisioned.
   *
   *     2. storagePolicy: Defines name of the storage policy in which the disk has to be provisioned. If name of the datastore is specified in the custom properties then, datastore takes precedence.
   *
   *     3. provisioningType: Defines the type of provisioning. For eg. thick/thin.
   *
   *     4. resourceGroupName: Defines the Azure resource group name where the disk needs to be provisioned.
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.blockDevices.blockDevices({
   *     capacityInGB: 78,
   *     name: 'name',
   *     projectId: 'e058',
   *   });
   * ```
   */
  blockDevices(
    params: BlockDeviceBlockDevicesParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/block-devices', { query: { apiVersion }, body, ...options });
  }

  /**
   * Get all BlockDevices
   *
   * @example
   * ```ts
   * const blockDeviceResult =
   *   await client.iaas.api.blockDevices.retrieveBlockDevices();
   * ```
   */
  retrieveBlockDevices(
    query: BlockDeviceRetrieveBlockDevicesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DisksAPI.BlockDeviceResult> {
    return this._client.get('/iaas/api/block-devices', { query, ...options });
  }
}

/**
 * State object representing a block device. **HATEOAS** links:
 * **cloud-accounts** - array[CloudAccount] - Cloud accounts where this disk is
 * provisioned. **self** - BlockDevice - Self link to this block device
 */
export interface BlockDevice {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: BlockDevice._Links;

  /**
   * Capacity of the block device in GB.
   */
  capacityInGB: number;

  /**
   * The external regionId of the resource.
   */
  externalRegionId: string;

  /**
   * Status of the block device
   */
  status: 'DETACHED' | 'ATTACHED' | 'AVAILABLE';

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
   * Indicates whether the block device survives a delete action.
   */
  persistent?: boolean;

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
   * Type of the block device
   */
  type?: 'SSD' | 'HDD' | 'CDROM' | 'FLOPPY';

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace BlockDevice {
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

export interface BlockDeviceRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface BlockDeviceUpdateParams {
  /**
   * Resize Capacity in GB
   */
  capacityInGB: number;

  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Only applicable for vSphere block-devices deployed on SDRS cluster. If set to
   * true, SDRS Recommendation will be used for resize operation.
   */
  useSdrs?: boolean;
}

export interface BlockDeviceDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Controls whether this is a force delete operation. If true, best effort is made
   * for deleting this block device. Use with caution as force deleting may cause
   * inconsistencies between the cloud provider and VMware Aria Automation.
   */
  forceDelete?: boolean;

  /**
   * Controls whether this is a force delete operation. If true, best effort is made
   * for deleting this block device. Use with caution as force deleting may cause
   * inconsistencies between the cloud provider and VMware Aria Automation.
   */
  purge?: boolean;
}

export interface BlockDeviceBlockDevicesParams {
  /**
   * Body param: Capacity of the block device in GB.
   */
  capacityInGB: number;

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
   * Body param: Constraints that are used to drive placement policies for the block
   * device that is produced from this specification. Constraint expressions are
   * matched against tags on existing placement targets.
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
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: Content of a disk, base64 encoded.
   */
  diskContentBase64?: string;

  /**
   * Body param: Indicates whether the block device should be encrypted or not.
   */
  encrypted?: boolean;

  /**
   * Body param: Indicates whether the block device survives a delete action.
   */
  persistent?: boolean;

  /**
   * Body param: Reference to URI using which the block device has to be created.
   */
  sourceReference?: string;

  /**
   * Body param: A set of tag keys and optional values that should be set on any
   * resource that is produced from this specification.
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface BlockDeviceRetrieveBlockDevicesParams {
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

BlockDevices.Operations = Operations;
BlockDevices.Snapshots = Snapshots;

export declare namespace BlockDevices {
  export {
    type BlockDevice as BlockDevice,
    type BlockDeviceRetrieveParams as BlockDeviceRetrieveParams,
    type BlockDeviceUpdateParams as BlockDeviceUpdateParams,
    type BlockDeviceDeleteParams as BlockDeviceDeleteParams,
    type BlockDeviceBlockDevicesParams as BlockDeviceBlockDevicesParams,
    type BlockDeviceRetrieveBlockDevicesParams as BlockDeviceRetrieveBlockDevicesParams,
  };

  export {
    Operations as Operations,
    type OperationPromoteParams as OperationPromoteParams,
    type OperationRevertParams as OperationRevertParams,
    type OperationSnapshotsParams as OperationSnapshotsParams,
  };

  export {
    Snapshots as Snapshots,
    type DiskSnapshot as DiskSnapshot,
    type SnapshotRetrieveParams as SnapshotRetrieveParams,
    type SnapshotListParams as SnapshotListParams,
    type SnapshotDeleteParams as SnapshotDeleteParams,
  };
}
