import { openDB } from 'idb';
import { IDB_DATABASE_NAME, OBJECT_STORE } from './constants';

const dbPromise = openDB(IDB_DATABASE_NAME, 1, {
  upgrade(db) {
    db.createObjectStore(OBJECT_STORE);
  },
});

export const idbRepository = {
  async get(key) {
    return (await dbPromise).get(OBJECT_STORE, key);
  },
  async set(key, val) {
    return (await dbPromise).put(OBJECT_STORE, val, key);
  },
};
