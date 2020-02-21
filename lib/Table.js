const DB = {};
const Errors = require('./Errors');

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
exports.list = async () => {
  const params = await ;
  await DB.listTables(params, (err, data) => {
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
  await DB.createTable(params, (err, data) => {
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
  await DB.describeTable(params, (err, data) => {
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
  await DB.updateTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
exports.delete = async () => {
  const params = await ;
  await DB.deleteTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
exports.query = async () => {
  const params = await ;
  await DB.query(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
exports.restore = async () => {
  const params = await ;
  await DB.restoreTableFromBackup(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
exports.scan = async () => {
  const params = await ;
  await DB.scan(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
exports.describeTTL = async () => {
  const params = await ;
  await DB.describeTimeToLive(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
exports.updateTTL = async () => {
  const params = await ;
  await DB.updateTimeToLive(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
