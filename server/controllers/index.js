const express = require('express');

const AdvancedSearch = require('./AdvancedSearch');
const router = express.Router();

router.get('/search',AdvancedSearch.get);

module.exports = router;
