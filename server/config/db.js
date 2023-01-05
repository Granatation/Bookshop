const mongoose = require('mongoose');
const { DB_QUERYSTRING } = require('../config/env');
// require('dotenv').config();

exports.dbInit = () => {
    mongoose.connection.on('open', () => console.log('Db is connected!'));

    return mongoose.connect(DB_QUERYSTRING);
}