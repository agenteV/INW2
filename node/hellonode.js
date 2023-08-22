const http = require('http')

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello, Node.25 Server! Welcome to our World!')
});

const port = 3000;
server.listen(port, () =>{
    console.log(`Servidor executado em http://localhost:${port}/`);
})