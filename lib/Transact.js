const DB = {};
const Errors = require('./Errors');

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
exports.get = async () => {
  const params = await ;
  await DB.transactGetItems(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
exports.write = async () => {
  const params = await ;
  await DB.transactWriteItems(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
