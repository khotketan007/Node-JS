const express = require('express')

const app  = express()

app.get('/', (req, res) => {
    return res.send('Hello, Now you on HOME PAGE! ' + ' Welcome ' + req.query.lang)
})

app.get('/about', (req, res) => {
    return res.send('Hello, Now you on ABOUT PAGE')
})

app.get('/contact-us', (req, res) => {
    return res.send('Hello, Please contact To ' + req.query.name)
})

app.listen(8000, () => {console.log('Hello');})

//  Creating the Server  
// const myServer = http.createServer(app)

// // Now we can Declaring the port Number
// myServer.listen(8000, () => console.log("Server Started!"))