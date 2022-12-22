# Bookshop
Simple app created mainly with Angular.

## General information
* The main purpose of this application is to buy and sale books.
* The guests (not logged-in users) are only enabled to see the home page, the catalog (All Books) page, 
the details page of every book posted, but without the dynamic part, and also to login or register a user.
* The logged-in users are able to see the home page and the catalog (All Books) page, the details page of every 
book posted, where all users can see the description of the book, the user that is the creator of the post of the 
current book can also see an edit and a delete button, which functionality is obvious, the rest of the users can buy a chosen amount of the book. All users can also see a separate page with their books for sale and they can logout.

## Technologies
* Client
  * @angular/cli: 15.0.0
* Server
  * bcrypt: 5.0.1,
  * cors: 2.8.5,
  * dotenv: 16.0.3,
  * express: 4.18.1,
  * jsonwebtoken: 8.5.1,
  * mongoose: 6.5.0
  
## Setup
To open the project you can click here https://bookshop-omega.vercel.app/home
or in the project directory, you should run:

```
$ cd ./bookshop-app
$ npm i
$ npm start
```
Which opens the app at http://localhost:4200 in your browser.
However it won't work unless the server is listening, so in the project directory, you should also run:

```
$ cd ./server
$ npm i
$ npm start
```

And the server will start listening on port 3030.
