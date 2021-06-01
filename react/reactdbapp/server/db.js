var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("mydb");

// This file may not be in fully use

db.serialize(function () {
  //db.run("create table users (id INT, name TEXT)");

  /*var stmt = db.prepare("insert into users values(?,?)");

  for (var i = 0; i < 10; i++) {
    var id = i;
    var name = "test";
    stmt.run(id, name);
  }

  stmt.finalize();

  */

  db.each("Select id, name from users", function (err, row) {
    console.log(row.id, row.name);
  });
});

db.close();
