const Error = require('./Error');

/**
 * @func Client
 * @contructor
 * @param  {Object} config
 * @throws {error}
 */
function Client(config) {
  // Initialize Client Interface
};

/**
 * @func Client.Backup
 * @requires Backup
 */
const Backup = require('./Backup');
Client.prototype.Backup = {
  list: Backup.list(),
  create: Backup.create(),
  describe: Backup.describe(),
  delete: Backup.delete()
};

/**
 * @func Client.Batch
 * @requires Batch
 */
const Batch = require('./Batch');
Client.prototype.Batch = {
  get: Batch.get(),
  write: Batch.write()
};

/**
 * @func Client.Global
 * @requires Global
 */
const Global = require('./Global');
Client.prototype.Global = {
  list: Global.list(),
  create: Global.create(),
  describe: Global.describe(),
  update: Global.update()
};

/**
 * @func Client.Item
 * @requires Item
 */
const Item = require('./Item');
Client.prototype.Item = {
  get: Item.get(),
  create: Item.create(),
  update: Item.update(),
  delete: Item.delete()
};

/**
 * @func Client.Table
 * @requires Table
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
 * @func Client.Tag
 * @requires Tag
 */
const Tag = require('./Tag');
Client.prototype.Tag = {
  list: Tag.list(),
  add: Tag.add(),
  remove: Tag.remove()
};

/**
 * @func Client.Transact
 * @requires Transact
 */
const Transact = require('./Transact');
Client.prototype.Transact = {
  get: Transact.get(),
  write: Transact.write()
};
