// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TagsAPI from './tags';
import * as ZonesAPI from './zones';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class FabricComputes extends APIResource {
  /**
   * Get fabric compute with a given id
   *
   * @example
   * ```ts
   * const fabricCompute =
   *   await client.iaas.api.fabricComputes.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: FabricComputeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FabricCompute> {
    return this._client.get(path`/iaas/api/fabric-computes/${id}`, { query, ...options });
  }

  /**
   * Update fabric compute. Only tag updates are supported.
   *
   * @example
   * ```ts
   * const fabricCompute =
   *   await client.iaas.api.fabricComputes.update('id');
   * ```
   */
  update(id: string, params: FabricComputeUpdateParams, options?: RequestOptions): APIPromise<FabricCompute> {
    const { apiVersion, ...body } = params;
    return this._client.patch(path`/iaas/api/fabric-computes/${id}`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }

  /**
   * Get all fabric computes.
   *
   * @example
   * ```ts
   * const fabricComputeResult =
   *   await client.iaas.api.fabricComputes.retrieveFabricComputes();
   * ```
   */
  retrieveFabricComputes(
    query: FabricComputeRetrieveFabricComputesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.FabricComputeResult> {
    return this._client.get('/iaas/api/fabric-computes', { query, ...options });
  }
}

/**
 * Represents a compute which is an entity on the cloud provider side that can be
 * used to provision resources in. It could be an availability zone in a public
 * cloud, cluster, host or resource pool in vSphere
 */
export interface FabricCompute {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * The external regionId of the compute
   */
  externalRegionId: string;

  /**
   * HATEOAS of the entity
   */
  _links?: FabricCompute._Links;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * Custom properties of the compute instance
   */
  customProperties?: { [key: string]: string };

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * External entity Id on the provider side.
   */
  externalId?: string;

  /**
   * The external zoneId of the compute.
   */
  externalZoneId?: string;

  /**
   * Lifecycle status of the compute instance
   */
  lifecycleState?: string;

  /**
   * What percent of the total available vCPU on the compute will be used for VM
   * provisioning. This value can be more than 100. e.g. If the compute has 100 vCPUs
   * and this value is set to 80, then VMware Aria Automation will act as if this
   * compute has only 80 vCPUs. If it is 120, then VMware Aria Automation will act as
   * if this compute has 120 vCPUs thus allowing 20 vCPU overallocation. Applies only
   * for private cloud computes.
   */
  maximumAllowedCpuAllocationPercent?: number;

  /**
   * What percent of the total available memory on the compute will be used for VM
   * provisioning. This value can be more than 100. e.g. If the compute has 100gb of
   * memory and this value is set to 80, then VMware Aria Automation will act as if
   * this compute has only 80gb. If it is 120, then VMware Aria Automation will act
   * as if this compute has 120gb thus allowing 20gb overallocation. Applies only for
   * private cloud computes.
   */
  maximumAllowedMemoryAllocationPercent?: number;

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
   * Power state of compute instance
   */
  powerState?: string;

  /**
   * A set of tag keys and optional values that were set on this resource instance.
   */
  tags?: Array<TagsAPI.Tag>;

  /**
   * Type of the compute instance
   */
  type?: string;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace FabricCompute {
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

export interface FabricComputeRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface FabricComputeUpdateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Body param: What percent of the total available vcPu on the compute will be used
   * for VM provisioning.This value can be more than 100. e.g. If the compute has 100
   * vCPUs and this value is set to80, then VMware Aria Automation will act as if
   * this compute has only 80 vCPUs. If it is 120, then VMware Aria Automation will
   * act as if this compute has 120 vCPUs thus allowing 20 vCPUs overallocation.
   * Applies only for private cloud computes.
   */
  maximumAllowedCpuAllocationPercent?: number;

  /**
   * Body param: What percent of the total available memory on the compute will be
   * used for VM provisioning.This value can be more than 100. e.g. If the compute
   * has 100gb of memory and this value is set to80, then VMware Aria Automation will
   * act as if this compute has only 80gb. If it is 120, then VMware Aria Automation
   * will act as if this compute has 120gb thus allowing 20gb overallocation. Applies
   * only for private cloud computes.
   */
  maximumAllowedMemoryAllocationPercent?: number;

  /**
   * Body param: A set of tag keys and optional values that were set on this resource
   * instance.
   */
  tags?: Array<TagsAPI.Tag>;
}

export interface FabricComputeRetrieveFabricComputesParams {
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

export declare namespace FabricComputes {
  export {
    type FabricCompute as FabricCompute,
    type FabricComputeRetrieveParams as FabricComputeRetrieveParams,
    type FabricComputeUpdateParams as FabricComputeUpdateParams,
    type FabricComputeRetrieveFabricComputesParams as FabricComputeRetrieveFabricComputesParams,
  };
}
