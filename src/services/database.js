import { openDB } from 'idb';
import {
  IDB_DATABASE_NAME,
  IDB_DATABASE_VERSION,
  IDB_DATABASE_OBJECT_STORE,
} from 'constants/database';

export const idbRepository = {
  async openDatabase() {
    try {
      await openDB(IDB_DATABASE_NAME, IDB_DATABASE_VERSION, {
        upgrade(database) {
          database.createObjectStore(IDB_DATABASE_OBJECT_STORE);
        },
      });
    } catch {
      console.error('IndexedDB is not supported');
    }
  },
  async get(database, key) {
    return database.get(IDB_DATABASE_OBJECT_STORE, key);
  },
  async set(database, key, value) {
    return database.put(IDB_DATABASE_OBJECT_STORE, value, key);
  },
};
