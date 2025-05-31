var http = require('http');
// var datetime = require('./myfirstmodule');

var dateTime =  require('./myfirstmodule');
http.createServer(function (req,res){
   
    res.writeHead(200,{'Content-Type': 'text/html'});

    res.write('Current date and time :' + dateTime.myDateTime());

    res.end();


}).listen(8080);