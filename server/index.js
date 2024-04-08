// Creating the Http request
const fs = require('fs');
const http = require('http');
const { endianness } = require('os');

//  Creating the Server  
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} Request Received\n`
    fs.appendFile('./log.txt', log, () => {
        switch (req.url){
            case '/':
                res.end("Home Page")
            break
            case '/about':
                res.end("Hello, I am Ketan ")
            case '/contact-us':
                res.end("Contact to Ketan")
            break
            default:
                res.end("404 Error Found")
        }
        
    })

})

// Now we can Declaing the port Number
myServer.listen(7000, () => console.log("Server Started!"))