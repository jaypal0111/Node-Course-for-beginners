var http = require('http');
var fs = require('fs');

// readFile Demo
http.createServer(function (req,res){

    fs.readFile('urmi_shah.html',function (err, data){
      
        res.writeHead(200,{'Content-Type': 'text/html'});

        res.write(data);

        return res.end();

    });


}).listen(8080);


// append file demo

/*fs.appendFile('urmi_read.txt','I am in London!', function(err){
  
    if(err) throw err;
    console.log('Saved');

});*/


// Create file demo

/*fs.writeFile('script_create.txt',"Created by me!",function(err){

 if(err) throw err;

 console.log('Created!');

});*/

// Delete file

/*fs.unlink('jay.txt', function(err){

    if(err) throw err;

    console.log('File is deleted!');

});*/


// Rename file name

// fs.rename('urmi.html','urmi_shah.html',function(err){

//     if(err) throw err;

//     console.log('File Renamed!');


// });