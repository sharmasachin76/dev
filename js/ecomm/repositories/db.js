const mysql = require('mysql');
const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'my_db',
    multipleStatements:true
});

dbConnection.connect((err)=>{
    if(!err){
        console.log('DB Connection Successful');
    }
    else{
        console.log('DB Connection failed !!!!!' + JSON.stringify(err,undefined,2));
    }
});
module.exports = dbConnection;