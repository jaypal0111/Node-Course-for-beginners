var http = require('http');

http.createServer(function (req,res){

    res.writeHead(300,{'Content-Type': 'text/html'});

    //res.write(req.url+'</br>');
    console.log('Request url is :' + req.url);

    res.end('Hello Ibrainers ltd test!')


}).listen(8080);
