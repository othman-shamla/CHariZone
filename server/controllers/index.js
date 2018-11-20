const express = require('express');

const airTable = require('./airTable');
const router = express.Router();

router.get('/search',airTable.get);

module.exports = router;
