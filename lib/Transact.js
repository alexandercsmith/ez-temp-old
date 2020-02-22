const DB = {};
const Errors = require('./Errors');

/**
 * @func Transact.
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.get = async (options={}) => {
  const params = await ;
  await DB.transactGetItems(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Transact.
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.write = async (options={}) => {
  const params = await ;
  await DB.transactWriteItems(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
