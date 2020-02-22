const DB = {};
const Error = require('./Error');

/**
 * @func Backup.list
 * @param  {object} options
 * @return {array}
 * @throws {error}
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
 * @param  {object} options
 * @return {object}
 * @throws {error}
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
 * @param  {object} options
 * @return {object}
 * @throws {error}
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
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.delete = async (options={}) => {
  const params = await {};
  await DB.deleteBackup(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
