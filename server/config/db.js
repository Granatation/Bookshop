const mongoose = require('mongoose');
require('dotenv').config();

exports.dbInit = () => {
    mongoose.connection.on('open', () => console.log('Db is connected!'));

    return mongoose.connect(process.env.DB_QUERYSTRING);
}