const DB = {};
const Error = require('./Error');

/**
 * @func Backup.list
 * @param {Object} options
 * @return {Array}
 * @throws {Error}
 */
exports.list = async (options={}) => {
  const params = await {};
  await DB.listBackups(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Backup.create
 * @param {Object} options
 * @return {Object}
 * @throws {Error}
 */
exports.create = async (options={}) => {
  const params = await {};
  await DB.createBackup(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Backup.describe
 * @param {Object} options
 * @return {Object}
 * @throws {Error}
 */
exports.describe = async (options={}) => {
  const params = await {};
  await DB.describeBackup(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Backup.delete
 * @param {Object} options
 * @return {Object}
 * @throws {Error}
 */
exports.delete = async (options={}) => {
  const params = await {};
  await DB.deleteBackup(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
