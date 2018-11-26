/* eslint-disable no-dupe-keys */
const airtable = require('./airtable');

exports.get = (req, res) => {
  const {
    incfrom, incto, exform, exto, category,
  } = req.query;
  let obj;

  if (incfrom === '-1' && exform === '-1' && category === '-1') {
    obj = {
      view: 'Grid view',
    };
  } else if (incfrom === '-1' && category === '-1') {
    obj = {
      filterByFormula: `AND(({expend} > ${exform}),({expend} < ${exto}))`,
    };
  } else if (exform === '-1' && category === '-1') {
    obj = {
      filterByFormula: `AND(({income} > ${incfrom}),({income} < ${incto}))`,
    };
  } else if (incfrom === '-1') {
    obj = {
      filterByFormula: `AND(({income} > ${incfrom}),({income} < ${incto}))`,
      filterByFormula: `(FIND(${category},{What}))`,
    };
  } else if (exform === '-1') {
    obj = {
      filterByFormula: `AND(({income} > ${incfrom}),({income} < ${incto}))`,
      filterByFormula: `(FIND(${category},{What}))`,
    };
  } else if (incfrom === '-1' && exform === '-1') {
    obj = {
      filterByFormula: `(FIND(${category},{What}))`,
    };
  } else if (category === '-1') {
    obj = {
      filterByFormula: `AND(({expend} > ${exform}),({expend} < ${exto}))`,
      filterByFormula: `AND(({income} > ${incfrom}),({income} < ${incto}))`,
    };
  } else {
    obj = {
      filterByFormula: `AND(({expend} > ${exform}),({expend} < ${exto}))`,
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
