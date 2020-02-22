const DB = {};
const Schema = require('./Schema');
const Error = require('./Error');

/**
 * @func     Backup.list
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {array}
 * @throws   {Error}
 */
exports.list = async (options={}) => {
  const params = await Schema.list(options);
  await DB.listBackups(params, (err, data) => {
    if (err) { Error.list(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Backup.create
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {Error}
 */
exports.create = async (options={}) => {
  const params = await Schema.create(options);
  await DB.createBackup(params, (err, data) => {
    if (err) { Error.create(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Backup.describe
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {Error}
 */
exports.describe = async (options={}) => {
  const params = await Schema.describe(options);
  await DB.describeBackup(params, (err, data) => {
    if (err) { Error.describe(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Backup.delete
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {object}
 * @throws   {Error}
 */
exports.delete = async (options={}) => {
  const params = await Schema.delete(options);
  await DB.deleteBackup(params, (err, data) => {
    if (err) { Error.delete(err); }
    else { console.log(data); }
  });
};
