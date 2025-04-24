const fs = require('fs');
const path = require('path');

const getRandomQuote = (req, res) => {
  try {
    const quotes = require('../data/quotes.json');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ quote: randomQuote });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to get quote' });
  }
};

module.exports = { getRandomQuote };