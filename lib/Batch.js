/**
  Batch
  EZDB Batch API
*/

/*
  Batch Get Item
*/
exports.get = async () => {
  const params = await ;
  await DB.batchGetItem(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Batch Write Item
*/
exports.write = async () => {
  const params = await ;
  await DB.batchWriteItem(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
