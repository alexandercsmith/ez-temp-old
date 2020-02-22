const DB = {};
const Errors = require('./Errors');

/**
 * @func Tag.list
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.list = async (options={}) => {
  const params = await ;
  await DB.listTagsOfResource(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Tag.add
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.add = async (options={}) => {
  const params = await ;
  await DB.tagResource(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/**
 * @func Tag.remove
 * @param  {object} options
 * @return {object}
 * @throws {error}
 */
exports.remove = async (options={}) => {
  const params = await ;
  await DB.untagResource(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
