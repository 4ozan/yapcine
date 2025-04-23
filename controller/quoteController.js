const fs = require('fs');
const path = require('path');

const getRandomQuote = (req, res) => {
  const filePath = path.join(__dirname, '../data/quotes.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Failed to read quotes file:', err);
      return res.status(500).json({ error: 'Could not load quotes' });
    }

    const quotes = JSON.parse(data);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    res.json({
      quote: randomQuote,
      timestamp: new Date()
    });
  });
};

module.exports = { getRandomQuote };
