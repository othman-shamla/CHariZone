require('env2')('./config.env');
const Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.APIKEY
});
const base = Airtable.base(process.env.BASE);

exports.get = (req, res) => {
  const { incfrom, incto, exform, exto, category } = req.query;
  let array = [];
  let obj;

  if (incfrom === "-1" && exform === "-1" && category === "-1") {
    obj = {
      view: "Grid view"
    };
  } else if (incfrom === "-1" && category === "-1") {
    obj = {
      filterByFormula: `AND(({expend} > ${exform}),({expend} < ${exto}))`
    };
  } else if (exform === "-1" && category === "-1") {
    obj = {
      filterByFormula: `AND(({income} > ${incfrom}),({income} < ${incto}))`
    };
  } else if (incfrom === "-1") {
    obj = {
      filterByFormula: `AND(({income} > ${incfrom}),({income} < ${incto}))`,
      filterByFormula: `(FIND(${category},{What}))`
    };
  } else if (exform === "-1") {
    obj = {
      filterByFormula: `AND(({income} > ${incfrom}),({income} < ${incto}))`,
      filterByFormula: `(FIND(${category},{What}))`
    };
  } else if (incfrom === "-1" && exform === "-1") {
    obj = {
      filterByFormula: `(FIND(${category},{What}))`
    };
  } else if (category === "-1") {
    obj = {
      filterByFormula: `AND(({expend} > ${exform}),({expend} < ${exto}))`,
      filterByFormula: `AND(({income} > ${incfrom}),({income} < ${incto}))`
    };
  } else {
    obj = {
      filterByFormula: `AND(({expend} > ${exform}),({expend} < ${exto}))`,
      filterByFormula: `AND(({income} > ${incfrom}),({income} < ${incto}))`,
      filterByFormula: `(FIND(${category},{What}))`
    };
  }
  base("Imported table")
    .select(obj)
    .firstPage(function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function(record) {
        array.push(record.fields);
      });
      res.send({ data: array });
    });
};
