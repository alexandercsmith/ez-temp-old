/**
  Item
  EZDB Item API
*/

/*
  Get Item
*/
exports.get = async () => {
  const params = await ;
  await DB.getItem(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Create Item
*/
exports.create = async () => {
  const params = await ;
  await DB.putItem(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Update Item
*/
exports.update = async () => {
  const params = await ;
  await DB.(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Delete Item
*/
exports.delete = async () => {
  const params = await ;
  await DB.(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
