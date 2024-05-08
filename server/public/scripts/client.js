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
    for (let quote of allQuotes) {
        outputList.innerHTML += `<li>"${quote.text}", - <b>${quote.author}</b></li>`

    }

}

