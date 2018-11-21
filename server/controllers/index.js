const express = require('express');

const AdvancedSearch = require('./AdvancedSearch');
const Charity = require('./charity');
const Search = require('./search');

const router = express.Router();

<<<<<<< Updated upstream
router.get('/filter', AdvancedSearch.get);
router.get('/charity/:id', Charity.get);
router.get('/search', Search.get);
=======
router.get('/filter', airTable.filter);
router.get('/charity/:id', airTable.charity);
router.get('/search', airTable.search);
>>>>>>> Stashed changes

module.exports = router;
