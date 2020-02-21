// Backup API

const DB = require('../config/db.config.js');

/*
  List Backups
*/
exports.list = async () => {
  const params = await {};
  await DB.listBackups(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Create Backup
*/
exports.create = async () => {
  const params = await {};
  await DB.createBackup(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Describe Backup
*/
exports.describe = async () => {
  const params = await {};
  await DB.describeBackup(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Delete Backup
*/
exports.delete = async () => {
  const params = await {};
  await DB.deleteBackup(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
