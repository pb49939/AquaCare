var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, '204.48.30.141');
console.log('Server running at http://204.48.30.141:8080/');
