var http = require('http');
var lower_case = require('lower-case');


http.createServer(function(req,res){
   
    res.writeHead(200,{'Content-Type': 'text/html'});

    res.write(lower_case.lowerCase("I AM STUDENT!"));

    res.end();


}).listen(8080);


// submit id -> 'submit' button ('#submit').on('click'){ console.log('i am clicked');} 