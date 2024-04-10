// Creating the Http request
const fs = require('fs');
const http = require('http');
const { endianness } = require('os');
const url = require('url')

//  Creating the Server  
const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end("")
    const log = `${Date.now()} : ${req.method} ${req.url} Request Received\n`
    console.log(`${req.method}`);
    const myUrl = url.parse(req.url, true)
    fs.appendFile('./log.txt', log, () => {
        switch (req.url){
            case '/':
                if(req.method === 'GET') res.end("You Are on Home Page")
            break
            case '/about':
                const userName = myUrl.query.myname
                res.end(`Hello, ${userName}`)
            break
            case '/contact-us':
                res.end("Contact to Ketan")
            break
            case '/signup':
                if (req.method === 'GET') {
                    res.end('SignIn form')
                }else if(req.method === 'POST'){
                    // DB Query
                    res.end('Success')
                }
            default:
                res.end("404 Error Found")
        }
        
    })

})

// Now we can Declaring the port Number
myServer.listen(7000, () => console.log("Server Started!"))