const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
// routes
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Required middleware
app.use(express.json());
app.use(helmet());
app.use(logger('dev'));
app.use(express.static('public'));
app.use(cors());

app.get("/", (req, res) => res.send('Welcome to the server!'))

app.listen(PORT, () => console.log(`Listening on port ${PORT} 🚀`));