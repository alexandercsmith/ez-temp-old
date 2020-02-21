const DB = {};
const Errors = require('./Errors');

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
exports.list = async () => {
  const params = await ;
  await DB.listTagsOfResource(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
exports.add = async () => {
  const params = await ;
  await DB.tagResource(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @param
 * @contructor
 * @extends {Errors}
 */
exports.remove = async () => {
  const params = await ;
  await DB.untagResource(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
