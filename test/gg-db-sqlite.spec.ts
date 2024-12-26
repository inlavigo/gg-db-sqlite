// @license
// Copyright (c) 2024 Dr. Gabriel Gatzsche
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { Rljson } from 'rljson';
import { describe, expect, it } from 'vitest';

import { GgDbSqlite } from '../src/gg-db-sqlite';

describe('gg-db-sqlite', () => {
  describe('import()', () => {
    it('throws an unimplemented error', () => {
      let message: string = '';
      try {
        const ggDbSqlite = GgDbSqlite.example;
        ggDbSqlite.import(Rljson.empty());
      } catch (error) {
        message = error.message;
      }

      expect(message).toBe('Method not implemented.');
    });
  });

  describe('get(query)', () => {
    it('throws an unimplemented error', async () => {
      let message: string = '';
      try {
        const ggDbSqlite = GgDbSqlite.example;
        await ggDbSqlite.get({ table: 'table', columns: [] });
      } catch (error) {
        message = error.message;
      }

      expect(message).toBe('Not implemented');
    });
  });
});
