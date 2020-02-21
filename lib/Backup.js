const DB = {};
const Errors = require('./Errors');

/**
 * @param
 * @contructor
 * @extends
 */
exports.list = async () => {
  const params = await {};
  await DB.listBackups(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @contructor
 * @extends
 */
exports.create = async () => {
  const params = await {};
  await DB.createBackup(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @contructor
 * @extends
 */
exports.describe = async () => {
  const params = await {};
  await DB.describeBackup(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @contructor
 * @extends
 */
exports.delete = async () => {
  const params = await {};
  await DB.deleteBackup(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
