const airtable = require('./airtable');

exports.get = (req, res) => {
  const { id } = req.params;
  if (id === undefined) {
    res.send('charity not found');
  }
  const obj = {
    filterByFormula: `({regno} = "${id}")`,
  };
  airtable(obj, (err, records) => {
    if (err) {
      return res.sendStatus(503);
    }
    if (records.length === 0) {
      return res.status(404).send('Charity Not Found');
    }
    return res.send({ data: records[0].fields });
  });
};
