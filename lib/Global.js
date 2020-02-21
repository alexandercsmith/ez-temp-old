const DB = {};
const Errors = require('./Errors');

/**
 * @param
 * @contructor
 * @extends {Errors}
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
 * @contructor
 * @extends {Errors}
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
 * @contructor
 * @extends {Errors}
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
 * @contructor
 * @extends {Errors}
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
 * @contructor
 * @extends {Errors}
 */
exports.settings = async () => {
  const params = await ;
  DB.updateGlobalTableSettings(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
