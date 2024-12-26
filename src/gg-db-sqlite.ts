// @license
// Copyright (c) 2024 Dr. Gabriel Gatzsche
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { GgDb } from 'gg-db-js';
import { GgDbQuery } from 'gg-db-js/dist/types/gg-db-query';
import { Rljson } from 'rljson';

// #############################################################################
/// Allows to access data
export class GgDbSqlite implements GgDb {
  import(_: Rljson): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async get(_: GgDbQuery): Promise<any> {
    throw new Error('Not implemented');
  }

  static get example() {
    return new GgDbSqlite();
  }
}
