import express from 'express';
import db from './db.js'
import bodyParser from 'body-parser';
import movieRoutes from './routes/movieRoutes.js';

const app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('server is running');
});

app.use(movieRoutes)

app.listen(3000, () => {
  console.log('Express server initialized');
});