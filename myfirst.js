var http = require('http');

//console.log("http: ", http)

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Monica Bellucci');
}).listen(8080);