const { MongoClient } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

let cachedDb = null;

async function connectToDatabase() {
  // return the cached versions if they exist
  if (cachedDb) return cachedDb;

  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: false,
    });
    const db = client.db(process.env.DB_NAME);
    cachedDb = db;
    return db;
  } catch (error) {
    console.log("error in database connection");
    console.log(error);
  }
}

module.exports = { connectToDatabase, uri };
