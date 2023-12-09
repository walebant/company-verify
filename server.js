// Requiring module
import express from 'express';

import searchCompany from './src/controllers/searchCompany.js';
import tinInfo from './src/controllers/tinInfo.js';

// Creating express object
const app = express();

app.use(express.urlencoded());

// Handling GET request
app.get('/', (req, res) => {
  res.send('A simple Node App is ' + 'running on this server');
  res.end();
});

// test
app.get('/search', searchCompany);
app.get('/tinInfo', tinInfo);

// Port Number
const PORT = process.env.PORT || 5000;

// Server Setup
app.listen(
  PORT,
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
);
