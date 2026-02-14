// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.iaas.api.retrieve',
    fullyQualifiedName: 'iaas.api.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/certificates/{id}',
  },
  {
    clientCallName: 'client.iaas.api.login',
    fullyQualifiedName: 'iaas.api.login',
    httpMethod: 'post',
    httpPath: '/iaas/api/login',
  },
  {
    clientCallName: 'client.iaas.api.retrieveAbout',
    fullyQualifiedName: 'iaas.api.retrieveAbout',
    httpMethod: 'get',
    httpPath: '/iaas/api/about',
  },
  {
    clientCallName: 'client.iaas.api.retrieveEventLogs',
    fullyQualifiedName: 'iaas.api.retrieveEventLogs',
    httpMethod: 'get',
    httpPath: '/iaas/api/event-logs',
  },
  {
    clientCallName: 'client.iaas.api.retrieveFabricAwsVolumeTypes',
    fullyQualifiedName: 'iaas.api.retrieveFabricAwsVolumeTypes',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-aws-volume-types',
  },
  {
    clientCallName: 'client.iaas.api.retrieveFabricAzureDiskEncryptionSets',
    fullyQualifiedName: 'iaas.api.retrieveFabricAzureDiskEncryptionSets',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-azure-disk-encryption-sets',
  },
  {
    clientCallName: 'client.iaas.api.retrieveFabricFlavors',
    fullyQualifiedName: 'iaas.api.retrieveFabricFlavors',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-flavors',
  },
  {
    clientCallName: 'client.iaas.api.retrieveFlavors',
    fullyQualifiedName: 'iaas.api.retrieveFlavors',
    httpMethod: 'get',
    httpPath: '/iaas/api/flavors',
  },
  {
    clientCallName: 'client.iaas.api.retrieveFolders',
    fullyQualifiedName: 'iaas.api.retrieveFolders',
    httpMethod: 'get',
    httpPath: '/iaas/api/folders',
  },
  {
    clientCallName: 'client.iaas.api.retrieveImages',
    fullyQualifiedName: 'iaas.api.retrieveImages',
    httpMethod: 'get',
    httpPath: '/iaas/api/images',
  },
  {
    clientCallName: 'client.iaas.api.retrieveRequestGraph',
    fullyQualifiedName: 'iaas.api.retrieveRequestGraph',
    httpMethod: 'get',
    httpPath: '/iaas/api/request-graph',
  },
  {
    clientCallName: 'client.iaas.api.storageProfiles.retrieve',
    fullyQualifiedName: 'iaas.api.storageProfiles.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/storage-profiles/{id}',
  },
  {
    clientCallName: 'client.iaas.api.storageProfiles.update',
    fullyQualifiedName: 'iaas.api.storageProfiles.update',
    httpMethod: 'put',
    httpPath: '/iaas/api/storage-profiles/{id}',
  },
  {
    clientCallName: 'client.iaas.api.storageProfiles.delete',
    fullyQualifiedName: 'iaas.api.storageProfiles.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/storage-profiles/{id}',
  },
  {
    clientCallName: 'client.iaas.api.storageProfiles.retrieveStorageProfiles',
    fullyQualifiedName: 'iaas.api.storageProfiles.retrieveStorageProfiles',
    httpMethod: 'get',
    httpPath: '/iaas/api/storage-profiles',
  },
  {
    clientCallName: 'client.iaas.api.storageProfiles.storageProfiles',
    fullyQualifiedName: 'iaas.api.storageProfiles.storageProfiles',
    httpMethod: 'post',
    httpPath: '/iaas/api/storage-profiles',
  },
  {
    clientCallName:
      'client.iaas.api.storageProfiles.storageProfileAssociations.retrieveStorageProfileAssociations',
    fullyQualifiedName:
      'iaas.api.storageProfiles.storageProfileAssociations.retrieveStorageProfileAssociations',
    httpMethod: 'get',
    httpPath: '/iaas/api/storage-profiles/{id}/storage-profile-associations',
  },
  {
    clientCallName:
      'client.iaas.api.storageProfiles.storageProfileAssociations.updateStorageProfileAssociations',
    fullyQualifiedName:
      'iaas.api.storageProfiles.storageProfileAssociations.updateStorageProfileAssociations',
    httpMethod: 'patch',
    httpPath: '/iaas/api/storage-profiles/{id}/storage-profile-associations',
  },
  {
    clientCallName: 'client.iaas.api.projects.create',
    fullyQualifiedName: 'iaas.api.projects.create',
    httpMethod: 'post',
    httpPath: '/iaas/api/projects',
  },
  {
    clientCallName: 'client.iaas.api.projects.retrieve',
    fullyQualifiedName: 'iaas.api.projects.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/projects/{id}',
  },
  {
    clientCallName: 'client.iaas.api.projects.update',
    fullyQualifiedName: 'iaas.api.projects.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/projects/{id}',
  },
  {
    clientCallName: 'client.iaas.api.projects.list',
    fullyQualifiedName: 'iaas.api.projects.list',
    httpMethod: 'get',
    httpPath: '/iaas/api/projects',
  },
  {
    clientCallName: 'client.iaas.api.projects.delete',
    fullyQualifiedName: 'iaas.api.projects.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/projects/{id}',
  },
  {
    clientCallName: 'client.iaas.api.projects.zones.create',
    fullyQualifiedName: 'iaas.api.projects.zones.create',
    httpMethod: 'put',
    httpPath: '/iaas/api/projects/{id}/zones',
  },
  {
    clientCallName: 'client.iaas.api.projects.zones.list',
    fullyQualifiedName: 'iaas.api.projects.zones.list',
    httpMethod: 'get',
    httpPath: '/iaas/api/projects/{id}/zones',
  },
  {
    clientCallName: 'client.iaas.api.projects.resourceMetadata.retrieveResourceMetadata',
    fullyQualifiedName: 'iaas.api.projects.resourceMetadata.retrieveResourceMetadata',
    httpMethod: 'get',
    httpPath: '/iaas/api/projects/{id}/resource-metadata',
  },
  {
    clientCallName: 'client.iaas.api.projects.resourceMetadata.updateResourceMetadata',
    fullyQualifiedName: 'iaas.api.projects.resourceMetadata.updateResourceMetadata',
    httpMethod: 'patch',
    httpPath: '/iaas/api/projects/{id}/resource-metadata',
  },
  {
    clientCallName: 'client.iaas.api.naming.create',
    fullyQualifiedName: 'iaas.api.naming.create',
    httpMethod: 'post',
    httpPath: '/iaas/api/naming',
  },
  {
    clientCallName: 'client.iaas.api.naming.retrieve',
    fullyQualifiedName: 'iaas.api.naming.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/naming/projectId/{id}',
  },
  {
    clientCallName: 'client.iaas.api.naming.list',
    fullyQualifiedName: 'iaas.api.naming.list',
    httpMethod: 'get',
    httpPath: '/iaas/api/naming',
  },
  {
    clientCallName: 'client.iaas.api.naming.delete',
    fullyQualifiedName: 'iaas.api.naming.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/naming/{id}',
  },
  {
    clientCallName: 'client.iaas.api.zones.create',
    fullyQualifiedName: 'iaas.api.zones.create',
    httpMethod: 'post',
    httpPath: '/iaas/api/zones',
  },
  {
    clientCallName: 'client.iaas.api.zones.retrieve',
    fullyQualifiedName: 'iaas.api.zones.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/zones/{id}',
  },
  {
    clientCallName: 'client.iaas.api.zones.update',
    fullyQualifiedName: 'iaas.api.zones.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/zones/{id}',
  },
  {
    clientCallName: 'client.iaas.api.zones.list',
    fullyQualifiedName: 'iaas.api.zones.list',
    httpMethod: 'get',
    httpPath: '/iaas/api/zones',
  },
  {
    clientCallName: 'client.iaas.api.zones.delete',
    fullyQualifiedName: 'iaas.api.zones.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/zones/{id}',
  },
  {
    clientCallName: 'client.iaas.api.zones.retrieveComputes',
    fullyQualifiedName: 'iaas.api.zones.retrieveComputes',
    httpMethod: 'get',
    httpPath: '/iaas/api/zones/{id}/computes',
  },
  {
    clientCallName: 'client.iaas.api.tags.create',
    fullyQualifiedName: 'iaas.api.tags.create',
    httpMethod: 'post',
    httpPath: '/iaas/api/tags',
  },
  {
    clientCallName: 'client.iaas.api.tags.list',
    fullyQualifiedName: 'iaas.api.tags.list',
    httpMethod: 'get',
    httpPath: '/iaas/api/tags',
  },
  {
    clientCallName: 'client.iaas.api.tags.delete',
    fullyQualifiedName: 'iaas.api.tags.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/tags/{id}',
  },
  {
    clientCallName: 'client.iaas.api.tags.tagsUsage',
    fullyQualifiedName: 'iaas.api.tags.tagsUsage',
    httpMethod: 'post',
    httpPath: '/iaas/api/tags/tags-usage',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesVsphere.retrieve',
    fullyQualifiedName: 'iaas.api.storageProfilesVsphere.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/storage-profiles-vsphere/{id}',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesVsphere.update',
    fullyQualifiedName: 'iaas.api.storageProfilesVsphere.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/storage-profiles-vsphere/{id}',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesVsphere.delete',
    fullyQualifiedName: 'iaas.api.storageProfilesVsphere.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/storage-profiles-vsphere/{id}',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesVsphere.retrieveStorageProfilesVsphere',
    fullyQualifiedName: 'iaas.api.storageProfilesVsphere.retrieveStorageProfilesVsphere',
    httpMethod: 'get',
    httpPath: '/iaas/api/storage-profiles-vsphere',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesVsphere.storageProfilesVsphere',
    fullyQualifiedName: 'iaas.api.storageProfilesVsphere.storageProfilesVsphere',
    httpMethod: 'post',
    httpPath: '/iaas/api/storage-profiles-vsphere',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesGcp.retrieve',
    fullyQualifiedName: 'iaas.api.storageProfilesGcp.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/storage-profiles-gcp/{id}',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesGcp.update',
    fullyQualifiedName: 'iaas.api.storageProfilesGcp.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/storage-profiles-gcp/{id}',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesGcp.delete',
    fullyQualifiedName: 'iaas.api.storageProfilesGcp.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/storage-profiles-gcp/{id}',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesGcp.retrieveStorageProfilesGcp',
    fullyQualifiedName: 'iaas.api.storageProfilesGcp.retrieveStorageProfilesGcp',
    httpMethod: 'get',
    httpPath: '/iaas/api/storage-profiles-gcp',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesGcp.storageProfilesGcp',
    fullyQualifiedName: 'iaas.api.storageProfilesGcp.storageProfilesGcp',
    httpMethod: 'post',
    httpPath: '/iaas/api/storage-profiles-gcp',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesAzure.retrieve',
    fullyQualifiedName: 'iaas.api.storageProfilesAzure.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/storage-profiles-azure/{id}',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesAzure.update',
    fullyQualifiedName: 'iaas.api.storageProfilesAzure.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/storage-profiles-azure/{id}',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesAzure.delete',
    fullyQualifiedName: 'iaas.api.storageProfilesAzure.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/storage-profiles-azure/{id}',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesAzure.retrieveStorageProfilesAzure',
    fullyQualifiedName: 'iaas.api.storageProfilesAzure.retrieveStorageProfilesAzure',
    httpMethod: 'get',
    httpPath: '/iaas/api/storage-profiles-azure',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesAzure.storageProfilesAzure',
    fullyQualifiedName: 'iaas.api.storageProfilesAzure.storageProfilesAzure',
    httpMethod: 'post',
    httpPath: '/iaas/api/storage-profiles-azure',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesAws.retrieve',
    fullyQualifiedName: 'iaas.api.storageProfilesAws.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/storage-profiles-aws/{id}',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesAws.update',
    fullyQualifiedName: 'iaas.api.storageProfilesAws.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/storage-profiles-aws/{id}',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesAws.delete',
    fullyQualifiedName: 'iaas.api.storageProfilesAws.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/storage-profiles-aws/{id}',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesAws.retrieveStorageProfilesAws',
    fullyQualifiedName: 'iaas.api.storageProfilesAws.retrieveStorageProfilesAws',
    httpMethod: 'get',
    httpPath: '/iaas/api/storage-profiles-aws',
  },
  {
    clientCallName: 'client.iaas.api.storageProfilesAws.storageProfilesAws',
    fullyQualifiedName: 'iaas.api.storageProfilesAws.storageProfilesAws',
    httpMethod: 'post',
    httpPath: '/iaas/api/storage-profiles-aws',
  },
  {
    clientCallName: 'client.iaas.api.securityGroups.retrieve',
    fullyQualifiedName: 'iaas.api.securityGroups.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/security-groups/{id}',
  },
  {
    clientCallName: 'client.iaas.api.securityGroups.update',
    fullyQualifiedName: 'iaas.api.securityGroups.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/security-groups/{id}',
  },
  {
    clientCallName: 'client.iaas.api.securityGroups.delete',
    fullyQualifiedName: 'iaas.api.securityGroups.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/security-groups/{id}',
  },
  {
    clientCallName: 'client.iaas.api.securityGroups.retrieveSecurityGroups',
    fullyQualifiedName: 'iaas.api.securityGroups.retrieveSecurityGroups',
    httpMethod: 'get',
    httpPath: '/iaas/api/security-groups',
  },
  {
    clientCallName: 'client.iaas.api.securityGroups.securityGroups',
    fullyQualifiedName: 'iaas.api.securityGroups.securityGroups',
    httpMethod: 'post',
    httpPath: '/iaas/api/security-groups',
  },
  {
    clientCallName: 'client.iaas.api.securityGroups.operations.reconfigure',
    fullyQualifiedName: 'iaas.api.securityGroups.operations.reconfigure',
    httpMethod: 'post',
    httpPath: '/iaas/api/security-groups/{id}/operations/reconfigure',
  },
  {
    clientCallName: 'client.iaas.api.networks.create',
    fullyQualifiedName: 'iaas.api.networks.create',
    httpMethod: 'post',
    httpPath: '/iaas/api/networks',
  },
  {
    clientCallName: 'client.iaas.api.networks.retrieve',
    fullyQualifiedName: 'iaas.api.networks.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/networks/{id}',
  },
  {
    clientCallName: 'client.iaas.api.networks.list',
    fullyQualifiedName: 'iaas.api.networks.list',
    httpMethod: 'get',
    httpPath: '/iaas/api/networks',
  },
  {
    clientCallName: 'client.iaas.api.networks.delete',
    fullyQualifiedName: 'iaas.api.networks.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/networks/{id}',
  },
  {
    clientCallName: 'client.iaas.api.networks.retrieveNetworkIPRanges',
    fullyQualifiedName: 'iaas.api.networks.retrieveNetworkIPRanges',
    httpMethod: 'get',
    httpPath: '/iaas/api/networks/{id}/network-ip-ranges',
  },
  {
    clientCallName: 'client.iaas.api.networkProfiles.retrieve',
    fullyQualifiedName: 'iaas.api.networkProfiles.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/network-profiles/{id}',
  },
  {
    clientCallName: 'client.iaas.api.networkProfiles.update',
    fullyQualifiedName: 'iaas.api.networkProfiles.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/network-profiles/{id}',
  },
  {
    clientCallName: 'client.iaas.api.networkProfiles.delete',
    fullyQualifiedName: 'iaas.api.networkProfiles.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/network-profiles/{id}',
  },
  {
    clientCallName: 'client.iaas.api.networkProfiles.networkProfiles',
    fullyQualifiedName: 'iaas.api.networkProfiles.networkProfiles',
    httpMethod: 'post',
    httpPath: '/iaas/api/network-profiles',
  },
  {
    clientCallName: 'client.iaas.api.networkProfiles.retrieveNetworkProfiles',
    fullyQualifiedName: 'iaas.api.networkProfiles.retrieveNetworkProfiles',
    httpMethod: 'get',
    httpPath: '/iaas/api/network-profiles',
  },
  {
    clientCallName: 'client.iaas.api.networkIPRanges.retrieve',
    fullyQualifiedName: 'iaas.api.networkIPRanges.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/network-ip-ranges/{id}',
  },
  {
    clientCallName: 'client.iaas.api.networkIPRanges.update',
    fullyQualifiedName: 'iaas.api.networkIPRanges.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/network-ip-ranges/{id}',
  },
  {
    clientCallName: 'client.iaas.api.networkIPRanges.delete',
    fullyQualifiedName: 'iaas.api.networkIPRanges.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/network-ip-ranges/{id}',
  },
  {
    clientCallName: 'client.iaas.api.networkIPRanges.networkIPRanges',
    fullyQualifiedName: 'iaas.api.networkIPRanges.networkIPRanges',
    httpMethod: 'post',
    httpPath: '/iaas/api/network-ip-ranges',
  },
  {
    clientCallName: 'client.iaas.api.networkIPRanges.retrieveNetworkIPRanges',
    fullyQualifiedName: 'iaas.api.networkIPRanges.retrieveNetworkIPRanges',
    httpMethod: 'get',
    httpPath: '/iaas/api/network-ip-ranges',
  },
  {
    clientCallName: 'client.iaas.api.networkIPRanges.unregisteredIPAddresses.release',
    fullyQualifiedName: 'iaas.api.networkIPRanges.unregisteredIPAddresses.release',
    httpMethod: 'post',
    httpPath: '/iaas/api/network-ip-ranges/{id}/unregistered-ip-addresses/release',
  },
  {
    clientCallName: 'client.iaas.api.networkIPRanges.ipAddresses.retrieve',
    fullyQualifiedName: 'iaas.api.networkIPRanges.ipAddresses.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/network-ip-ranges/{networkIPRangeId}/ip-addresses/{ipAddressId}',
  },
  {
    clientCallName: 'client.iaas.api.networkIPRanges.ipAddresses.allocate',
    fullyQualifiedName: 'iaas.api.networkIPRanges.ipAddresses.allocate',
    httpMethod: 'post',
    httpPath: '/iaas/api/network-ip-ranges/{id}/ip-addresses/allocate',
  },
  {
    clientCallName: 'client.iaas.api.networkIPRanges.ipAddresses.release',
    fullyQualifiedName: 'iaas.api.networkIPRanges.ipAddresses.release',
    httpMethod: 'post',
    httpPath: '/iaas/api/network-ip-ranges/{id}/ip-addresses/release',
  },
  {
    clientCallName: 'client.iaas.api.networkIPRanges.ipAddresses.retrieveIPAddresses',
    fullyQualifiedName: 'iaas.api.networkIPRanges.ipAddresses.retrieveIPAddresses',
    httpMethod: 'get',
    httpPath: '/iaas/api/network-ip-ranges/{id}/ip-addresses',
  },
  {
    clientCallName: 'client.iaas.api.machines.create',
    fullyQualifiedName: 'iaas.api.machines.create',
    httpMethod: 'post',
    httpPath: '/iaas/api/machines',
  },
  {
    clientCallName: 'client.iaas.api.machines.retrieve',
    fullyQualifiedName: 'iaas.api.machines.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/machines/{id}',
  },
  {
    clientCallName: 'client.iaas.api.machines.update',
    fullyQualifiedName: 'iaas.api.machines.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/machines/{id}',
  },
  {
    clientCallName: 'client.iaas.api.machines.list',
    fullyQualifiedName: 'iaas.api.machines.list',
    httpMethod: 'get',
    httpPath: '/iaas/api/machines',
  },
  {
    clientCallName: 'client.iaas.api.machines.delete',
    fullyQualifiedName: 'iaas.api.machines.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/machines/{id}',
  },
  {
    clientCallName: 'client.iaas.api.machines.operations.update',
    fullyQualifiedName: 'iaas.api.machines.operations.update',
    httpMethod: 'post',
    httpPath: '/iaas/api/machines/{id}/operations/revert/{snapshotId}',
  },
  {
    clientCallName: 'client.iaas.api.machines.operations.changeSecurityGroups',
    fullyQualifiedName: 'iaas.api.machines.operations.changeSecurityGroups',
    httpMethod: 'post',
    httpPath: '/iaas/api/machines/{id}/operations/change-security-groups',
  },
  {
    clientCallName: 'client.iaas.api.machines.operations.powerOff',
    fullyQualifiedName: 'iaas.api.machines.operations.powerOff',
    httpMethod: 'post',
    httpPath: '/iaas/api/machines/{id}/operations/power-off',
  },
  {
    clientCallName: 'client.iaas.api.machines.operations.powerOn',
    fullyQualifiedName: 'iaas.api.machines.operations.powerOn',
    httpMethod: 'post',
    httpPath: '/iaas/api/machines/{id}/operations/power-on',
  },
  {
    clientCallName: 'client.iaas.api.machines.operations.reboot',
    fullyQualifiedName: 'iaas.api.machines.operations.reboot',
    httpMethod: 'post',
    httpPath: '/iaas/api/machines/{id}/operations/reboot',
  },
  {
    clientCallName: 'client.iaas.api.machines.operations.reset',
    fullyQualifiedName: 'iaas.api.machines.operations.reset',
    httpMethod: 'post',
    httpPath: '/iaas/api/machines/{id}/operations/reset',
  },
  {
    clientCallName: 'client.iaas.api.machines.operations.resize',
    fullyQualifiedName: 'iaas.api.machines.operations.resize',
    httpMethod: 'post',
    httpPath: '/iaas/api/machines/{id}/operations/resize',
  },
  {
    clientCallName: 'client.iaas.api.machines.operations.restart',
    fullyQualifiedName: 'iaas.api.machines.operations.restart',
    httpMethod: 'post',
    httpPath: '/iaas/api/machines/{id}/operations/restart',
  },
  {
    clientCallName: 'client.iaas.api.machines.operations.shutdown',
    fullyQualifiedName: 'iaas.api.machines.operations.shutdown',
    httpMethod: 'post',
    httpPath: '/iaas/api/machines/{id}/operations/shutdown',
  },
  {
    clientCallName: 'client.iaas.api.machines.operations.snapshots',
    fullyQualifiedName: 'iaas.api.machines.operations.snapshots',
    httpMethod: 'post',
    httpPath: '/iaas/api/machines/{id}/operations/snapshots',
  },
  {
    clientCallName: 'client.iaas.api.machines.operations.suspend',
    fullyQualifiedName: 'iaas.api.machines.operations.suspend',
    httpMethod: 'post',
    httpPath: '/iaas/api/machines/{id}/operations/suspend',
  },
  {
    clientCallName: 'client.iaas.api.machines.operations.unregister',
    fullyQualifiedName: 'iaas.api.machines.operations.unregister',
    httpMethod: 'post',
    httpPath: '/iaas/api/machines/{id}/operations/unregister',
  },
  {
    clientCallName: 'client.iaas.api.machines.disks.create',
    fullyQualifiedName: 'iaas.api.machines.disks.create',
    httpMethod: 'post',
    httpPath: '/iaas/api/machines/{id}/disks',
  },
  {
    clientCallName: 'client.iaas.api.machines.disks.retrieve',
    fullyQualifiedName: 'iaas.api.machines.disks.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/machines/{id}/disks/{diskId}',
  },
  {
    clientCallName: 'client.iaas.api.machines.disks.list',
    fullyQualifiedName: 'iaas.api.machines.disks.list',
    httpMethod: 'get',
    httpPath: '/iaas/api/machines/{id}/disks',
  },
  {
    clientCallName: 'client.iaas.api.machines.disks.delete',
    fullyQualifiedName: 'iaas.api.machines.disks.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/machines/{id}/disks/{diskId}',
  },
  {
    clientCallName: 'client.iaas.api.machines.networkInterfaces.retrieve',
    fullyQualifiedName: 'iaas.api.machines.networkInterfaces.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/machines/{id}/network-interfaces/{networkId}',
  },
  {
    clientCallName: 'client.iaas.api.machines.networkInterfaces.update',
    fullyQualifiedName: 'iaas.api.machines.networkInterfaces.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/machines/{id}/network-interfaces/{networkId}',
  },
  {
    clientCallName: 'client.iaas.api.machines.snapshots.retrieve',
    fullyQualifiedName: 'iaas.api.machines.snapshots.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/machines/{id}/snapshots/{snapshotId}',
  },
  {
    clientCallName: 'client.iaas.api.machines.snapshots.list',
    fullyQualifiedName: 'iaas.api.machines.snapshots.list',
    httpMethod: 'get',
    httpPath: '/iaas/api/machines/{id}/snapshots',
  },
  {
    clientCallName: 'client.iaas.api.machines.snapshots.delete',
    fullyQualifiedName: 'iaas.api.machines.snapshots.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/machines/{id}/snapshots/{snapshotId}',
  },
  {
    clientCallName: 'client.iaas.api.loadBalancers.retrieve',
    fullyQualifiedName: 'iaas.api.loadBalancers.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/load-balancers/{id}',
  },
  {
    clientCallName: 'client.iaas.api.loadBalancers.delete',
    fullyQualifiedName: 'iaas.api.loadBalancers.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/load-balancers/{id}',
  },
  {
    clientCallName: 'client.iaas.api.loadBalancers.loadBalancers',
    fullyQualifiedName: 'iaas.api.loadBalancers.loadBalancers',
    httpMethod: 'post',
    httpPath: '/iaas/api/load-balancers',
  },
  {
    clientCallName: 'client.iaas.api.loadBalancers.retrieveLoadBalancers',
    fullyQualifiedName: 'iaas.api.loadBalancers.retrieveLoadBalancers',
    httpMethod: 'get',
    httpPath: '/iaas/api/load-balancers',
  },
  {
    clientCallName: 'client.iaas.api.loadBalancers.operations.delete',
    fullyQualifiedName: 'iaas.api.loadBalancers.operations.delete',
    httpMethod: 'post',
    httpPath: '/iaas/api/load-balancers/{id}/operations/delete',
  },
  {
    clientCallName: 'client.iaas.api.loadBalancers.operations.scale',
    fullyQualifiedName: 'iaas.api.loadBalancers.operations.scale',
    httpMethod: 'post',
    httpPath: '/iaas/api/load-balancers/{id}/operations/scale',
  },
  {
    clientCallName: 'client.iaas.api.integrationsIpam.packageImport.update',
    fullyQualifiedName: 'iaas.api.integrationsIpam.packageImport.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/integrations-ipam/package-import/{id}',
  },
  {
    clientCallName: 'client.iaas.api.integrationsIpam.packageImport.packageImport',
    fullyQualifiedName: 'iaas.api.integrationsIpam.packageImport.packageImport',
    httpMethod: 'post',
    httpPath: '/iaas/api/integrations-ipam/package-import',
  },
  {
    clientCallName: 'client.iaas.api.integrations.create',
    fullyQualifiedName: 'iaas.api.integrations.create',
    httpMethod: 'post',
    httpPath: '/iaas/api/integrations',
  },
  {
    clientCallName: 'client.iaas.api.integrations.retrieve',
    fullyQualifiedName: 'iaas.api.integrations.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/integrations/{id}',
  },
  {
    clientCallName: 'client.iaas.api.integrations.update',
    fullyQualifiedName: 'iaas.api.integrations.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/integrations/{id}',
  },
  {
    clientCallName: 'client.iaas.api.integrations.list',
    fullyQualifiedName: 'iaas.api.integrations.list',
    httpMethod: 'get',
    httpPath: '/iaas/api/integrations',
  },
  {
    clientCallName: 'client.iaas.api.integrations.delete',
    fullyQualifiedName: 'iaas.api.integrations.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/integrations/{id}',
  },
  {
    clientCallName: 'client.iaas.api.imageProfiles.retrieve',
    fullyQualifiedName: 'iaas.api.imageProfiles.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/image-profiles/{id}',
  },
  {
    clientCallName: 'client.iaas.api.imageProfiles.update',
    fullyQualifiedName: 'iaas.api.imageProfiles.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/image-profiles/{id}',
  },
  {
    clientCallName: 'client.iaas.api.imageProfiles.delete',
    fullyQualifiedName: 'iaas.api.imageProfiles.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/image-profiles/{id}',
  },
  {
    clientCallName: 'client.iaas.api.imageProfiles.imageProfiles',
    fullyQualifiedName: 'iaas.api.imageProfiles.imageProfiles',
    httpMethod: 'post',
    httpPath: '/iaas/api/image-profiles',
  },
  {
    clientCallName: 'client.iaas.api.imageProfiles.retrieveImageProfiles',
    fullyQualifiedName: 'iaas.api.imageProfiles.retrieveImageProfiles',
    httpMethod: 'get',
    httpPath: '/iaas/api/image-profiles',
  },
  {
    clientCallName: 'client.iaas.api.flavorProfiles.retrieve',
    fullyQualifiedName: 'iaas.api.flavorProfiles.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/flavor-profiles/{id}',
  },
  {
    clientCallName: 'client.iaas.api.flavorProfiles.update',
    fullyQualifiedName: 'iaas.api.flavorProfiles.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/flavor-profiles/{id}',
  },
  {
    clientCallName: 'client.iaas.api.flavorProfiles.delete',
    fullyQualifiedName: 'iaas.api.flavorProfiles.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/flavor-profiles/{id}',
  },
  {
    clientCallName: 'client.iaas.api.flavorProfiles.flavorProfiles',
    fullyQualifiedName: 'iaas.api.flavorProfiles.flavorProfiles',
    httpMethod: 'post',
    httpPath: '/iaas/api/flavor-profiles',
  },
  {
    clientCallName: 'client.iaas.api.flavorProfiles.retrieveFlavorProfiles',
    fullyQualifiedName: 'iaas.api.flavorProfiles.retrieveFlavorProfiles',
    httpMethod: 'get',
    httpPath: '/iaas/api/flavor-profiles',
  },
  {
    clientCallName: 'client.iaas.api.deployments.create',
    fullyQualifiedName: 'iaas.api.deployments.create',
    httpMethod: 'post',
    httpPath: '/iaas/api/deployments',
  },
  {
    clientCallName: 'client.iaas.api.deployments.retrieve',
    fullyQualifiedName: 'iaas.api.deployments.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/deployments/{id}',
  },
  {
    clientCallName: 'client.iaas.api.deployments.list',
    fullyQualifiedName: 'iaas.api.deployments.list',
    httpMethod: 'get',
    httpPath: '/iaas/api/deployments',
  },
  {
    clientCallName: 'client.iaas.api.deployments.delete',
    fullyQualifiedName: 'iaas.api.deployments.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/deployments/{id}',
  },
  {
    clientCallName: 'client.iaas.api.dataCollectors.retrieve',
    fullyQualifiedName: 'iaas.api.dataCollectors.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/data-collectors/{id}',
  },
  {
    clientCallName: 'client.iaas.api.dataCollectors.delete',
    fullyQualifiedName: 'iaas.api.dataCollectors.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/data-collectors/{id}',
  },
  {
    clientCallName: 'client.iaas.api.dataCollectors.dataCollectors',
    fullyQualifiedName: 'iaas.api.dataCollectors.dataCollectors',
    httpMethod: 'post',
    httpPath: '/iaas/api/data-collectors',
  },
  {
    clientCallName: 'client.iaas.api.dataCollectors.retrieveDataCollectors',
    fullyQualifiedName: 'iaas.api.dataCollectors.retrieveDataCollectors',
    httpMethod: 'get',
    httpPath: '/iaas/api/data-collectors',
  },
  {
    clientCallName: 'client.iaas.api.computeNats.retrieve',
    fullyQualifiedName: 'iaas.api.computeNats.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/compute-nats/{id}',
  },
  {
    clientCallName: 'client.iaas.api.computeNats.delete',
    fullyQualifiedName: 'iaas.api.computeNats.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/compute-nats/{id}',
  },
  {
    clientCallName: 'client.iaas.api.computeNats.computeNats',
    fullyQualifiedName: 'iaas.api.computeNats.computeNats',
    httpMethod: 'post',
    httpPath: '/iaas/api/compute-nats',
  },
  {
    clientCallName: 'client.iaas.api.computeNats.retrieveComputeNats',
    fullyQualifiedName: 'iaas.api.computeNats.retrieveComputeNats',
    httpMethod: 'get',
    httpPath: '/iaas/api/compute-nats',
  },
  {
    clientCallName: 'client.iaas.api.computeNats.operations.reconfigure',
    fullyQualifiedName: 'iaas.api.computeNats.operations.reconfigure',
    httpMethod: 'post',
    httpPath: '/iaas/api/compute-nats/{id}/operations/reconfigure',
  },
  {
    clientCallName: 'client.iaas.api.computeGateways.retrieve',
    fullyQualifiedName: 'iaas.api.computeGateways.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/compute-gateways/{id}',
  },
  {
    clientCallName: 'client.iaas.api.computeGateways.delete',
    fullyQualifiedName: 'iaas.api.computeGateways.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/compute-gateways/{id}',
  },
  {
    clientCallName: 'client.iaas.api.computeGateways.computeGateways',
    fullyQualifiedName: 'iaas.api.computeGateways.computeGateways',
    httpMethod: 'post',
    httpPath: '/iaas/api/compute-gateways',
  },
  {
    clientCallName: 'client.iaas.api.computeGateways.retrieveComputeGateways',
    fullyQualifiedName: 'iaas.api.computeGateways.retrieveComputeGateways',
    httpMethod: 'get',
    httpPath: '/iaas/api/compute-gateways',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccounts.retrieve',
    fullyQualifiedName: 'iaas.api.cloudAccounts.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccounts.update',
    fullyQualifiedName: 'iaas.api.cloudAccounts.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/cloud-accounts/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccounts.delete',
    fullyQualifiedName: 'iaas.api.cloudAccounts.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/cloud-accounts/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccounts.cloudAccounts',
    fullyQualifiedName: 'iaas.api.cloudAccounts.cloudAccounts',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccounts.healthCheck',
    fullyQualifiedName: 'iaas.api.cloudAccounts.healthCheck',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts/{id}/health-check',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccounts.privateImageEnumeration',
    fullyQualifiedName: 'iaas.api.cloudAccounts.privateImageEnumeration',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts/{id}/private-image-enumeration',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccounts.retrieveCloudAccounts',
    fullyQualifiedName: 'iaas.api.cloudAccounts.retrieveCloudAccounts',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccounts.regionEnumeration.retrieve',
    fullyQualifiedName: 'iaas.api.cloudAccounts.regionEnumeration.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts/region-enumeration/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccounts.regionEnumeration.regionEnumeration',
    fullyQualifiedName: 'iaas.api.cloudAccounts.regionEnumeration.regionEnumeration',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts/region-enumeration',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVsphere.retrieve',
    fullyQualifiedName: 'iaas.api.cloudAccountsVsphere.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-vsphere/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVsphere.update',
    fullyQualifiedName: 'iaas.api.cloudAccountsVsphere.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/cloud-accounts-vsphere/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVsphere.delete',
    fullyQualifiedName: 'iaas.api.cloudAccountsVsphere.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/cloud-accounts-vsphere/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVsphere.cloudAccountsVsphere',
    fullyQualifiedName: 'iaas.api.cloudAccountsVsphere.cloudAccountsVsphere',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-vsphere',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVsphere.privateImageEnumeration',
    fullyQualifiedName: 'iaas.api.cloudAccountsVsphere.privateImageEnumeration',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-vsphere/{id}/private-image-enumeration',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVsphere.regionEnumeration',
    fullyQualifiedName: 'iaas.api.cloudAccountsVsphere.regionEnumeration',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-vsphere/region-enumeration',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVsphere.retrieveCloudAccountsVsphere',
    fullyQualifiedName: 'iaas.api.cloudAccountsVsphere.retrieveCloudAccountsVsphere',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-vsphere',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVmc.retrieve',
    fullyQualifiedName: 'iaas.api.cloudAccountsVmc.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-vmc/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVmc.update',
    fullyQualifiedName: 'iaas.api.cloudAccountsVmc.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/cloud-accounts-vmc/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVmc.delete',
    fullyQualifiedName: 'iaas.api.cloudAccountsVmc.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/cloud-accounts-vmc/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVmc.cloudAccountsVmc',
    fullyQualifiedName: 'iaas.api.cloudAccountsVmc.cloudAccountsVmc',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-vmc',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVmc.privateImageEnumeration',
    fullyQualifiedName: 'iaas.api.cloudAccountsVmc.privateImageEnumeration',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-vmc/{id}/private-image-enumeration',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVmc.regionEnumeration',
    fullyQualifiedName: 'iaas.api.cloudAccountsVmc.regionEnumeration',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-vmc/region-enumeration',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVmc.retrieveCloudAccountsVmc',
    fullyQualifiedName: 'iaas.api.cloudAccountsVmc.retrieveCloudAccountsVmc',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-vmc',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVcf.retrieve',
    fullyQualifiedName: 'iaas.api.cloudAccountsVcf.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-vcf/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVcf.update',
    fullyQualifiedName: 'iaas.api.cloudAccountsVcf.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/cloud-accounts-vcf/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVcf.delete',
    fullyQualifiedName: 'iaas.api.cloudAccountsVcf.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/cloud-accounts-vcf/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVcf.cloudAccountsVcf',
    fullyQualifiedName: 'iaas.api.cloudAccountsVcf.cloudAccountsVcf',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-vcf',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVcf.privateImageEnumeration',
    fullyQualifiedName: 'iaas.api.cloudAccountsVcf.privateImageEnumeration',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-vcf/{id}/private-image-enumeration',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVcf.regionEnumeration',
    fullyQualifiedName: 'iaas.api.cloudAccountsVcf.regionEnumeration',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-vcf/region-enumeration',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsVcf.retrieveCloudAccountsVcf',
    fullyQualifiedName: 'iaas.api.cloudAccountsVcf.retrieveCloudAccountsVcf',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-vcf',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsNsxV.retrieve',
    fullyQualifiedName: 'iaas.api.cloudAccountsNsxV.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-nsx-v/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsNsxV.update',
    fullyQualifiedName: 'iaas.api.cloudAccountsNsxV.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/cloud-accounts-nsx-v/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsNsxV.delete',
    fullyQualifiedName: 'iaas.api.cloudAccountsNsxV.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/cloud-accounts-nsx-v/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsNsxV.cloudAccountsNsxV',
    fullyQualifiedName: 'iaas.api.cloudAccountsNsxV.cloudAccountsNsxV',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-nsx-v',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsNsxV.retrieveCloudAccountsNsxV',
    fullyQualifiedName: 'iaas.api.cloudAccountsNsxV.retrieveCloudAccountsNsxV',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-nsx-v',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsNsxT.retrieve',
    fullyQualifiedName: 'iaas.api.cloudAccountsNsxT.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-nsx-t/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsNsxT.update',
    fullyQualifiedName: 'iaas.api.cloudAccountsNsxT.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/cloud-accounts-nsx-t/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsNsxT.delete',
    fullyQualifiedName: 'iaas.api.cloudAccountsNsxT.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/cloud-accounts-nsx-t/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsNsxT.cloudAccountsNsxT',
    fullyQualifiedName: 'iaas.api.cloudAccountsNsxT.cloudAccountsNsxT',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-nsx-t',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsNsxT.retrieveCloudAccountsNsxT',
    fullyQualifiedName: 'iaas.api.cloudAccountsNsxT.retrieveCloudAccountsNsxT',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-nsx-t',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsGcp.retrieve',
    fullyQualifiedName: 'iaas.api.cloudAccountsGcp.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-gcp/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsGcp.update',
    fullyQualifiedName: 'iaas.api.cloudAccountsGcp.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/cloud-accounts-gcp/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsGcp.delete',
    fullyQualifiedName: 'iaas.api.cloudAccountsGcp.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/cloud-accounts-gcp/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsGcp.cloudAccountsGcp',
    fullyQualifiedName: 'iaas.api.cloudAccountsGcp.cloudAccountsGcp',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-gcp',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsGcp.privateImageEnumeration',
    fullyQualifiedName: 'iaas.api.cloudAccountsGcp.privateImageEnumeration',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-gcp/{id}/private-image-enumeration',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsGcp.regionEnumeration',
    fullyQualifiedName: 'iaas.api.cloudAccountsGcp.regionEnumeration',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-gcp/region-enumeration',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsGcp.retrieveCloudAccountsGcp',
    fullyQualifiedName: 'iaas.api.cloudAccountsGcp.retrieveCloudAccountsGcp',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-gcp',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAzure.retrieve',
    fullyQualifiedName: 'iaas.api.cloudAccountsAzure.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-azure/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAzure.update',
    fullyQualifiedName: 'iaas.api.cloudAccountsAzure.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/cloud-accounts-azure/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAzure.delete',
    fullyQualifiedName: 'iaas.api.cloudAccountsAzure.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/cloud-accounts-azure/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAzure.cloudAccountsAzure',
    fullyQualifiedName: 'iaas.api.cloudAccountsAzure.cloudAccountsAzure',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-azure',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAzure.privateImageEnumeration',
    fullyQualifiedName: 'iaas.api.cloudAccountsAzure.privateImageEnumeration',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-azure/{id}/private-image-enumeration',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAzure.regionEnumeration',
    fullyQualifiedName: 'iaas.api.cloudAccountsAzure.regionEnumeration',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-azure/region-enumeration',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAzure.retrieveCloudAccountsAzure',
    fullyQualifiedName: 'iaas.api.cloudAccountsAzure.retrieveCloudAccountsAzure',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-azure',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAws.retrieve',
    fullyQualifiedName: 'iaas.api.cloudAccountsAws.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-aws/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAws.update',
    fullyQualifiedName: 'iaas.api.cloudAccountsAws.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/cloud-accounts-aws/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAws.delete',
    fullyQualifiedName: 'iaas.api.cloudAccountsAws.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/cloud-accounts-aws/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAws.cloudAccountsAws',
    fullyQualifiedName: 'iaas.api.cloudAccountsAws.cloudAccountsAws',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-aws',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAws.privateImageEnumeration',
    fullyQualifiedName: 'iaas.api.cloudAccountsAws.privateImageEnumeration',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-aws/{id}/private-image-enumeration',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAws.regionEnumeration',
    fullyQualifiedName: 'iaas.api.cloudAccountsAws.regionEnumeration',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-aws/region-enumeration',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAws.retrieveCloudAccountsAws',
    fullyQualifiedName: 'iaas.api.cloudAccountsAws.retrieveCloudAccountsAws',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-aws',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAvilb.retrieve',
    fullyQualifiedName: 'iaas.api.cloudAccountsAvilb.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-avilb/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAvilb.update',
    fullyQualifiedName: 'iaas.api.cloudAccountsAvilb.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/cloud-accounts-avilb/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAvilb.delete',
    fullyQualifiedName: 'iaas.api.cloudAccountsAvilb.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/cloud-accounts-avilb/{id}',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAvilb.cloudAccountsAvilb',
    fullyQualifiedName: 'iaas.api.cloudAccountsAvilb.cloudAccountsAvilb',
    httpMethod: 'post',
    httpPath: '/iaas/api/cloud-accounts-avilb',
  },
  {
    clientCallName: 'client.iaas.api.cloudAccountsAvilb.retrieveCloudAccountsAvilb',
    fullyQualifiedName: 'iaas.api.cloudAccountsAvilb.retrieveCloudAccountsAvilb',
    httpMethod: 'get',
    httpPath: '/iaas/api/cloud-accounts-avilb',
  },
  {
    clientCallName: 'client.iaas.api.blockDevices.retrieve',
    fullyQualifiedName: 'iaas.api.blockDevices.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/block-devices/{id}',
  },
  {
    clientCallName: 'client.iaas.api.blockDevices.update',
    fullyQualifiedName: 'iaas.api.blockDevices.update',
    httpMethod: 'post',
    httpPath: '/iaas/api/block-devices/{id}',
  },
  {
    clientCallName: 'client.iaas.api.blockDevices.delete',
    fullyQualifiedName: 'iaas.api.blockDevices.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/block-devices/{id}',
  },
  {
    clientCallName: 'client.iaas.api.blockDevices.blockDevices',
    fullyQualifiedName: 'iaas.api.blockDevices.blockDevices',
    httpMethod: 'post',
    httpPath: '/iaas/api/block-devices',
  },
  {
    clientCallName: 'client.iaas.api.blockDevices.retrieveBlockDevices',
    fullyQualifiedName: 'iaas.api.blockDevices.retrieveBlockDevices',
    httpMethod: 'get',
    httpPath: '/iaas/api/block-devices',
  },
  {
    clientCallName: 'client.iaas.api.blockDevices.operations.promote',
    fullyQualifiedName: 'iaas.api.blockDevices.operations.promote',
    httpMethod: 'post',
    httpPath: '/iaas/api/block-devices/{id}/operations/promote',
  },
  {
    clientCallName: 'client.iaas.api.blockDevices.operations.revert',
    fullyQualifiedName: 'iaas.api.blockDevices.operations.revert',
    httpMethod: 'post',
    httpPath: '/iaas/api/block-devices/{diskId}/operations/revert',
  },
  {
    clientCallName: 'client.iaas.api.blockDevices.operations.snapshots',
    fullyQualifiedName: 'iaas.api.blockDevices.operations.snapshots',
    httpMethod: 'post',
    httpPath: '/iaas/api/block-devices/{id}/operations/snapshots',
  },
  {
    clientCallName: 'client.iaas.api.blockDevices.snapshots.retrieve',
    fullyQualifiedName: 'iaas.api.blockDevices.snapshots.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/block-devices/{id}/snapshots/{id1}',
  },
  {
    clientCallName: 'client.iaas.api.blockDevices.snapshots.list',
    fullyQualifiedName: 'iaas.api.blockDevices.snapshots.list',
    httpMethod: 'get',
    httpPath: '/iaas/api/block-devices/{id}/snapshots',
  },
  {
    clientCallName: 'client.iaas.api.blockDevices.snapshots.delete',
    fullyQualifiedName: 'iaas.api.blockDevices.snapshots.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/block-devices/{id}/snapshots/{id1}',
  },
  {
    clientCallName: 'client.iaas.api.fabricVsphereDatastores.retrieve',
    fullyQualifiedName: 'iaas.api.fabricVsphereDatastores.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-vsphere-datastores/{id}',
  },
  {
    clientCallName: 'client.iaas.api.fabricVsphereDatastores.update',
    fullyQualifiedName: 'iaas.api.fabricVsphereDatastores.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/fabric-vsphere-datastores/{id}',
  },
  {
    clientCallName: 'client.iaas.api.fabricVsphereDatastores.retrieveFabricVsphereDatastores',
    fullyQualifiedName: 'iaas.api.fabricVsphereDatastores.retrieveFabricVsphereDatastores',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-vsphere-datastores',
  },
  {
    clientCallName: 'client.iaas.api.fabricNetworks.retrieve',
    fullyQualifiedName: 'iaas.api.fabricNetworks.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-networks/{id}',
  },
  {
    clientCallName: 'client.iaas.api.fabricNetworks.update',
    fullyQualifiedName: 'iaas.api.fabricNetworks.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/fabric-networks/{id}',
  },
  {
    clientCallName: 'client.iaas.api.fabricNetworks.retrieveFabricNetworks',
    fullyQualifiedName: 'iaas.api.fabricNetworks.retrieveFabricNetworks',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-networks',
  },
  {
    clientCallName: 'client.iaas.api.fabricNetworks.retrieveNetworkIPRanges',
    fullyQualifiedName: 'iaas.api.fabricNetworks.retrieveNetworkIPRanges',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-networks/{id}/network-ip-ranges',
  },
  {
    clientCallName: 'client.iaas.api.fabricNetworksVsphere.retrieve',
    fullyQualifiedName: 'iaas.api.fabricNetworksVsphere.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-networks-vsphere/{id}',
  },
  {
    clientCallName: 'client.iaas.api.fabricNetworksVsphere.update',
    fullyQualifiedName: 'iaas.api.fabricNetworksVsphere.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/fabric-networks-vsphere/{id}',
  },
  {
    clientCallName: 'client.iaas.api.fabricNetworksVsphere.retrieveFabricNetworksVsphere',
    fullyQualifiedName: 'iaas.api.fabricNetworksVsphere.retrieveFabricNetworksVsphere',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-networks-vsphere',
  },
  {
    clientCallName: 'client.iaas.api.fabricNetworksVsphere.retrieveNetworkIPRanges',
    fullyQualifiedName: 'iaas.api.fabricNetworksVsphere.retrieveNetworkIPRanges',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-networks-vsphere/{id}/network-ip-ranges',
  },
  {
    clientCallName: 'client.iaas.api.fabricComputes.retrieve',
    fullyQualifiedName: 'iaas.api.fabricComputes.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-computes/{id}',
  },
  {
    clientCallName: 'client.iaas.api.fabricComputes.update',
    fullyQualifiedName: 'iaas.api.fabricComputes.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/fabric-computes/{id}',
  },
  {
    clientCallName: 'client.iaas.api.fabricComputes.retrieveFabricComputes',
    fullyQualifiedName: 'iaas.api.fabricComputes.retrieveFabricComputes',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-computes',
  },
  {
    clientCallName: 'client.iaas.api.externalNetworkIPRanges.retrieve',
    fullyQualifiedName: 'iaas.api.externalNetworkIPRanges.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/external-network-ip-ranges/{id}',
  },
  {
    clientCallName: 'client.iaas.api.externalNetworkIPRanges.update',
    fullyQualifiedName: 'iaas.api.externalNetworkIPRanges.update',
    httpMethod: 'patch',
    httpPath: '/iaas/api/external-network-ip-ranges/{id}',
  },
  {
    clientCallName: 'client.iaas.api.externalNetworkIPRanges.retrieveExternalNetworkIPRanges',
    fullyQualifiedName: 'iaas.api.externalNetworkIPRanges.retrieveExternalNetworkIPRanges',
    httpMethod: 'get',
    httpPath: '/iaas/api/external-network-ip-ranges',
  },
  {
    clientCallName: 'client.iaas.api.configurationProperties.retrieve',
    fullyQualifiedName: 'iaas.api.configurationProperties.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/configuration-properties/{id}',
  },
  {
    clientCallName: 'client.iaas.api.configurationProperties.delete',
    fullyQualifiedName: 'iaas.api.configurationProperties.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/configuration-properties/{id}',
  },
  {
    clientCallName: 'client.iaas.api.configurationProperties.retrieveConfigurationProperties',
    fullyQualifiedName: 'iaas.api.configurationProperties.retrieveConfigurationProperties',
    httpMethod: 'get',
    httpPath: '/iaas/api/configuration-properties',
  },
  {
    clientCallName: 'client.iaas.api.configurationProperties.updateConfigurationProperties',
    fullyQualifiedName: 'iaas.api.configurationProperties.updateConfigurationProperties',
    httpMethod: 'patch',
    httpPath: '/iaas/api/configuration-properties',
  },
  {
    clientCallName: 'client.iaas.api.requestTracker.retrieve',
    fullyQualifiedName: 'iaas.api.requestTracker.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/request-tracker/{id}',
  },
  {
    clientCallName: 'client.iaas.api.requestTracker.delete',
    fullyQualifiedName: 'iaas.api.requestTracker.delete',
    httpMethod: 'delete',
    httpPath: '/iaas/api/request-tracker/{id}',
  },
  {
    clientCallName: 'client.iaas.api.requestTracker.retrieveRequestTracker',
    fullyQualifiedName: 'iaas.api.requestTracker.retrieveRequestTracker',
    httpMethod: 'get',
    httpPath: '/iaas/api/request-tracker',
  },
  {
    clientCallName: 'client.iaas.api.regions.retrieve',
    fullyQualifiedName: 'iaas.api.regions.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/regions/{id}',
  },
  {
    clientCallName: 'client.iaas.api.regions.list',
    fullyQualifiedName: 'iaas.api.regions.list',
    httpMethod: 'get',
    httpPath: '/iaas/api/regions',
  },
  {
    clientCallName: 'client.iaas.api.networkDomains.retrieve',
    fullyQualifiedName: 'iaas.api.networkDomains.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/network-domains/{id}',
  },
  {
    clientCallName: 'client.iaas.api.networkDomains.retrieveNetworkDomains',
    fullyQualifiedName: 'iaas.api.networkDomains.retrieveNetworkDomains',
    httpMethod: 'get',
    httpPath: '/iaas/api/network-domains',
  },
  {
    clientCallName: 'client.iaas.api.fabricVsphereStoragePolicies.retrieve',
    fullyQualifiedName: 'iaas.api.fabricVsphereStoragePolicies.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-vsphere-storage-policies/{id}',
  },
  {
    clientCallName: 'client.iaas.api.fabricVsphereStoragePolicies.retrieveFabricVsphereStoragePolicies',
    fullyQualifiedName: 'iaas.api.fabricVsphereStoragePolicies.retrieveFabricVsphereStoragePolicies',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-vsphere-storage-policies',
  },
  {
    clientCallName: 'client.iaas.api.fabricImages.retrieve',
    fullyQualifiedName: 'iaas.api.fabricImages.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-images/{id}',
  },
  {
    clientCallName: 'client.iaas.api.fabricImages.retrieveFabricImages',
    fullyQualifiedName: 'iaas.api.fabricImages.retrieveFabricImages',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-images',
  },
  {
    clientCallName: 'client.iaas.api.fabricAzureStorageAccounts.retrieve',
    fullyQualifiedName: 'iaas.api.fabricAzureStorageAccounts.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-azure-storage-accounts/{id}',
  },
  {
    clientCallName: 'client.iaas.api.fabricAzureStorageAccounts.retrieveFabricAzureStorageAccounts',
    fullyQualifiedName: 'iaas.api.fabricAzureStorageAccounts.retrieveFabricAzureStorageAccounts',
    httpMethod: 'get',
    httpPath: '/iaas/api/fabric-azure-storage-accounts',
  },
  {
    clientCallName: 'client.iaas.api.externalIPBlocks.retrieve',
    fullyQualifiedName: 'iaas.api.externalIPBlocks.retrieve',
    httpMethod: 'get',
    httpPath: '/iaas/api/external-ip-blocks/{id}',
  },
  {
    clientCallName: 'client.iaas.api.externalIPBlocks.retrieveExternalIPBlocks',
    fullyQualifiedName: 'iaas.api.externalIPBlocks.retrieveExternalIPBlocks',
    httpMethod: 'get',
    httpPath: '/iaas/api/external-ip-blocks',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
