const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
require('dotenv').config();
// routes
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/category');

const app = express();
const PORT = process.env.PORT || 8000;

// Required middleware
app.use(express.json());
app.use(helmet());
app.use(logger('dev'));
app.use(express.static('public'));
app.use(cors());

// Routes
app.use('/products', productRoutes);
app.use('/category', categoryRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT} 🚀`));