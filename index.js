const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./src/routes/routes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
