var http = require('http');
var datetime = require('./myfirstmodule');

http.createServer(function (req,res){
   
    res.writeHead(200,{'Content-Type': 'text/html'});

    res.write('Current date and time :' + datetime.myDateTime());

    res.end();


}).listen(8080);