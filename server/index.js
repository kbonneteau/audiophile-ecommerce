const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const { MongoClient } = require('mongodb');
// routes
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// DB connection
const connectToDatabase = require("./connect-to-database");

// async function dbTest() {
//     // return the cached versions if they exist
//     const db = await connectToDatabase();

//     const results = await db.collection("products").find({}).toArray();

//     console.log(JSON.stringify(results, null, 1))

//     // client.close();
// }


// Required middleware
app.use(express.json());
app.use(helmet());
app.use(logger('dev'));
app.use(express.static('public'));
app.use(cors());

app.get("/", async (req, res) => {
    const db = await connectToDatabase();

    const results = await db.collection("products").find({}).toArray();

    res.json(results);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT} 🚀`));