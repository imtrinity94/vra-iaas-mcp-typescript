// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import path from 'node:path';
import util from 'node:util';
import Fuse from 'fuse.js';
import ts from 'typescript';
import { WorkerOutput } from './code-tool-types';
import { VraIaas, ClientOptions } from 'vra_iaas';

function getRunFunctionSource(code: string): {
  type: 'declaration' | 'expression';
  client: string | undefined;
  code: string;
} | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter();

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return {
          type: 'declaration',
          client: statement.parameters[0]?.name.getText(),
          code: printer.printNode(ts.EmitHint.Unspecified, statement.body!, sourceFile),
        };
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (
          ts.isIdentifier(declaration.name) &&
          declaration.name.text === 'run' &&
          // Check if it's initialized with a function
          declaration.initializer &&
          (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
        ) {
          return {
            type: 'expression',
            client: declaration.initializer.parameters[0]?.name.getText(),
            code: printer.printNode(ts.EmitHint.Unspecified, declaration.initializer, sourceFile),
          };
        }
      }
    }
  }

  return null;
}

function getTSDiagnostics(code: string): string[] {
  const functionSource = getRunFunctionSource(code)!;
  const codeWithImport = [
    'import { VraIaas } from "vra_iaas";',
    functionSource.type === 'declaration' ?
      `async function run(${functionSource.client}: VraIaas)`
    : `const run: (${functionSource.client}: VraIaas) => Promise<unknown> =`,
    functionSource.code,
  ].join('\n');
  const sourcePath = path.resolve('code.ts');
  const ast = ts.createSourceFile(sourcePath, codeWithImport, ts.ScriptTarget.Latest, true);
  const options = ts.getDefaultCompilerOptions();
  options.target = ts.ScriptTarget.Latest;
  options.module = ts.ModuleKind.NodeNext;
  options.moduleResolution = ts.ModuleResolutionKind.NodeNext;
  const host = ts.createCompilerHost(options, true);
  const newHost: typeof host = {
    ...host,
    getSourceFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return ast;
      }
      return host.getSourceFile(...args);
    },
    readFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return codeWithImport;
      }
      return host.readFile(...args);
    },
    fileExists: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return true;
      }
      return host.fileExists(...args);
    },
  };
  const program = ts.createProgram({
    options,
    rootNames: [sourcePath],
    host: newHost,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program, ast);
  return diagnostics.map((d) => {
    const message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
    if (!d.file || !d.start) return `- ${message}`;
    const { line: lineNumber } = ts.getLineAndCharacterOfPosition(d.file, d.start);
    const line = codeWithImport.split('\n').at(lineNumber)?.trim();
    return line ? `- ${message}\n    ${line}` : `- ${message}`;
  });
}

const fuse = new Fuse(
  [
    'client.iaas.api.login',
    'client.iaas.api.retrieve',
    'client.iaas.api.retrieveAbout',
    'client.iaas.api.retrieveEventLogs',
    'client.iaas.api.retrieveFabricAwsVolumeTypes',
    'client.iaas.api.retrieveFabricAzureDiskEncryptionSets',
    'client.iaas.api.retrieveFabricFlavors',
    'client.iaas.api.retrieveFlavors',
    'client.iaas.api.retrieveFolders',
    'client.iaas.api.retrieveImages',
    'client.iaas.api.retrieveRequestGraph',
    'client.iaas.api.storageProfiles.delete',
    'client.iaas.api.storageProfiles.retrieve',
    'client.iaas.api.storageProfiles.retrieveStorageProfiles',
    'client.iaas.api.storageProfiles.storageProfiles',
    'client.iaas.api.storageProfiles.update',
    'client.iaas.api.storageProfiles.storageProfileAssociations.retrieveStorageProfileAssociations',
    'client.iaas.api.storageProfiles.storageProfileAssociations.updateStorageProfileAssociations',
    'client.iaas.api.projects.create',
    'client.iaas.api.projects.delete',
    'client.iaas.api.projects.list',
    'client.iaas.api.projects.retrieve',
    'client.iaas.api.projects.update',
    'client.iaas.api.projects.zones.create',
    'client.iaas.api.projects.zones.list',
    'client.iaas.api.projects.resourceMetadata.retrieveResourceMetadata',
    'client.iaas.api.projects.resourceMetadata.updateResourceMetadata',
    'client.iaas.api.naming.create',
    'client.iaas.api.naming.delete',
    'client.iaas.api.naming.list',
    'client.iaas.api.naming.retrieve',
    'client.iaas.api.zones.create',
    'client.iaas.api.zones.delete',
    'client.iaas.api.zones.list',
    'client.iaas.api.zones.retrieve',
    'client.iaas.api.zones.retrieveComputes',
    'client.iaas.api.zones.update',
    'client.iaas.api.tags.create',
    'client.iaas.api.tags.delete',
    'client.iaas.api.tags.list',
    'client.iaas.api.tags.tagsUsage',
    'client.iaas.api.storageProfilesVsphere.delete',
    'client.iaas.api.storageProfilesVsphere.retrieve',
    'client.iaas.api.storageProfilesVsphere.retrieveStorageProfilesVsphere',
    'client.iaas.api.storageProfilesVsphere.storageProfilesVsphere',
    'client.iaas.api.storageProfilesVsphere.update',
    'client.iaas.api.storageProfilesGcp.delete',
    'client.iaas.api.storageProfilesGcp.retrieve',
    'client.iaas.api.storageProfilesGcp.retrieveStorageProfilesGcp',
    'client.iaas.api.storageProfilesGcp.storageProfilesGcp',
    'client.iaas.api.storageProfilesGcp.update',
    'client.iaas.api.storageProfilesAzure.delete',
    'client.iaas.api.storageProfilesAzure.retrieve',
    'client.iaas.api.storageProfilesAzure.retrieveStorageProfilesAzure',
    'client.iaas.api.storageProfilesAzure.storageProfilesAzure',
    'client.iaas.api.storageProfilesAzure.update',
    'client.iaas.api.storageProfilesAws.delete',
    'client.iaas.api.storageProfilesAws.retrieve',
    'client.iaas.api.storageProfilesAws.retrieveStorageProfilesAws',
    'client.iaas.api.storageProfilesAws.storageProfilesAws',
    'client.iaas.api.storageProfilesAws.update',
    'client.iaas.api.securityGroups.delete',
    'client.iaas.api.securityGroups.retrieve',
    'client.iaas.api.securityGroups.retrieveSecurityGroups',
    'client.iaas.api.securityGroups.securityGroups',
    'client.iaas.api.securityGroups.update',
    'client.iaas.api.securityGroups.operations.reconfigure',
    'client.iaas.api.networks.create',
    'client.iaas.api.networks.delete',
    'client.iaas.api.networks.list',
    'client.iaas.api.networks.retrieve',
    'client.iaas.api.networks.retrieveNetworkIPRanges',
    'client.iaas.api.networkProfiles.delete',
    'client.iaas.api.networkProfiles.networkProfiles',
    'client.iaas.api.networkProfiles.retrieve',
    'client.iaas.api.networkProfiles.retrieveNetworkProfiles',
    'client.iaas.api.networkProfiles.update',
    'client.iaas.api.networkIPRanges.delete',
    'client.iaas.api.networkIPRanges.networkIPRanges',
    'client.iaas.api.networkIPRanges.retrieve',
    'client.iaas.api.networkIPRanges.retrieveNetworkIPRanges',
    'client.iaas.api.networkIPRanges.update',
    'client.iaas.api.networkIPRanges.unregisteredIPAddresses.release',
    'client.iaas.api.networkIPRanges.ipAddresses.allocate',
    'client.iaas.api.networkIPRanges.ipAddresses.release',
    'client.iaas.api.networkIPRanges.ipAddresses.retrieve',
    'client.iaas.api.networkIPRanges.ipAddresses.retrieveIPAddresses',
    'client.iaas.api.machines.create',
    'client.iaas.api.machines.delete',
    'client.iaas.api.machines.list',
    'client.iaas.api.machines.retrieve',
    'client.iaas.api.machines.update',
    'client.iaas.api.machines.operations.changeSecurityGroups',
    'client.iaas.api.machines.operations.powerOff',
    'client.iaas.api.machines.operations.powerOn',
    'client.iaas.api.machines.operations.reboot',
    'client.iaas.api.machines.operations.reset',
    'client.iaas.api.machines.operations.resize',
    'client.iaas.api.machines.operations.restart',
    'client.iaas.api.machines.operations.shutdown',
    'client.iaas.api.machines.operations.snapshots',
    'client.iaas.api.machines.operations.suspend',
    'client.iaas.api.machines.operations.unregister',
    'client.iaas.api.machines.operations.update',
    'client.iaas.api.machines.disks.create',
    'client.iaas.api.machines.disks.delete',
    'client.iaas.api.machines.disks.list',
    'client.iaas.api.machines.disks.retrieve',
    'client.iaas.api.machines.networkInterfaces.retrieve',
    'client.iaas.api.machines.networkInterfaces.update',
    'client.iaas.api.machines.snapshots.delete',
    'client.iaas.api.machines.snapshots.list',
    'client.iaas.api.machines.snapshots.retrieve',
    'client.iaas.api.loadBalancers.delete',
    'client.iaas.api.loadBalancers.loadBalancers',
    'client.iaas.api.loadBalancers.retrieve',
    'client.iaas.api.loadBalancers.retrieveLoadBalancers',
    'client.iaas.api.loadBalancers.operations.delete',
    'client.iaas.api.loadBalancers.operations.scale',
    'client.iaas.api.integrationsIpam.packageImport.packageImport',
    'client.iaas.api.integrationsIpam.packageImport.update',
    'client.iaas.api.integrations.create',
    'client.iaas.api.integrations.delete',
    'client.iaas.api.integrations.list',
    'client.iaas.api.integrations.retrieve',
    'client.iaas.api.integrations.update',
    'client.iaas.api.imageProfiles.delete',
    'client.iaas.api.imageProfiles.imageProfiles',
    'client.iaas.api.imageProfiles.retrieve',
    'client.iaas.api.imageProfiles.retrieveImageProfiles',
    'client.iaas.api.imageProfiles.update',
    'client.iaas.api.flavorProfiles.delete',
    'client.iaas.api.flavorProfiles.flavorProfiles',
    'client.iaas.api.flavorProfiles.retrieve',
    'client.iaas.api.flavorProfiles.retrieveFlavorProfiles',
    'client.iaas.api.flavorProfiles.update',
    'client.iaas.api.deployments.create',
    'client.iaas.api.deployments.delete',
    'client.iaas.api.deployments.list',
    'client.iaas.api.deployments.retrieve',
    'client.iaas.api.dataCollectors.dataCollectors',
    'client.iaas.api.dataCollectors.delete',
    'client.iaas.api.dataCollectors.retrieve',
    'client.iaas.api.dataCollectors.retrieveDataCollectors',
    'client.iaas.api.computeNats.computeNats',
    'client.iaas.api.computeNats.delete',
    'client.iaas.api.computeNats.retrieve',
    'client.iaas.api.computeNats.retrieveComputeNats',
    'client.iaas.api.computeNats.operations.reconfigure',
    'client.iaas.api.computeGateways.computeGateways',
    'client.iaas.api.computeGateways.delete',
    'client.iaas.api.computeGateways.retrieve',
    'client.iaas.api.computeGateways.retrieveComputeGateways',
    'client.iaas.api.cloudAccounts.cloudAccounts',
    'client.iaas.api.cloudAccounts.delete',
    'client.iaas.api.cloudAccounts.healthCheck',
    'client.iaas.api.cloudAccounts.privateImageEnumeration',
    'client.iaas.api.cloudAccounts.retrieve',
    'client.iaas.api.cloudAccounts.retrieveCloudAccounts',
    'client.iaas.api.cloudAccounts.update',
    'client.iaas.api.cloudAccounts.regionEnumeration.regionEnumeration',
    'client.iaas.api.cloudAccounts.regionEnumeration.retrieve',
    'client.iaas.api.cloudAccountsVsphere.cloudAccountsVsphere',
    'client.iaas.api.cloudAccountsVsphere.delete',
    'client.iaas.api.cloudAccountsVsphere.privateImageEnumeration',
    'client.iaas.api.cloudAccountsVsphere.regionEnumeration',
    'client.iaas.api.cloudAccountsVsphere.retrieve',
    'client.iaas.api.cloudAccountsVsphere.retrieveCloudAccountsVsphere',
    'client.iaas.api.cloudAccountsVsphere.update',
    'client.iaas.api.cloudAccountsVmc.cloudAccountsVmc',
    'client.iaas.api.cloudAccountsVmc.delete',
    'client.iaas.api.cloudAccountsVmc.privateImageEnumeration',
    'client.iaas.api.cloudAccountsVmc.regionEnumeration',
    'client.iaas.api.cloudAccountsVmc.retrieve',
    'client.iaas.api.cloudAccountsVmc.retrieveCloudAccountsVmc',
    'client.iaas.api.cloudAccountsVmc.update',
    'client.iaas.api.cloudAccountsVcf.cloudAccountsVcf',
    'client.iaas.api.cloudAccountsVcf.delete',
    'client.iaas.api.cloudAccountsVcf.privateImageEnumeration',
    'client.iaas.api.cloudAccountsVcf.regionEnumeration',
    'client.iaas.api.cloudAccountsVcf.retrieve',
    'client.iaas.api.cloudAccountsVcf.retrieveCloudAccountsVcf',
    'client.iaas.api.cloudAccountsVcf.update',
    'client.iaas.api.cloudAccountsNsxV.cloudAccountsNsxV',
    'client.iaas.api.cloudAccountsNsxV.delete',
    'client.iaas.api.cloudAccountsNsxV.retrieve',
    'client.iaas.api.cloudAccountsNsxV.retrieveCloudAccountsNsxV',
    'client.iaas.api.cloudAccountsNsxV.update',
    'client.iaas.api.cloudAccountsNsxT.cloudAccountsNsxT',
    'client.iaas.api.cloudAccountsNsxT.delete',
    'client.iaas.api.cloudAccountsNsxT.retrieve',
    'client.iaas.api.cloudAccountsNsxT.retrieveCloudAccountsNsxT',
    'client.iaas.api.cloudAccountsNsxT.update',
    'client.iaas.api.cloudAccountsGcp.cloudAccountsGcp',
    'client.iaas.api.cloudAccountsGcp.delete',
    'client.iaas.api.cloudAccountsGcp.privateImageEnumeration',
    'client.iaas.api.cloudAccountsGcp.regionEnumeration',
    'client.iaas.api.cloudAccountsGcp.retrieve',
    'client.iaas.api.cloudAccountsGcp.retrieveCloudAccountsGcp',
    'client.iaas.api.cloudAccountsGcp.update',
    'client.iaas.api.cloudAccountsAzure.cloudAccountsAzure',
    'client.iaas.api.cloudAccountsAzure.delete',
    'client.iaas.api.cloudAccountsAzure.privateImageEnumeration',
    'client.iaas.api.cloudAccountsAzure.regionEnumeration',
    'client.iaas.api.cloudAccountsAzure.retrieve',
    'client.iaas.api.cloudAccountsAzure.retrieveCloudAccountsAzure',
    'client.iaas.api.cloudAccountsAzure.update',
    'client.iaas.api.cloudAccountsAws.cloudAccountsAws',
    'client.iaas.api.cloudAccountsAws.delete',
    'client.iaas.api.cloudAccountsAws.privateImageEnumeration',
    'client.iaas.api.cloudAccountsAws.regionEnumeration',
    'client.iaas.api.cloudAccountsAws.retrieve',
    'client.iaas.api.cloudAccountsAws.retrieveCloudAccountsAws',
    'client.iaas.api.cloudAccountsAws.update',
    'client.iaas.api.cloudAccountsAvilb.cloudAccountsAvilb',
    'client.iaas.api.cloudAccountsAvilb.delete',
    'client.iaas.api.cloudAccountsAvilb.retrieve',
    'client.iaas.api.cloudAccountsAvilb.retrieveCloudAccountsAvilb',
    'client.iaas.api.cloudAccountsAvilb.update',
    'client.iaas.api.blockDevices.blockDevices',
    'client.iaas.api.blockDevices.delete',
    'client.iaas.api.blockDevices.retrieve',
    'client.iaas.api.blockDevices.retrieveBlockDevices',
    'client.iaas.api.blockDevices.update',
    'client.iaas.api.blockDevices.operations.promote',
    'client.iaas.api.blockDevices.operations.revert',
    'client.iaas.api.blockDevices.operations.snapshots',
    'client.iaas.api.blockDevices.snapshots.delete',
    'client.iaas.api.blockDevices.snapshots.list',
    'client.iaas.api.blockDevices.snapshots.retrieve',
    'client.iaas.api.fabricVsphereDatastores.retrieve',
    'client.iaas.api.fabricVsphereDatastores.retrieveFabricVsphereDatastores',
    'client.iaas.api.fabricVsphereDatastores.update',
    'client.iaas.api.fabricNetworks.retrieve',
    'client.iaas.api.fabricNetworks.retrieveFabricNetworks',
    'client.iaas.api.fabricNetworks.retrieveNetworkIPRanges',
    'client.iaas.api.fabricNetworks.update',
    'client.iaas.api.fabricNetworksVsphere.retrieve',
    'client.iaas.api.fabricNetworksVsphere.retrieveFabricNetworksVsphere',
    'client.iaas.api.fabricNetworksVsphere.retrieveNetworkIPRanges',
    'client.iaas.api.fabricNetworksVsphere.update',
    'client.iaas.api.fabricComputes.retrieve',
    'client.iaas.api.fabricComputes.retrieveFabricComputes',
    'client.iaas.api.fabricComputes.update',
    'client.iaas.api.externalNetworkIPRanges.retrieve',
    'client.iaas.api.externalNetworkIPRanges.retrieveExternalNetworkIPRanges',
    'client.iaas.api.externalNetworkIPRanges.update',
    'client.iaas.api.configurationProperties.delete',
    'client.iaas.api.configurationProperties.retrieve',
    'client.iaas.api.configurationProperties.retrieveConfigurationProperties',
    'client.iaas.api.configurationProperties.updateConfigurationProperties',
    'client.iaas.api.requestTracker.delete',
    'client.iaas.api.requestTracker.retrieve',
    'client.iaas.api.requestTracker.retrieveRequestTracker',
    'client.iaas.api.regions.list',
    'client.iaas.api.regions.retrieve',
    'client.iaas.api.networkDomains.retrieve',
    'client.iaas.api.networkDomains.retrieveNetworkDomains',
    'client.iaas.api.fabricVsphereStoragePolicies.retrieve',
    'client.iaas.api.fabricVsphereStoragePolicies.retrieveFabricVsphereStoragePolicies',
    'client.iaas.api.fabricImages.retrieve',
    'client.iaas.api.fabricImages.retrieveFabricImages',
    'client.iaas.api.fabricAzureStorageAccounts.retrieve',
    'client.iaas.api.fabricAzureStorageAccounts.retrieveFabricAzureStorageAccounts',
    'client.iaas.api.externalIPBlocks.retrieve',
    'client.iaas.api.externalIPBlocks.retrieveExternalIPBlocks',
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const message = error.name ? `${error.name}: ${error.message}` : error.message;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line =
      lineNumber &&
      code
        .split('\n')
        .at(parseInt(lineNumber, 10) - 1)
        ?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as { opts: ClientOptions; code: string };

  const runFunctionSource = code ? getRunFunctionSource(code) : null;
  if (!runFunctionSource) {
    const message =
      code ?
        'The code is missing a top-level `run` function.'
      : 'The code argument is missing. Provide one containing a top-level `run` function.';
    return Response.json(
      {
        is_error: true,
        result: `${message} Write code within this template:\n\n\`\`\`\nasync function run(client) {\n  // Fill this out\n}\n\`\`\``,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const diagnostics = getTSDiagnostics(code);
  if (diagnostics.length > 0) {
    return Response.json(
      {
        is_error: true,
        result: `The code contains TypeScript diagnostics:\n${diagnostics.join('\n')}`,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new VraIaas({
    ...opts,
  });

  const log_lines: string[] = [];
  const err_lines: string[] = [];
  const console = {
    log: (...args: unknown[]) => {
      log_lines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      err_lines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    eval(`${code}\nrun_ = run;`);
    const result = await run_(makeSdkProxy(client, { path: ['client'] }));
    return Response.json({
      is_error: false,
      result,
      log_lines,
      err_lines,
    } satisfies WorkerOutput);
  } catch (e) {
    return Response.json(
      {
        is_error: true,
        result: parseError(code, e),
        log_lines,
        err_lines,
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }
};

export default { fetch };
