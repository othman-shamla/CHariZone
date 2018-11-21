const express = require('express');

const AdvancedSearch = require('./AdvancedSearch');
const Charity = require('./charity');
const Search = require('./search');

const router = express.Router();

router.get('/filter', AdvancedSearch.get);
router.get('/charity/:id', Charity.get);
router.get('/search', Search.get);

module.exports = router;
