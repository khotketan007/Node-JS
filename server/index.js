// Creating the Http request
const fs = require('fs');
const http = require('http');
const { endianness } = require('os');
const url = require('url')

//  Creating the Server  
const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end("")
    const log = `${Date.now()}: ${req.url} Request Received\n`
    const myUrl = url.parse(req.url, true)
    console.log(myUrl);
    fs.appendFile('./log.txt', log, () => {
        switch (req.url){
            case '/':
                res.end("Home Page")
            break
            case '/about':
                const userName = myUrl.query.myname
                res.end(`Hello, ${userName}`)
            break
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