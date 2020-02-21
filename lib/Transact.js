/**
  Transact
  EZDB Transact API
*/

const DB = require('../config/db.config.js');

/*
  Transact Get Items
*/
exports.get = async () => {
  const params = await ;
  await DB.transactGetItems(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Transact Write Items
*/
exports.write = async () => {
  const params = await ;
  await DB.transactWriteItems(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
