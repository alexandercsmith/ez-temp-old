const DB = {};
const Errors = require('./Errors');

/**
 * @func Table.list
 * @param  {object} options
 * @return {array}
 * @throws {error}
 */
exports.list = async () => {
  const params = await ;
  await DB.listTables(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Table.create
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.create = async (options={}) => {
  const params = await ;
  await DB.createTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Table.describe
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.describe = async (options={}) => {
  const params = await ;
  await DB.describeTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Table.update
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.update = async (options={}) => {
  const params = await ;
  await DB.updateTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Table.delete
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.delete = async (options={}) => {
  const params = await ;
  await DB.deleteTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Table.query
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.query = async (options={}) => {
  const params = await ;
  await DB.query(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Table.restore
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.restore = async (options={}) => {
  const params = await ;
  await DB.restoreTableFromBackup(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Table.scan
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.scan = async (options={}) => {
  const params = await ;
  await DB.scan(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Table.describeTTL
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.describeTTL = async (options={}) => {
  const params = await ;
  await DB.describeTimeToLive(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Table.updateTTL
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.updateTTL = async (options={}) => {
  const params = await ;
  await DB.updateTimeToLive(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
