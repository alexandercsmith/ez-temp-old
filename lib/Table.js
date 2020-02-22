const DB = {};
const Errors = require('./Errors');

/**
 * @param
 * @return
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
 * @return
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
 * @return
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
 * @return
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
 * @return
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
 * @return
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
 * @return
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
 * @return
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
 * @return
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
 * @return
 */
exports.updateTTL = async () => {
  const params = await ;
  await DB.updateTimeToLive(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
