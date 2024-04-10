// Importing Express JS
const express = require('express')

// Creating Express app
const app = express()
const port = 8000

// handling the some get method
app.get('/', (req, res) => {
    return res.send("Hello! Users")
})

app.listen(port, () => {
    console.log(`You are listening on Port ${port}`);
})