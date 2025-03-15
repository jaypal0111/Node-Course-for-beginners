var file = require('fs');
var http = require('http');

var readFile = file.createReadStream('urmi_read.txt');




/* Writing to the console when the file is opened */
http.createServer(function (req,res){

    file.readFile('urmi_read.txt',function (err, data){
      
        res.writeHead(200,{'Content-Type': 'text/html'});

        res.write(data);

        
        return res.end();


    });

    
    


}).listen(8080);


readFile.on('open',function(){
    
    console.log('The file is open!');


});

