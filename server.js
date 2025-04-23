const express = require('express');
const bodyParser = require('body-parser');
const quotesRouter = require('./routes/quotes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/quotes', quotesRouter);  

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});