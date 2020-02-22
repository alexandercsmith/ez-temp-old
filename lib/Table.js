const DB = {};
const Schema = require('./Schema');
const Errors = require('./Errors');

/**
 * @func     Table.list
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {array}
 * @throws   {error}
 */
exports.list = async () => {
  const params = await ;
  await DB.listTables(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Table.create
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.create = async (options={}) => {
  const params = await ;
  await DB.createTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Table.describe
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.describe = async (options={}) => {
  const params = await ;
  await DB.describeTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Table.update
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.update = async (options={}) => {
  const params = await ;
  await DB.updateTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Table.delete
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.delete = async (options={}) => {
  const params = await ;
  await DB.deleteTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Table.query
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.query = async (options={}) => {
  const params = await ;
  await DB.query(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Table.restore
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.restore = async (options={}) => {
  const params = await ;
  await DB.restoreTableFromBackup(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Table.scan
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.scan = async (options={}) => {
  const params = await ;
  await DB.scan(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Table.describeTTL
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.describeTTL = async (options={}) => {
  const params = await ;
  await DB.describeTimeToLive(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Table.updateTTL
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.updateTTL = async (options={}) => {
  const params = await ;
  await DB.updateTimeToLive(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
