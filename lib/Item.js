const DB = {};
const Errors = require('./Errors');

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
exports.get = async () => {
  const params = await ;
  await DB.getItem(params, (err, data) => {
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
  await DB.putItem(params, (err, data) => {
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
  await DB.(params, (err, data) => {
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
  await DB.(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
