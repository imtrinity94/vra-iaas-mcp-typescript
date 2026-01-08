# Iaas

## API

Types:

- <code><a href="./src/resources/iaas/api/api.ts">APIRetrieveResponse</a></code>
- <code><a href="./src/resources/iaas/api/api.ts">APILoginResponse</a></code>
- <code><a href="./src/resources/iaas/api/api.ts">APIRetrieveAboutResponse</a></code>
- <code><a href="./src/resources/iaas/api/api.ts">APIRetrieveEventLogsResponse</a></code>
- <code><a href="./src/resources/iaas/api/api.ts">APIRetrieveFabricAwsVolumeTypesResponse</a></code>
- <code><a href="./src/resources/iaas/api/api.ts">APIRetrieveFabricAzureDiskEncryptionSetsResponse</a></code>
- <code><a href="./src/resources/iaas/api/api.ts">APIRetrieveFabricFlavorsResponse</a></code>
- <code><a href="./src/resources/iaas/api/api.ts">APIRetrieveFlavorsResponse</a></code>
- <code><a href="./src/resources/iaas/api/api.ts">APIRetrieveFoldersResponse</a></code>
- <code><a href="./src/resources/iaas/api/api.ts">APIRetrieveImagesResponse</a></code>
- <code><a href="./src/resources/iaas/api/api.ts">APIRetrieveRequestGraphResponse</a></code>

Methods:

- <code title="get /iaas/api/certificates/{id}">client.iaas.api.<a href="./src/resources/iaas/api/api.ts">retrieve</a>(id, { ...params }) -> APIRetrieveResponse</code>
- <code title="post /iaas/api/login">client.iaas.api.<a href="./src/resources/iaas/api/api.ts">login</a>({ ...params }) -> APILoginResponse</code>
- <code title="get /iaas/api/about">client.iaas.api.<a href="./src/resources/iaas/api/api.ts">retrieveAbout</a>() -> APIRetrieveAboutResponse</code>
- <code title="get /iaas/api/event-logs">client.iaas.api.<a href="./src/resources/iaas/api/api.ts">retrieveEventLogs</a>({ ...params }) -> APIRetrieveEventLogsResponse</code>
- <code title="get /iaas/api/fabric-aws-volume-types">client.iaas.api.<a href="./src/resources/iaas/api/api.ts">retrieveFabricAwsVolumeTypes</a>({ ...params }) -> APIRetrieveFabricAwsVolumeTypesResponse</code>
- <code title="get /iaas/api/fabric-azure-disk-encryption-sets">client.iaas.api.<a href="./src/resources/iaas/api/api.ts">retrieveFabricAzureDiskEncryptionSets</a>({ ...params }) -> APIRetrieveFabricAzureDiskEncryptionSetsResponse</code>
- <code title="get /iaas/api/fabric-flavors">client.iaas.api.<a href="./src/resources/iaas/api/api.ts">retrieveFabricFlavors</a>({ ...params }) -> APIRetrieveFabricFlavorsResponse</code>
- <code title="get /iaas/api/flavors">client.iaas.api.<a href="./src/resources/iaas/api/api.ts">retrieveFlavors</a>({ ...params }) -> APIRetrieveFlavorsResponse</code>
- <code title="get /iaas/api/folders">client.iaas.api.<a href="./src/resources/iaas/api/api.ts">retrieveFolders</a>({ ...params }) -> APIRetrieveFoldersResponse</code>
- <code title="get /iaas/api/images">client.iaas.api.<a href="./src/resources/iaas/api/api.ts">retrieveImages</a>({ ...params }) -> APIRetrieveImagesResponse</code>
- <code title="get /iaas/api/request-graph">client.iaas.api.<a href="./src/resources/iaas/api/api.ts">retrieveRequestGraph</a>({ ...params }) -> APIRetrieveRequestGraphResponse</code>

### StorageProfiles

Types:

- <code><a href="./src/resources/iaas/api/storage-profiles/storage-profiles.ts">StorageProfile</a></code>
- <code><a href="./src/resources/iaas/api/storage-profiles/storage-profiles.ts">StorageProfileAssociations</a></code>
- <code><a href="./src/resources/iaas/api/storage-profiles/storage-profiles.ts">StorageProfileSpecification</a></code>
- <code><a href="./src/resources/iaas/api/storage-profiles/storage-profiles.ts">StorageProfileRetrieveStorageProfilesResponse</a></code>

Methods:

- <code title="get /iaas/api/storage-profiles/{id}">client.iaas.api.storageProfiles.<a href="./src/resources/iaas/api/storage-profiles/storage-profiles.ts">retrieve</a>(id, { ...params }) -> StorageProfile</code>
- <code title="put /iaas/api/storage-profiles/{id}">client.iaas.api.storageProfiles.<a href="./src/resources/iaas/api/storage-profiles/storage-profiles.ts">update</a>(id, { ...params }) -> StorageProfile</code>
- <code title="delete /iaas/api/storage-profiles/{id}">client.iaas.api.storageProfiles.<a href="./src/resources/iaas/api/storage-profiles/storage-profiles.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /iaas/api/storage-profiles">client.iaas.api.storageProfiles.<a href="./src/resources/iaas/api/storage-profiles/storage-profiles.ts">retrieveStorageProfiles</a>({ ...params }) -> StorageProfileRetrieveStorageProfilesResponse</code>
- <code title="post /iaas/api/storage-profiles">client.iaas.api.storageProfiles.<a href="./src/resources/iaas/api/storage-profiles/storage-profiles.ts">storageProfiles</a>({ ...params }) -> StorageProfile</code>

#### StorageProfileAssociations

Types:

- <code><a href="./src/resources/iaas/api/storage-profiles/storage-profile-associations.ts">StorageProfileAssociationRetrieveStorageProfileAssociationsResponse</a></code>
- <code><a href="./src/resources/iaas/api/storage-profiles/storage-profile-associations.ts">StorageProfileAssociationUpdateStorageProfileAssociationsResponse</a></code>

Methods:

- <code title="get /iaas/api/storage-profiles/{id}/storage-profile-associations">client.iaas.api.storageProfiles.storageProfileAssociations.<a href="./src/resources/iaas/api/storage-profiles/storage-profile-associations.ts">retrieveStorageProfileAssociations</a>(id, { ...params }) -> StorageProfileAssociationRetrieveStorageProfileAssociationsResponse</code>
- <code title="patch /iaas/api/storage-profiles/{id}/storage-profile-associations">client.iaas.api.storageProfiles.storageProfileAssociations.<a href="./src/resources/iaas/api/storage-profiles/storage-profile-associations.ts">updateStorageProfileAssociations</a>(id, { ...params }) -> StorageProfileAssociationUpdateStorageProfileAssociationsResponse</code>

### Projects

Types:

- <code><a href="./src/resources/iaas/api/projects/projects.ts">Project</a></code>
- <code><a href="./src/resources/iaas/api/projects/projects.ts">ProjectSpecification</a></code>
- <code><a href="./src/resources/iaas/api/projects/projects.ts">User</a></code>
- <code><a href="./src/resources/iaas/api/projects/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /iaas/api/projects">client.iaas.api.projects.<a href="./src/resources/iaas/api/projects/projects.ts">create</a>({ ...params }) -> Project</code>
- <code title="get /iaas/api/projects/{id}">client.iaas.api.projects.<a href="./src/resources/iaas/api/projects/projects.ts">retrieve</a>(id, { ...params }) -> Project</code>
- <code title="patch /iaas/api/projects/{id}">client.iaas.api.projects.<a href="./src/resources/iaas/api/projects/projects.ts">update</a>(id, { ...params }) -> Project</code>
- <code title="get /iaas/api/projects">client.iaas.api.projects.<a href="./src/resources/iaas/api/projects/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="delete /iaas/api/projects/{id}">client.iaas.api.projects.<a href="./src/resources/iaas/api/projects/projects.ts">delete</a>(id, { ...params }) -> void</code>

#### Zones

Types:

- <code><a href="./src/resources/iaas/api/projects/zones.ts">RequestTracker</a></code>
- <code><a href="./src/resources/iaas/api/projects/zones.ts">ZoneAssignment</a></code>
- <code><a href="./src/resources/iaas/api/projects/zones.ts">ZoneAssignmentSpecification</a></code>
- <code><a href="./src/resources/iaas/api/projects/zones.ts">ZoneListResponse</a></code>

Methods:

- <code title="put /iaas/api/projects/{id}/zones">client.iaas.api.projects.zones.<a href="./src/resources/iaas/api/projects/zones.ts">create</a>(id, { ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/projects/{id}/zones">client.iaas.api.projects.zones.<a href="./src/resources/iaas/api/projects/zones.ts">list</a>(id, { ...params }) -> ZoneListResponse</code>

#### ResourceMetadata

Types:

- <code><a href="./src/resources/iaas/api/projects/resource-metadata.ts">ResourceMetadataRetrieveResourceMetadataResponse</a></code>

Methods:

- <code title="get /iaas/api/projects/{id}/resource-metadata">client.iaas.api.projects.resourceMetadata.<a href="./src/resources/iaas/api/projects/resource-metadata.ts">retrieveResourceMetadata</a>(id, { ...params }) -> ResourceMetadataRetrieveResourceMetadataResponse</code>
- <code title="patch /iaas/api/projects/{id}/resource-metadata">client.iaas.api.projects.resourceMetadata.<a href="./src/resources/iaas/api/projects/resource-metadata.ts">updateResourceMetadata</a>(id, { ...params }) -> Project</code>

### Naming

Types:

- <code><a href="./src/resources/iaas/api/naming.ts">CustomNaming</a></code>
- <code><a href="./src/resources/iaas/api/naming.ts">CustomNamingModel</a></code>
- <code><a href="./src/resources/iaas/api/naming.ts">CustomNamingProject</a></code>
- <code><a href="./src/resources/iaas/api/naming.ts">NamingListResponse</a></code>

Methods:

- <code title="post /iaas/api/naming">client.iaas.api.naming.<a href="./src/resources/iaas/api/naming.ts">create</a>({ ...params }) -> CustomNaming</code>
- <code title="get /iaas/api/naming/projectId/{id}">client.iaas.api.naming.<a href="./src/resources/iaas/api/naming.ts">retrieve</a>(id, { ...params }) -> CustomNaming</code>
- <code title="get /iaas/api/naming">client.iaas.api.naming.<a href="./src/resources/iaas/api/naming.ts">list</a>({ ...params }) -> NamingListResponse</code>
- <code title="delete /iaas/api/naming/{id}">client.iaas.api.naming.<a href="./src/resources/iaas/api/naming.ts">delete</a>(id, { ...params }) -> CustomNaming</code>

### Zones

Types:

- <code><a href="./src/resources/iaas/api/zones.ts">FabricComputeResult</a></code>
- <code><a href="./src/resources/iaas/api/zones.ts">Zone</a></code>
- <code><a href="./src/resources/iaas/api/zones.ts">ZoneSpecification</a></code>
- <code><a href="./src/resources/iaas/api/zones.ts">ZoneListResponse</a></code>

Methods:

- <code title="post /iaas/api/zones">client.iaas.api.zones.<a href="./src/resources/iaas/api/zones.ts">create</a>({ ...params }) -> Zone</code>
- <code title="get /iaas/api/zones/{id}">client.iaas.api.zones.<a href="./src/resources/iaas/api/zones.ts">retrieve</a>(id, { ...params }) -> Zone</code>
- <code title="patch /iaas/api/zones/{id}">client.iaas.api.zones.<a href="./src/resources/iaas/api/zones.ts">update</a>(id, { ...params }) -> Zone</code>
- <code title="get /iaas/api/zones">client.iaas.api.zones.<a href="./src/resources/iaas/api/zones.ts">list</a>({ ...params }) -> ZoneListResponse</code>
- <code title="delete /iaas/api/zones/{id}">client.iaas.api.zones.<a href="./src/resources/iaas/api/zones.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /iaas/api/zones/{id}/computes">client.iaas.api.zones.<a href="./src/resources/iaas/api/zones.ts">retrieveComputes</a>(id, { ...params }) -> FabricComputeResult</code>

### Tags

Types:

- <code><a href="./src/resources/iaas/api/tags.ts">Tag</a></code>
- <code><a href="./src/resources/iaas/api/tags.ts">TagListResponse</a></code>

Methods:

- <code title="post /iaas/api/tags">client.iaas.api.tags.<a href="./src/resources/iaas/api/tags.ts">create</a>({ ...params }) -> Tag</code>
- <code title="get /iaas/api/tags">client.iaas.api.tags.<a href="./src/resources/iaas/api/tags.ts">list</a>({ ...params }) -> TagListResponse</code>
- <code title="delete /iaas/api/tags/{id}">client.iaas.api.tags.<a href="./src/resources/iaas/api/tags.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /iaas/api/tags/tags-usage">client.iaas.api.tags.<a href="./src/resources/iaas/api/tags.ts">tagsUsage</a>({ ...params }) -> void</code>

### StorageProfilesVsphere

Types:

- <code><a href="./src/resources/iaas/api/storage-profiles-vsphere.ts">StorageProfileVsphereSpecification</a></code>
- <code><a href="./src/resources/iaas/api/storage-profiles-vsphere.ts">VsphereStorageProfile</a></code>
- <code><a href="./src/resources/iaas/api/storage-profiles-vsphere.ts">StorageProfilesVsphereRetrieveStorageProfilesVsphereResponse</a></code>

Methods:

- <code title="get /iaas/api/storage-profiles-vsphere/{id}">client.iaas.api.storageProfilesVsphere.<a href="./src/resources/iaas/api/storage-profiles-vsphere.ts">retrieve</a>(id, { ...params }) -> VsphereStorageProfile</code>
- <code title="patch /iaas/api/storage-profiles-vsphere/{id}">client.iaas.api.storageProfilesVsphere.<a href="./src/resources/iaas/api/storage-profiles-vsphere.ts">update</a>(id, { ...params }) -> VsphereStorageProfile</code>
- <code title="delete /iaas/api/storage-profiles-vsphere/{id}">client.iaas.api.storageProfilesVsphere.<a href="./src/resources/iaas/api/storage-profiles-vsphere.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /iaas/api/storage-profiles-vsphere">client.iaas.api.storageProfilesVsphere.<a href="./src/resources/iaas/api/storage-profiles-vsphere.ts">retrieveStorageProfilesVsphere</a>({ ...params }) -> StorageProfilesVsphereRetrieveStorageProfilesVsphereResponse</code>
- <code title="post /iaas/api/storage-profiles-vsphere">client.iaas.api.storageProfilesVsphere.<a href="./src/resources/iaas/api/storage-profiles-vsphere.ts">storageProfilesVsphere</a>({ ...params }) -> VsphereStorageProfile</code>

### StorageProfilesGcp

Types:

- <code><a href="./src/resources/iaas/api/storage-profiles-gcp.ts">GcpStorageProfile</a></code>
- <code><a href="./src/resources/iaas/api/storage-profiles-gcp.ts">StorageProfileGcpSpecification</a></code>
- <code><a href="./src/resources/iaas/api/storage-profiles-gcp.ts">StorageProfilesGcpRetrieveStorageProfilesGcpResponse</a></code>

Methods:

- <code title="get /iaas/api/storage-profiles-gcp/{id}">client.iaas.api.storageProfilesGcp.<a href="./src/resources/iaas/api/storage-profiles-gcp.ts">retrieve</a>(id, { ...params }) -> GcpStorageProfile</code>
- <code title="patch /iaas/api/storage-profiles-gcp/{id}">client.iaas.api.storageProfilesGcp.<a href="./src/resources/iaas/api/storage-profiles-gcp.ts">update</a>(id, { ...params }) -> GcpStorageProfile</code>
- <code title="delete /iaas/api/storage-profiles-gcp/{id}">client.iaas.api.storageProfilesGcp.<a href="./src/resources/iaas/api/storage-profiles-gcp.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /iaas/api/storage-profiles-gcp">client.iaas.api.storageProfilesGcp.<a href="./src/resources/iaas/api/storage-profiles-gcp.ts">retrieveStorageProfilesGcp</a>({ ...params }) -> StorageProfilesGcpRetrieveStorageProfilesGcpResponse</code>
- <code title="post /iaas/api/storage-profiles-gcp">client.iaas.api.storageProfilesGcp.<a href="./src/resources/iaas/api/storage-profiles-gcp.ts">storageProfilesGcp</a>({ ...params }) -> GcpStorageProfile</code>

### StorageProfilesAzure

Types:

- <code><a href="./src/resources/iaas/api/storage-profiles-azure.ts">AzureStorageProfile</a></code>
- <code><a href="./src/resources/iaas/api/storage-profiles-azure.ts">StorageProfileAzureSpecification</a></code>
- <code><a href="./src/resources/iaas/api/storage-profiles-azure.ts">StorageProfilesAzureRetrieveStorageProfilesAzureResponse</a></code>

Methods:

- <code title="get /iaas/api/storage-profiles-azure/{id}">client.iaas.api.storageProfilesAzure.<a href="./src/resources/iaas/api/storage-profiles-azure.ts">retrieve</a>(id, { ...params }) -> AzureStorageProfile</code>
- <code title="patch /iaas/api/storage-profiles-azure/{id}">client.iaas.api.storageProfilesAzure.<a href="./src/resources/iaas/api/storage-profiles-azure.ts">update</a>(id, { ...params }) -> AzureStorageProfile</code>
- <code title="delete /iaas/api/storage-profiles-azure/{id}">client.iaas.api.storageProfilesAzure.<a href="./src/resources/iaas/api/storage-profiles-azure.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /iaas/api/storage-profiles-azure">client.iaas.api.storageProfilesAzure.<a href="./src/resources/iaas/api/storage-profiles-azure.ts">retrieveStorageProfilesAzure</a>({ ...params }) -> StorageProfilesAzureRetrieveStorageProfilesAzureResponse</code>
- <code title="post /iaas/api/storage-profiles-azure">client.iaas.api.storageProfilesAzure.<a href="./src/resources/iaas/api/storage-profiles-azure.ts">storageProfilesAzure</a>({ ...params }) -> AzureStorageProfile</code>

### StorageProfilesAws

Types:

- <code><a href="./src/resources/iaas/api/storage-profiles-aws.ts">AwsStorageProfile</a></code>
- <code><a href="./src/resources/iaas/api/storage-profiles-aws.ts">StorageProfileAwsSpecification</a></code>
- <code><a href="./src/resources/iaas/api/storage-profiles-aws.ts">StorageProfilesAwRetrieveStorageProfilesAwsResponse</a></code>

Methods:

- <code title="get /iaas/api/storage-profiles-aws/{id}">client.iaas.api.storageProfilesAws.<a href="./src/resources/iaas/api/storage-profiles-aws.ts">retrieve</a>(id, { ...params }) -> AwsStorageProfile</code>
- <code title="patch /iaas/api/storage-profiles-aws/{id}">client.iaas.api.storageProfilesAws.<a href="./src/resources/iaas/api/storage-profiles-aws.ts">update</a>(id, { ...params }) -> AwsStorageProfile</code>
- <code title="delete /iaas/api/storage-profiles-aws/{id}">client.iaas.api.storageProfilesAws.<a href="./src/resources/iaas/api/storage-profiles-aws.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /iaas/api/storage-profiles-aws">client.iaas.api.storageProfilesAws.<a href="./src/resources/iaas/api/storage-profiles-aws.ts">retrieveStorageProfilesAws</a>({ ...params }) -> StorageProfilesAwRetrieveStorageProfilesAwsResponse</code>
- <code title="post /iaas/api/storage-profiles-aws">client.iaas.api.storageProfilesAws.<a href="./src/resources/iaas/api/storage-profiles-aws.ts">storageProfilesAws</a>({ ...params }) -> AwsStorageProfile</code>

### SecurityGroups

Types:

- <code><a href="./src/resources/iaas/api/security-groups/security-groups.ts">SecurityGroup</a></code>
- <code><a href="./src/resources/iaas/api/security-groups/security-groups.ts">SecurityGroupRetrieveSecurityGroupsResponse</a></code>

Methods:

- <code title="get /iaas/api/security-groups/{id}">client.iaas.api.securityGroups.<a href="./src/resources/iaas/api/security-groups/security-groups.ts">retrieve</a>(id, { ...params }) -> SecurityGroup</code>
- <code title="patch /iaas/api/security-groups/{id}">client.iaas.api.securityGroups.<a href="./src/resources/iaas/api/security-groups/security-groups.ts">update</a>(id, { ...params }) -> SecurityGroup</code>
- <code title="delete /iaas/api/security-groups/{id}">client.iaas.api.securityGroups.<a href="./src/resources/iaas/api/security-groups/security-groups.ts">delete</a>(id, { ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/security-groups">client.iaas.api.securityGroups.<a href="./src/resources/iaas/api/security-groups/security-groups.ts">retrieveSecurityGroups</a>({ ...params }) -> SecurityGroupRetrieveSecurityGroupsResponse</code>
- <code title="post /iaas/api/security-groups">client.iaas.api.securityGroups.<a href="./src/resources/iaas/api/security-groups/security-groups.ts">securityGroups</a>({ ...params }) -> RequestTracker</code>

#### Operations

Types:

- <code><a href="./src/resources/iaas/api/security-groups/operations.ts">Rule</a></code>
- <code><a href="./src/resources/iaas/api/security-groups/operations.ts">SecurityGroupSpecification</a></code>

Methods:

- <code title="post /iaas/api/security-groups/{id}/operations/reconfigure">client.iaas.api.securityGroups.operations.<a href="./src/resources/iaas/api/security-groups/operations.ts">reconfigure</a>(id, { ...params }) -> RequestTracker</code>

### Networks

Types:

- <code><a href="./src/resources/iaas/api/networks.ts">Network</a></code>
- <code><a href="./src/resources/iaas/api/networks.ts">PlacementConstraint</a></code>
- <code><a href="./src/resources/iaas/api/networks.ts">NetworkListResponse</a></code>

Methods:

- <code title="post /iaas/api/networks">client.iaas.api.networks.<a href="./src/resources/iaas/api/networks.ts">create</a>({ ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/networks/{id}">client.iaas.api.networks.<a href="./src/resources/iaas/api/networks.ts">retrieve</a>(id, { ...params }) -> Network</code>
- <code title="get /iaas/api/networks">client.iaas.api.networks.<a href="./src/resources/iaas/api/networks.ts">list</a>({ ...params }) -> NetworkListResponse</code>
- <code title="delete /iaas/api/networks/{id}">client.iaas.api.networks.<a href="./src/resources/iaas/api/networks.ts">delete</a>(id, { ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/networks/{id}/network-ip-ranges">client.iaas.api.networks.<a href="./src/resources/iaas/api/networks.ts">retrieveNetworkIPRanges</a>(id, { ...params }) -> Network</code>

### NetworkProfiles

Types:

- <code><a href="./src/resources/iaas/api/network-profiles.ts">NetworkProfile</a></code>
- <code><a href="./src/resources/iaas/api/network-profiles.ts">NetworkProfileSpecification</a></code>
- <code><a href="./src/resources/iaas/api/network-profiles.ts">NetworkProfileRetrieveNetworkProfilesResponse</a></code>

Methods:

- <code title="get /iaas/api/network-profiles/{id}">client.iaas.api.networkProfiles.<a href="./src/resources/iaas/api/network-profiles.ts">retrieve</a>(id, { ...params }) -> NetworkProfile</code>
- <code title="patch /iaas/api/network-profiles/{id}">client.iaas.api.networkProfiles.<a href="./src/resources/iaas/api/network-profiles.ts">update</a>(id, { ...params }) -> NetworkProfile</code>
- <code title="delete /iaas/api/network-profiles/{id}">client.iaas.api.networkProfiles.<a href="./src/resources/iaas/api/network-profiles.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /iaas/api/network-profiles">client.iaas.api.networkProfiles.<a href="./src/resources/iaas/api/network-profiles.ts">networkProfiles</a>({ ...params }) -> NetworkProfile</code>
- <code title="get /iaas/api/network-profiles">client.iaas.api.networkProfiles.<a href="./src/resources/iaas/api/network-profiles.ts">retrieveNetworkProfiles</a>({ ...params }) -> NetworkProfileRetrieveNetworkProfilesResponse</code>

### NetworkIPRanges

Types:

- <code><a href="./src/resources/iaas/api/network-ip-ranges/network-ip-ranges.ts">NetworkIPRangeBase</a></code>
- <code><a href="./src/resources/iaas/api/network-ip-ranges/network-ip-ranges.ts">NetworkIPRangeSpecification</a></code>
- <code><a href="./src/resources/iaas/api/network-ip-ranges/network-ip-ranges.ts">NetworkIPRangeRetrieveResponse</a></code>
- <code><a href="./src/resources/iaas/api/network-ip-ranges/network-ip-ranges.ts">NetworkIPRangeRetrieveNetworkIPRangesResponse</a></code>

Methods:

- <code title="get /iaas/api/network-ip-ranges/{id}">client.iaas.api.networkIPRanges.<a href="./src/resources/iaas/api/network-ip-ranges/network-ip-ranges.ts">retrieve</a>(id, { ...params }) -> NetworkIPRangeRetrieveResponse</code>
- <code title="patch /iaas/api/network-ip-ranges/{id}">client.iaas.api.networkIPRanges.<a href="./src/resources/iaas/api/network-ip-ranges/network-ip-ranges.ts">update</a>(id, { ...params }) -> NetworkIPRangeBase</code>
- <code title="delete /iaas/api/network-ip-ranges/{id}">client.iaas.api.networkIPRanges.<a href="./src/resources/iaas/api/network-ip-ranges/network-ip-ranges.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /iaas/api/network-ip-ranges">client.iaas.api.networkIPRanges.<a href="./src/resources/iaas/api/network-ip-ranges/network-ip-ranges.ts">networkIPRanges</a>({ ...params }) -> NetworkIPRangeBase</code>
- <code title="get /iaas/api/network-ip-ranges">client.iaas.api.networkIPRanges.<a href="./src/resources/iaas/api/network-ip-ranges/network-ip-ranges.ts">retrieveNetworkIPRanges</a>({ ...params }) -> NetworkIPRangeRetrieveNetworkIPRangesResponse</code>

#### UnregisteredIPAddresses

Types:

- <code><a href="./src/resources/iaas/api/network-ip-ranges/unregistered-ip-addresses.ts">IPAddressReleaseSpecification</a></code>

Methods:

- <code title="post /iaas/api/network-ip-ranges/{id}/unregistered-ip-addresses/release">client.iaas.api.networkIPRanges.unregisteredIPAddresses.<a href="./src/resources/iaas/api/network-ip-ranges/unregistered-ip-addresses.ts">release</a>(id, { ...params }) -> RequestTracker</code>

#### IPAddresses

Types:

- <code><a href="./src/resources/iaas/api/network-ip-ranges/ip-addresses.ts">NetworkIPAddress</a></code>
- <code><a href="./src/resources/iaas/api/network-ip-ranges/ip-addresses.ts">IPAddressRetrieveIPAddressesResponse</a></code>

Methods:

- <code title="get /iaas/api/network-ip-ranges/{networkIPRangeId}/ip-addresses/{ipAddressId}">client.iaas.api.networkIPRanges.ipAddresses.<a href="./src/resources/iaas/api/network-ip-ranges/ip-addresses.ts">retrieve</a>(ipAddressID, { ...params }) -> NetworkIPAddress</code>
- <code title="post /iaas/api/network-ip-ranges/{id}/ip-addresses/allocate">client.iaas.api.networkIPRanges.ipAddresses.<a href="./src/resources/iaas/api/network-ip-ranges/ip-addresses.ts">allocate</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/network-ip-ranges/{id}/ip-addresses/release">client.iaas.api.networkIPRanges.ipAddresses.<a href="./src/resources/iaas/api/network-ip-ranges/ip-addresses.ts">release</a>(id, { ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/network-ip-ranges/{id}/ip-addresses">client.iaas.api.networkIPRanges.ipAddresses.<a href="./src/resources/iaas/api/network-ip-ranges/ip-addresses.ts">retrieveIPAddresses</a>(id, { ...params }) -> IPAddressRetrieveIPAddressesResponse</code>

### Machines

Types:

- <code><a href="./src/resources/iaas/api/machines/machines.ts">Machine</a></code>
- <code><a href="./src/resources/iaas/api/machines/machines.ts">MachineBootConfig</a></code>
- <code><a href="./src/resources/iaas/api/machines/machines.ts">SaltConfiguration</a></code>
- <code><a href="./src/resources/iaas/api/machines/machines.ts">MachineListResponse</a></code>

Methods:

- <code title="post /iaas/api/machines">client.iaas.api.machines.<a href="./src/resources/iaas/api/machines/machines.ts">create</a>({ ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/machines/{id}">client.iaas.api.machines.<a href="./src/resources/iaas/api/machines/machines.ts">retrieve</a>(id, { ...params }) -> Machine</code>
- <code title="patch /iaas/api/machines/{id}">client.iaas.api.machines.<a href="./src/resources/iaas/api/machines/machines.ts">update</a>(id, { ...params }) -> Machine</code>
- <code title="get /iaas/api/machines">client.iaas.api.machines.<a href="./src/resources/iaas/api/machines/machines.ts">list</a>({ ...params }) -> MachineListResponse</code>
- <code title="delete /iaas/api/machines/{id}">client.iaas.api.machines.<a href="./src/resources/iaas/api/machines/machines.ts">delete</a>(id, { ...params }) -> RequestTracker</code>

#### Operations

Types:

- <code><a href="./src/resources/iaas/api/machines/operations.ts">NetworkInterfaceSpecification</a></code>

Methods:

- <code title="post /iaas/api/machines/{id}/operations/revert/{snapshotId}">client.iaas.api.machines.operations.<a href="./src/resources/iaas/api/machines/operations.ts">update</a>(snapshotID, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/machines/{id}/operations/change-security-groups">client.iaas.api.machines.operations.<a href="./src/resources/iaas/api/machines/operations.ts">changeSecurityGroups</a>(pathID, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/machines/{id}/operations/power-off">client.iaas.api.machines.operations.<a href="./src/resources/iaas/api/machines/operations.ts">powerOff</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/machines/{id}/operations/power-on">client.iaas.api.machines.operations.<a href="./src/resources/iaas/api/machines/operations.ts">powerOn</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/machines/{id}/operations/reboot">client.iaas.api.machines.operations.<a href="./src/resources/iaas/api/machines/operations.ts">reboot</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/machines/{id}/operations/reset">client.iaas.api.machines.operations.<a href="./src/resources/iaas/api/machines/operations.ts">reset</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/machines/{id}/operations/resize">client.iaas.api.machines.operations.<a href="./src/resources/iaas/api/machines/operations.ts">resize</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/machines/{id}/operations/restart">client.iaas.api.machines.operations.<a href="./src/resources/iaas/api/machines/operations.ts">restart</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/machines/{id}/operations/shutdown">client.iaas.api.machines.operations.<a href="./src/resources/iaas/api/machines/operations.ts">shutdown</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/machines/{id}/operations/snapshots">client.iaas.api.machines.operations.<a href="./src/resources/iaas/api/machines/operations.ts">snapshots</a>(pathID, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/machines/{id}/operations/suspend">client.iaas.api.machines.operations.<a href="./src/resources/iaas/api/machines/operations.ts">suspend</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/machines/{id}/operations/unregister">client.iaas.api.machines.operations.<a href="./src/resources/iaas/api/machines/operations.ts">unregister</a>(id, { ...params }) -> RequestTracker</code>

#### Disks

Types:

- <code><a href="./src/resources/iaas/api/machines/disks.ts">BlockDeviceResult</a></code>
- <code><a href="./src/resources/iaas/api/machines/disks.ts">DiskAttachmentSpecification</a></code>

Methods:

- <code title="post /iaas/api/machines/{id}/disks">client.iaas.api.machines.disks.<a href="./src/resources/iaas/api/machines/disks.ts">create</a>(id, { ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/machines/{id}/disks/{diskId}">client.iaas.api.machines.disks.<a href="./src/resources/iaas/api/machines/disks.ts">retrieve</a>(diskID, { ...params }) -> BlockDevice</code>
- <code title="get /iaas/api/machines/{id}/disks">client.iaas.api.machines.disks.<a href="./src/resources/iaas/api/machines/disks.ts">list</a>(id, { ...params }) -> BlockDeviceResult</code>
- <code title="delete /iaas/api/machines/{id}/disks/{diskId}">client.iaas.api.machines.disks.<a href="./src/resources/iaas/api/machines/disks.ts">delete</a>(diskID, { ...params }) -> RequestTracker</code>

#### NetworkInterfaces

Types:

- <code><a href="./src/resources/iaas/api/machines/network-interfaces.ts">NetworkInterface</a></code>

Methods:

- <code title="get /iaas/api/machines/{id}/network-interfaces/{networkId}">client.iaas.api.machines.networkInterfaces.<a href="./src/resources/iaas/api/machines/network-interfaces.ts">retrieve</a>(networkID, { ...params }) -> NetworkInterface</code>
- <code title="patch /iaas/api/machines/{id}/network-interfaces/{networkId}">client.iaas.api.machines.networkInterfaces.<a href="./src/resources/iaas/api/machines/network-interfaces.ts">update</a>(networkID, { ...params }) -> NetworkInterface</code>

#### Snapshots

Types:

- <code><a href="./src/resources/iaas/api/machines/snapshots.ts">Snapshot</a></code>

Methods:

- <code title="get /iaas/api/machines/{id}/snapshots/{snapshotId}">client.iaas.api.machines.snapshots.<a href="./src/resources/iaas/api/machines/snapshots.ts">retrieve</a>(snapshotID, { ...params }) -> Snapshot</code>
- <code title="get /iaas/api/machines/{id}/snapshots">client.iaas.api.machines.snapshots.<a href="./src/resources/iaas/api/machines/snapshots.ts">list</a>(id, { ...params }) -> Snapshot</code>
- <code title="delete /iaas/api/machines/{id}/snapshots/{snapshotId}">client.iaas.api.machines.snapshots.<a href="./src/resources/iaas/api/machines/snapshots.ts">delete</a>(snapshotID, { ...params }) -> RequestTracker</code>

### LoadBalancers

Types:

- <code><a href="./src/resources/iaas/api/load-balancers/load-balancers.ts">LoadBalancer</a></code>
- <code><a href="./src/resources/iaas/api/load-balancers/load-balancers.ts">LoadBalancerRetrieveLoadBalancersResponse</a></code>

Methods:

- <code title="get /iaas/api/load-balancers/{id}">client.iaas.api.loadBalancers.<a href="./src/resources/iaas/api/load-balancers/load-balancers.ts">retrieve</a>(id, { ...params }) -> LoadBalancer</code>
- <code title="delete /iaas/api/load-balancers/{id}">client.iaas.api.loadBalancers.<a href="./src/resources/iaas/api/load-balancers/load-balancers.ts">delete</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/load-balancers">client.iaas.api.loadBalancers.<a href="./src/resources/iaas/api/load-balancers/load-balancers.ts">loadBalancers</a>({ ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/load-balancers">client.iaas.api.loadBalancers.<a href="./src/resources/iaas/api/load-balancers/load-balancers.ts">retrieveLoadBalancers</a>({ ...params }) -> LoadBalancerRetrieveLoadBalancersResponse</code>

#### Operations

Types:

- <code><a href="./src/resources/iaas/api/load-balancers/operations.ts">LoadBalancerSpecification</a></code>
- <code><a href="./src/resources/iaas/api/load-balancers/operations.ts">RouteConfiguration</a></code>

Methods:

- <code title="post /iaas/api/load-balancers/{id}/operations/delete">client.iaas.api.loadBalancers.operations.<a href="./src/resources/iaas/api/load-balancers/operations.ts">delete</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/load-balancers/{id}/operations/scale">client.iaas.api.loadBalancers.operations.<a href="./src/resources/iaas/api/load-balancers/operations.ts">scale</a>(id, { ...params }) -> RequestTracker</code>

### IntegrationsIpam

#### PackageImport

Types:

- <code><a href="./src/resources/iaas/api/integrations-ipam/package-import.ts">PackageImportPackageImportResponse</a></code>

Methods:

- <code title="patch /iaas/api/integrations-ipam/package-import/{id}">client.iaas.api.integrationsIpam.packageImport.<a href="./src/resources/iaas/api/integrations-ipam/package-import.ts">update</a>(id, { ...params }) -> void</code>
- <code title="post /iaas/api/integrations-ipam/package-import">client.iaas.api.integrationsIpam.packageImport.<a href="./src/resources/iaas/api/integrations-ipam/package-import.ts">packageImport</a>({ ...params }) -> PackageImportPackageImportResponse</code>

### Integrations

Types:

- <code><a href="./src/resources/iaas/api/integrations.ts">CertificateInfoSpecification</a></code>
- <code><a href="./src/resources/iaas/api/integrations.ts">Integration</a></code>
- <code><a href="./src/resources/iaas/api/integrations.ts">IntegrationListResponse</a></code>

Methods:

- <code title="post /iaas/api/integrations">client.iaas.api.integrations.<a href="./src/resources/iaas/api/integrations.ts">create</a>({ ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/integrations/{id}">client.iaas.api.integrations.<a href="./src/resources/iaas/api/integrations.ts">retrieve</a>(id, { ...params }) -> Integration</code>
- <code title="patch /iaas/api/integrations/{id}">client.iaas.api.integrations.<a href="./src/resources/iaas/api/integrations.ts">update</a>(id, { ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/integrations">client.iaas.api.integrations.<a href="./src/resources/iaas/api/integrations.ts">list</a>({ ...params }) -> IntegrationListResponse</code>
- <code title="delete /iaas/api/integrations/{id}">client.iaas.api.integrations.<a href="./src/resources/iaas/api/integrations.ts">delete</a>(id, { ...params }) -> RequestTracker</code>

### ImageProfiles

Types:

- <code><a href="./src/resources/iaas/api/image-profiles.ts">ImageMapping</a></code>
- <code><a href="./src/resources/iaas/api/image-profiles.ts">ImageProfile</a></code>
- <code><a href="./src/resources/iaas/api/image-profiles.ts">ImageProfileRetrieveImageProfilesResponse</a></code>

Methods:

- <code title="get /iaas/api/image-profiles/{id}">client.iaas.api.imageProfiles.<a href="./src/resources/iaas/api/image-profiles.ts">retrieve</a>(id, { ...params }) -> ImageProfile</code>
- <code title="patch /iaas/api/image-profiles/{id}">client.iaas.api.imageProfiles.<a href="./src/resources/iaas/api/image-profiles.ts">update</a>(id, { ...params }) -> ImageProfile</code>
- <code title="delete /iaas/api/image-profiles/{id}">client.iaas.api.imageProfiles.<a href="./src/resources/iaas/api/image-profiles.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /iaas/api/image-profiles">client.iaas.api.imageProfiles.<a href="./src/resources/iaas/api/image-profiles.ts">imageProfiles</a>({ ...params }) -> ImageProfile</code>
- <code title="get /iaas/api/image-profiles">client.iaas.api.imageProfiles.<a href="./src/resources/iaas/api/image-profiles.ts">retrieveImageProfiles</a>({ ...params }) -> ImageProfileRetrieveImageProfilesResponse</code>

### FlavorProfiles

Types:

- <code><a href="./src/resources/iaas/api/flavor-profiles.ts">FlavorMapping</a></code>
- <code><a href="./src/resources/iaas/api/flavor-profiles.ts">FlavorProfile</a></code>
- <code><a href="./src/resources/iaas/api/flavor-profiles.ts">FlavorProfileRetrieveFlavorProfilesResponse</a></code>

Methods:

- <code title="get /iaas/api/flavor-profiles/{id}">client.iaas.api.flavorProfiles.<a href="./src/resources/iaas/api/flavor-profiles.ts">retrieve</a>(id, { ...params }) -> FlavorProfile</code>
- <code title="patch /iaas/api/flavor-profiles/{id}">client.iaas.api.flavorProfiles.<a href="./src/resources/iaas/api/flavor-profiles.ts">update</a>(id, { ...params }) -> FlavorProfile</code>
- <code title="delete /iaas/api/flavor-profiles/{id}">client.iaas.api.flavorProfiles.<a href="./src/resources/iaas/api/flavor-profiles.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /iaas/api/flavor-profiles">client.iaas.api.flavorProfiles.<a href="./src/resources/iaas/api/flavor-profiles.ts">flavorProfiles</a>({ ...params }) -> FlavorProfile</code>
- <code title="get /iaas/api/flavor-profiles">client.iaas.api.flavorProfiles.<a href="./src/resources/iaas/api/flavor-profiles.ts">retrieveFlavorProfiles</a>({ ...params }) -> FlavorProfileRetrieveFlavorProfilesResponse</code>

### Deployments

Types:

- <code><a href="./src/resources/iaas/api/deployments.ts">Deployment</a></code>
- <code><a href="./src/resources/iaas/api/deployments.ts">DeploymentListResponse</a></code>

Methods:

- <code title="post /iaas/api/deployments">client.iaas.api.deployments.<a href="./src/resources/iaas/api/deployments.ts">create</a>({ ...params }) -> Deployment</code>
- <code title="get /iaas/api/deployments/{id}">client.iaas.api.deployments.<a href="./src/resources/iaas/api/deployments.ts">retrieve</a>(id, { ...params }) -> Deployment</code>
- <code title="get /iaas/api/deployments">client.iaas.api.deployments.<a href="./src/resources/iaas/api/deployments.ts">list</a>({ ...params }) -> DeploymentListResponse</code>
- <code title="delete /iaas/api/deployments/{id}">client.iaas.api.deployments.<a href="./src/resources/iaas/api/deployments.ts">delete</a>(id, { ...params }) -> RequestTracker</code>

### DataCollectors

Types:

- <code><a href="./src/resources/iaas/api/data-collectors.ts">DataCollector</a></code>
- <code><a href="./src/resources/iaas/api/data-collectors.ts">DataCollectorDataCollectorsResponse</a></code>
- <code><a href="./src/resources/iaas/api/data-collectors.ts">DataCollectorRetrieveDataCollectorsResponse</a></code>

Methods:

- <code title="get /iaas/api/data-collectors/{id}">client.iaas.api.dataCollectors.<a href="./src/resources/iaas/api/data-collectors.ts">retrieve</a>(id, { ...params }) -> DataCollector</code>
- <code title="delete /iaas/api/data-collectors/{id}">client.iaas.api.dataCollectors.<a href="./src/resources/iaas/api/data-collectors.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /iaas/api/data-collectors">client.iaas.api.dataCollectors.<a href="./src/resources/iaas/api/data-collectors.ts">dataCollectors</a>({ ...params }) -> DataCollectorDataCollectorsResponse</code>
- <code title="get /iaas/api/data-collectors">client.iaas.api.dataCollectors.<a href="./src/resources/iaas/api/data-collectors.ts">retrieveDataCollectors</a>({ ...params }) -> DataCollectorRetrieveDataCollectorsResponse</code>

### ComputeNats

Types:

- <code><a href="./src/resources/iaas/api/compute-nats/compute-nats.ts">ComputeNat</a></code>
- <code><a href="./src/resources/iaas/api/compute-nats/compute-nats.ts">ComputeNatRetrieveComputeNatsResponse</a></code>

Methods:

- <code title="get /iaas/api/compute-nats/{id}">client.iaas.api.computeNats.<a href="./src/resources/iaas/api/compute-nats/compute-nats.ts">retrieve</a>(id, { ...params }) -> ComputeNat</code>
- <code title="delete /iaas/api/compute-nats/{id}">client.iaas.api.computeNats.<a href="./src/resources/iaas/api/compute-nats/compute-nats.ts">delete</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/compute-nats">client.iaas.api.computeNats.<a href="./src/resources/iaas/api/compute-nats/compute-nats.ts">computeNats</a>({ ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/compute-nats">client.iaas.api.computeNats.<a href="./src/resources/iaas/api/compute-nats/compute-nats.ts">retrieveComputeNats</a>({ ...params }) -> ComputeNatRetrieveComputeNatsResponse</code>

#### Operations

Types:

- <code><a href="./src/resources/iaas/api/compute-nats/operations.ts">NatRule</a></code>

Methods:

- <code title="post /iaas/api/compute-nats/{id}/operations/reconfigure">client.iaas.api.computeNats.operations.<a href="./src/resources/iaas/api/compute-nats/operations.ts">reconfigure</a>(id, { ...params }) -> RequestTracker</code>

### ComputeGateways

Types:

- <code><a href="./src/resources/iaas/api/compute-gateways.ts">ComputeGateway</a></code>
- <code><a href="./src/resources/iaas/api/compute-gateways.ts">ComputeGatewayRetrieveComputeGatewaysResponse</a></code>

Methods:

- <code title="get /iaas/api/compute-gateways/{id}">client.iaas.api.computeGateways.<a href="./src/resources/iaas/api/compute-gateways.ts">retrieve</a>(id, { ...params }) -> ComputeGateway</code>
- <code title="delete /iaas/api/compute-gateways/{id}">client.iaas.api.computeGateways.<a href="./src/resources/iaas/api/compute-gateways.ts">delete</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/compute-gateways">client.iaas.api.computeGateways.<a href="./src/resources/iaas/api/compute-gateways.ts">computeGateways</a>({ ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/compute-gateways">client.iaas.api.computeGateways.<a href="./src/resources/iaas/api/compute-gateways.ts">retrieveComputeGateways</a>({ ...params }) -> ComputeGatewayRetrieveComputeGatewaysResponse</code>

### CloudAccounts

Types:

- <code><a href="./src/resources/iaas/api/cloud-accounts/cloud-accounts.ts">CloudAccount</a></code>
- <code><a href="./src/resources/iaas/api/cloud-accounts/cloud-accounts.ts">CloudAccountRetrieveCloudAccountsResponse</a></code>

Methods:

- <code title="get /iaas/api/cloud-accounts/{id}">client.iaas.api.cloudAccounts.<a href="./src/resources/iaas/api/cloud-accounts/cloud-accounts.ts">retrieve</a>(id, { ...params }) -> CloudAccount</code>
- <code title="patch /iaas/api/cloud-accounts/{id}">client.iaas.api.cloudAccounts.<a href="./src/resources/iaas/api/cloud-accounts/cloud-accounts.ts">update</a>(id, { ...params }) -> RequestTracker</code>
- <code title="delete /iaas/api/cloud-accounts/{id}">client.iaas.api.cloudAccounts.<a href="./src/resources/iaas/api/cloud-accounts/cloud-accounts.ts">delete</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts">client.iaas.api.cloudAccounts.<a href="./src/resources/iaas/api/cloud-accounts/cloud-accounts.ts">cloudAccounts</a>({ ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts/{id}/health-check">client.iaas.api.cloudAccounts.<a href="./src/resources/iaas/api/cloud-accounts/cloud-accounts.ts">healthCheck</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts/{id}/private-image-enumeration">client.iaas.api.cloudAccounts.<a href="./src/resources/iaas/api/cloud-accounts/cloud-accounts.ts">privateImageEnumeration</a>(id, { ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/cloud-accounts">client.iaas.api.cloudAccounts.<a href="./src/resources/iaas/api/cloud-accounts/cloud-accounts.ts">retrieveCloudAccounts</a>({ ...params }) -> CloudAccountRetrieveCloudAccountsResponse</code>

#### RegionEnumeration

Types:

- <code><a href="./src/resources/iaas/api/cloud-accounts/region-enumeration.ts">RegionEnumerationRetrieveResponse</a></code>

Methods:

- <code title="get /iaas/api/cloud-accounts/region-enumeration/{id}">client.iaas.api.cloudAccounts.regionEnumeration.<a href="./src/resources/iaas/api/cloud-accounts/region-enumeration.ts">retrieve</a>(id, { ...params }) -> RegionEnumerationRetrieveResponse</code>
- <code title="post /iaas/api/cloud-accounts/region-enumeration">client.iaas.api.cloudAccounts.regionEnumeration.<a href="./src/resources/iaas/api/cloud-accounts/region-enumeration.ts">regionEnumeration</a>({ ...params }) -> RequestTracker</code>

### CloudAccountsVsphere

Types:

- <code><a href="./src/resources/iaas/api/cloud-accounts-vsphere.ts">CloudAccountVsphere</a></code>
- <code><a href="./src/resources/iaas/api/cloud-accounts-vsphere.ts">RegionSpecification</a></code>
- <code><a href="./src/resources/iaas/api/cloud-accounts-vsphere.ts">CloudAccountsVsphereRetrieveCloudAccountsVsphereResponse</a></code>

Methods:

- <code title="get /iaas/api/cloud-accounts-vsphere/{id}">client.iaas.api.cloudAccountsVsphere.<a href="./src/resources/iaas/api/cloud-accounts-vsphere.ts">retrieve</a>(id, { ...params }) -> CloudAccountVsphere</code>
- <code title="patch /iaas/api/cloud-accounts-vsphere/{id}">client.iaas.api.cloudAccountsVsphere.<a href="./src/resources/iaas/api/cloud-accounts-vsphere.ts">update</a>(id, { ...params }) -> RequestTracker</code>
- <code title="delete /iaas/api/cloud-accounts-vsphere/{id}">client.iaas.api.cloudAccountsVsphere.<a href="./src/resources/iaas/api/cloud-accounts-vsphere.ts">delete</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-vsphere">client.iaas.api.cloudAccountsVsphere.<a href="./src/resources/iaas/api/cloud-accounts-vsphere.ts">cloudAccountsVsphere</a>({ ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-vsphere/{id}/private-image-enumeration">client.iaas.api.cloudAccountsVsphere.<a href="./src/resources/iaas/api/cloud-accounts-vsphere.ts">privateImageEnumeration</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-vsphere/region-enumeration">client.iaas.api.cloudAccountsVsphere.<a href="./src/resources/iaas/api/cloud-accounts-vsphere.ts">regionEnumeration</a>({ ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/cloud-accounts-vsphere">client.iaas.api.cloudAccountsVsphere.<a href="./src/resources/iaas/api/cloud-accounts-vsphere.ts">retrieveCloudAccountsVsphere</a>({ ...params }) -> CloudAccountsVsphereRetrieveCloudAccountsVsphereResponse</code>

### CloudAccountsVmc

Types:

- <code><a href="./src/resources/iaas/api/cloud-accounts-vmc.ts">CloudAccountVmc</a></code>
- <code><a href="./src/resources/iaas/api/cloud-accounts-vmc.ts">CloudAccountsVmcRetrieveCloudAccountsVmcResponse</a></code>

Methods:

- <code title="get /iaas/api/cloud-accounts-vmc/{id}">client.iaas.api.cloudAccountsVmc.<a href="./src/resources/iaas/api/cloud-accounts-vmc.ts">retrieve</a>(id, { ...params }) -> CloudAccountVmc</code>
- <code title="patch /iaas/api/cloud-accounts-vmc/{id}">client.iaas.api.cloudAccountsVmc.<a href="./src/resources/iaas/api/cloud-accounts-vmc.ts">update</a>(id, { ...params }) -> RequestTracker</code>
- <code title="delete /iaas/api/cloud-accounts-vmc/{id}">client.iaas.api.cloudAccountsVmc.<a href="./src/resources/iaas/api/cloud-accounts-vmc.ts">delete</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-vmc">client.iaas.api.cloudAccountsVmc.<a href="./src/resources/iaas/api/cloud-accounts-vmc.ts">cloudAccountsVmc</a>({ ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-vmc/{id}/private-image-enumeration">client.iaas.api.cloudAccountsVmc.<a href="./src/resources/iaas/api/cloud-accounts-vmc.ts">privateImageEnumeration</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-vmc/region-enumeration">client.iaas.api.cloudAccountsVmc.<a href="./src/resources/iaas/api/cloud-accounts-vmc.ts">regionEnumeration</a>({ ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/cloud-accounts-vmc">client.iaas.api.cloudAccountsVmc.<a href="./src/resources/iaas/api/cloud-accounts-vmc.ts">retrieveCloudAccountsVmc</a>({ ...params }) -> CloudAccountsVmcRetrieveCloudAccountsVmcResponse</code>

### CloudAccountsVcf

Types:

- <code><a href="./src/resources/iaas/api/cloud-accounts-vcf.ts">CloudAccountVcf</a></code>
- <code><a href="./src/resources/iaas/api/cloud-accounts-vcf.ts">CloudAccountsVcfRetrieveCloudAccountsVcfResponse</a></code>

Methods:

- <code title="get /iaas/api/cloud-accounts-vcf/{id}">client.iaas.api.cloudAccountsVcf.<a href="./src/resources/iaas/api/cloud-accounts-vcf.ts">retrieve</a>(id, { ...params }) -> CloudAccountVcf</code>
- <code title="patch /iaas/api/cloud-accounts-vcf/{id}">client.iaas.api.cloudAccountsVcf.<a href="./src/resources/iaas/api/cloud-accounts-vcf.ts">update</a>(id, { ...params }) -> RequestTracker</code>
- <code title="delete /iaas/api/cloud-accounts-vcf/{id}">client.iaas.api.cloudAccountsVcf.<a href="./src/resources/iaas/api/cloud-accounts-vcf.ts">delete</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-vcf">client.iaas.api.cloudAccountsVcf.<a href="./src/resources/iaas/api/cloud-accounts-vcf.ts">cloudAccountsVcf</a>({ ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-vcf/{id}/private-image-enumeration">client.iaas.api.cloudAccountsVcf.<a href="./src/resources/iaas/api/cloud-accounts-vcf.ts">privateImageEnumeration</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-vcf/region-enumeration">client.iaas.api.cloudAccountsVcf.<a href="./src/resources/iaas/api/cloud-accounts-vcf.ts">regionEnumeration</a>({ ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/cloud-accounts-vcf">client.iaas.api.cloudAccountsVcf.<a href="./src/resources/iaas/api/cloud-accounts-vcf.ts">retrieveCloudAccountsVcf</a>({ ...params }) -> CloudAccountsVcfRetrieveCloudAccountsVcfResponse</code>

### CloudAccountsNsxV

Types:

- <code><a href="./src/resources/iaas/api/cloud-accounts-nsx-v.ts">CloudAccountNsxV</a></code>
- <code><a href="./src/resources/iaas/api/cloud-accounts-nsx-v.ts">CloudAccountsNsxVRetrieveCloudAccountsNsxVResponse</a></code>

Methods:

- <code title="get /iaas/api/cloud-accounts-nsx-v/{id}">client.iaas.api.cloudAccountsNsxV.<a href="./src/resources/iaas/api/cloud-accounts-nsx-v.ts">retrieve</a>(id, { ...params }) -> CloudAccountNsxV</code>
- <code title="patch /iaas/api/cloud-accounts-nsx-v/{id}">client.iaas.api.cloudAccountsNsxV.<a href="./src/resources/iaas/api/cloud-accounts-nsx-v.ts">update</a>(id, { ...params }) -> RequestTracker</code>
- <code title="delete /iaas/api/cloud-accounts-nsx-v/{id}">client.iaas.api.cloudAccountsNsxV.<a href="./src/resources/iaas/api/cloud-accounts-nsx-v.ts">delete</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-nsx-v">client.iaas.api.cloudAccountsNsxV.<a href="./src/resources/iaas/api/cloud-accounts-nsx-v.ts">cloudAccountsNsxV</a>({ ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/cloud-accounts-nsx-v">client.iaas.api.cloudAccountsNsxV.<a href="./src/resources/iaas/api/cloud-accounts-nsx-v.ts">retrieveCloudAccountsNsxV</a>({ ...params }) -> CloudAccountsNsxVRetrieveCloudAccountsNsxVResponse</code>

### CloudAccountsNsxT

Types:

- <code><a href="./src/resources/iaas/api/cloud-accounts-nsx-t.ts">CloudAccountNsxT</a></code>
- <code><a href="./src/resources/iaas/api/cloud-accounts-nsx-t.ts">CloudAccountsNsxTRetrieveCloudAccountsNsxTResponse</a></code>

Methods:

- <code title="get /iaas/api/cloud-accounts-nsx-t/{id}">client.iaas.api.cloudAccountsNsxT.<a href="./src/resources/iaas/api/cloud-accounts-nsx-t.ts">retrieve</a>(id, { ...params }) -> CloudAccountNsxT</code>
- <code title="patch /iaas/api/cloud-accounts-nsx-t/{id}">client.iaas.api.cloudAccountsNsxT.<a href="./src/resources/iaas/api/cloud-accounts-nsx-t.ts">update</a>(id, { ...params }) -> RequestTracker</code>
- <code title="delete /iaas/api/cloud-accounts-nsx-t/{id}">client.iaas.api.cloudAccountsNsxT.<a href="./src/resources/iaas/api/cloud-accounts-nsx-t.ts">delete</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-nsx-t">client.iaas.api.cloudAccountsNsxT.<a href="./src/resources/iaas/api/cloud-accounts-nsx-t.ts">cloudAccountsNsxT</a>({ ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/cloud-accounts-nsx-t">client.iaas.api.cloudAccountsNsxT.<a href="./src/resources/iaas/api/cloud-accounts-nsx-t.ts">retrieveCloudAccountsNsxT</a>({ ...params }) -> CloudAccountsNsxTRetrieveCloudAccountsNsxTResponse</code>

### CloudAccountsGcp

Types:

- <code><a href="./src/resources/iaas/api/cloud-accounts-gcp.ts">CloudAccountGcp</a></code>
- <code><a href="./src/resources/iaas/api/cloud-accounts-gcp.ts">CloudAccountsGcpRetrieveCloudAccountsGcpResponse</a></code>

Methods:

- <code title="get /iaas/api/cloud-accounts-gcp/{id}">client.iaas.api.cloudAccountsGcp.<a href="./src/resources/iaas/api/cloud-accounts-gcp.ts">retrieve</a>(id, { ...params }) -> CloudAccountGcp</code>
- <code title="patch /iaas/api/cloud-accounts-gcp/{id}">client.iaas.api.cloudAccountsGcp.<a href="./src/resources/iaas/api/cloud-accounts-gcp.ts">update</a>(id, { ...params }) -> RequestTracker</code>
- <code title="delete /iaas/api/cloud-accounts-gcp/{id}">client.iaas.api.cloudAccountsGcp.<a href="./src/resources/iaas/api/cloud-accounts-gcp.ts">delete</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-gcp">client.iaas.api.cloudAccountsGcp.<a href="./src/resources/iaas/api/cloud-accounts-gcp.ts">cloudAccountsGcp</a>({ ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-gcp/{id}/private-image-enumeration">client.iaas.api.cloudAccountsGcp.<a href="./src/resources/iaas/api/cloud-accounts-gcp.ts">privateImageEnumeration</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-gcp/region-enumeration">client.iaas.api.cloudAccountsGcp.<a href="./src/resources/iaas/api/cloud-accounts-gcp.ts">regionEnumeration</a>({ ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/cloud-accounts-gcp">client.iaas.api.cloudAccountsGcp.<a href="./src/resources/iaas/api/cloud-accounts-gcp.ts">retrieveCloudAccountsGcp</a>({ ...params }) -> CloudAccountsGcpRetrieveCloudAccountsGcpResponse</code>

### CloudAccountsAzure

Types:

- <code><a href="./src/resources/iaas/api/cloud-accounts-azure.ts">CloudAccountAzure</a></code>
- <code><a href="./src/resources/iaas/api/cloud-accounts-azure.ts">CloudAccountsAzureRetrieveCloudAccountsAzureResponse</a></code>

Methods:

- <code title="get /iaas/api/cloud-accounts-azure/{id}">client.iaas.api.cloudAccountsAzure.<a href="./src/resources/iaas/api/cloud-accounts-azure.ts">retrieve</a>(id, { ...params }) -> CloudAccountAzure</code>
- <code title="patch /iaas/api/cloud-accounts-azure/{id}">client.iaas.api.cloudAccountsAzure.<a href="./src/resources/iaas/api/cloud-accounts-azure.ts">update</a>(id, { ...params }) -> RequestTracker</code>
- <code title="delete /iaas/api/cloud-accounts-azure/{id}">client.iaas.api.cloudAccountsAzure.<a href="./src/resources/iaas/api/cloud-accounts-azure.ts">delete</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-azure">client.iaas.api.cloudAccountsAzure.<a href="./src/resources/iaas/api/cloud-accounts-azure.ts">cloudAccountsAzure</a>({ ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-azure/{id}/private-image-enumeration">client.iaas.api.cloudAccountsAzure.<a href="./src/resources/iaas/api/cloud-accounts-azure.ts">privateImageEnumeration</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-azure/region-enumeration">client.iaas.api.cloudAccountsAzure.<a href="./src/resources/iaas/api/cloud-accounts-azure.ts">regionEnumeration</a>({ ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/cloud-accounts-azure">client.iaas.api.cloudAccountsAzure.<a href="./src/resources/iaas/api/cloud-accounts-azure.ts">retrieveCloudAccountsAzure</a>({ ...params }) -> CloudAccountsAzureRetrieveCloudAccountsAzureResponse</code>

### CloudAccountsAws

Types:

- <code><a href="./src/resources/iaas/api/cloud-accounts-aws.ts">CloudAccountAws</a></code>
- <code><a href="./src/resources/iaas/api/cloud-accounts-aws.ts">CloudAccountsAwRetrieveCloudAccountsAwsResponse</a></code>

Methods:

- <code title="get /iaas/api/cloud-accounts-aws/{id}">client.iaas.api.cloudAccountsAws.<a href="./src/resources/iaas/api/cloud-accounts-aws.ts">retrieve</a>(id, { ...params }) -> CloudAccountAws</code>
- <code title="patch /iaas/api/cloud-accounts-aws/{id}">client.iaas.api.cloudAccountsAws.<a href="./src/resources/iaas/api/cloud-accounts-aws.ts">update</a>(id, { ...params }) -> RequestTracker</code>
- <code title="delete /iaas/api/cloud-accounts-aws/{id}">client.iaas.api.cloudAccountsAws.<a href="./src/resources/iaas/api/cloud-accounts-aws.ts">delete</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-aws">client.iaas.api.cloudAccountsAws.<a href="./src/resources/iaas/api/cloud-accounts-aws.ts">cloudAccountsAws</a>({ ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-aws/{id}/private-image-enumeration">client.iaas.api.cloudAccountsAws.<a href="./src/resources/iaas/api/cloud-accounts-aws.ts">privateImageEnumeration</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-aws/region-enumeration">client.iaas.api.cloudAccountsAws.<a href="./src/resources/iaas/api/cloud-accounts-aws.ts">regionEnumeration</a>({ ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/cloud-accounts-aws">client.iaas.api.cloudAccountsAws.<a href="./src/resources/iaas/api/cloud-accounts-aws.ts">retrieveCloudAccountsAws</a>({ ...params }) -> CloudAccountsAwRetrieveCloudAccountsAwsResponse</code>

### CloudAccountsAvilb

Types:

- <code><a href="./src/resources/iaas/api/cloud-accounts-avilb.ts">CloudAccountAviLb</a></code>
- <code><a href="./src/resources/iaas/api/cloud-accounts-avilb.ts">CloudAccountsAvilbRetrieveCloudAccountsAvilbResponse</a></code>

Methods:

- <code title="get /iaas/api/cloud-accounts-avilb/{id}">client.iaas.api.cloudAccountsAvilb.<a href="./src/resources/iaas/api/cloud-accounts-avilb.ts">retrieve</a>(id, { ...params }) -> CloudAccountAviLb</code>
- <code title="patch /iaas/api/cloud-accounts-avilb/{id}">client.iaas.api.cloudAccountsAvilb.<a href="./src/resources/iaas/api/cloud-accounts-avilb.ts">update</a>(id, { ...params }) -> RequestTracker</code>
- <code title="delete /iaas/api/cloud-accounts-avilb/{id}">client.iaas.api.cloudAccountsAvilb.<a href="./src/resources/iaas/api/cloud-accounts-avilb.ts">delete</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/cloud-accounts-avilb">client.iaas.api.cloudAccountsAvilb.<a href="./src/resources/iaas/api/cloud-accounts-avilb.ts">cloudAccountsAvilb</a>({ ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/cloud-accounts-avilb">client.iaas.api.cloudAccountsAvilb.<a href="./src/resources/iaas/api/cloud-accounts-avilb.ts">retrieveCloudAccountsAvilb</a>({ ...params }) -> CloudAccountsAvilbRetrieveCloudAccountsAvilbResponse</code>

### BlockDevices

Types:

- <code><a href="./src/resources/iaas/api/block-devices/block-devices.ts">BlockDevice</a></code>

Methods:

- <code title="get /iaas/api/block-devices/{id}">client.iaas.api.blockDevices.<a href="./src/resources/iaas/api/block-devices/block-devices.ts">retrieve</a>(id, { ...params }) -> BlockDevice</code>
- <code title="post /iaas/api/block-devices/{id}">client.iaas.api.blockDevices.<a href="./src/resources/iaas/api/block-devices/block-devices.ts">update</a>(id, { ...params }) -> RequestTracker</code>
- <code title="delete /iaas/api/block-devices/{id}">client.iaas.api.blockDevices.<a href="./src/resources/iaas/api/block-devices/block-devices.ts">delete</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/block-devices">client.iaas.api.blockDevices.<a href="./src/resources/iaas/api/block-devices/block-devices.ts">blockDevices</a>({ ...params }) -> RequestTracker</code>
- <code title="get /iaas/api/block-devices">client.iaas.api.blockDevices.<a href="./src/resources/iaas/api/block-devices/block-devices.ts">retrieveBlockDevices</a>({ ...params }) -> BlockDeviceResult</code>

#### Operations

Methods:

- <code title="post /iaas/api/block-devices/{id}/operations/promote">client.iaas.api.blockDevices.operations.<a href="./src/resources/iaas/api/block-devices/operations.ts">promote</a>(id, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/block-devices/{diskId}/operations/revert">client.iaas.api.blockDevices.operations.<a href="./src/resources/iaas/api/block-devices/operations.ts">revert</a>(diskID, { ...params }) -> RequestTracker</code>
- <code title="post /iaas/api/block-devices/{id}/operations/snapshots">client.iaas.api.blockDevices.operations.<a href="./src/resources/iaas/api/block-devices/operations.ts">snapshots</a>(id, { ...params }) -> RequestTracker</code>

#### Snapshots

Types:

- <code><a href="./src/resources/iaas/api/block-devices/snapshots.ts">DiskSnapshot</a></code>

Methods:

- <code title="get /iaas/api/block-devices/{id}/snapshots/{id1}">client.iaas.api.blockDevices.snapshots.<a href="./src/resources/iaas/api/block-devices/snapshots.ts">retrieve</a>(id1, { ...params }) -> DiskSnapshot</code>
- <code title="get /iaas/api/block-devices/{id}/snapshots">client.iaas.api.blockDevices.snapshots.<a href="./src/resources/iaas/api/block-devices/snapshots.ts">list</a>(id, { ...params }) -> DiskSnapshot</code>
- <code title="delete /iaas/api/block-devices/{id}/snapshots/{id1}">client.iaas.api.blockDevices.snapshots.<a href="./src/resources/iaas/api/block-devices/snapshots.ts">delete</a>(id1, { ...params }) -> RequestTracker</code>

### FabricVsphereDatastores

Types:

- <code><a href="./src/resources/iaas/api/fabric-vsphere-datastores.ts">FabricVsphereDatastore</a></code>
- <code><a href="./src/resources/iaas/api/fabric-vsphere-datastores.ts">FabricVsphereDatastoreRetrieveFabricVsphereDatastoresResponse</a></code>

Methods:

- <code title="get /iaas/api/fabric-vsphere-datastores/{id}">client.iaas.api.fabricVsphereDatastores.<a href="./src/resources/iaas/api/fabric-vsphere-datastores.ts">retrieve</a>(id, { ...params }) -> FabricVsphereDatastore</code>
- <code title="patch /iaas/api/fabric-vsphere-datastores/{id}">client.iaas.api.fabricVsphereDatastores.<a href="./src/resources/iaas/api/fabric-vsphere-datastores.ts">update</a>(id, { ...params }) -> FabricVsphereDatastore</code>
- <code title="get /iaas/api/fabric-vsphere-datastores">client.iaas.api.fabricVsphereDatastores.<a href="./src/resources/iaas/api/fabric-vsphere-datastores.ts">retrieveFabricVsphereDatastores</a>({ ...params }) -> FabricVsphereDatastoreRetrieveFabricVsphereDatastoresResponse</code>

### FabricNetworks

Types:

- <code><a href="./src/resources/iaas/api/fabric-networks.ts">FabricNetwork</a></code>
- <code><a href="./src/resources/iaas/api/fabric-networks.ts">FabricNetworkResult</a></code>

Methods:

- <code title="get /iaas/api/fabric-networks/{id}">client.iaas.api.fabricNetworks.<a href="./src/resources/iaas/api/fabric-networks.ts">retrieve</a>(id, { ...params }) -> FabricNetwork</code>
- <code title="patch /iaas/api/fabric-networks/{id}">client.iaas.api.fabricNetworks.<a href="./src/resources/iaas/api/fabric-networks.ts">update</a>(id, { ...params }) -> FabricNetwork</code>
- <code title="get /iaas/api/fabric-networks">client.iaas.api.fabricNetworks.<a href="./src/resources/iaas/api/fabric-networks.ts">retrieveFabricNetworks</a>({ ...params }) -> FabricNetworkResult</code>
- <code title="get /iaas/api/fabric-networks/{id}/network-ip-ranges">client.iaas.api.fabricNetworks.<a href="./src/resources/iaas/api/fabric-networks.ts">retrieveNetworkIPRanges</a>(id, { ...params }) -> FabricNetwork</code>

### FabricNetworksVsphere

Types:

- <code><a href="./src/resources/iaas/api/fabric-networks-vsphere.ts">FabricNetworkVsphere</a></code>
- <code><a href="./src/resources/iaas/api/fabric-networks-vsphere.ts">FabricNetworksVsphereRetrieveFabricNetworksVsphereResponse</a></code>

Methods:

- <code title="get /iaas/api/fabric-networks-vsphere/{id}">client.iaas.api.fabricNetworksVsphere.<a href="./src/resources/iaas/api/fabric-networks-vsphere.ts">retrieve</a>(id, { ...params }) -> FabricNetworkVsphere</code>
- <code title="patch /iaas/api/fabric-networks-vsphere/{id}">client.iaas.api.fabricNetworksVsphere.<a href="./src/resources/iaas/api/fabric-networks-vsphere.ts">update</a>(id, { ...params }) -> FabricNetworkVsphere</code>
- <code title="get /iaas/api/fabric-networks-vsphere">client.iaas.api.fabricNetworksVsphere.<a href="./src/resources/iaas/api/fabric-networks-vsphere.ts">retrieveFabricNetworksVsphere</a>({ ...params }) -> FabricNetworksVsphereRetrieveFabricNetworksVsphereResponse</code>
- <code title="get /iaas/api/fabric-networks-vsphere/{id}/network-ip-ranges">client.iaas.api.fabricNetworksVsphere.<a href="./src/resources/iaas/api/fabric-networks-vsphere.ts">retrieveNetworkIPRanges</a>(id, { ...params }) -> FabricNetworkVsphere</code>

### FabricComputes

Types:

- <code><a href="./src/resources/iaas/api/fabric-computes.ts">FabricCompute</a></code>

Methods:

- <code title="get /iaas/api/fabric-computes/{id}">client.iaas.api.fabricComputes.<a href="./src/resources/iaas/api/fabric-computes.ts">retrieve</a>(id, { ...params }) -> FabricCompute</code>
- <code title="patch /iaas/api/fabric-computes/{id}">client.iaas.api.fabricComputes.<a href="./src/resources/iaas/api/fabric-computes.ts">update</a>(id, { ...params }) -> FabricCompute</code>
- <code title="get /iaas/api/fabric-computes">client.iaas.api.fabricComputes.<a href="./src/resources/iaas/api/fabric-computes.ts">retrieveFabricComputes</a>({ ...params }) -> FabricComputeResult</code>

### ExternalNetworkIPRanges

Types:

- <code><a href="./src/resources/iaas/api/external-network-ip-ranges.ts">ExternalNetworkIPRange</a></code>
- <code><a href="./src/resources/iaas/api/external-network-ip-ranges.ts">ExternalNetworkIPRangeRetrieveExternalNetworkIPRangesResponse</a></code>

Methods:

- <code title="get /iaas/api/external-network-ip-ranges/{id}">client.iaas.api.externalNetworkIPRanges.<a href="./src/resources/iaas/api/external-network-ip-ranges.ts">retrieve</a>(id, { ...params }) -> ExternalNetworkIPRange</code>
- <code title="patch /iaas/api/external-network-ip-ranges/{id}">client.iaas.api.externalNetworkIPRanges.<a href="./src/resources/iaas/api/external-network-ip-ranges.ts">update</a>(id, { ...params }) -> ExternalNetworkIPRange</code>
- <code title="get /iaas/api/external-network-ip-ranges">client.iaas.api.externalNetworkIPRanges.<a href="./src/resources/iaas/api/external-network-ip-ranges.ts">retrieveExternalNetworkIPRanges</a>({ ...params }) -> ExternalNetworkIPRangeRetrieveExternalNetworkIPRangesResponse</code>

### ConfigurationProperties

Types:

- <code><a href="./src/resources/iaas/api/configuration-properties.ts">ConfigurationProperty</a></code>
- <code><a href="./src/resources/iaas/api/configuration-properties.ts">ConfigurationPropertyResult</a></code>

Methods:

- <code title="get /iaas/api/configuration-properties/{id}">client.iaas.api.configurationProperties.<a href="./src/resources/iaas/api/configuration-properties.ts">retrieve</a>(id, { ...params }) -> ConfigurationPropertyResult</code>
- <code title="delete /iaas/api/configuration-properties/{id}">client.iaas.api.configurationProperties.<a href="./src/resources/iaas/api/configuration-properties.ts">delete</a>(id, { ...params }) -> ConfigurationProperty</code>
- <code title="get /iaas/api/configuration-properties">client.iaas.api.configurationProperties.<a href="./src/resources/iaas/api/configuration-properties.ts">retrieveConfigurationProperties</a>({ ...params }) -> ConfigurationPropertyResult</code>
- <code title="patch /iaas/api/configuration-properties">client.iaas.api.configurationProperties.<a href="./src/resources/iaas/api/configuration-properties.ts">updateConfigurationProperties</a>({ ...params }) -> ConfigurationProperty</code>

### RequestTracker

Types:

- <code><a href="./src/resources/iaas/api/request-tracker.ts">RequestTrackerRetrieveRequestTrackerResponse</a></code>

Methods:

- <code title="get /iaas/api/request-tracker/{id}">client.iaas.api.requestTracker.<a href="./src/resources/iaas/api/request-tracker.ts">retrieve</a>(id, { ...params }) -> RequestTracker</code>
- <code title="delete /iaas/api/request-tracker/{id}">client.iaas.api.requestTracker.<a href="./src/resources/iaas/api/request-tracker.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /iaas/api/request-tracker">client.iaas.api.requestTracker.<a href="./src/resources/iaas/api/request-tracker.ts">retrieveRequestTracker</a>({ ...params }) -> RequestTrackerRetrieveRequestTrackerResponse</code>

### Regions

Types:

- <code><a href="./src/resources/iaas/api/regions.ts">Region</a></code>
- <code><a href="./src/resources/iaas/api/regions.ts">RegionListResponse</a></code>

Methods:

- <code title="get /iaas/api/regions/{id}">client.iaas.api.regions.<a href="./src/resources/iaas/api/regions.ts">retrieve</a>(id, { ...params }) -> Region</code>
- <code title="get /iaas/api/regions">client.iaas.api.regions.<a href="./src/resources/iaas/api/regions.ts">list</a>({ ...params }) -> RegionListResponse</code>

### NetworkDomains

Types:

- <code><a href="./src/resources/iaas/api/network-domains.ts">NetworkDomain</a></code>
- <code><a href="./src/resources/iaas/api/network-domains.ts">NetworkDomainRetrieveNetworkDomainsResponse</a></code>

Methods:

- <code title="get /iaas/api/network-domains/{id}">client.iaas.api.networkDomains.<a href="./src/resources/iaas/api/network-domains.ts">retrieve</a>(id, { ...params }) -> NetworkDomain</code>
- <code title="get /iaas/api/network-domains">client.iaas.api.networkDomains.<a href="./src/resources/iaas/api/network-domains.ts">retrieveNetworkDomains</a>({ ...params }) -> NetworkDomainRetrieveNetworkDomainsResponse</code>

### FabricVsphereStoragePolicies

Types:

- <code><a href="./src/resources/iaas/api/fabric-vsphere-storage-policies.ts">FabricVsphereStoragePolicy</a></code>
- <code><a href="./src/resources/iaas/api/fabric-vsphere-storage-policies.ts">FabricVsphereStoragePolicyRetrieveFabricVsphereStoragePoliciesResponse</a></code>

Methods:

- <code title="get /iaas/api/fabric-vsphere-storage-policies/{id}">client.iaas.api.fabricVsphereStoragePolicies.<a href="./src/resources/iaas/api/fabric-vsphere-storage-policies.ts">retrieve</a>(id, { ...params }) -> FabricVsphereStoragePolicy</code>
- <code title="get /iaas/api/fabric-vsphere-storage-policies">client.iaas.api.fabricVsphereStoragePolicies.<a href="./src/resources/iaas/api/fabric-vsphere-storage-policies.ts">retrieveFabricVsphereStoragePolicies</a>({ ...params }) -> FabricVsphereStoragePolicyRetrieveFabricVsphereStoragePoliciesResponse</code>

### FabricImages

Types:

- <code><a href="./src/resources/iaas/api/fabric-images.ts">FabricImage</a></code>
- <code><a href="./src/resources/iaas/api/fabric-images.ts">FabricImageRetrieveFabricImagesResponse</a></code>

Methods:

- <code title="get /iaas/api/fabric-images/{id}">client.iaas.api.fabricImages.<a href="./src/resources/iaas/api/fabric-images.ts">retrieve</a>(id, { ...params }) -> FabricImage</code>
- <code title="get /iaas/api/fabric-images">client.iaas.api.fabricImages.<a href="./src/resources/iaas/api/fabric-images.ts">retrieveFabricImages</a>({ ...params }) -> FabricImageRetrieveFabricImagesResponse</code>

### FabricAzureStorageAccounts

Types:

- <code><a href="./src/resources/iaas/api/fabric-azure-storage-accounts.ts">FabricAzureStorageAccount</a></code>
- <code><a href="./src/resources/iaas/api/fabric-azure-storage-accounts.ts">FabricAzureStorageAccountRetrieveFabricAzureStorageAccountsResponse</a></code>

Methods:

- <code title="get /iaas/api/fabric-azure-storage-accounts/{id}">client.iaas.api.fabricAzureStorageAccounts.<a href="./src/resources/iaas/api/fabric-azure-storage-accounts.ts">retrieve</a>(id, { ...params }) -> FabricAzureStorageAccount</code>
- <code title="get /iaas/api/fabric-azure-storage-accounts">client.iaas.api.fabricAzureStorageAccounts.<a href="./src/resources/iaas/api/fabric-azure-storage-accounts.ts">retrieveFabricAzureStorageAccounts</a>({ ...params }) -> FabricAzureStorageAccountRetrieveFabricAzureStorageAccountsResponse</code>

### ExternalIPBlocks

Methods:

- <code title="get /iaas/api/external-ip-blocks/{id}">client.iaas.api.externalIPBlocks.<a href="./src/resources/iaas/api/external-ip-blocks.ts">retrieve</a>(id, { ...params }) -> FabricNetwork</code>
- <code title="get /iaas/api/external-ip-blocks">client.iaas.api.externalIPBlocks.<a href="./src/resources/iaas/api/external-ip-blocks.ts">retrieveExternalIPBlocks</a>({ ...params }) -> FabricNetworkResult</code>
