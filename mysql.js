//npm install mysql

var mysql =  require('mysql');

var con = mysql.createConnection({

    host : 'localhost',
    user: 'root',
    password: 'home1234',
    database: 'ibrainersNodeDb'

});



con.connect(function(error){
    
    if(error) throw error;
    console.log("Mysql is connected!");

    //var createDb_sql = "CREATE DATABASE ibrainersNodeDb";
    //var createTb_sql = "CREATE TABLE students (id INT(11) NOT NULL AUTO_INCREMENT, name VARCHAR(255), address VARCHAR(255), PRIMARY KEY(id))";


   // var insert_sql = "INSERT INTO students (name,address) VALUE('Jay','UK'),('Urmi','IND'),('Patrick','USA'); ";
    //var insert_sql = "INSERT INTO students (name,address) VALUE ? ";
    /*var values = [['jay2','UK'],
                ['Jonny','UK'],
                ['Binny','NZ']
                ];*/
    //var select_sql = "SELECT * FROM students;";

     var address = 'UK';
     var name = 'Jay'; 
     var select_sql2 =  "SELECT * FROM students WHERE address=? AND name = ?;";


    
    // replace 1st sql parameter with related query variable
   con.query(select_sql2,[address, name], function(err, result,fields){
   // con.query(select_sql, function(err, result,fields){
   // con.query(insert_sql, [values] ,function(err, result){
   // con.query(insert_sql, function(err, result){
      
         if(err) throw err;
         console.log(result);
        // console.log("Number of records inserted " +  result.affectedRows);
        // console.log("Database Created!");
         //console.log("Table Created Successfully!");  
        

    });


}); 