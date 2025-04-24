const express = require('express');
const router = express.Router();
const { getRandomQuote } = require('../controllers/quoteController.js');

router.get('/randomQuotes', getRandomQuote);

module.exports = router;