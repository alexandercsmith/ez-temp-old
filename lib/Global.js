const DB = {};
const Errors = require('./Errors');

/**
 * @param
 * @return
 */
exports.list = async () => {
  const params = await ;
  DB.listGlobalTables(params, (err, data) => {
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
  DB.createGlobalTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @return
 */
exports.describe = async () => {
  const params = await ;
  DB.describeGlobalTable(params, (err, data) => {
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
  DB.updateGlobalTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @return
 */
exports.settings = async () => {
  const params = await ;
  DB.updateGlobalTableSettings(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
