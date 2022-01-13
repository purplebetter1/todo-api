const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

let databaseUrl = "mongodb+srv://andrew123:andrew123@cluster0.lzocf.mongodb.net/100daysofcode?retryWrites=true&w=majority"

async function initDb() {
  const client = await MongoClient.connect(databaseUrl);
  database = client.db('100daysofcode');
}

function getDb() {
  if (!database) {
    throw new Error('Database not connected!');
  }

  return database;
}

module.exports = {
  initDb: initDb,
  getDb: getDb
};