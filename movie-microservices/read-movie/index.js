const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();

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

app.get('/movies', async (req, res) => {
  try {
    const movies = database.collection('movies');
    const result = await movies.find({}).toArray();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error reading movies', error: error.message });
  }
});

app.get('/movies/:id', async (req, res) => {
  try {
    const movies = database.collection('movies');
    const id = req.params.id;
    const movie = await movies.findOne({ _id: new ObjectId(id) });
    
    if (!movie) {
      res.status(404).json({ message: 'Movie not found' });
    } else {
      res.json(movie);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error reading movie', error: error.message });
  }
});

connectToDatabase().then(() => {
  const port = 3003;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Read movie service listening at http://localhost:${port}`);
  });
});

process.on('SIGINT', async () => {
  await client.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});
const cors = require('cors');
app.use(cors());