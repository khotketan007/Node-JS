// Talking the all reauired axpress method and all
const express = require('express')
// TO fetch require data in JSON format
const users = require('./MOCK_DATA.json')

// App
const app = express()
//Port
const port = 8000

// Routes

app.get('/users', (req, res) => {
    const html = `
        <ul>
            ${users.map((data) => `<li>${data.first_name}</li>`).join('')}
        </ul>
    `
    res.send(html)
})
app.get('/api/users', (req, res) => {
    return res.json(users)
})

app.route('/api/users/:id')
.get((req, res) => {
    const id = Number(req.params.id)
    const userID = users.find((user) => user.id === id)
    return res.json(userID)
})
.patch((req, res) => {
    // to Edit the user with ID
    return res.json({status : 'Pending'})
})
.delete((req, res) => {
    // To delete the ID with Id
    return res.json({status : 'Pending'})
})

// app.get('/api/users/:name', (req, res) => {
//     const name1 = String(req.params.name)
//     const userName = users.find((name) => name.first_name === name1)
//     return res.json(userName)
// })

app.listen(port, () => {console.log(`Server Started at Port : ${port}`);})