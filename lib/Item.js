const DB = {};
const Schema = require('./Schema');
const Errors = require('./Errors');

/**
 * @func     Item.get
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.get = async (options={}) => {
  const params = await ;
  await DB.getItem(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Item.create
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.create = async (options={}) => {
  const params = await ;
  await DB.putItem(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Item.update
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.update = async (options={}) => {
  const params = await ;
  await DB.(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Item.delete
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {error}
 */
exports.delete = async (options={}) => {
  const params = await ;
  await DB.(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
