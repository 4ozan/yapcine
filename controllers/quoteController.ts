import { RequestHandler } from 'express';
import path from 'path';
import fs from 'fs';

let quotes: string[] = [];

try {
  const quotesPath = path.resolve(__dirname, '../data/quotes.json');
  const raw = fs.readFileSync(quotesPath, 'utf-8');
  quotes = JSON.parse(raw);
  console.log('Quotes loaded successfully');
} catch (error) {
  console.error('Error loading quotes:', error);
}

export const getRandomQuote: RequestHandler = (req, res, next) => {
  try {
    if (!quotes || quotes.length === 0) {
      console.error('No quotes available');
      res.status(500).json({ error: 'No quotes available' });
      return;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    res.json({ quote: randomQuote });
    return;
  } catch (error) {
    console.error('Error getting random quote:', error);
    res.status(500).json({ error: 'Failed to get quote' });
  }
};
