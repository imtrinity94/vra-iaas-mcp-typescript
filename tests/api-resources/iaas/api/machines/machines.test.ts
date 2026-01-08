// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import VraIaas from 'vra_iaas';

const client = new VraIaas({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource machines', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.iaas.api.machines.create({
      flavor: 'small, medium, large',
      flavorRef: 't2.micro',
      image: 'vmware-gold-master, ubuntu-latest, rhel-compliant, windows',
      imageRef: 'ami-f6795a8c',
      name: 'name',
      projectId: 'e058',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.iaas.api.machines.create({
      flavor: 'small, medium, large',
      flavorRef: 't2.micro',
      image: 'vmware-gold-master, ubuntu-latest, rhel-compliant, windows',
      imageRef: 'ami-f6795a8c',
      name: 'name',
      projectId: 'e058',
      apiVersion: 'apiVersion',
      bootConfig: {
        content:
          "#cloud-config\nrepo_update: true\nrepo_upgrade: all\n\npackages:\n - mysql-server\n\nruncmd:\n - sed -e '/bind-address/ s/^#*/#/' -i /etc/mysql/mysql.conf.d/mysqld.cnf\n - service mysql restart\n - mysql -e \"GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'mysqlpassword';\"\n - mysql -e \"FLUSH PRIVILEGES;\"\n",
      },
      bootConfigSettings: {
        deploymentFailOnCloudConfigRuntimeError: true,
        phoneHomeFailOnTimeout: false,
        phoneHomeShouldWait: true,
        phoneHomeTimeoutSeconds: 100,
      },
      constraints: [{ expression: 'ha:strong', mandatory: true }],
      customProperties: { foo: 'string' },
      deploymentId: '123e4567-e89b-12d3-a456-426655440000',
      description: 'description',
      disks: [
        {
          blockDeviceId: '1298765',
          description: 'description',
          diskAttachmentProperties: { scsiController: 'SCSI_Controller_0', unitNumber: '2' },
          name: 'name',
          scsiController: 'SCSI_Controller_0, SCSI_Controller_1, SCSI_Controller_2, SCSI_Controller_3',
          unitNumber: '0',
        },
      ],
      imageDiskConstraints: [
        { expression: 'environment:prod', mandatory: true },
        { expression: 'pci', mandatory: true },
      ],
      machineCount: 3,
      nics: [
        {
          addresses: ['10.1.2.190'],
          customProperties: { awaitIp: 'true' },
          description: 'description',
          deviceIndex: 1,
          fabricNetworkId: '54097407-4532-460c-94a8-8f9e18f4c925',
          macAddress: '["00:50:56:99:d8:34"]',
          name: 'name',
          networkId: '54097407-4532-460c-94a8-8f9e18f4c925',
          securityGroupIds: ['string'],
        },
      ],
      remoteAccess: {
        authentication: 'publicPrivateKey',
        keyPair: 'keyPair',
        password: 'password',
        skipUserCreation: true,
        sshKey:
          'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCu74dLkAGGYIgNuszEAM0HaS2Y6boTPw+HqsFmtPSOpxPQoosws/OWGZlW1uue6Y4lIvdRqZOaLK+2di5512etY67ZwFHc5h1kx4az433DsnoZhIzXEKKI+EXfH/w72CIyG/uVhIzmA4FvRVQKXinE1vaVen6v1CBQEZibx9RXrVRP1VRibsKFRXYxywNEl1VtPK7KaxCEYO9IXi4SKVulSAhOVequwjlo5E8bKNT61/g/YyMvwCbaTTPPeCpS/7i+JHYY3QZ8fQY/Syn+bOFpKCCHl+7VpsL8gjWe6fI4bUp6KUiW7ZkQpL/47rxawKnRMKKEU9P0ICp3RRB39lXT',
        username: 'username',
      },
      saltConfiguration: {
        additionalAuthParams: { foo: 'string' },
        additionalMinionParams: { foo: 'string' },
        installerFileName: 'installerFileName',
        masterId: 'masterId',
        minionId: 'minionId',
        pillarEnvironment: 'pillarEnvironment',
        saltEnvironment: 'saltEnvironment',
        stateFiles: ['string'],
        variables: { foo: 'string' },
      },
      tags: [{ key: 'ownedBy', value: 'Rainpole' }],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.iaas.api.machines.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.machines.retrieve(
        'id',
        { $select: '$select', apiVersion: 'apiVersion' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.iaas.api.machines.update('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.iaas.api.machines.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.machines.list(
        {
          $count: true,
          $filter: '$filter',
          $select: '$select',
          $skip: 0,
          $top: 0,
          apiVersion: 'apiVersion',
          skipOperationLinks: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.iaas.api.machines.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.iaas.api.machines.delete(
        'id',
        { apiVersion: 'apiVersion', forceDelete: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(VraIaas.NotFoundError);
  });
});
