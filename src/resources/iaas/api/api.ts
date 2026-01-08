// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CloudAccountsAvilbAPI from './cloud-accounts-avilb';
import {
  CloudAccountAviLb,
  CloudAccountsAvilb,
  CloudAccountsAvilbCloudAccountsAvilbParams,
  CloudAccountsAvilbDeleteParams,
  CloudAccountsAvilbRetrieveCloudAccountsAvilbParams,
  CloudAccountsAvilbRetrieveCloudAccountsAvilbResponse,
  CloudAccountsAvilbRetrieveParams,
  CloudAccountsAvilbUpdateParams,
} from './cloud-accounts-avilb';
import * as CloudAccountsAwsAPI from './cloud-accounts-aws';
import {
  CloudAccountAws,
  CloudAccountsAwCloudAccountsAwsParams,
  CloudAccountsAwDeleteParams,
  CloudAccountsAwPrivateImageEnumerationParams,
  CloudAccountsAwRegionEnumerationParams,
  CloudAccountsAwRetrieveCloudAccountsAwsParams,
  CloudAccountsAwRetrieveCloudAccountsAwsResponse,
  CloudAccountsAwRetrieveParams,
  CloudAccountsAwUpdateParams,
  CloudAccountsAws,
} from './cloud-accounts-aws';
import * as CloudAccountsAzureAPI from './cloud-accounts-azure';
import {
  CloudAccountAzure,
  CloudAccountsAzure,
  CloudAccountsAzureCloudAccountsAzureParams,
  CloudAccountsAzureDeleteParams,
  CloudAccountsAzurePrivateImageEnumerationParams,
  CloudAccountsAzureRegionEnumerationParams,
  CloudAccountsAzureRetrieveCloudAccountsAzureParams,
  CloudAccountsAzureRetrieveCloudAccountsAzureResponse,
  CloudAccountsAzureRetrieveParams,
  CloudAccountsAzureUpdateParams,
} from './cloud-accounts-azure';
import * as CloudAccountsGcpAPI from './cloud-accounts-gcp';
import {
  CloudAccountGcp,
  CloudAccountsGcp,
  CloudAccountsGcpCloudAccountsGcpParams,
  CloudAccountsGcpDeleteParams,
  CloudAccountsGcpPrivateImageEnumerationParams,
  CloudAccountsGcpRegionEnumerationParams,
  CloudAccountsGcpRetrieveCloudAccountsGcpParams,
  CloudAccountsGcpRetrieveCloudAccountsGcpResponse,
  CloudAccountsGcpRetrieveParams,
  CloudAccountsGcpUpdateParams,
} from './cloud-accounts-gcp';
import * as CloudAccountsNsxTAPI from './cloud-accounts-nsx-t';
import {
  CloudAccountNsxT,
  CloudAccountsNsxT,
  CloudAccountsNsxTCloudAccountsNsxTParams,
  CloudAccountsNsxTDeleteParams,
  CloudAccountsNsxTRetrieveCloudAccountsNsxTParams,
  CloudAccountsNsxTRetrieveCloudAccountsNsxTResponse,
  CloudAccountsNsxTRetrieveParams,
  CloudAccountsNsxTUpdateParams,
} from './cloud-accounts-nsx-t';
import * as CloudAccountsNsxVAPI from './cloud-accounts-nsx-v';
import {
  CloudAccountNsxV,
  CloudAccountsNsxV,
  CloudAccountsNsxVCloudAccountsNsxVParams,
  CloudAccountsNsxVDeleteParams,
  CloudAccountsNsxVRetrieveCloudAccountsNsxVParams,
  CloudAccountsNsxVRetrieveCloudAccountsNsxVResponse,
  CloudAccountsNsxVRetrieveParams,
  CloudAccountsNsxVUpdateParams,
} from './cloud-accounts-nsx-v';
import * as CloudAccountsVcfAPI from './cloud-accounts-vcf';
import {
  CloudAccountVcf,
  CloudAccountsVcf,
  CloudAccountsVcfCloudAccountsVcfParams,
  CloudAccountsVcfDeleteParams,
  CloudAccountsVcfPrivateImageEnumerationParams,
  CloudAccountsVcfRegionEnumerationParams,
  CloudAccountsVcfRetrieveCloudAccountsVcfParams,
  CloudAccountsVcfRetrieveCloudAccountsVcfResponse,
  CloudAccountsVcfRetrieveParams,
  CloudAccountsVcfUpdateParams,
} from './cloud-accounts-vcf';
import * as CloudAccountsVmcAPI from './cloud-accounts-vmc';
import {
  CloudAccountVmc,
  CloudAccountsVmc,
  CloudAccountsVmcCloudAccountsVmcParams,
  CloudAccountsVmcDeleteParams,
  CloudAccountsVmcPrivateImageEnumerationParams,
  CloudAccountsVmcRegionEnumerationParams,
  CloudAccountsVmcRetrieveCloudAccountsVmcParams,
  CloudAccountsVmcRetrieveCloudAccountsVmcResponse,
  CloudAccountsVmcRetrieveParams,
  CloudAccountsVmcUpdateParams,
} from './cloud-accounts-vmc';
import * as CloudAccountsVsphereAPI from './cloud-accounts-vsphere';
import {
  CloudAccountVsphere,
  CloudAccountsVsphere,
  CloudAccountsVsphereCloudAccountsVsphereParams,
  CloudAccountsVsphereDeleteParams,
  CloudAccountsVspherePrivateImageEnumerationParams,
  CloudAccountsVsphereRegionEnumerationParams,
  CloudAccountsVsphereRetrieveCloudAccountsVsphereParams,
  CloudAccountsVsphereRetrieveCloudAccountsVsphereResponse,
  CloudAccountsVsphereRetrieveParams,
  CloudAccountsVsphereUpdateParams,
  RegionSpecification,
} from './cloud-accounts-vsphere';
import * as ComputeGatewaysAPI from './compute-gateways';
import {
  ComputeGateway,
  ComputeGatewayComputeGatewaysParams,
  ComputeGatewayDeleteParams,
  ComputeGatewayRetrieveComputeGatewaysParams,
  ComputeGatewayRetrieveComputeGatewaysResponse,
  ComputeGatewayRetrieveParams,
  ComputeGateways,
} from './compute-gateways';
import * as ConfigurationPropertiesAPI from './configuration-properties';
import {
  ConfigurationProperties,
  ConfigurationProperty,
  ConfigurationPropertyDeleteParams,
  ConfigurationPropertyResult,
  ConfigurationPropertyRetrieveConfigurationPropertiesParams,
  ConfigurationPropertyRetrieveParams,
  ConfigurationPropertyUpdateConfigurationPropertiesParams,
} from './configuration-properties';
import * as DataCollectorsAPI from './data-collectors';
import {
  DataCollector,
  DataCollectorDataCollectorsParams,
  DataCollectorDataCollectorsResponse,
  DataCollectorDeleteParams,
  DataCollectorRetrieveDataCollectorsParams,
  DataCollectorRetrieveDataCollectorsResponse,
  DataCollectorRetrieveParams,
  DataCollectors,
} from './data-collectors';
import * as DeploymentsAPI from './deployments';
import {
  Deployment,
  DeploymentCreateParams,
  DeploymentDeleteParams,
  DeploymentListParams,
  DeploymentListResponse,
  DeploymentRetrieveParams,
  Deployments,
} from './deployments';
import * as ExternalIPBlocksAPI from './external-ip-blocks';
import {
  ExternalIPBlockRetrieveExternalIPBlocksParams,
  ExternalIPBlockRetrieveParams,
  ExternalIPBlocks,
} from './external-ip-blocks';
import * as ExternalNetworkIPRangesAPI from './external-network-ip-ranges';
import {
  ExternalNetworkIPRange,
  ExternalNetworkIPRangeRetrieveExternalNetworkIPRangesParams,
  ExternalNetworkIPRangeRetrieveExternalNetworkIPRangesResponse,
  ExternalNetworkIPRangeRetrieveParams,
  ExternalNetworkIPRangeUpdateParams,
  ExternalNetworkIPRanges,
} from './external-network-ip-ranges';
import * as FabricAzureStorageAccountsAPI from './fabric-azure-storage-accounts';
import {
  FabricAzureStorageAccount,
  FabricAzureStorageAccountRetrieveFabricAzureStorageAccountsParams,
  FabricAzureStorageAccountRetrieveFabricAzureStorageAccountsResponse,
  FabricAzureStorageAccountRetrieveParams,
  FabricAzureStorageAccounts,
} from './fabric-azure-storage-accounts';
import * as FabricComputesAPI from './fabric-computes';
import {
  FabricCompute,
  FabricComputeRetrieveFabricComputesParams,
  FabricComputeRetrieveParams,
  FabricComputeUpdateParams,
  FabricComputes,
} from './fabric-computes';
import * as FabricImagesAPI from './fabric-images';
import {
  FabricImage,
  FabricImageRetrieveFabricImagesParams,
  FabricImageRetrieveFabricImagesResponse,
  FabricImageRetrieveParams,
  FabricImages,
} from './fabric-images';
import * as FabricNetworksAPI from './fabric-networks';
import {
  FabricNetwork,
  FabricNetworkResult,
  FabricNetworkRetrieveFabricNetworksParams,
  FabricNetworkRetrieveNetworkIPRangesParams,
  FabricNetworkRetrieveParams,
  FabricNetworkUpdateParams,
  FabricNetworks,
} from './fabric-networks';
import * as FabricNetworksVsphereAPI from './fabric-networks-vsphere';
import {
  FabricNetworkVsphere,
  FabricNetworksVsphere,
  FabricNetworksVsphereRetrieveFabricNetworksVsphereParams,
  FabricNetworksVsphereRetrieveFabricNetworksVsphereResponse,
  FabricNetworksVsphereRetrieveNetworkIPRangesParams,
  FabricNetworksVsphereRetrieveParams,
  FabricNetworksVsphereUpdateParams,
} from './fabric-networks-vsphere';
import * as FabricVsphereDatastoresAPI from './fabric-vsphere-datastores';
import {
  FabricVsphereDatastore,
  FabricVsphereDatastoreRetrieveFabricVsphereDatastoresParams,
  FabricVsphereDatastoreRetrieveFabricVsphereDatastoresResponse,
  FabricVsphereDatastoreRetrieveParams,
  FabricVsphereDatastoreUpdateParams,
  FabricVsphereDatastores,
} from './fabric-vsphere-datastores';
import * as FabricVsphereStoragePoliciesAPI from './fabric-vsphere-storage-policies';
import {
  FabricVsphereStoragePolicies,
  FabricVsphereStoragePolicy,
  FabricVsphereStoragePolicyRetrieveFabricVsphereStoragePoliciesParams,
  FabricVsphereStoragePolicyRetrieveFabricVsphereStoragePoliciesResponse,
  FabricVsphereStoragePolicyRetrieveParams,
} from './fabric-vsphere-storage-policies';
import * as FlavorProfilesAPI from './flavor-profiles';
import {
  FlavorMapping,
  FlavorProfile,
  FlavorProfileDeleteParams,
  FlavorProfileFlavorProfilesParams,
  FlavorProfileRetrieveFlavorProfilesParams,
  FlavorProfileRetrieveFlavorProfilesResponse,
  FlavorProfileRetrieveParams,
  FlavorProfileUpdateParams,
  FlavorProfiles,
} from './flavor-profiles';
import * as ImageProfilesAPI from './image-profiles';
import {
  ImageMapping,
  ImageProfile,
  ImageProfileDeleteParams,
  ImageProfileImageProfilesParams,
  ImageProfileRetrieveImageProfilesParams,
  ImageProfileRetrieveImageProfilesResponse,
  ImageProfileRetrieveParams,
  ImageProfileUpdateParams,
  ImageProfiles,
} from './image-profiles';
import * as IntegrationsAPI from './integrations';
import {
  CertificateInfoSpecification,
  Integration,
  IntegrationCreateParams,
  IntegrationDeleteParams,
  IntegrationListParams,
  IntegrationListResponse,
  IntegrationRetrieveParams,
  IntegrationUpdateParams,
  Integrations,
} from './integrations';
import * as NamingAPI from './naming';
import {
  CustomNaming,
  CustomNamingModel,
  CustomNamingProject,
  Naming,
  NamingCreateParams,
  NamingDeleteParams,
  NamingListParams,
  NamingListResponse,
  NamingRetrieveParams,
} from './naming';
import * as NetworkDomainsAPI from './network-domains';
import {
  NetworkDomain,
  NetworkDomainRetrieveNetworkDomainsParams,
  NetworkDomainRetrieveNetworkDomainsResponse,
  NetworkDomainRetrieveParams,
  NetworkDomains,
} from './network-domains';
import * as NetworkProfilesAPI from './network-profiles';
import {
  NetworkProfile,
  NetworkProfileDeleteParams,
  NetworkProfileNetworkProfilesParams,
  NetworkProfileRetrieveNetworkProfilesParams,
  NetworkProfileRetrieveNetworkProfilesResponse,
  NetworkProfileRetrieveParams,
  NetworkProfileSpecification,
  NetworkProfileUpdateParams,
  NetworkProfiles,
} from './network-profiles';
import * as NetworksAPI from './networks';
import {
  Network,
  NetworkCreateParams,
  NetworkDeleteParams,
  NetworkListParams,
  NetworkListResponse,
  NetworkRetrieveNetworkIPRangesParams,
  NetworkRetrieveParams,
  Networks,
  PlacementConstraint,
} from './networks';
import * as RegionsAPI from './regions';
import { Region, RegionListParams, RegionListResponse, RegionRetrieveParams, Regions } from './regions';
import * as RequestTrackerAPI from './request-tracker';
import {
  RequestTracker,
  RequestTrackerDeleteParams,
  RequestTrackerRetrieveParams,
  RequestTrackerRetrieveRequestTrackerParams,
  RequestTrackerRetrieveRequestTrackerResponse,
} from './request-tracker';
import * as StorageProfilesAwsAPI from './storage-profiles-aws';
import {
  AwsStorageProfile,
  StorageProfileAwsSpecification,
  StorageProfilesAwDeleteParams,
  StorageProfilesAwRetrieveParams,
  StorageProfilesAwRetrieveStorageProfilesAwsParams,
  StorageProfilesAwRetrieveStorageProfilesAwsResponse,
  StorageProfilesAwStorageProfilesAwsParams,
  StorageProfilesAwUpdateParams,
  StorageProfilesAws,
} from './storage-profiles-aws';
import * as StorageProfilesAzureAPI from './storage-profiles-azure';
import {
  AzureStorageProfile,
  StorageProfileAzureSpecification,
  StorageProfilesAzure,
  StorageProfilesAzureDeleteParams,
  StorageProfilesAzureRetrieveParams,
  StorageProfilesAzureRetrieveStorageProfilesAzureParams,
  StorageProfilesAzureRetrieveStorageProfilesAzureResponse,
  StorageProfilesAzureStorageProfilesAzureParams,
  StorageProfilesAzureUpdateParams,
} from './storage-profiles-azure';
import * as StorageProfilesGcpAPI from './storage-profiles-gcp';
import {
  GcpStorageProfile,
  StorageProfileGcpSpecification,
  StorageProfilesGcp,
  StorageProfilesGcpDeleteParams,
  StorageProfilesGcpRetrieveParams,
  StorageProfilesGcpRetrieveStorageProfilesGcpParams,
  StorageProfilesGcpRetrieveStorageProfilesGcpResponse,
  StorageProfilesGcpStorageProfilesGcpParams,
  StorageProfilesGcpUpdateParams,
} from './storage-profiles-gcp';
import * as StorageProfilesVsphereAPI from './storage-profiles-vsphere';
import {
  StorageProfileVsphereSpecification,
  StorageProfilesVsphere,
  StorageProfilesVsphereDeleteParams,
  StorageProfilesVsphereRetrieveParams,
  StorageProfilesVsphereRetrieveStorageProfilesVsphereParams,
  StorageProfilesVsphereRetrieveStorageProfilesVsphereResponse,
  StorageProfilesVsphereStorageProfilesVsphereParams,
  StorageProfilesVsphereUpdateParams,
  VsphereStorageProfile,
} from './storage-profiles-vsphere';
import * as TagsAPI from './tags';
import {
  Tag,
  TagCreateParams,
  TagDeleteParams,
  TagListParams,
  TagListResponse,
  TagTagsUsageParams,
  Tags,
} from './tags';
import * as ZonesAPI from './zones';
import {
  FabricComputeResult,
  Zone,
  ZoneCreateParams,
  ZoneDeleteParams,
  ZoneListParams,
  ZoneListResponse,
  ZoneRetrieveComputesParams,
  ZoneRetrieveParams,
  ZoneSpecification,
  ZoneUpdateParams,
  Zones,
} from './zones';
import * as BlockDevicesAPI from './block-devices/block-devices';
import {
  BlockDevice,
  BlockDeviceBlockDevicesParams,
  BlockDeviceDeleteParams,
  BlockDeviceRetrieveBlockDevicesParams,
  BlockDeviceRetrieveParams,
  BlockDeviceUpdateParams,
  BlockDevices,
} from './block-devices/block-devices';
import * as CloudAccountsAPI from './cloud-accounts/cloud-accounts';
import {
  CloudAccount,
  CloudAccountCloudAccountsParams,
  CloudAccountDeleteParams,
  CloudAccountHealthCheckParams,
  CloudAccountPrivateImageEnumerationParams,
  CloudAccountRetrieveCloudAccountsParams,
  CloudAccountRetrieveCloudAccountsResponse,
  CloudAccountRetrieveParams,
  CloudAccountUpdateParams,
  CloudAccounts,
} from './cloud-accounts/cloud-accounts';
import * as ComputeNatsAPI from './compute-nats/compute-nats';
import {
  ComputeNat,
  ComputeNatComputeNatsParams,
  ComputeNatDeleteParams,
  ComputeNatRetrieveComputeNatsParams,
  ComputeNatRetrieveComputeNatsResponse,
  ComputeNatRetrieveParams,
  ComputeNats,
} from './compute-nats/compute-nats';
import * as IntegrationsIpamAPI from './integrations-ipam/integrations-ipam';
import { IntegrationsIpam } from './integrations-ipam/integrations-ipam';
import * as LoadBalancersAPI from './load-balancers/load-balancers';
import {
  LoadBalancer,
  LoadBalancerDeleteParams,
  LoadBalancerLoadBalancersParams,
  LoadBalancerRetrieveLoadBalancersParams,
  LoadBalancerRetrieveLoadBalancersResponse,
  LoadBalancerRetrieveParams,
  LoadBalancers,
} from './load-balancers/load-balancers';
import * as MachinesAPI from './machines/machines';
import {
  Machine,
  MachineBootConfig,
  MachineCreateParams,
  MachineDeleteParams,
  MachineListParams,
  MachineListResponse,
  MachineRetrieveParams,
  MachineUpdateParams,
  Machines,
  SaltConfiguration,
} from './machines/machines';
import * as NetworkIPRangesAPI from './network-ip-ranges/network-ip-ranges';
import {
  NetworkIPRangeBase,
  NetworkIPRangeDeleteParams,
  NetworkIPRangeNetworkIPRangesParams,
  NetworkIPRangeRetrieveNetworkIPRangesParams,
  NetworkIPRangeRetrieveNetworkIPRangesResponse,
  NetworkIPRangeRetrieveParams,
  NetworkIPRangeRetrieveResponse,
  NetworkIPRangeSpecification,
  NetworkIPRangeUpdateParams,
  NetworkIPRanges,
} from './network-ip-ranges/network-ip-ranges';
import * as ProjectsAPI from './projects/projects';
import {
  Project,
  ProjectCreateParams,
  ProjectDeleteParams,
  ProjectListParams,
  ProjectListResponse,
  ProjectRetrieveParams,
  ProjectSpecification,
  ProjectUpdateParams,
  Projects,
  User,
} from './projects/projects';
import * as SecurityGroupsAPI from './security-groups/security-groups';
import {
  SecurityGroup,
  SecurityGroupDeleteParams,
  SecurityGroupRetrieveParams,
  SecurityGroupRetrieveSecurityGroupsParams,
  SecurityGroupRetrieveSecurityGroupsResponse,
  SecurityGroupSecurityGroupsParams,
  SecurityGroupUpdateParams,
  SecurityGroups,
} from './security-groups/security-groups';
import * as StorageProfilesAPI from './storage-profiles/storage-profiles';
import {
  StorageProfile,
  StorageProfileAssociations,
  StorageProfileDeleteParams,
  StorageProfileRetrieveParams,
  StorageProfileRetrieveStorageProfilesParams,
  StorageProfileRetrieveStorageProfilesResponse,
  StorageProfileSpecification,
  StorageProfileStorageProfilesParams,
  StorageProfileUpdateParams,
  StorageProfiles,
} from './storage-profiles/storage-profiles';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class API extends APIResource {
  storageProfiles: StorageProfilesAPI.StorageProfiles = new StorageProfilesAPI.StorageProfiles(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  naming: NamingAPI.Naming = new NamingAPI.Naming(this._client);
  zones: ZonesAPI.Zones = new ZonesAPI.Zones(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  storageProfilesVsphere: StorageProfilesVsphereAPI.StorageProfilesVsphere =
    new StorageProfilesVsphereAPI.StorageProfilesVsphere(this._client);
  storageProfilesGcp: StorageProfilesGcpAPI.StorageProfilesGcp = new StorageProfilesGcpAPI.StorageProfilesGcp(
    this._client,
  );
  storageProfilesAzure: StorageProfilesAzureAPI.StorageProfilesAzure =
    new StorageProfilesAzureAPI.StorageProfilesAzure(this._client);
  storageProfilesAws: StorageProfilesAwsAPI.StorageProfilesAws = new StorageProfilesAwsAPI.StorageProfilesAws(
    this._client,
  );
  securityGroups: SecurityGroupsAPI.SecurityGroups = new SecurityGroupsAPI.SecurityGroups(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
  networkProfiles: NetworkProfilesAPI.NetworkProfiles = new NetworkProfilesAPI.NetworkProfiles(this._client);
  networkIPRanges: NetworkIPRangesAPI.NetworkIPRanges = new NetworkIPRangesAPI.NetworkIPRanges(this._client);
  machines: MachinesAPI.Machines = new MachinesAPI.Machines(this._client);
  loadBalancers: LoadBalancersAPI.LoadBalancers = new LoadBalancersAPI.LoadBalancers(this._client);
  integrationsIpam: IntegrationsIpamAPI.IntegrationsIpam = new IntegrationsIpamAPI.IntegrationsIpam(
    this._client,
  );
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
  imageProfiles: ImageProfilesAPI.ImageProfiles = new ImageProfilesAPI.ImageProfiles(this._client);
  flavorProfiles: FlavorProfilesAPI.FlavorProfiles = new FlavorProfilesAPI.FlavorProfiles(this._client);
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  dataCollectors: DataCollectorsAPI.DataCollectors = new DataCollectorsAPI.DataCollectors(this._client);
  computeNats: ComputeNatsAPI.ComputeNats = new ComputeNatsAPI.ComputeNats(this._client);
  computeGateways: ComputeGatewaysAPI.ComputeGateways = new ComputeGatewaysAPI.ComputeGateways(this._client);
  cloudAccounts: CloudAccountsAPI.CloudAccounts = new CloudAccountsAPI.CloudAccounts(this._client);
  cloudAccountsVsphere: CloudAccountsVsphereAPI.CloudAccountsVsphere =
    new CloudAccountsVsphereAPI.CloudAccountsVsphere(this._client);
  cloudAccountsVmc: CloudAccountsVmcAPI.CloudAccountsVmc = new CloudAccountsVmcAPI.CloudAccountsVmc(
    this._client,
  );
  cloudAccountsVcf: CloudAccountsVcfAPI.CloudAccountsVcf = new CloudAccountsVcfAPI.CloudAccountsVcf(
    this._client,
  );
  cloudAccountsNsxV: CloudAccountsNsxVAPI.CloudAccountsNsxV = new CloudAccountsNsxVAPI.CloudAccountsNsxV(
    this._client,
  );
  cloudAccountsNsxT: CloudAccountsNsxTAPI.CloudAccountsNsxT = new CloudAccountsNsxTAPI.CloudAccountsNsxT(
    this._client,
  );
  cloudAccountsGcp: CloudAccountsGcpAPI.CloudAccountsGcp = new CloudAccountsGcpAPI.CloudAccountsGcp(
    this._client,
  );
  cloudAccountsAzure: CloudAccountsAzureAPI.CloudAccountsAzure = new CloudAccountsAzureAPI.CloudAccountsAzure(
    this._client,
  );
  cloudAccountsAws: CloudAccountsAwsAPI.CloudAccountsAws = new CloudAccountsAwsAPI.CloudAccountsAws(
    this._client,
  );
  cloudAccountsAvilb: CloudAccountsAvilbAPI.CloudAccountsAvilb = new CloudAccountsAvilbAPI.CloudAccountsAvilb(
    this._client,
  );
  blockDevices: BlockDevicesAPI.BlockDevices = new BlockDevicesAPI.BlockDevices(this._client);
  fabricVsphereDatastores: FabricVsphereDatastoresAPI.FabricVsphereDatastores =
    new FabricVsphereDatastoresAPI.FabricVsphereDatastores(this._client);
  fabricNetworks: FabricNetworksAPI.FabricNetworks = new FabricNetworksAPI.FabricNetworks(this._client);
  fabricNetworksVsphere: FabricNetworksVsphereAPI.FabricNetworksVsphere =
    new FabricNetworksVsphereAPI.FabricNetworksVsphere(this._client);
  fabricComputes: FabricComputesAPI.FabricComputes = new FabricComputesAPI.FabricComputes(this._client);
  externalNetworkIPRanges: ExternalNetworkIPRangesAPI.ExternalNetworkIPRanges =
    new ExternalNetworkIPRangesAPI.ExternalNetworkIPRanges(this._client);
  configurationProperties: ConfigurationPropertiesAPI.ConfigurationProperties =
    new ConfigurationPropertiesAPI.ConfigurationProperties(this._client);
  requestTracker: RequestTrackerAPI.RequestTracker = new RequestTrackerAPI.RequestTracker(this._client);
  regions: RegionsAPI.Regions = new RegionsAPI.Regions(this._client);
  networkDomains: NetworkDomainsAPI.NetworkDomains = new NetworkDomainsAPI.NetworkDomains(this._client);
  fabricVsphereStoragePolicies: FabricVsphereStoragePoliciesAPI.FabricVsphereStoragePolicies =
    new FabricVsphereStoragePoliciesAPI.FabricVsphereStoragePolicies(this._client);
  fabricImages: FabricImagesAPI.FabricImages = new FabricImagesAPI.FabricImages(this._client);
  fabricAzureStorageAccounts: FabricAzureStorageAccountsAPI.FabricAzureStorageAccounts =
    new FabricAzureStorageAccountsAPI.FabricAzureStorageAccounts(this._client);
  externalIPBlocks: ExternalIPBlocksAPI.ExternalIPBlocks = new ExternalIPBlocksAPI.ExternalIPBlocks(
    this._client,
  );

  /**
   * Get certificate info
   *
   * @example
   * ```ts
   * const api = await client.iaas.api.retrieve('id', {
   *   apiVersion: 'apiVersion',
   * });
   * ```
   */
  retrieve(id: string, query: APIRetrieveParams, options?: RequestOptions): APIPromise<APIRetrieveResponse> {
    return this._client.get(path`/iaas/api/certificates/${id}`, { query, ...options });
  }

  /**
   * Retrieve AuthToken for local csp users. When accessing other endpoints the
   * `Bearer` authentication scheme and the received `token` must be provided in the
   * `Authorization` request header field as follows: `Authorization: Bearer {token}`
   *
   * @example
   * ```ts
   * const response = await client.iaas.api.login({
   *   refreshToken: '5e7c2c-9a9e-4b0-9339-a7f94',
   * });
   * ```
   */
  login(params: APILoginParams, options?: RequestOptions): APIPromise<APILoginResponse> {
    const { apiVersion, ...body } = params;
    return this._client.post('/iaas/api/login', { query: { apiVersion }, body, ...options });
  }

  /**
   * The page contains information about the supported API versions and the latest
   * API version. The version parameter is mandatory for endpoints introduced after
   * version 2019-01-15and optional for the rest though highly recommended. If you do
   * not specify explicitly an exact version, you will be calling the latest
   * supported General Availability API version. Here is an example of a call which
   * specifies the exact version you are using:
   * `GET /iaas/api/network-profiles?apiVersion=2021-07-15`
   *
   * Note that this version is deprecated: 2019-01-15.
   *
   * @example
   * ```ts
   * const response = await client.iaas.api.retrieveAbout();
   * ```
   */
  retrieveAbout(options?: RequestOptions): APIPromise<APIRetrieveAboutResponse> {
    return this._client.get('/iaas/api/about', options);
  }

  /**
   * Get all Event logs
   *
   * @example
   * ```ts
   * const response = await client.iaas.api.retrieveEventLogs();
   * ```
   */
  retrieveEventLogs(
    query: APIRetrieveEventLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIRetrieveEventLogsResponse> {
    return this._client.get('/iaas/api/event-logs', { query, ...options });
  }

  /**
   * Get all fabric AWS volume types.
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.retrieveFabricAwsVolumeTypes();
   * ```
   */
  retrieveFabricAwsVolumeTypes(
    query: APIRetrieveFabricAwsVolumeTypesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIRetrieveFabricAwsVolumeTypesResponse> {
    return this._client.get('/iaas/api/fabric-aws-volume-types', { query, ...options });
  }

  /**
   * Get all Azure disk encryption sets
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.retrieveFabricAzureDiskEncryptionSets(
   *     { regionId: 'regionId' },
   *   );
   * ```
   */
  retrieveFabricAzureDiskEncryptionSets(
    query: APIRetrieveFabricAzureDiskEncryptionSetsParams,
    options?: RequestOptions,
  ): APIPromise<APIRetrieveFabricAzureDiskEncryptionSetsResponse> {
    return this._client.get('/iaas/api/fabric-azure-disk-encryption-sets', { query, ...options });
  }

  /**
   * Get all fabric flavors
   *
   * @example
   * ```ts
   * const response =
   *   await client.iaas.api.retrieveFabricFlavors();
   * ```
   */
  retrieveFabricFlavors(
    query: APIRetrieveFabricFlavorsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIRetrieveFabricFlavorsResponse> {
    return this._client.get('/iaas/api/fabric-flavors', { query, ...options });
  }

  /**
   * Get all flavors defined in FlavorProfile
   *
   * @example
   * ```ts
   * const response = await client.iaas.api.retrieveFlavors();
   * ```
   */
  retrieveFlavors(
    query: APIRetrieveFlavorsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIRetrieveFlavorsResponse> {
    return this._client.get('/iaas/api/flavors', { query, ...options });
  }

  /**
   * Get all folders within the current organization
   *
   * @example
   * ```ts
   * const response = await client.iaas.api.retrieveFolders({
   *   apiVersion: 'apiVersion',
   * });
   * ```
   */
  retrieveFolders(
    query: APIRetrieveFoldersParams,
    options?: RequestOptions,
  ): APIPromise<APIRetrieveFoldersResponse> {
    return this._client.get('/iaas/api/folders', { query, ...options });
  }

  /**
   * Get all images defined in ImageProfile. To get all enumerated images use Fabric
   * Image endpoint.
   *
   * @example
   * ```ts
   * const response = await client.iaas.api.retrieveImages();
   * ```
   */
  retrieveImages(
    query: APIRetrieveImagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIRetrieveImagesResponse> {
    return this._client.get('/iaas/api/images', { query, ...options });
  }

  /**
   * Get Request Graph For Provisioning Request
   *
   * @example
   * ```ts
   * const response = await client.iaas.api.retrieveRequestGraph(
   *   { deploymentId: 'deploymentId', flowId: 'flowId' },
   * );
   * ```
   */
  retrieveRequestGraph(
    query: APIRetrieveRequestGraphParams,
    options?: RequestOptions,
  ): APIPromise<APIRetrieveRequestGraphResponse> {
    return this._client.get('/iaas/api/request-graph', { query, ...options });
  }
}

/**
 * Certificate for a cloud account.
 */
export interface APIRetrieveResponse {
  /**
   * The certificate in string format.
   */
  certificate: string;

  /**
   * Certificate related properties which may provide additional information about
   * the given certificate.
   */
  properties: { [key: string]: string };

  /**
   * Details about the certificate.
   */
  certificateErrorDetail?:
    | 'UNTRUSTED_CERTIFICATE'
    | 'EXPIRED_CERTIFICATE'
    | 'NOT_YET_VALID_CERTIFICATE'
    | 'KEYSTORE_TAMPERED_OR_PASSWORD_INCORRECT';
}

/**
 * Entity that holds auth token details.
 */
export interface APILoginResponse {
  /**
   * Base64 encoded auth token.
   */
  token: string;

  /**
   * Type of the token.
   */
  tokenType: string;
}

/**
 * State object representing an about page that includes api versioning information
 */
export interface APIRetrieveAboutResponse {
  /**
   * The latest version of the API in yyyy-MM-dd format (UTC).
   */
  latestApiVersion: string;

  /**
   * A collection of all currently supported api versions.
   */
  supportedApis: Array<APIRetrieveAboutResponse.SupportedAPI>;
}

export namespace APIRetrieveAboutResponse {
  /**
   * A collection of all currently supported api versions.
   */
  export interface SupportedAPI {
    /**
     * The version of the API in yyyy-MM-dd format (UTC).
     */
    apiVersion: string;

    /**
     * The link to the documentation of this api version
     */
    documentationLink: string;

    /**
     * The deprecation policy may contain information whether the api is in deprecated
     * state and when it expires.
     */
    deprecationPolicy?: SupportedAPI.DeprecationPolicy;
  }

  export namespace SupportedAPI {
    /**
     * The deprecation policy may contain information whether the api is in deprecated
     * state and when it expires.
     */
    export interface DeprecationPolicy {
      /**
       * The date the api was deprecated in yyyy-MM-dd format (UTC). Could be empty if
       * the api is not deprecated.
       */
      deprecatedAt?: string;

      /**
       * A free text description that contains information about why this api is
       * deprecated and how to migrate to a newer version.
       */
      description?: string;

      /**
       * The date the api support will be dropped in yyyy-MM-dd format (UTC). The api may
       * still be available for use after that date but this is not guaranteed.
       */
      expiresAt?: string;
    }
  }
}

/**
 * State object representing a query result of event logs.
 */
export interface APIRetrieveEventLogsResponse {
  /**
   * List of content items
   */
  content?: Array<APIRetrieveEventLogsResponse.Content>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export namespace APIRetrieveEventLogsResponse {
  /**
   * An object used to show event state logs
   */
  export interface Content {
    /**
     * The id of this resource instance
     */
    id: string;

    /**
     * User-friendly description of the event
     */
    description?: string;

    /**
     * Severity type.
     */
    eventLogType?: string;

    /**
     * The id of the organization this entity belongs to.
     */
    orgId?: string;

    /**
     * Email of the user or display name of the group that owns the entity.
     */
    owner?: string;

    /**
     * Date when the entity was last updated. The date is ISO 8601 and UTC.
     */
    updatedAt?: string;
  }
}

export interface APIRetrieveFabricAwsVolumeTypesResponse {
  volumeTypes?: Array<string>;
}

export interface APIRetrieveFabricAzureDiskEncryptionSetsResponse {
  diskEncryptionSets?: Array<APIRetrieveFabricAzureDiskEncryptionSetsResponse.DiskEncryptionSet>;
}

export namespace APIRetrieveFabricAzureDiskEncryptionSetsResponse {
  export interface DiskEncryptionSet {
    id?: string;

    key?: string;

    name?: string;

    regionId?: string;

    vault?: string;
  }
}

/**
 * State object representing a query result of fabric flavors.
 */
export interface APIRetrieveFabricFlavorsResponse {
  /**
   * List of content items
   */
  content?: Array<APIRetrieveFabricFlavorsResponse.Content>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export namespace APIRetrieveFabricFlavorsResponse {
  /**
   * Represents a fabric flavor from the corresponding cloud end-point
   */
  export interface Content {
    /**
     * The internal identification used by the corresponding cloud end-point
     */
    id?: string;

    /**
     * Size of the boot disk (in megabytes). Not populated when inapplicable.
     */
    bootDiskSizeInMB?: number;

    /**
     * Number of Core per Socket. Not populated when inapplicable.
     */
    coreCount?: number;

    /**
     * Number of CPU cores. Not populated when inapplicable.
     */
    cpuCount?: number;

    /**
     * Number of data disks. Not populated when inapplicable.
     */
    dataDiskMaxCount?: number;

    /**
     * Size of the data disks (in megabytes). Not populated when inapplicable.
     */
    dataDiskSizeInMB?: number;

    /**
     * Total amount of memory (in megabytes). Not populated when inapplicable.
     */
    memoryInMB?: number;

    /**
     * The value of the instance type in the corresponding cloud.
     */
    name?: string;

    /**
     * The type of network supported by this instance type. Not populated when
     * inapplicable.
     */
    networkType?: string;

    /**
     * The type of storage supported by this instance type. Not populated when
     * inapplicable.
     */
    storageType?: string;
  }
}

/**
 * State object representing a query result of falvor mappings.
 */
export interface APIRetrieveFlavorsResponse {
  /**
   * List of content items
   */
  content?: Array<FlavorProfilesAPI.FlavorMapping>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

/**
 * State object representing a query result of folders.
 */
export interface APIRetrieveFoldersResponse {
  /**
   * List of content items
   */
  content?: Array<APIRetrieveFoldersResponse.Content>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

export namespace APIRetrieveFoldersResponse {
  /**
   * Represents a structure that holds details of vSphere folders**HATEOAS** links:
   * **self** - Folder - Self link to this folder
   */
  export interface Content {
    /**
     * The id of this resource instance
     */
    id: string;

    /**
     * HATEOAS of the entity
     */
    _links: Content._Links;

    /**
     * A set of cloud account IDs that are associated with the particular Folder
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
     * Date when the entity was last updated. The date is ISO 8601 and UTC.
     */
    updatedAt?: string;
  }

  export namespace Content {
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
}

/**
 * State object representing a query result of image mappings.
 */
export interface APIRetrieveImagesResponse {
  /**
   * List of content items
   */
  content?: Array<ImageProfilesAPI.ImageMapping>;

  /**
   * Number of elements in the current page
   */
  numberOfElements?: number;

  /**
   * Total number of elements. In some cases the field may not be populated
   */
  totalElements?: number;
}

/**
 * Result Of Request Graph For Provisioning Request
 */
export interface APIRetrieveRequestGraphResponse {
  /**
   * Projects link users and cloud zones, thus controlling who can use what cloud
   * resources. **HATEOAS** links: **self** - Project - Self link to this project
   */
  project?: ProjectsAPI.Project;

  /**
   * Collection of Task Service Document History
   */
  tasks?: Array<APIRetrieveRequestGraphResponse.Task>;
}

export namespace APIRetrieveRequestGraphResponse {
  /**
   * Task Service Document History
   */
  export interface Task {
    /**
     * ID Of Provisioning Request Task.
     */
    id?: string;

    /**
     * Collection of Task Service Stages with transition details.
     */
    stages?: Array<Task.Stage>;
  }

  export namespace Task {
    /**
     * Provisioning Request Stage
     */
    export interface Stage {
      /**
       * Collection of resources
       */
      resourceLinks?: Array<string>;

      /**
       * Transition Source Of Provisioning Request
       */
      taskInfo?: Stage.TaskInfo;

      /**
       * SubStage Of Provisioning Request Task
       */
      taskSubStage?: string;

      timestampMicros?: number;

      /**
       * Transition Source Of Provisioning Request
       */
      transitionSource?: Stage.TransitionSource;
    }

    export namespace Stage {
      /**
       * Transition Source Of Provisioning Request
       */
      export interface TaskInfo {
        durationMicros?: number;

        failureMessage?: string;

        /**
         * ID of Provisioning Request Stage in the task
         */
        stage?: string;
      }

      /**
       * Transition Source Of Provisioning Request
       */
      export interface TransitionSource {
        /**
         * ID of Provisioning Request Stage in the task
         */
        id?: string;

        /**
         * Source SubStage Of Provisioning Request in the task
         */
        subStage?: string;

        /**
         * Time In Micros of stage transition from source stage.
         */
        timestampMicros?: number;
      }
    }
  }
}

export interface APIRetrieveParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;
}

export interface APILoginParams {
  /**
   * Body param: Refresh token obtained from the UI
   */
  refreshToken: string;

  /**
   * Query param: The version of the API in yyyy-MM-dd format (UTC). For versioning
   * information refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface APIRetrieveEventLogsParams {
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
   * End Date e.g. 2020-12-01T08:00:00.000Z
   */
  endDate?: string;

  /**
   * Start Date e.g. 2020-12-01T08:00:00.000Z
   */
  startDate?: string;
}

export interface APIRetrieveFabricAwsVolumeTypesParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface APIRetrieveFabricAzureDiskEncryptionSetsParams {
  /**
   * Region id
   */
  regionId: string;

  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface APIRetrieveFabricFlavorsParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * If set to true will include cores in response.
   */
  includeCores?: boolean;
}

export interface APIRetrieveFlavorsParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;

  /**
   * If set to true will include cores in response.
   */
  includeCores?: boolean;
}

export interface APIRetrieveFoldersParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion: string;

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
   * The ID of a vcenter cloud account.
   */
  cloudAccountId?: string;

  /**
   * The external unique identifier of the region associated with the vcenter cloud
   * account.
   */
  externalRegionId?: string;
}

export interface APIRetrieveImagesParams {
  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

export interface APIRetrieveRequestGraphParams {
  /**
   * Deployment Id For Provisioning Request
   */
  deploymentId: string;

  /**
   * Flow Id For Provisioning Request
   */
  flowId: string;

  /**
   * The version of the API in yyyy-MM-dd format (UTC). For versioning information
   * refer to /iaas/api/about
   */
  apiVersion?: string;
}

API.StorageProfiles = StorageProfiles;
API.Projects = Projects;
API.Naming = Naming;
API.Zones = Zones;
API.Tags = Tags;
API.StorageProfilesVsphere = StorageProfilesVsphere;
API.StorageProfilesGcp = StorageProfilesGcp;
API.StorageProfilesAzure = StorageProfilesAzure;
API.StorageProfilesAws = StorageProfilesAws;
API.SecurityGroups = SecurityGroups;
API.Networks = Networks;
API.NetworkProfiles = NetworkProfiles;
API.NetworkIPRanges = NetworkIPRanges;
API.Machines = Machines;
API.LoadBalancers = LoadBalancers;
API.IntegrationsIpam = IntegrationsIpam;
API.Integrations = Integrations;
API.ImageProfiles = ImageProfiles;
API.FlavorProfiles = FlavorProfiles;
API.Deployments = Deployments;
API.DataCollectors = DataCollectors;
API.ComputeNats = ComputeNats;
API.ComputeGateways = ComputeGateways;
API.CloudAccounts = CloudAccounts;
API.CloudAccountsVsphere = CloudAccountsVsphere;
API.CloudAccountsVmc = CloudAccountsVmc;
API.CloudAccountsVcf = CloudAccountsVcf;
API.CloudAccountsNsxV = CloudAccountsNsxV;
API.CloudAccountsNsxT = CloudAccountsNsxT;
API.CloudAccountsGcp = CloudAccountsGcp;
API.CloudAccountsAzure = CloudAccountsAzure;
API.CloudAccountsAws = CloudAccountsAws;
API.CloudAccountsAvilb = CloudAccountsAvilb;
API.BlockDevices = BlockDevices;
API.FabricVsphereDatastores = FabricVsphereDatastores;
API.FabricNetworks = FabricNetworks;
API.FabricNetworksVsphere = FabricNetworksVsphere;
API.FabricComputes = FabricComputes;
API.ExternalNetworkIPRanges = ExternalNetworkIPRanges;
API.ConfigurationProperties = ConfigurationProperties;
API.RequestTracker = RequestTracker;
API.Regions = Regions;
API.NetworkDomains = NetworkDomains;
API.FabricVsphereStoragePolicies = FabricVsphereStoragePolicies;
API.FabricImages = FabricImages;
API.FabricAzureStorageAccounts = FabricAzureStorageAccounts;
API.ExternalIPBlocks = ExternalIPBlocks;

export declare namespace API {
  export {
    type APIRetrieveResponse as APIRetrieveResponse,
    type APILoginResponse as APILoginResponse,
    type APIRetrieveAboutResponse as APIRetrieveAboutResponse,
    type APIRetrieveEventLogsResponse as APIRetrieveEventLogsResponse,
    type APIRetrieveFabricAwsVolumeTypesResponse as APIRetrieveFabricAwsVolumeTypesResponse,
    type APIRetrieveFabricAzureDiskEncryptionSetsResponse as APIRetrieveFabricAzureDiskEncryptionSetsResponse,
    type APIRetrieveFabricFlavorsResponse as APIRetrieveFabricFlavorsResponse,
    type APIRetrieveFlavorsResponse as APIRetrieveFlavorsResponse,
    type APIRetrieveFoldersResponse as APIRetrieveFoldersResponse,
    type APIRetrieveImagesResponse as APIRetrieveImagesResponse,
    type APIRetrieveRequestGraphResponse as APIRetrieveRequestGraphResponse,
    type APIRetrieveParams as APIRetrieveParams,
    type APILoginParams as APILoginParams,
    type APIRetrieveEventLogsParams as APIRetrieveEventLogsParams,
    type APIRetrieveFabricAwsVolumeTypesParams as APIRetrieveFabricAwsVolumeTypesParams,
    type APIRetrieveFabricAzureDiskEncryptionSetsParams as APIRetrieveFabricAzureDiskEncryptionSetsParams,
    type APIRetrieveFabricFlavorsParams as APIRetrieveFabricFlavorsParams,
    type APIRetrieveFlavorsParams as APIRetrieveFlavorsParams,
    type APIRetrieveFoldersParams as APIRetrieveFoldersParams,
    type APIRetrieveImagesParams as APIRetrieveImagesParams,
    type APIRetrieveRequestGraphParams as APIRetrieveRequestGraphParams,
  };

  export {
    StorageProfiles as StorageProfiles,
    type StorageProfile as StorageProfile,
    type StorageProfileAssociations as StorageProfileAssociations,
    type StorageProfileSpecification as StorageProfileSpecification,
    type StorageProfileRetrieveStorageProfilesResponse as StorageProfileRetrieveStorageProfilesResponse,
    type StorageProfileRetrieveParams as StorageProfileRetrieveParams,
    type StorageProfileUpdateParams as StorageProfileUpdateParams,
    type StorageProfileDeleteParams as StorageProfileDeleteParams,
    type StorageProfileRetrieveStorageProfilesParams as StorageProfileRetrieveStorageProfilesParams,
    type StorageProfileStorageProfilesParams as StorageProfileStorageProfilesParams,
  };

  export {
    Projects as Projects,
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
    Naming as Naming,
    type CustomNaming as CustomNaming,
    type CustomNamingModel as CustomNamingModel,
    type CustomNamingProject as CustomNamingProject,
    type NamingListResponse as NamingListResponse,
    type NamingCreateParams as NamingCreateParams,
    type NamingRetrieveParams as NamingRetrieveParams,
    type NamingListParams as NamingListParams,
    type NamingDeleteParams as NamingDeleteParams,
  };

  export {
    Zones as Zones,
    type FabricComputeResult as FabricComputeResult,
    type Zone as Zone,
    type ZoneSpecification as ZoneSpecification,
    type ZoneListResponse as ZoneListResponse,
    type ZoneCreateParams as ZoneCreateParams,
    type ZoneRetrieveParams as ZoneRetrieveParams,
    type ZoneUpdateParams as ZoneUpdateParams,
    type ZoneListParams as ZoneListParams,
    type ZoneDeleteParams as ZoneDeleteParams,
    type ZoneRetrieveComputesParams as ZoneRetrieveComputesParams,
  };

  export {
    Tags as Tags,
    type Tag as Tag,
    type TagListResponse as TagListResponse,
    type TagCreateParams as TagCreateParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
    type TagTagsUsageParams as TagTagsUsageParams,
  };

  export {
    StorageProfilesVsphere as StorageProfilesVsphere,
    type StorageProfileVsphereSpecification as StorageProfileVsphereSpecification,
    type VsphereStorageProfile as VsphereStorageProfile,
    type StorageProfilesVsphereRetrieveStorageProfilesVsphereResponse as StorageProfilesVsphereRetrieveStorageProfilesVsphereResponse,
    type StorageProfilesVsphereRetrieveParams as StorageProfilesVsphereRetrieveParams,
    type StorageProfilesVsphereUpdateParams as StorageProfilesVsphereUpdateParams,
    type StorageProfilesVsphereDeleteParams as StorageProfilesVsphereDeleteParams,
    type StorageProfilesVsphereRetrieveStorageProfilesVsphereParams as StorageProfilesVsphereRetrieveStorageProfilesVsphereParams,
    type StorageProfilesVsphereStorageProfilesVsphereParams as StorageProfilesVsphereStorageProfilesVsphereParams,
  };

  export {
    StorageProfilesGcp as StorageProfilesGcp,
    type GcpStorageProfile as GcpStorageProfile,
    type StorageProfileGcpSpecification as StorageProfileGcpSpecification,
    type StorageProfilesGcpRetrieveStorageProfilesGcpResponse as StorageProfilesGcpRetrieveStorageProfilesGcpResponse,
    type StorageProfilesGcpRetrieveParams as StorageProfilesGcpRetrieveParams,
    type StorageProfilesGcpUpdateParams as StorageProfilesGcpUpdateParams,
    type StorageProfilesGcpDeleteParams as StorageProfilesGcpDeleteParams,
    type StorageProfilesGcpRetrieveStorageProfilesGcpParams as StorageProfilesGcpRetrieveStorageProfilesGcpParams,
    type StorageProfilesGcpStorageProfilesGcpParams as StorageProfilesGcpStorageProfilesGcpParams,
  };

  export {
    StorageProfilesAzure as StorageProfilesAzure,
    type AzureStorageProfile as AzureStorageProfile,
    type StorageProfileAzureSpecification as StorageProfileAzureSpecification,
    type StorageProfilesAzureRetrieveStorageProfilesAzureResponse as StorageProfilesAzureRetrieveStorageProfilesAzureResponse,
    type StorageProfilesAzureRetrieveParams as StorageProfilesAzureRetrieveParams,
    type StorageProfilesAzureUpdateParams as StorageProfilesAzureUpdateParams,
    type StorageProfilesAzureDeleteParams as StorageProfilesAzureDeleteParams,
    type StorageProfilesAzureRetrieveStorageProfilesAzureParams as StorageProfilesAzureRetrieveStorageProfilesAzureParams,
    type StorageProfilesAzureStorageProfilesAzureParams as StorageProfilesAzureStorageProfilesAzureParams,
  };

  export {
    StorageProfilesAws as StorageProfilesAws,
    type AwsStorageProfile as AwsStorageProfile,
    type StorageProfileAwsSpecification as StorageProfileAwsSpecification,
    type StorageProfilesAwRetrieveStorageProfilesAwsResponse as StorageProfilesAwRetrieveStorageProfilesAwsResponse,
    type StorageProfilesAwRetrieveParams as StorageProfilesAwRetrieveParams,
    type StorageProfilesAwUpdateParams as StorageProfilesAwUpdateParams,
    type StorageProfilesAwDeleteParams as StorageProfilesAwDeleteParams,
    type StorageProfilesAwRetrieveStorageProfilesAwsParams as StorageProfilesAwRetrieveStorageProfilesAwsParams,
    type StorageProfilesAwStorageProfilesAwsParams as StorageProfilesAwStorageProfilesAwsParams,
  };

  export {
    SecurityGroups as SecurityGroups,
    type SecurityGroup as SecurityGroup,
    type SecurityGroupRetrieveSecurityGroupsResponse as SecurityGroupRetrieveSecurityGroupsResponse,
    type SecurityGroupRetrieveParams as SecurityGroupRetrieveParams,
    type SecurityGroupUpdateParams as SecurityGroupUpdateParams,
    type SecurityGroupDeleteParams as SecurityGroupDeleteParams,
    type SecurityGroupRetrieveSecurityGroupsParams as SecurityGroupRetrieveSecurityGroupsParams,
    type SecurityGroupSecurityGroupsParams as SecurityGroupSecurityGroupsParams,
  };

  export {
    Networks as Networks,
    type Network as Network,
    type PlacementConstraint as PlacementConstraint,
    type NetworkListResponse as NetworkListResponse,
    type NetworkCreateParams as NetworkCreateParams,
    type NetworkRetrieveParams as NetworkRetrieveParams,
    type NetworkListParams as NetworkListParams,
    type NetworkDeleteParams as NetworkDeleteParams,
    type NetworkRetrieveNetworkIPRangesParams as NetworkRetrieveNetworkIPRangesParams,
  };

  export {
    NetworkProfiles as NetworkProfiles,
    type NetworkProfile as NetworkProfile,
    type NetworkProfileSpecification as NetworkProfileSpecification,
    type NetworkProfileRetrieveNetworkProfilesResponse as NetworkProfileRetrieveNetworkProfilesResponse,
    type NetworkProfileRetrieveParams as NetworkProfileRetrieveParams,
    type NetworkProfileUpdateParams as NetworkProfileUpdateParams,
    type NetworkProfileDeleteParams as NetworkProfileDeleteParams,
    type NetworkProfileNetworkProfilesParams as NetworkProfileNetworkProfilesParams,
    type NetworkProfileRetrieveNetworkProfilesParams as NetworkProfileRetrieveNetworkProfilesParams,
  };

  export {
    NetworkIPRanges as NetworkIPRanges,
    type NetworkIPRangeBase as NetworkIPRangeBase,
    type NetworkIPRangeSpecification as NetworkIPRangeSpecification,
    type NetworkIPRangeRetrieveResponse as NetworkIPRangeRetrieveResponse,
    type NetworkIPRangeRetrieveNetworkIPRangesResponse as NetworkIPRangeRetrieveNetworkIPRangesResponse,
    type NetworkIPRangeRetrieveParams as NetworkIPRangeRetrieveParams,
    type NetworkIPRangeUpdateParams as NetworkIPRangeUpdateParams,
    type NetworkIPRangeDeleteParams as NetworkIPRangeDeleteParams,
    type NetworkIPRangeNetworkIPRangesParams as NetworkIPRangeNetworkIPRangesParams,
    type NetworkIPRangeRetrieveNetworkIPRangesParams as NetworkIPRangeRetrieveNetworkIPRangesParams,
  };

  export {
    Machines as Machines,
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
    LoadBalancers as LoadBalancers,
    type LoadBalancer as LoadBalancer,
    type LoadBalancerRetrieveLoadBalancersResponse as LoadBalancerRetrieveLoadBalancersResponse,
    type LoadBalancerRetrieveParams as LoadBalancerRetrieveParams,
    type LoadBalancerDeleteParams as LoadBalancerDeleteParams,
    type LoadBalancerLoadBalancersParams as LoadBalancerLoadBalancersParams,
    type LoadBalancerRetrieveLoadBalancersParams as LoadBalancerRetrieveLoadBalancersParams,
  };

  export { IntegrationsIpam as IntegrationsIpam };

  export {
    Integrations as Integrations,
    type CertificateInfoSpecification as CertificateInfoSpecification,
    type Integration as Integration,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationCreateParams as IntegrationCreateParams,
    type IntegrationRetrieveParams as IntegrationRetrieveParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationDeleteParams as IntegrationDeleteParams,
  };

  export {
    ImageProfiles as ImageProfiles,
    type ImageMapping as ImageMapping,
    type ImageProfile as ImageProfile,
    type ImageProfileRetrieveImageProfilesResponse as ImageProfileRetrieveImageProfilesResponse,
    type ImageProfileRetrieveParams as ImageProfileRetrieveParams,
    type ImageProfileUpdateParams as ImageProfileUpdateParams,
    type ImageProfileDeleteParams as ImageProfileDeleteParams,
    type ImageProfileImageProfilesParams as ImageProfileImageProfilesParams,
    type ImageProfileRetrieveImageProfilesParams as ImageProfileRetrieveImageProfilesParams,
  };

  export {
    FlavorProfiles as FlavorProfiles,
    type FlavorMapping as FlavorMapping,
    type FlavorProfile as FlavorProfile,
    type FlavorProfileRetrieveFlavorProfilesResponse as FlavorProfileRetrieveFlavorProfilesResponse,
    type FlavorProfileRetrieveParams as FlavorProfileRetrieveParams,
    type FlavorProfileUpdateParams as FlavorProfileUpdateParams,
    type FlavorProfileDeleteParams as FlavorProfileDeleteParams,
    type FlavorProfileFlavorProfilesParams as FlavorProfileFlavorProfilesParams,
    type FlavorProfileRetrieveFlavorProfilesParams as FlavorProfileRetrieveFlavorProfilesParams,
  };

  export {
    Deployments as Deployments,
    type Deployment as Deployment,
    type DeploymentListResponse as DeploymentListResponse,
    type DeploymentCreateParams as DeploymentCreateParams,
    type DeploymentRetrieveParams as DeploymentRetrieveParams,
    type DeploymentListParams as DeploymentListParams,
    type DeploymentDeleteParams as DeploymentDeleteParams,
  };

  export {
    DataCollectors as DataCollectors,
    type DataCollector as DataCollector,
    type DataCollectorDataCollectorsResponse as DataCollectorDataCollectorsResponse,
    type DataCollectorRetrieveDataCollectorsResponse as DataCollectorRetrieveDataCollectorsResponse,
    type DataCollectorRetrieveParams as DataCollectorRetrieveParams,
    type DataCollectorDeleteParams as DataCollectorDeleteParams,
    type DataCollectorDataCollectorsParams as DataCollectorDataCollectorsParams,
    type DataCollectorRetrieveDataCollectorsParams as DataCollectorRetrieveDataCollectorsParams,
  };

  export {
    ComputeNats as ComputeNats,
    type ComputeNat as ComputeNat,
    type ComputeNatRetrieveComputeNatsResponse as ComputeNatRetrieveComputeNatsResponse,
    type ComputeNatRetrieveParams as ComputeNatRetrieveParams,
    type ComputeNatDeleteParams as ComputeNatDeleteParams,
    type ComputeNatComputeNatsParams as ComputeNatComputeNatsParams,
    type ComputeNatRetrieveComputeNatsParams as ComputeNatRetrieveComputeNatsParams,
  };

  export {
    ComputeGateways as ComputeGateways,
    type ComputeGateway as ComputeGateway,
    type ComputeGatewayRetrieveComputeGatewaysResponse as ComputeGatewayRetrieveComputeGatewaysResponse,
    type ComputeGatewayRetrieveParams as ComputeGatewayRetrieveParams,
    type ComputeGatewayDeleteParams as ComputeGatewayDeleteParams,
    type ComputeGatewayComputeGatewaysParams as ComputeGatewayComputeGatewaysParams,
    type ComputeGatewayRetrieveComputeGatewaysParams as ComputeGatewayRetrieveComputeGatewaysParams,
  };

  export {
    CloudAccounts as CloudAccounts,
    type CloudAccount as CloudAccount,
    type CloudAccountRetrieveCloudAccountsResponse as CloudAccountRetrieveCloudAccountsResponse,
    type CloudAccountRetrieveParams as CloudAccountRetrieveParams,
    type CloudAccountUpdateParams as CloudAccountUpdateParams,
    type CloudAccountDeleteParams as CloudAccountDeleteParams,
    type CloudAccountCloudAccountsParams as CloudAccountCloudAccountsParams,
    type CloudAccountHealthCheckParams as CloudAccountHealthCheckParams,
    type CloudAccountPrivateImageEnumerationParams as CloudAccountPrivateImageEnumerationParams,
    type CloudAccountRetrieveCloudAccountsParams as CloudAccountRetrieveCloudAccountsParams,
  };

  export {
    CloudAccountsVsphere as CloudAccountsVsphere,
    type CloudAccountVsphere as CloudAccountVsphere,
    type RegionSpecification as RegionSpecification,
    type CloudAccountsVsphereRetrieveCloudAccountsVsphereResponse as CloudAccountsVsphereRetrieveCloudAccountsVsphereResponse,
    type CloudAccountsVsphereRetrieveParams as CloudAccountsVsphereRetrieveParams,
    type CloudAccountsVsphereUpdateParams as CloudAccountsVsphereUpdateParams,
    type CloudAccountsVsphereDeleteParams as CloudAccountsVsphereDeleteParams,
    type CloudAccountsVsphereCloudAccountsVsphereParams as CloudAccountsVsphereCloudAccountsVsphereParams,
    type CloudAccountsVspherePrivateImageEnumerationParams as CloudAccountsVspherePrivateImageEnumerationParams,
    type CloudAccountsVsphereRegionEnumerationParams as CloudAccountsVsphereRegionEnumerationParams,
    type CloudAccountsVsphereRetrieveCloudAccountsVsphereParams as CloudAccountsVsphereRetrieveCloudAccountsVsphereParams,
  };

  export {
    CloudAccountsVmc as CloudAccountsVmc,
    type CloudAccountVmc as CloudAccountVmc,
    type CloudAccountsVmcRetrieveCloudAccountsVmcResponse as CloudAccountsVmcRetrieveCloudAccountsVmcResponse,
    type CloudAccountsVmcRetrieveParams as CloudAccountsVmcRetrieveParams,
    type CloudAccountsVmcUpdateParams as CloudAccountsVmcUpdateParams,
    type CloudAccountsVmcDeleteParams as CloudAccountsVmcDeleteParams,
    type CloudAccountsVmcCloudAccountsVmcParams as CloudAccountsVmcCloudAccountsVmcParams,
    type CloudAccountsVmcPrivateImageEnumerationParams as CloudAccountsVmcPrivateImageEnumerationParams,
    type CloudAccountsVmcRegionEnumerationParams as CloudAccountsVmcRegionEnumerationParams,
    type CloudAccountsVmcRetrieveCloudAccountsVmcParams as CloudAccountsVmcRetrieveCloudAccountsVmcParams,
  };

  export {
    CloudAccountsVcf as CloudAccountsVcf,
    type CloudAccountVcf as CloudAccountVcf,
    type CloudAccountsVcfRetrieveCloudAccountsVcfResponse as CloudAccountsVcfRetrieveCloudAccountsVcfResponse,
    type CloudAccountsVcfRetrieveParams as CloudAccountsVcfRetrieveParams,
    type CloudAccountsVcfUpdateParams as CloudAccountsVcfUpdateParams,
    type CloudAccountsVcfDeleteParams as CloudAccountsVcfDeleteParams,
    type CloudAccountsVcfCloudAccountsVcfParams as CloudAccountsVcfCloudAccountsVcfParams,
    type CloudAccountsVcfPrivateImageEnumerationParams as CloudAccountsVcfPrivateImageEnumerationParams,
    type CloudAccountsVcfRegionEnumerationParams as CloudAccountsVcfRegionEnumerationParams,
    type CloudAccountsVcfRetrieveCloudAccountsVcfParams as CloudAccountsVcfRetrieveCloudAccountsVcfParams,
  };

  export {
    CloudAccountsNsxV as CloudAccountsNsxV,
    type CloudAccountNsxV as CloudAccountNsxV,
    type CloudAccountsNsxVRetrieveCloudAccountsNsxVResponse as CloudAccountsNsxVRetrieveCloudAccountsNsxVResponse,
    type CloudAccountsNsxVRetrieveParams as CloudAccountsNsxVRetrieveParams,
    type CloudAccountsNsxVUpdateParams as CloudAccountsNsxVUpdateParams,
    type CloudAccountsNsxVDeleteParams as CloudAccountsNsxVDeleteParams,
    type CloudAccountsNsxVCloudAccountsNsxVParams as CloudAccountsNsxVCloudAccountsNsxVParams,
    type CloudAccountsNsxVRetrieveCloudAccountsNsxVParams as CloudAccountsNsxVRetrieveCloudAccountsNsxVParams,
  };

  export {
    CloudAccountsNsxT as CloudAccountsNsxT,
    type CloudAccountNsxT as CloudAccountNsxT,
    type CloudAccountsNsxTRetrieveCloudAccountsNsxTResponse as CloudAccountsNsxTRetrieveCloudAccountsNsxTResponse,
    type CloudAccountsNsxTRetrieveParams as CloudAccountsNsxTRetrieveParams,
    type CloudAccountsNsxTUpdateParams as CloudAccountsNsxTUpdateParams,
    type CloudAccountsNsxTDeleteParams as CloudAccountsNsxTDeleteParams,
    type CloudAccountsNsxTCloudAccountsNsxTParams as CloudAccountsNsxTCloudAccountsNsxTParams,
    type CloudAccountsNsxTRetrieveCloudAccountsNsxTParams as CloudAccountsNsxTRetrieveCloudAccountsNsxTParams,
  };

  export {
    CloudAccountsGcp as CloudAccountsGcp,
    type CloudAccountGcp as CloudAccountGcp,
    type CloudAccountsGcpRetrieveCloudAccountsGcpResponse as CloudAccountsGcpRetrieveCloudAccountsGcpResponse,
    type CloudAccountsGcpRetrieveParams as CloudAccountsGcpRetrieveParams,
    type CloudAccountsGcpUpdateParams as CloudAccountsGcpUpdateParams,
    type CloudAccountsGcpDeleteParams as CloudAccountsGcpDeleteParams,
    type CloudAccountsGcpCloudAccountsGcpParams as CloudAccountsGcpCloudAccountsGcpParams,
    type CloudAccountsGcpPrivateImageEnumerationParams as CloudAccountsGcpPrivateImageEnumerationParams,
    type CloudAccountsGcpRegionEnumerationParams as CloudAccountsGcpRegionEnumerationParams,
    type CloudAccountsGcpRetrieveCloudAccountsGcpParams as CloudAccountsGcpRetrieveCloudAccountsGcpParams,
  };

  export {
    CloudAccountsAzure as CloudAccountsAzure,
    type CloudAccountAzure as CloudAccountAzure,
    type CloudAccountsAzureRetrieveCloudAccountsAzureResponse as CloudAccountsAzureRetrieveCloudAccountsAzureResponse,
    type CloudAccountsAzureRetrieveParams as CloudAccountsAzureRetrieveParams,
    type CloudAccountsAzureUpdateParams as CloudAccountsAzureUpdateParams,
    type CloudAccountsAzureDeleteParams as CloudAccountsAzureDeleteParams,
    type CloudAccountsAzureCloudAccountsAzureParams as CloudAccountsAzureCloudAccountsAzureParams,
    type CloudAccountsAzurePrivateImageEnumerationParams as CloudAccountsAzurePrivateImageEnumerationParams,
    type CloudAccountsAzureRegionEnumerationParams as CloudAccountsAzureRegionEnumerationParams,
    type CloudAccountsAzureRetrieveCloudAccountsAzureParams as CloudAccountsAzureRetrieveCloudAccountsAzureParams,
  };

  export {
    CloudAccountsAws as CloudAccountsAws,
    type CloudAccountAws as CloudAccountAws,
    type CloudAccountsAwRetrieveCloudAccountsAwsResponse as CloudAccountsAwRetrieveCloudAccountsAwsResponse,
    type CloudAccountsAwRetrieveParams as CloudAccountsAwRetrieveParams,
    type CloudAccountsAwUpdateParams as CloudAccountsAwUpdateParams,
    type CloudAccountsAwDeleteParams as CloudAccountsAwDeleteParams,
    type CloudAccountsAwCloudAccountsAwsParams as CloudAccountsAwCloudAccountsAwsParams,
    type CloudAccountsAwPrivateImageEnumerationParams as CloudAccountsAwPrivateImageEnumerationParams,
    type CloudAccountsAwRegionEnumerationParams as CloudAccountsAwRegionEnumerationParams,
    type CloudAccountsAwRetrieveCloudAccountsAwsParams as CloudAccountsAwRetrieveCloudAccountsAwsParams,
  };

  export {
    CloudAccountsAvilb as CloudAccountsAvilb,
    type CloudAccountAviLb as CloudAccountAviLb,
    type CloudAccountsAvilbRetrieveCloudAccountsAvilbResponse as CloudAccountsAvilbRetrieveCloudAccountsAvilbResponse,
    type CloudAccountsAvilbRetrieveParams as CloudAccountsAvilbRetrieveParams,
    type CloudAccountsAvilbUpdateParams as CloudAccountsAvilbUpdateParams,
    type CloudAccountsAvilbDeleteParams as CloudAccountsAvilbDeleteParams,
    type CloudAccountsAvilbCloudAccountsAvilbParams as CloudAccountsAvilbCloudAccountsAvilbParams,
    type CloudAccountsAvilbRetrieveCloudAccountsAvilbParams as CloudAccountsAvilbRetrieveCloudAccountsAvilbParams,
  };

  export {
    BlockDevices as BlockDevices,
    type BlockDevice as BlockDevice,
    type BlockDeviceRetrieveParams as BlockDeviceRetrieveParams,
    type BlockDeviceUpdateParams as BlockDeviceUpdateParams,
    type BlockDeviceDeleteParams as BlockDeviceDeleteParams,
    type BlockDeviceBlockDevicesParams as BlockDeviceBlockDevicesParams,
    type BlockDeviceRetrieveBlockDevicesParams as BlockDeviceRetrieveBlockDevicesParams,
  };

  export {
    FabricVsphereDatastores as FabricVsphereDatastores,
    type FabricVsphereDatastore as FabricVsphereDatastore,
    type FabricVsphereDatastoreRetrieveFabricVsphereDatastoresResponse as FabricVsphereDatastoreRetrieveFabricVsphereDatastoresResponse,
    type FabricVsphereDatastoreRetrieveParams as FabricVsphereDatastoreRetrieveParams,
    type FabricVsphereDatastoreUpdateParams as FabricVsphereDatastoreUpdateParams,
    type FabricVsphereDatastoreRetrieveFabricVsphereDatastoresParams as FabricVsphereDatastoreRetrieveFabricVsphereDatastoresParams,
  };

  export {
    FabricNetworks as FabricNetworks,
    type FabricNetwork as FabricNetwork,
    type FabricNetworkResult as FabricNetworkResult,
    type FabricNetworkRetrieveParams as FabricNetworkRetrieveParams,
    type FabricNetworkUpdateParams as FabricNetworkUpdateParams,
    type FabricNetworkRetrieveFabricNetworksParams as FabricNetworkRetrieveFabricNetworksParams,
    type FabricNetworkRetrieveNetworkIPRangesParams as FabricNetworkRetrieveNetworkIPRangesParams,
  };

  export {
    FabricNetworksVsphere as FabricNetworksVsphere,
    type FabricNetworkVsphere as FabricNetworkVsphere,
    type FabricNetworksVsphereRetrieveFabricNetworksVsphereResponse as FabricNetworksVsphereRetrieveFabricNetworksVsphereResponse,
    type FabricNetworksVsphereRetrieveParams as FabricNetworksVsphereRetrieveParams,
    type FabricNetworksVsphereUpdateParams as FabricNetworksVsphereUpdateParams,
    type FabricNetworksVsphereRetrieveFabricNetworksVsphereParams as FabricNetworksVsphereRetrieveFabricNetworksVsphereParams,
    type FabricNetworksVsphereRetrieveNetworkIPRangesParams as FabricNetworksVsphereRetrieveNetworkIPRangesParams,
  };

  export {
    FabricComputes as FabricComputes,
    type FabricCompute as FabricCompute,
    type FabricComputeRetrieveParams as FabricComputeRetrieveParams,
    type FabricComputeUpdateParams as FabricComputeUpdateParams,
    type FabricComputeRetrieveFabricComputesParams as FabricComputeRetrieveFabricComputesParams,
  };

  export {
    ExternalNetworkIPRanges as ExternalNetworkIPRanges,
    type ExternalNetworkIPRange as ExternalNetworkIPRange,
    type ExternalNetworkIPRangeRetrieveExternalNetworkIPRangesResponse as ExternalNetworkIPRangeRetrieveExternalNetworkIPRangesResponse,
    type ExternalNetworkIPRangeRetrieveParams as ExternalNetworkIPRangeRetrieveParams,
    type ExternalNetworkIPRangeUpdateParams as ExternalNetworkIPRangeUpdateParams,
    type ExternalNetworkIPRangeRetrieveExternalNetworkIPRangesParams as ExternalNetworkIPRangeRetrieveExternalNetworkIPRangesParams,
  };

  export {
    ConfigurationProperties as ConfigurationProperties,
    type ConfigurationProperty as ConfigurationProperty,
    type ConfigurationPropertyResult as ConfigurationPropertyResult,
    type ConfigurationPropertyRetrieveParams as ConfigurationPropertyRetrieveParams,
    type ConfigurationPropertyDeleteParams as ConfigurationPropertyDeleteParams,
    type ConfigurationPropertyRetrieveConfigurationPropertiesParams as ConfigurationPropertyRetrieveConfigurationPropertiesParams,
    type ConfigurationPropertyUpdateConfigurationPropertiesParams as ConfigurationPropertyUpdateConfigurationPropertiesParams,
  };

  export {
    RequestTracker as RequestTracker,
    type RequestTrackerRetrieveRequestTrackerResponse as RequestTrackerRetrieveRequestTrackerResponse,
    type RequestTrackerRetrieveParams as RequestTrackerRetrieveParams,
    type RequestTrackerDeleteParams as RequestTrackerDeleteParams,
    type RequestTrackerRetrieveRequestTrackerParams as RequestTrackerRetrieveRequestTrackerParams,
  };

  export {
    Regions as Regions,
    type Region as Region,
    type RegionListResponse as RegionListResponse,
    type RegionRetrieveParams as RegionRetrieveParams,
    type RegionListParams as RegionListParams,
  };

  export {
    NetworkDomains as NetworkDomains,
    type NetworkDomain as NetworkDomain,
    type NetworkDomainRetrieveNetworkDomainsResponse as NetworkDomainRetrieveNetworkDomainsResponse,
    type NetworkDomainRetrieveParams as NetworkDomainRetrieveParams,
    type NetworkDomainRetrieveNetworkDomainsParams as NetworkDomainRetrieveNetworkDomainsParams,
  };

  export {
    FabricVsphereStoragePolicies as FabricVsphereStoragePolicies,
    type FabricVsphereStoragePolicy as FabricVsphereStoragePolicy,
    type FabricVsphereStoragePolicyRetrieveFabricVsphereStoragePoliciesResponse as FabricVsphereStoragePolicyRetrieveFabricVsphereStoragePoliciesResponse,
    type FabricVsphereStoragePolicyRetrieveParams as FabricVsphereStoragePolicyRetrieveParams,
    type FabricVsphereStoragePolicyRetrieveFabricVsphereStoragePoliciesParams as FabricVsphereStoragePolicyRetrieveFabricVsphereStoragePoliciesParams,
  };

  export {
    FabricImages as FabricImages,
    type FabricImage as FabricImage,
    type FabricImageRetrieveFabricImagesResponse as FabricImageRetrieveFabricImagesResponse,
    type FabricImageRetrieveParams as FabricImageRetrieveParams,
    type FabricImageRetrieveFabricImagesParams as FabricImageRetrieveFabricImagesParams,
  };

  export {
    FabricAzureStorageAccounts as FabricAzureStorageAccounts,
    type FabricAzureStorageAccount as FabricAzureStorageAccount,
    type FabricAzureStorageAccountRetrieveFabricAzureStorageAccountsResponse as FabricAzureStorageAccountRetrieveFabricAzureStorageAccountsResponse,
    type FabricAzureStorageAccountRetrieveParams as FabricAzureStorageAccountRetrieveParams,
    type FabricAzureStorageAccountRetrieveFabricAzureStorageAccountsParams as FabricAzureStorageAccountRetrieveFabricAzureStorageAccountsParams,
  };

  export {
    ExternalIPBlocks as ExternalIPBlocks,
    type ExternalIPBlockRetrieveParams as ExternalIPBlockRetrieveParams,
    type ExternalIPBlockRetrieveExternalIPBlocksParams as ExternalIPBlockRetrieveExternalIPBlocksParams,
  };
}
