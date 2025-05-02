const fs = require('fs');
const path = require('path');

let quotes; // Store quotes here

try {
  // Load quotes when the module is initialized
  quotes = require('../data/quotes.json');
  console.log('Quotes loaded successfully'); // Add this line for debugging
} catch (error) {
  console.error('Error loading quotes:', error);
  quotes = []; // Initialize to an empty array to prevent further errors
}

const getRandomQuote = (req, res) => {
  try {
    if (!quotes || quotes.length === 0) {
      console.error('No quotes available'); // Add this line for debugging
      return res.status(500).json({ error: 'No quotes available' });
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    res.json({ quote: randomQuote });
  } catch (error) {
    console.error('Error getting random quote:', error);
    res.status(500).json({ error: 'Failed to get quote' });
  }
};

module.exports = { getRandomQuote };