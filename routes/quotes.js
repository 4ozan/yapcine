const express = require('express');
const router = express.Router();
const { getRandomQuote } = require('../controllers/quoteController');

router.get('/randomQuotes', getRandomQuote);

module.exports = router;