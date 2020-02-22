const DB = {};
const Error = require('./Error');

/**
 * @func Batch.get
 * @param  {object} options
 * @return {array}
 * @throws {error}
 */
exports.get = async () => {
  const params = await ;
  await DB.batchGetItem(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Batch.write
 * @param  {object} options
 * @return {array}
 * @throws {error}
 */
exports.write = async () => {
  const params = await ;
  await DB.batchWriteItem(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
