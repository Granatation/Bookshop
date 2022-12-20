const router = require('express').Router();

const bookService = require('../services/bookService');
const authService = require('../services/authService');
// const Book = require('../models/Book');
const errorChecker = require('../utils/errorChecker');

router.post('/add-book', async (req, res) => {
    try {
        const { title, author, language, description, price, availability, imageUrl, sales } = req.body;
        console.log(req.body);

        if (title == '' || author == '' || language == '' || availability == '' || price == '' || imageUrl == '' || description == '') {
            throw new Error('Empty fields!')
        }

        const user = await authService.getUser(req);
        errorChecker(user);

        const result = await bookService.create({ title, author, language, description, price, availability, imageUrl, sales, postCreator: user._id });
        errorChecker(result);

        const bookArr = [...user.books, result._id];

        const updatedUser = await authService.update(user._id, {
            _id: user._id,
            username: user.username,
            accessToken: user.accessToken,
            email: user.email,
            password: user.password,
            books: bookArr
        });
        errorChecker(updatedUser);

        res.json(result);
    } catch (error) {
        res.json({ message: error.message });
    }
});

router.get('/all-books', async (req, res) => {
    try {
        const books = await bookService.getAll();
        errorChecker(books);

        res.json(books);
    } catch (error) {
        res.json({ message: error.message });
    }
});

router.get('/all-books/:bookId', async (req, res) => {
    try {
        const book = await bookService.getOne(req.params.bookId);
        errorChecker(book);

        res.json(book);
    } catch (error) {
        res.json({ message: error.message });
    }
});

router.post('/all-books/:bookId/edit', async (req, res) => {
    try {
        const { title, author, language, description, price, availability, imageUrl, sales } = req.body;

        if (title == '' || author == '' || language == '' || availability == '' || price == '' || imageUrl == '' || description == '' || sales == '') {
            throw new Error('Empty fields!')
        }

        const user = authService.getUser(req);
        errorChecker(user);

        const updatedBook = await bookService
            .update(req.params.bookId, { title, author, language, description, price, availability, imageUrl, sales, postCreator: user._id });
        errorChecker(updatedBook);

        res.json(updatedBook);
    } catch (error) {
        res.json({ message: error.message });
    }
});

router.get('/all-books/:bookId/delete', async (req, res) => {
    try {
        const book = await bookService.del(req.params.bookId);
        errorChecker(book);

        const user = await authService.getUser(req);
        errorChecker(user);

        const bookArr = user.books.filter(x => x != req.params.bookId);
        errorChecker(bookArr);

        const updatedUser = await authService.update(user._id, {
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password,
            accessToken: user.accessToken,
            books: bookArr
        });
        errorChecker(updatedUser);

        res.json(book);
    } catch (error) {
        res.json({ message: error.message });
    }
});

// router.get('/all-landmarks/:landmarkId/visit', async (req, res) => {
//     try {
//         const landmark = await landmarkService.getOne(req.params.landmarkId);
//         errorChecker(landmark);

//         const user = await authService.getUser(req);
//         errorChecker(user);

//         const visitorsArr = [...landmark.visitors, user._id];
//         errorChecker(visitorsArr);

//         const updatedLandmark = await landmarkService.update(req.params.landmarkId, {
//             _id: landmark._id,
//             name: landmark.name,
//             town: landmark.town,
//             country: landmark.country,
//             imageUrl: landmark.imageUrl,
//             description: landmark.description,
//             postedBy: landmark.postedBy,
//             visitors: visitorsArr
//         });
//         errorChecker(updatedLandmark);

//         res.json(updatedLandmark);
//     } catch (error) {
//         req.json({ message: error.message });
//     }
// });

module.exports = router;