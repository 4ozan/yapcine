import { Router } from 'express';
import { getRandomQuote } from '../controllers/quoteController';

export const quotesRouter = Router();

// GET /api/quote/randomQuotes
quotesRouter.get('/randomQuotes', getRandomQuote);
