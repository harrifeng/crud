import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://root:rootpass@127.0.0.1';

mongodb.MongoClient.connect(dbUrl, (err, client) => {
  if (err) throw err;

  const  db = client.db('crud')
  app.get('/api/games', (req, res) => {
    db.collection('games').find({}).toArray((err, games) => {
      res.json({games })
    });
  });
  app.listen(8080, () => console.log('Server is running on localhost:8080'));
});
