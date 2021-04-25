var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mydb');

db.serialize(function(){

// db.run("create table users (id INT, name TEXT)");

var stmt = db.prepare("insert into users values(?,?)");

for (var i=0; i<10;i++){
    var sno = i;
    var name = "test";
    stmt.run(sno,name);
}

stmt.finalize();

db.each("Select sno, name from users",function(err,row){
    console.log(row.sno, row.name);
});

});

db.close();