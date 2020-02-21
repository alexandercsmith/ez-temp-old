/**
  Client
  EZDB Client Interface
*/

function Client(options) {
  // Initialize Client Interface
};

/**
  EZ.Backup.<action>(...params)
*/
const Backup = require('./Backup');
Client.prototype.Backup = {
  list: Backup.list(),
  create: Backup.create(),
  describe: Backup.describe(),
  delete: Backup.delete()
};

/**
  EZ.Batch.<action>(...params)
*/
const Batch = require('./Batch');
Client.prototype.Batch = {
  get: Batch.get(),
  write: Batch.write()
};

/**
  EZ.Global.<action>(...params)
*/
const Global = require('./Global');
Client.prototype.Global = {
  list: Global.list(),
  create: Global.create(),
  describe: Global.describe(),
  update: Global.update()
};

/**
  EZ.Item.<action>(...params)
*/
const Item = require('./Item');
Client.prototype.Item = {
  get: Item.get(),
  create: Item.create(),
  update: Item.update(),
  delete: Item.delete()
};

/**
  EZ.Table.<action>(...params)
*/
const Table = require('./Table');
Client.prototype.Table = {
  list: Table.list(),
  create: Table.create(),
  describe: Table.describe(),
  update: Table.update(),
  delete: Table.delete(),
  restore: Table.restore(),
  query: Table.query(),
  scan: Table.scan()
};

/**
  EZ.Tag.<action>(...params)
*/
const Tag = require('./Tag');
Client.prototype.Tag = {
  list: Tag.list(),
  add: Tag.add(),
  remove: Tag.remove()
};

/**
  EZ.Transact.<action>(...params)
*/
const Transact = require('./Transact');
Client.prototype.Transact = {
  get: Transact.get(),
  write: Transact.write()
};
