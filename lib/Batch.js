const DB = {};
const Errors = require('./Errors');

/**
 * @param
 * @contructor
 * @extends
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
 * @contructor
 * @extends
 */
exports.write = async () => {
  const params = await ;
  await DB.batchWriteItem(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
