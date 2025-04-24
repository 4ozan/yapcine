const express = require('express');
const cors = require('cors');
const quotesRouter = require('./routes/quotes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Base route for testing
app.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

// Mount the quotes router with the correct path
app.use('/api/quote', quotesRouter);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});