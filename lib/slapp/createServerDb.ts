import {
  addRxPlugin, createRxDatabase, getRxStoragePouch, addPouchPlugin, removeRxDatabase,
} from 'rxdb';
import adapteridb from 'pouchdb-adapter-idb';

export async function createServerDb(name = 'slapp') {
  console.log('DatabaseService: creating database..');
  addPouchPlugin(adapteridb);

  const storage = getRxStoragePouch('idb');
  await removeRxDatabase(name, storage);

  const db = await createRxDatabase({ name, storage });
  console.log('DatabaseService: created database');
  (window as any).db = db; // write to window for debugging

  // show leadership in title
  db.waitForLeadership().then(() => {
    console.log('isLeader now');
    document.title = '♛ ' + document.title;
  });
  return db;
}
