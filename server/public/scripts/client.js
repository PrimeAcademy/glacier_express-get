// ! Write a function that will retrieve the data on the `/quotes` GET endpoint

let getQuotes = () => {
    console.log("getQuotes is working!")
    axios({
        method: 'GET', // HTTP method
        url: '/quotes'
    })
        .then((response) => { // Captures the response from server
            // Must be response.data
            let quoteList = response.data
            console.log("quoteList", quoteList)

            // Render quotes to DOM
            renderQuotes(quoteList)
        })
        .catch((error) => { // Manages errors
            console.log("GET for /quotes didnt work...", error)
            alert("Oopsie, that didnt work.")
        })
}


let someAxiosRequest = () => {
    console.log("someAxiosRequest is working!")
    axios({
        method: 'GET', // HTTP method
        url: '/quotes'
    })
        .then((response) => {
            // Captures the response from server

        })
        .catch((error) => {
            // Manages errors

        })
}

// * Will call function to retrieve quotes the first time the page loads.
getQuotes()

// Will recieve data to render to DOM
// arg: allQuotes (array of objects)
let renderQuotes = (allQuotes) => {
    console.log("renderQuotes() is working... quotes:", allQuotes)

    // loop through array
    // For each quote will render a <li> with quote and author...
    // <li> "quote....", - author </li>
    let outputList = document.getElementById('output')

    // * Will clear list before rendering the individual quotes
    outputList.innerHTML = ""

    for (let quote of allQuotes) {
        outputList.innerHTML += `<li>"${quote.text}", - <b>${quote.author}</b></li>`

    }
}

// ! Will send a POST request to server, which contains a new quote to add.
let addQuote = () => {
    console.log("Add Quote works...")

    // * This example uses a hardcoded quote, instead of one pulled from a form.

    // Use Axios function.
    // Include data to send
    // Then...
    // Get Quotes (again)... Render dom
    // Catch for any issues

    // * Can use a separate variable to define your data as well
    // let quoteToAdd = {
    //     text: "You become who you hang around",
    //     author: "Oprah"
    // }

    axios({
        method: 'POST',
        url: '/quotes',
        // ! Data will always be an object
        data: {
            text: "You become who you hang around",
            author: "Oprah"
        }
    })
        .then((response) => {
            console.log("SUCCESS")
            // ! If the POST suceeds will call getQuotes, which includes the use of our render function.
            getQuotes()
        })
        .catch((error) => { // Manages errors
            console.log("POST for /quotes didnt work...", error)
            alert("Oopsie, that didnt work.")
        })


}

