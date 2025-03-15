var express = require('express');
var mysql =  require('mysql');
var app = express();

var con = mysql.createConnection({

    host : 'localhost',
    user: 'root',
    password: 'home1234',
    //database: 'urmi_nodejs'
    database: 'urmi_database_v2'

});


//app.use(express.json());
app.use(express.json(),function(req, res, next) {//add komal
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });
 

 
app.get('/getstudents', function (req, res) {
   //res.send('Hello Urmi');

   console.log('test jay');
 
   con.connect(function(error){

    if(error) throw error;
    console.log("Mysql is connected!");
    var select_sql = "SELECT * FROM students;";

    con.query(select_sql, function(err, result,fields){
        //con.query(insert_sql, [values] ,function(err, result){
         
             if(err) throw err;
             console.log(result);
             res.send(result);
    
        });
   });
})



app.post('/getTableData', function (req, res) {
   //res.send('Hello Urmi');

   console.log('test jay');
 
   con.connect(function(error){

    if(error) throw error;
    console.log("Mysql is connected!");

    const requestBody = JSON.parse(JSON.stringify(req.body));
    console.debug(requestBody.table);



    var select_sql = "SELECT * FROM " + requestBody.table;

    con.query(select_sql, function(err, result,fields){
        //con.query(insert_sql, [values] ,function(err, result){
         
             if(err) throw err;
             console.log(result);
             res.send(result);
    
        });
   });
})

app.post('/addstudent', function(req, res){

   con.connect(function(error){
      if(error) throw error;
      console.log("Mysql is connected!");
      
      //console.log(req.body.name);

      const requestBody = JSON.parse(JSON.stringify(req.body));
      console.debug(requestBody);


        var insert_sql = "INSERT INTO students (name,address) VALUE ?";
      
     // var insert_sql = "INSERT INTO students (name,address) VALUE ('"+requestBody[0].name+"','"+requestBody[0].add+"');";
     var studentVal = [];

      Object.keys(req.body).forEach(function(key,index) {
         studentVal[index] = [];

      //insert_sql += '(';
      Object.keys(req.body[key]).forEach(function(subkey,subindex) {
         //console.log(req.body[key][subkey]);
        // insert_sql += "'"+req.body[key][subkey]+"',";

        studentVal[index][subindex] = req.body[key][subkey]

      });

//      insert_sql +='),';

      });

      console.debug(studentVal);
      
      con.query(insert_sql,[studentVal],function(err, result){
               
         if(err) throw err;
         console.log(result);
         res.send(result);

      });

      //console.log(insert_sql);
   });



})

// app.post('/selectuser', function (req, res) {
//    require('./controllers/apiuser.js').get(req, res)
// });

// app.post('/deleteuser', function (req, res) {
//    require('./controllers/apiuser.js').remove(req, res)
// });

// app.post('/updateuser', function (req, res) {
//    require('./controllers/apiuser.js').update(req, res)
// });

/*app.post('/adduser', function (req, res) {
   require('./controllers/apiuser.js').adduser(req, res)
});
app.post('/loginuser', function (req, res) {
   require('./controllers/apiuser.js').login(req, res);
});
app.get('/verifyuser', function (req, res) {
   require('./controllers/apiuser.js').verify(req, res, true);
});

app.post('/addorg', function (req, res) {
   require('./controllers/apiorganisation.js').addorg1(req, res, true);
});
app.post('/deleteorg', function (req, res) {
   require('./controllers/apiorganisation.js').deleteorg(req, res, true);
});
app.post('/adddevice', function (req, res) {
   require('./controllers/apidevice.js').adddevice(req, res, true);
});
app.post('/removedevice', function (req, res) {
   require('./controllers/apidevice.js').removedevice(req, res, true);
});

app.post('/addposition', function (req, res) {
   require('./controllers/apiposition.js').addposition(req, res, true);
});
app.post('/removeposition', function (req, res) {
   require('./controllers/apiposition.js').removeposition(req, res, true);
});
app.post('/changepwd', function (req, res) {
   require('./controllers/apiuser.js').changepwd(req, res, true);
});*/



// app.post('/refreshtoken', function (req, res) {
//    require('./controllers/apiuser.js').checktokenvald(req, res)
// });

var server = app.listen(8888, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})