const router = require('express').Router();

const authService = require('../services/authService');

const errorChecker = require('../utils/errorChecker');

const User = require('../models/User');

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email == '' || password == '') {
            throw new Error('Empty fields!');
        }

        const result = await authService.login(email, password);
        errorChecker(result);

        res.json(result)
    } catch (error) {
        res.json({ message: error.message });
    }

});

router.post('/register', async (req, res) => {
    try {
        const { username, email, password, repass } = req.body;

        const existingUsername = await User.findOne({ username });
        errorChecker(existingUsername);

        if (existingUsername) {
            throw new Error('Username is taken!');
        }

        const existingEmail = await User.findOne({ email });
        errorChecker(existingEmail);

        if (existingEmail) {
            throw new Error('Email is taken!');
        }

        if (password !== repass) {
            throw new Error('Password missmatch!');
        }

        const accessToken = await authService.createToken(email);
        errorChecker(accessToken);

        const createdUser = await authService.create({ username, email, password, accessToken, books: [] });
        errorChecker(createdUser);

        res.json(createdUser);
    } catch (error) {
        res.json({ message: error.message });
    }

});

router.get('/user/:userId', async (req, res) => {
    try {
        const user = await authService.getOneById(req.params.userId);
        errorChecker(user);

        res.json(user);
    } catch (error) {
        res.json({ message: error.message });
    }
});

router.get('/profile/:accessToken', async (req, res) => {
    try {
        const user = await authService.getOneByToken(req.params.accessToken);
        errorChecker(user);

        res.json({ username: user.username, books: user.books });
    } catch (error) {
        res.json({ message: error.message });
    }
})

module.exports = router;