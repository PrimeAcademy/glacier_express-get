// ! Bring the express module into our server file
const express = require('express')

// ! Create an instance of express, bu calling the function.
const app = express()
const port = 5000

// * The server will be attached to "localhost", at specific port (5000)

// ! Make server deliver our webpage
  // Tell the server where the files for the page are
app.use(express.static('server/public'))

// -------- GET ROUTE ------------------

let quoteList = [
  { text: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
  { text: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
  { text: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

// * GET Route to return some quotes
  // A method type, which receives 2 arguments
    // - A path
    // - Callback function (arrow function)
  // All routes on a server must respond with something! (A status code, or data)
app.get('/quotes', (req, res) => {
  // Write the code for the endpoint

  // * Sending some data
  res.send(quoteList)

  // * Sending a status number:
  // res.sendStatus(500)
})

// -------- GET ROUTE END ---------------

// ! Actually start server when file is ran
app.listen(
    port,
    () => { console.log("Listening on port...", port)}
)
