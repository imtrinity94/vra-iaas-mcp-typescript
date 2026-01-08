// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ZonesAPI from '../projects/zones';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Operations extends APIResource {
  /**
   * Day-2 reconfigure operation for nat
   *
   * @example
   * ```ts
   * const requestTracker =
   *   await client.iaas.api.computeNats.operations.reconfigure(
   *     'id',
   *     {
   *       natRules: [
   *         {
   *           index: 0,
   *           targetLink:
   *             '/iaas/api/load-balancers/try6-45ef, /iaas/api/machines/ht54-a472/network-interfaces/dyd6-d67e',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  reconfigure(
    id: string,
    params: OperationReconfigureParams,
    options?: RequestOptions,
  ): APIPromise<ZonesAPI.RequestTracker> {
    const { apiVersion, ...body } = params;
    return this._client.post(path`/iaas/api/compute-nats/${id}/operations/reconfigure`, {
      query: { apiVersion },
      body,
      ...options,
    });
  }
}

/**
 * @deprecated NAT Rule
 */
export interface NatRule {
  /**
   * Index in which the rule must be applied
   */
  index: number;

  /**
   * A links to target load balancer or a machine's network interface where the
   * request will be forwarded.
   */
  targetLink: string;

  /**
   * Description of the NAT rule.
   */
  description?: string;

  /**
   * The external IP address of the outbound or routed network
   */
  destinationAddress?: string;

  /**
   * The edge gateway port. Default is `any`
   */
  destinationPorts?: string;

  /**
   * Kind of NAT: NAT44/NAT64/NAT66. Only NAT44 is supported currently and it is the
   * default value
   */
  kind?: string;

  /**
   * The protocol of the incoming requests. Default is TCP.
   */
  protocol?: string;

  /**
   * Unique ID of the NAT Rule
   */
  ruleId?: string;

  /**
   * The IP of the external source. Default is `any`
   */
  sourceIPs?: string;

  /**
   * Ports from where the request is originating. Default is `any`
   */
  sourcePorts?: string;

  /**
   * The machine port where the request will be forwarded. Default is `any`
   */
  translatedPorts?: string;

  /**
   * Type of the NAT rule. Only DNAT is supported currently.
   */
  type?: string;
}

export interface OperationReconfigureParams {
  /**
   * Body param: List of NAT rules to be applied on this Compute Nat.
   */
  natRules: Array<NatRule>;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;
}

export declare namespace Operations {
  export { type NatRule as NatRule, type OperationReconfigureParams as OperationReconfigureParams };
}
