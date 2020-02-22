const DB = {};
const Errors = require('./Errors');

/**
 * @param
 * @return
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
 * @return
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
 * @return
 */
exports.remove = async () => {
  const params = await ;
  await DB.untagResource(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
