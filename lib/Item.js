const DB = {};
const Errors = require('./Errors');

/**
 * @param
 * @return
 */
exports.get = async () => {
  const params = await ;
  await DB.getItem(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @return
 */
exports.create = async () => {
  const params = await ;
  await DB.putItem(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @return
 */
exports.update = async () => {
  const params = await ;
  await DB.(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @return
 */
exports.delete = async () => {
  const params = await ;
  await DB.(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
