

const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let database;

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    database = client.db('moviedb');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1);
  }
}

app.post('/movies', async (req, res) => {
  try {
    const movies = database.collection('movies');
    const movie = req.body;
    const result = await movies.insertOne(movie);
    res.status(201).json({ message: 'Movie added successfully', id: result.insertedId });
  } catch (error) {
    res.status(500).json({ message: 'Error adding movie', error: error.message });
  }
});

connectToDatabase().then(() => {
  const port = 3001;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Add movie service listening at http://localhost:${port}`);
  });
});

process.on('SIGINT', async () => {
  await client.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});
