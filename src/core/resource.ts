// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { VraIaas } from '../client';

export abstract class APIResource {
  protected _client: VraIaas;

  constructor(client: VraIaas) {
    this._client = client;
  }
}
