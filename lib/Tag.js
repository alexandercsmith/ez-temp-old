/**
  Tag
  EZDB Tag API
*/

/*
  List Tags on Resource
*/
exports.list = async () => {
  const params = await ;
  await DB.listTagsOfResource(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Add Tag to Resource
*/
exports.add = async () => {
  const params = await ;
  await DB.tagResource(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};

/*
  Remove Tag from Resource
*/
exports.remove = async () => {
  const params = await ;
  await DB.untagResource(params, (err, data) => {
    if (err) { console.log(err); }
    else { console.log(data); }
  });
};
