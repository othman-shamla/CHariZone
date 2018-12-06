/* eslint-disable no-dupe-keys */
const airtable = require('./airtable');

exports.get = (req, res) => {
  const {
    incfrom, incto, category,
  } = req.query;
  let obj;

  if (incfrom === '-1' && category === '-1') {
    obj = {
      view: 'Grid view',
    };
  } else if (category === '-1') {
    obj = {
      filterByFormula: `AND(({income} > ${incfrom}),({income} < ${incto}))`,
    };
  } else if (incfrom === '-1') {
    obj = {
      filterByFormula: `(FIND(${category},{What}))`,
    };
  } else {
    obj = {
      filterByFormula: `AND(({income} > ${incfrom}),({income} < ${incto}))`,
      filterByFormula: `(FIND(${category},{What}))`,
    };
  }
  airtable(obj, (err, records) => {
    if (err) {
      return res.send({ data: null, err });
    }
    const data =  records.map(record => record.fields);
    return res.send({ data, err: null });
  });
};
