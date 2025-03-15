var http = require('http');
var url = require('url');

http.createServer(function (req,res){
 
    res.writeHead(200,{'Content-Type' : 'text/html'});

    var p_url = url.parse(req.url,true).query;

    var msg = "Year:" + p_url.year + "  Month:" + p_url.month;
    res.end(msg);
    

}).listen(8080);