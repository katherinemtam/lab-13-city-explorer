/* eslint-disable no-console */
// import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import request from 'superagent';
import { formatLocation, formatWeather, formatYelp } from './munge-utils.js';

const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

// heartbeat route
app.get('/', (req, res) => {
  res.send('Proxy API');
});

// API routes
app.get('/location', async(req, res) => {
  try {
    const response = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_DB_API_KEY}&q=${req.query.search}&format=json`);

    // munge the data
    const location = formatLocation(response.body);

    //send it back
    res.json(location);
  }
  catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

export default app;