/**
  Global
  EZDB Global Table API
*/

/*
  List Global Tables
*/
exports.list = async () => {
  const params = await ;
  DB.listGlobalTables(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Create Global Table
*/
exports.create = async () => {
  const params = await ;
  DB.createGlobalTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Describe Global Table
*/
exports.describe = async () => {
  const params = await ;
  DB.describeGlobalTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Update Global Table
*/
exports.update = async () => {
  const params = await ;
  DB.updateGlobalTable(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
