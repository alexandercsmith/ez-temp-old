const Errors = require('./Errors');

/**
 * @param {Object} config
 * @contructor
 * @extends {Errors}
 */
function Client(config) {
  // Initialize Client Interface
};

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
const Backup = require('./Backup');
Client.prototype.Backup = {
  list: Backup.list(),
  create: Backup.create(),
  describe: Backup.describe(),
  delete: Backup.delete()
};

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
const Batch = require('./Batch');
Client.prototype.Batch = {
  get: Batch.get(),
  write: Batch.write()
};

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
const Global = require('./Global');
Client.prototype.Global = {
  list: Global.list(),
  create: Global.create(),
  describe: Global.describe(),
  update: Global.update()
};

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
const Item = require('./Item');
Client.prototype.Item = {
  get: Item.get(),
  create: Item.create(),
  update: Item.update(),
  delete: Item.delete()
};

/**
 * @param
 * @contructor
 * @extends {Errors}
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
 * @param
 * @contructor
 * @extends {Errors}
 */
const Tag = require('./Tag');
Client.prototype.Tag = {
  list: Tag.list(),
  add: Tag.add(),
  remove: Tag.remove()
};

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
const Transact = require('./Transact');
Client.prototype.Transact = {
  get: Transact.get(),
  write: Transact.write()
};
