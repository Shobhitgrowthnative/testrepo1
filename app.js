// const express = require('express')


// const app = express();

// app.get('/', function(req, res){
//     res.send("Hello world..!")
// })
// app.get('/alien', function(req, res){
//     const id = req.query.id
//     res.send("Welcome back aliens.." + id)
// })

// app.get('/alien/:id', function(req, res){
//     const id = req.params.id
//     res.send("hey Shobhit." + id)
// })
// app.listen(9000);

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.end('Hello world');
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

