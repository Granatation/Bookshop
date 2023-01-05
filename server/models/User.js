const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username required'],
    },
    email: {
        type: String,
        required: [true, 'Email required'],
    },
    password: {
        type: String,
        required: [true, 'Password required']
    },
    accessToken: {
        type: String
    },
    booksForSale: [{
        type: mongoose.Types.ObjectId,
        ref: 'Book'
    }],
    booksInCart: [{
        type: mongoose.Types.ObjectId,
        ref: 'Book'
    }]
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, process.env.SALT_ROUNDS)
        .then(hashedPass => {
            this.password = hashedPass;

            next();
        });
})

const User = mongoose.model('User', userSchema);

module.exports = User;