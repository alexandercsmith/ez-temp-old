const DB = {};
const Errors = require('./Errors');

/**
 * @param
 * @return
 */
exports.get = async () => {
  const params = await ;
  await DB.batchGetItem(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @return
 */
exports.write = async () => {
  const params = await ;
  await DB.batchWriteItem(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
