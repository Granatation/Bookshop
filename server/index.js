const express = require('express');
const cors = require('cors');

const { PORT } = require('./config/env.js');
const { dbInit } = require('./config/db');
const router = require('./routes')
const app = express();

app.use(express.json());
app.use(cors({ origin: ['http://localhost:4200','https://bookshop-omega.vercel.app','https://bookshop-glz95k2kz-granatation.vercel.app'], credentials: true }));
app.use(router);

dbInit();
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))