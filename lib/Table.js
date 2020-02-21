/**
  Table
  EZDB Table API
*/

/*
  List Tables
*/
exports.list = async () => {
  const params = await ;
  await DB.listTables(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Create Table
*/
exports.create = async () => {
  const params = await ;
  await DB.createTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Describe Table
*/
exports.describe = async () => {
  const params = await ;
  await DB.describeTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Update Table
*/
exports.update = async () => {
  const params = await ;
  await DB.updateTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Delete Table
*/
exports.delete = async () => {
  const params = await ;
  await DB.deleteTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Query Table
*/
exports.query = async () => {
  const params = await ;
  await DB.query(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Restore Table
*/
exports.restore = async () => {
  const params = await ;
  await DB.restoreTableFromBackup(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Scan Table
*/
exports.scan = async () => {
  const params = await ;
  await DB.scan(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
