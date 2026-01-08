// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as NetworksAPI from '../networks';
import * as ResourceMetadataAPI from './resource-metadata';
import {
  ResourceMetadata,
  ResourceMetadataRetrieveResourceMetadataParams,
  ResourceMetadataRetrieveResourceMetadataResponse,
  ResourceMetadataUpdateResourceMetadataParams,
} from './resource-metadata';
import * as ZonesAPI from './zones';
import {
  RequestTracker,
  ZoneAssignment,
  ZoneAssignmentSpecification,
  ZoneCreateParams,
  ZoneListParams,
  ZoneListResponse,
  Zones,
} from './zones';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Projects extends APIResource {
  zones: ZonesAPI.Zones = new ZonesAPI.Zones(this._client);
  resourceMetadata: ResourceMetadataAPI.ResourceMetadata = new ResourceMetadataAPI.ResourceMetadata(
    this._client,
  );

  /**
   * Create project
   *
   * @example
   * ```ts
   * const project = await client.iaas.api.projects.create({
   *   name: 'name',
   * });
   * ```
   */
  create(params: ProjectCreateParams, options?: RequestOptions): APIPromise<Project> {
    const { apiVersion, validatePrincipals, ...body } = params;
    return this._client.post('/iaas/api/projects', {
      query: { apiVersion, validatePrincipals },
      body,
      ...options,
    });
  }

  /**
   * Get project with a given id
   *
   * @example
   * ```ts
   * const project = await client.iaas.api.projects.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: ProjectRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Project> {
    return this._client.get(path`/iaas/api/projects/${id}`, { query, ...options });
  }

  /**
   * Update project
   *
   * @example
   * ```ts
   * const project = await client.iaas.api.projects.update(
   *   'id',
   *   { name: 'name' },
   * );
   * ```
   */
  update(id: string, params: ProjectUpdateParams, options?: RequestOptions): APIPromise<Project> {
    const { apiVersion, validatePrincipals, ...body } = params;
    return this._client.patch(path`/iaas/api/projects/${id}`, {
      query: { apiVersion, validatePrincipals },
      body,
      ...options,
    });
  }

  /**
   * Get all projects
   *
   * @example
   * ```ts
   * const projects = await client.iaas.api.projects.list();
   * ```
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectListResponse> {
    return this._client.get('/iaas/api/projects', { query, ...options });
  }

  /**
   * Delete project with a given id
   *
   * @example
   * ```ts
   * await client.iaas.api.projects.delete('id');
   * ```
   */
  delete(
    id: string,
    params: ProjectDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { apiVersion } = params ?? {};
    return this._client.delete(path`/iaas/api/projects/${id}`, {
      query: { apiVersion },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Projects link users and cloud zones, thus controlling who can use what cloud
 * resources. **HATEOAS** links: **self** - Project - Self link to this project
 */
export interface Project {
  /**
   * The id of this resource instance
   */
  id: string;

  /**
   * HATEOAS of the entity
   */
  _links: Project._Links;

  /**
   * List of administrator users associated with the project. Only administrators can
   * manage project's configuration.
   */
  administrators?: Array<User>;

  /**
   * List of storage, network and extensibility constraints to be applied when
   * provisioning through this project.
   */
  constraints?: { [key: string]: Array<NetworksAPI.PlacementConstraint> };

  /**
   * Date when the entity was created. The date is in ISO 8601 and UTC.
   */
  createdAt?: string;

  /**
   * The project custom properties which are added to all requests in this project
   */
  customProperties?: { [key: string]: string };

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * The naming template to be used for machines provisioned in this project
   */
  machineNamingTemplate?: string;

  /**
   * List of member users associated with the project.
   */
  members?: Array<User>;

  /**
   * A human-friendly name used as an identifier in APIs that support this option.
   */
  name?: string;

  /**
   * The timeout that should be used for Blueprint operations and Provisioning tasks.
   * The timeout is in seconds
   */
  operationTimeout?: number;

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
   * Placement policy for the project. Determines how a zone will be selected for
   * provisioning. DEFAULT or SPREAD.
   */
  placementPolicy?: string;

  /**
   * Specifies whether the resources in this projects are shared or not.
   */
  sharedResources?: boolean;

  /**
   * List of supervisor users associated with the project.
   */
  supervisors?: Array<User>;

  /**
   * Date when the entity was last updated. The date is ISO 8601 and UTC.
   */
  updatedAt?: string;

  /**
   * List of viewer users associated with the project.
   */
  viewers?: Array<User>;

  /**
   * List of Cloud Zones assigned to this project. You can limit deployment to a
   * single region or allow multi-region placement by adding more than one cloud zone
   * to a project. A cloud zone lists available resources. Use tags on resources to
   * control workload placement.
   */
  zones?: Array<ZonesAPI.ZoneAssignment>;
}

export namespace Project {
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
 * Represents a specification for a project.
 */
export interface ProjectSpecification {
  /**
   * A human-friendly name used as an identifier in APIs that support this option.
   */
  name: string;

  /**
   * List of administrator users associated with the project. Only administrators can
   * manage project's configuration.
   */
  administrators?: Array<User>;

  /**
   * List of storage, network and extensibility constraints to be applied when
   * provisioning through this project.
   */
  constraints?: { [key: string]: Array<NetworksAPI.PlacementConstraint> };

  /**
   * The project custom properties which are added to all requests in this project
   */
  customProperties?: { [key: string]: string };

  /**
   * A human-friendly description.
   */
  description?: string;

  /**
   * The naming template to be used for machines provisioned in this project
   */
  machineNamingTemplate?: string;

  /**
   * List of member users associated with the project.
   */
  members?: Array<User>;

  /**
   * The timeout that should be used for Blueprint operations and Provisioning tasks.
   * The timeout is in seconds
   */
  operationTimeout?: number;

  /**
   * Placement policy for the project. Determines how a zone will be selected for
   * provisioning. DEFAULT, SPREAD or SPREAD_MEMORY.
   */
  placementPolicy?: string;

  /**
   * Specifies whether the resources in this projects are shared or not. If not set
   * default will be used.
   */
  sharedResources?: boolean;

  /**
   * List of supervisor users associated with the project.
   */
  supervisors?: Array<User>;

  /**
   * List of viewer users associated with the project.
   */
  viewers?: Array<User>;

  /**
   * List of configurations for zone assignment to a project.
   */
  zoneAssignmentConfigurations?: Array<ZonesAPI.ZoneAssignmentSpecification>;
}

/**
 * A representation of a user.
 */
export interface User {
  /**
   * The email of the user or name of the group.
   */
  email: string;

  /**
   * Type of the principal. Currently supported 'user' (default) and 'group'.
   */
  type?: string;
}

/**
 * State object representing a query result of projects.
 */
export interface ProjectListResponse {
  /**
   * List of content items
   */
  content?: Array<Project>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export interface ProjectCreateParams {
  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Query param: If true, a limit of 20 principals is enforced. Additionally each
   * principal is validated in the Identity provider and important rules for group
   * email formats are enforced.
   */
  validatePrincipals?: boolean;

  /**
   * Body param: List of administrator users associated with the project. Only
   * administrators can manage project's configuration.
   */
  administrators?: Array<User>;

  /**
   * Body param: List of storage, network and extensibility constraints to be applied
   * when provisioning through this project.
   */
  constraints?: { [key: string]: Array<NetworksAPI.PlacementConstraint> };

  /**
   * Body param: The project custom properties which are added to all requests in
   * this project
   */
  customProperties?: { [key: string]: string };

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: The naming template to be used for machines provisioned in this
   * project
   */
  machineNamingTemplate?: string;

  /**
   * Body param: List of member users associated with the project.
   */
  members?: Array<User>;

  /**
   * Body param: The timeout that should be used for Blueprint operations and
   * Provisioning tasks. The timeout is in seconds
   */
  operationTimeout?: number;

  /**
   * Body param: Placement policy for the project. Determines how a zone will be
   * selected for provisioning. DEFAULT, SPREAD or SPREAD_MEMORY.
   */
  placementPolicy?: string;

  /**
   * Body param: Specifies whether the resources in this projects are shared or not.
   * If not set default will be used.
   */
  sharedResources?: boolean;

  /**
   * Body param: List of supervisor users associated with the project.
   */
  supervisors?: Array<User>;

  /**
   * Body param: List of viewer users associated with the project.
   */
  viewers?: Array<User>;

  /**
   * Body param: List of configurations for zone assignment to a project.
   */
  zoneAssignmentConfigurations?: Array<ZonesAPI.ZoneAssignmentSpecification>;
}

export interface ProjectRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface ProjectUpdateParams {
  /**
   * Body param: A human-friendly name used as an identifier in APIs that support
   * this option.
   */
  name: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * Query param: If true, a limit of 20 principals is enforced. Additionally each
   * principal is validated in the Identity provider and important rules for group
   * email formats are enforced.
   */
  validatePrincipals?: boolean;

  /**
   * Body param: List of administrator users associated with the project. Only
   * administrators can manage project's configuration.
   */
  administrators?: Array<User>;

  /**
   * Body param: List of storage, network and extensibility constraints to be applied
   * when provisioning through this project.
   */
  constraints?: { [key: string]: Array<NetworksAPI.PlacementConstraint> };

  /**
   * Body param: The project custom properties which are added to all requests in
   * this project
   */
  customProperties?: { [key: string]: string };

  /**
   * Body param: A human-friendly description.
   */
  description?: string;

  /**
   * Body param: The naming template to be used for machines provisioned in this
   * project
   */
  machineNamingTemplate?: string;

  /**
   * Body param: List of member users associated with the project.
   */
  members?: Array<User>;

  /**
   * Body param: The timeout that should be used for Blueprint operations and
   * Provisioning tasks. The timeout is in seconds
   */
  operationTimeout?: number;

  /**
   * Body param: Placement policy for the project. Determines how a zone will be
   * selected for provisioning. DEFAULT, SPREAD or SPREAD_MEMORY.
   */
  placementPolicy?: string;

  /**
   * Body param: Specifies whether the resources in this projects are shared or not.
   * If not set default will be used.
   */
  sharedResources?: boolean;

  /**
   * Body param: List of supervisor users associated with the project.
   */
  supervisors?: Array<User>;

  /**
   * Body param: List of viewer users associated with the project.
   */
  viewers?: Array<User>;

  /**
   * Body param: List of configurations for zone assignment to a project.
   */
  zoneAssignmentConfigurations?: Array<ZonesAPI.ZoneAssignmentSpecification>;
}

export interface ProjectListParams {
  /**
   * Flag which when specified, regardless of the assigned value, shows the total
   * number of records. If the collection has a filter it shows the number of records
   * matching the filter.
   */
  $count?: boolean;

  /**
   * Filter the results by a specified predicate expression. A set of operators and
   * functions are defined for use: Operators: eq, ne, gt, ge, lt, le, and, or, not.
   * Functions: bool substringof(string p0, string p1) bool endswith(string p0,
   * string p1) bool startswith(string p0, string p1) int length(string p0) int
   * indexof(string p0, string p1) string replace(string p0, string find, string
   * replace) string substring(string p0, int pos) string substring(string p0, int
   * pos, int length) string tolower(string p0) string toupper(string p0) string
   * trim(string p0) string concat(string p0, string p1)
   */
  $filter?: string;

  /**
   * Sorting criteria in the format: property (asc|desc). Default sort order is
   * ascending. Multiple sort criteria are supported.
   */
  $orderBy?: string;

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

export interface ProjectDeleteParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

Projects.Zones = Zones;
Projects.ResourceMetadata = ResourceMetadata;

export declare namespace Projects {
  export {
    type Project as Project,
    type ProjectSpecification as ProjectSpecification,
    type User as User,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectRetrieveParams as ProjectRetrieveParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectDeleteParams as ProjectDeleteParams,
  };

  export {
    Zones as Zones,
    type RequestTracker as RequestTracker,
    type ZoneAssignment as ZoneAssignment,
    type ZoneAssignmentSpecification as ZoneAssignmentSpecification,
    type ZoneListResponse as ZoneListResponse,
    type ZoneCreateParams as ZoneCreateParams,
    type ZoneListParams as ZoneListParams,
  };

  export {
    ResourceMetadata as ResourceMetadata,
    type ResourceMetadataRetrieveResourceMetadataResponse as ResourceMetadataRetrieveResourceMetadataResponse,
    type ResourceMetadataRetrieveResourceMetadataParams as ResourceMetadataRetrieveResourceMetadataParams,
    type ResourceMetadataUpdateResourceMetadataParams as ResourceMetadataUpdateResourceMetadataParams,
  };
}
