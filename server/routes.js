const router = require('express').Router();

const bookController = require('./controllers/bookController');
const userController = require('./controllers/userController');

router.use(bookController);
router.use(userController);

module.exports = router;