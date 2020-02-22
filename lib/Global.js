const DB = {};
const Error = require('./Error');

/**
 * @func Global.list
 * @param  {object} options
 * @return {array}
 * @throws {error}
 */
exports.list = async (options={}) => {
  const params = await ;
  DB.listGlobalTables(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Global.create
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.create = async (options={}) => {
  const params = await ;
  DB.createGlobalTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Global.describe
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.describe = async (options={}) => {
  const params = await ;
  DB.describeGlobalTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Global.update
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.update = async (options={}) => {
  const params = await ;
  DB.updateGlobalTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Global.settings
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.settings = async (options={}) => {
  const params = await ;
  DB.updateGlobalTableSettings(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
