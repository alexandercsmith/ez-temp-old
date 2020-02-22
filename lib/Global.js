const DB = {};
const Schema = require('./Schema');
const Error = require('./Error');

/**
 * @func     Global.list
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {array}
 * @throws   {error}
 */
exports.list = async (options={}) => {
  const params = await ;
  DB.listGlobalTables(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Global.create
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.create = async (options={}) => {
  const params = await ;
  DB.createGlobalTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Global.describe
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.describe = async (options={}) => {
  const params = await ;
  DB.describeGlobalTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Global.update
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.update = async (options={}) => {
  const params = await ;
  DB.updateGlobalTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Global.settings
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.settings = async (options={}) => {
  const params = await ;
  DB.updateGlobalTableSettings(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
