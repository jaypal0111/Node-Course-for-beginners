
var http = require('http');
var upper_case = require('upper-case');

http.createServer(function(req,res){

   res.writeHead(200,{'Content-Type': 'text/html'});

   res.write(upper_case.upperCase('My name is Urmi'));

   res.end();

}).listen(8080);