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

// * Require code from another file to store in a variable
const quoteList = require('./quoteList.js')

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

// ! Make a route called Authors, which only responds with the authors from the quoteList data structure
    // responds Array of string (names)
app.get('/authors', (req, res) => {
  let authors = []

  //* Loop over quote and extract names, push to 'authors' array
  for (let quote of quoteList) {
    console.log("Current quote", quote)
    authors.push(quote.author)
  }

  console.log("Author list...", authors)

  // * Respond with authors data
  res.send(authors)
})

// -------- GET ROUTE END ---------------

// ! Actually start server when file is ran
app.listen(
    port,
    () => { console.log("Listening on port...", port)}
)
