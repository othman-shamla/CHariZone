const airtable = require('./airtable');

exports.get = (req, res) => {
  const { q } = req.query;
  if (q === undefined) {
    res.send('q not found');
  }
  const obj = {
    filterByFormula: `OR((SEARCH('${q.toUpperCase()}',{objective})),(SEARCH('${q.toUpperCase()}',{name})))`,
  };
  airtable(obj, (err, records) => {
    if (err) {
      return res.sendStatus(503);
    }
    if (records.length === 0) {
      return res.send({ error: 'No Charity Found' });
    }
    return res.send({ data: records.map(record => record.fields) });
  });
};
