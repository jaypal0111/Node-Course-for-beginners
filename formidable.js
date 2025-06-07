var http = require('http');

var formidable =  require('formidable');

var fs =  require('fs');

http.createServer(function(req,res){


    if(req.url == '/fileupload'){

            // var form = formidable({ multiples: true });

            var form = new formidable.IncomingForm();

            //console.debug(form);



            
            form.parse(req, function(err, fields, files){

                console.log(files);
               
                var prev_path = '../NODE-COURSE-FOR-BEGINNERS/'+ fields.fileupload;

                var new_path = '../NODE-COURSE-FOR-BEGINNERS/files/'+ fields.fileupload;

                console.debug(fields.fileupload);

                console.debug(files);


                fs.rename(prev_path, new_path, function (er){
                             
                    if(er) throw er;

                    res.write('File uploaded and moved successfully!');

                    res.end();


                });

                
                
            });

    }else{

        res.writeHead(200,{'Content-Type': 'text/html'});

        res.write('<form action="fileupload" method="post" endtype="multipart/form-data" >');
    
        res.write('<input type= "file" id="file" name="fileupload"><br>');
    
        res.write('<input type= "submit" >');
        
        res.write('</form>');
        
        return res.end();

    }
   
    

}).listen(8080);