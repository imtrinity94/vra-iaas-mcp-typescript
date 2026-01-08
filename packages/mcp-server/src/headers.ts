// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from 'vra_iaas';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const bearerToken =
    Array.isArray(req.headers['x-vra-iaas-bearer-token']) ?
      req.headers['x-vra-iaas-bearer-token'][0]
    : req.headers['x-vra-iaas-bearer-token'];
  return { bearerToken };
};
