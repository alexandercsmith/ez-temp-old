const DB = {};
const Schema = require('./Schema');
const Error = require('./Error');

/**
 * @func     Batch.get
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {array}
 * @throws   {error}
 */
exports.get = async () => {
  const params = await ;
  await DB.batchGetItem(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func     Batch.write
 * @requires {Schema}
 * @param    {object} options
 * @prop     {string} options.table
 * @return   {array}
 * @throws   {error}
 */
exports.write = async () => {
  const params = await ;
  await DB.batchWriteItem(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
