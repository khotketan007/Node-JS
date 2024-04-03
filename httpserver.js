const http = require('http')

const port = 4000;
const hotName = 'ketanjsDeveloper'

const server = http.createServer((req, res) => {
    res.statusCode = 200; // Ok Status Code
    res.setHeader('Content-type', 'text-html')
    res.end('<h1>Hello</h1><p>The World is Amazing</p>')
})

server.listen(port,
    hotName, () => {
    console.log(`Port Number : ${port} and HostName is : ${hotName}`);
})