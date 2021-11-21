const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@audiophileclusterone.yrd7j.mongodb.net/audiophile?retryWrites=true&w=majority`;

let cachedDb = null;

module.exports = async function connectToDatabase() {
    // return the cached versions if they exist
    if (cachedDb) return cachedDb;

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });
    
    const db = client.db("audiophile");
    cachedDb = db;
    return db;
};