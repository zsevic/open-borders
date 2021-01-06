import { openDB } from 'idb';
import {
  IDB_DATABASE_NAME,
  IDB_DATABASE_VERSION,
  IDB_DATABASE_OBJECT_STORE,
} from 'constants/database';

export const idbRepository = {
  async openDb() {
    return openDB(IDB_DATABASE_NAME, IDB_DATABASE_VERSION, {
      upgrade(db) {
        db.createObjectStore(IDB_DATABASE_OBJECT_STORE);
      },
    });
  },
  async get(key) {
    return (await this.openDb()).get(IDB_DATABASE_OBJECT_STORE, key);
  },
  async set(key, val) {
    return (await this.openDb()).put(IDB_DATABASE_OBJECT_STORE, val, key);
  },
};
