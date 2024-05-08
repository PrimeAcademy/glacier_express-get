// ! Write a function that will retrieve the data on the `/quotes` GET endpoint

let getQuotes = () => {
    console.log("getQuotes is working!")
    axios({
        method: 'GET', // HTTP method
        url: '/canipetthatdawg'
    })
    .then((response) => { // Captures the response from server
        // Must be response.data
        let quoteList = response.data
        console.log("quoteList", quoteList)
    })
    .catch((error) => { // Manages errors
        console.log("GET for /quotes didnt work...", error)
        alert("Oopsie, that didnt work.")
    })
    // Use axios to make a GET request
        // then...
            // Render to the DOM
        // catch
            // any error and provide an alert
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

}

