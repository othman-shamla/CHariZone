const airtable = require('./airtable');

exports.get = (req, res) => {
  const { id } = req.params;
  if (id === undefined) {
    res.send({ err: "ID-UNDEFINED", data: null });
  }
  const obj = {
    filterByFormula: `({regno} = "${id}")`,
  };
  airtable(obj, (err, records) => {
    if (err) {
      return res.send({ err: "ERR-SERVER", data: null });
    }
    if (records.length === 0) {
      return res.send({ err: "NO-CHARITY", data: null });
    }
    return res.send({ data: records[0].fields, err: null });
  });
};
