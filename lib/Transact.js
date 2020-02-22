const DB = {};
const Schema = require('./Schema');
const Errors = require('./Errors');

/**
 * @func     Transact.get
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.get = async (options={}) => {
  const params = await ;
  await DB.transactGetItems(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Transact.write
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.write = async (options={}) => {
  const params = await ;
  await DB.transactWriteItems(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
