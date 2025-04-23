const express = require('express');
const { getRandomQuote } = require('../controller/quoteController');
const router = express.Router();

router.get('/randomQuotes', getRandomQuote);

module.exports = router;