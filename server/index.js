const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { dbInit } = require('./config/db');
const router = require('./routes')
const app = express();

app.use(express.json());
app.use(cors({ origin: ['http://localhost:4200', 'https://bookshop-omega.vercel.app'], credentials: true }));
app.use(router);

const port = process.env.PORT || 3030

dbInit();
app.listen(port, () => console.log(`Server listening on port ${port}`));