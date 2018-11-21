/* eslint-disable linebreak-style */
require('env2')('./config.env');
const express = require('express');

const app = express();
const port = process.env.PORT || 4000;
const path = require('path');
const controllers = require('./controllers');

app.use('/api/v1', controllers);

// For deployment, etc: Heroku.
if (process.env.NODE_ENV === 'production') {
  // # npm run build #
  // Serve build version of the app.
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Return all requests to our React app.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
