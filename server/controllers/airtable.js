
const Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.APIKEY,
});

const base = Airtable.base(process.env.BASE);

module.exports = (obj, cb) => {
  base('Imported table')
    .select(obj)
    .firstPage((err, records) => {
      if (err) {
        return cb(err);
      }
      return cb(null, records);
    });
};
