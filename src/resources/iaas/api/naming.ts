// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NamingAPI from './naming';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Naming extends APIResource {
  /**
   * Create Custom Name
   *
   * @example
   * ```ts
   * const customNaming = await client.iaas.api.naming.create({
   *   apiVersion: 'apiVersion',
   * });
   * ```
   */
  create(params: NamingCreateParams, options?: RequestOptions): APIPromise<CustomNaming> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/naming', { query: { apiVersion }, body, ...options });
  }

  /**
   * Get Custom Names For Project Id
   *
   * @example
   * ```ts
   * const customNaming = await client.iaas.api.naming.retrieve(
   *   'id',
   *   { apiVersion: 'apiVersion' },
   * );
   * ```
   */
  retrieve(id: string, query: NamingRetrieveParams, options?: RequestOptions): APIPromise<CustomNaming> {
    return this._client.get(path`/iaas/api/naming/projectId/${id}`, { query, ...options });
  }

  /**
   * Get All Custom Names
   *
   * @example
   * ```ts
   * const namings = await client.iaas.api.naming.list({
   *   apiVersion: 'apiVersion',
   * });
   * ```
   */
  list(query: NamingListParams, options?: RequestOptions): APIPromise<NamingListResponse> {
    return this._client.get('/iaas/api/naming', { query, ...options });
  }

  /**
   * Delete custom name with a given id
   *
   * @example
   * ```ts
   * const customNaming = await client.iaas.api.naming.delete(
   *   'id',
   *   { apiVersion: 'apiVersion' },
   * );
   * ```
   */
  delete(id: string, params: NamingDeleteParams, options?: RequestOptions): APIPromise<CustomNaming> {
    const { apiVersion } = params;
    return this._client.delete(path`/iaas/api/naming/${id}`, { query: { apiVersion }, ...options });
  }
}

/**
 * Custom names**HATEOAS** links: **self** - Custom naming - Self link to this
 * CustomNamingEntity
 */
export interface CustomNaming {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: CustomNaming._Links;

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * A human-friendly description.
   */
  description?: string;

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
   * Set of projects associated with custom name
   */
  projects?: Array<CustomNamingProject>;

  /**
   * Set of templates associated with custom name
   */
  templates?: Array<CustomNaming.Template>;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;
}

export namespace CustomNaming {
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

  /**
   * A representation of a Template.
   */
  export interface Template {
    /**
     * Unique id of custom naming template
     */
    id?: string;

    counters?: Array<Template.Counter>;

    /**
     * Set the increment to the counter value to be taken for each name.
     */
    incrementStep?: number;

    /**
     * The specified template used to generate the resource names
     */
    pattern?: string;

    /**
     * Flag to represent default pattern or static pattern
     */
    resourceDefault?: boolean;

    /**
     * Resource type
     */
    resourceType?:
      | 'COMPUTE'
      | 'NETWORK'
      | 'COMPUTE_STORAGE'
      | 'LOAD_BALANCER'
      | 'RESOURCE_GROUP'
      | 'GATEWAY'
      | 'NAT'
      | 'SECURITY_GROUP'
      | 'GENERIC';

    /**
     * Resource type
     */
    resourceTypeName?: string;

    /**
     * The value from which naming pattern counter will start.
     */
    startCounter?: number;

    /**
     * Static pattern text
     */
    staticPattern?: string;

    /**
     * Flag to check if name should be unique
     */
    uniqueName?: boolean;
  }

  export namespace Template {
    /**
     * A representation of a Counter.
     */
    export interface Counter {
      /**
       * The resource type of custom name
       */
      cnResourceType:
        | 'COMPUTE'
        | 'NETWORK'
        | 'COMPUTE_STORAGE'
        | 'LOAD_BALANCER'
        | 'RESOURCE_GROUP'
        | 'GATEWAY'
        | 'NAT'
        | 'SECURITY_GROUP'
        | 'GENERIC';

      /**
       * The current counter of custom name
       */
      currentCounter: number;

      /**
       * The project id to which the counter is mapped
       */
      projectId: string;

      id?: string;

      active?: boolean;
    }
  }
}

export interface CustomNamingModel {
  id?: string;

  description?: string;

  name?: string;

  projects?: Array<CustomNamingModel.Project>;

  templates?: Array<CustomNamingModel.Template>;
}

export namespace CustomNamingModel {
  export interface Project {
    id?: string;

    active?: boolean;

    defaultOrg?: boolean;

    orgId?: string;

    projectId?: string;

    projectName?: string;
  }

  export interface Template {
    id?: string;

    counters?: Array<Template.Counter>;

    incrementStep?: number;

    name?: string;

    pattern?: string;

    resourceDefault?: boolean;

    resourceType?:
      | 'COMPUTE'
      | 'NETWORK'
      | 'COMPUTE_STORAGE'
      | 'LOAD_BALANCER'
      | 'RESOURCE_GROUP'
      | 'GATEWAY'
      | 'NAT'
      | 'SECURITY_GROUP'
      | 'GENERIC';

    resourceTypeName?: string;

    startCounter?: number;

    staticPattern?: string;

    uniqueName?: boolean;
  }

  export namespace Template {
    export interface Counter {
      id?: string;

      active?: boolean;

      cnResourceType?:
        | 'COMPUTE'
        | 'NETWORK'
        | 'COMPUTE_STORAGE'
        | 'LOAD_BALANCER'
        | 'RESOURCE_GROUP'
        | 'GATEWAY'
        | 'NAT'
        | 'SECURITY_GROUP'
        | 'GENERIC';

      currentCounter?: number;

      projectId?: string;
    }
  }
}

/**
 * A representation of a Project.
 */
export interface CustomNamingProject {
  /**
   * Unique id of custom naming project
   */
  id?: string;

  /**
   * Flag to check if project is active
   */
  active?: boolean;

  /**
   * Flag to represent if custom name is default for org
   */
  defaultOrg?: boolean;

  /**
   * Org id
   */
  orgId?: string;

  /**
   * Project id mapped to custom name
   */
  projectId?: string;

  /**
   * Name of mapped project
   */
  projectName?: string;
}

/**
 * State object representing a query result of custom names
 */
export interface NamingListResponse {
  /**
   * List of content items
   */
  content?: Array<NamingListResponse.Content>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export namespace NamingListResponse {
  /**
   * Custom names
   */
  export interface Content {
    /**
     * The id of this resource instance
     */
    id: string;

    /**
     * Date when the entity was created. The date is in ISO 8601 and UTC.
     */
    createdAt?: string;

    /**
     * Email of the user or display name of the group that created the entity.
     */
    createdBy?: string;

    /**
     * A human-friendly name used as an identifier in APIs that support this option.
     */
    name?: string;

    /**
     * Set of projects associated with custom name
     */
    projects?: Array<NamingAPI.CustomNamingProject>;

    /**
     * Date when the entity was last updated. The date is ISO 8601 and UTC.
     */
    updatedAt?: string;

    /**
     * Email of the user or display name of the group that updated the entity.
     */
    updatedBy?: string;
  }
}

export interface NamingCreateParams {
  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion: string;

  /**
   * Body param:
   */
  id?: string;

  /**
   * Body param:
   */
  description?: string;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  projects?: Array<NamingCreateParams.Project>;

  /**
   * Body param:
   */
  templates?: Array<NamingCreateParams.Template>;
}

export namespace NamingCreateParams {
  export interface Project {
    id?: string;

    active?: boolean;

    defaultOrg?: boolean;

    orgId?: string;

    projectId?: string;

    projectName?: string;
  }

  export interface Template {
    id?: string;

    counters?: Array<Template.Counter>;

    incrementStep?: number;

    name?: string;

    pattern?: string;

    resourceDefault?: boolean;

    resourceType?:
      | 'COMPUTE'
      | 'NETWORK'
      | 'COMPUTE_STORAGE'
      | 'LOAD_BALANCER'
      | 'RESOURCE_GROUP'
      | 'GATEWAY'
      | 'NAT'
      | 'SECURITY_GROUP'
      | 'GENERIC';

    resourceTypeName?: string;

    startCounter?: number;

    staticPattern?: string;

    uniqueName?: boolean;
  }

  export namespace Template {
    export interface Counter {
      id?: string;

      active?: boolean;

      cnResourceType?:
        | 'COMPUTE'
        | 'NETWORK'
        | 'COMPUTE_STORAGE'
        | 'LOAD_BALANCER'
        | 'RESOURCE_GROUP'
        | 'GATEWAY'
        | 'NAT'
        | 'SECURITY_GROUP'
        | 'GENERIC';

      currentCounter?: number;

      projectId?: string;
    }
  }
}

export interface NamingRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export interface NamingListParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export interface NamingDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export declare namespace Naming {
  export {
    type CustomNaming as CustomNaming,
    type CustomNamingModel as CustomNamingModel,
    type CustomNamingProject as CustomNamingProject,
    type NamingListResponse as NamingListResponse,
    type NamingCreateParams as NamingCreateParams,
    type NamingRetrieveParams as NamingRetrieveParams,
    type NamingListParams as NamingListParams,
    type NamingDeleteParams as NamingDeleteParams,
  };
}
