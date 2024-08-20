const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
app.use(express.json());

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

app.put('/movies/:id', async (req, res) => {
  try {
    const movies = database.collection('movies');
    const id = req.params.id;
    const updates = req.body;
    
    const result = await movies.updateOne({ _id: new ObjectId(id) }, { $set: updates });
    
    if (result.matchedCount === 0) {
      res.status(404).json({ message: 'Movie not found' });
    } else {
      res.json({ message: 'Movie updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating movie', error: error.message });
  }
});

connectToDatabase().then(() => {
  const port = 3002;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Update movie service listening at http://localhost:${port}`);
  });
});

process.on('SIGINT', async () => {
  await client.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});
const cors = require('cors');
app.use(cors());