const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('C:/Users/stu.RAVTECH/data.db', sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        return console.error("hkhghkuh");
    }
    console.log('Connected to the in-memory SQlite database.');
});


  db.serialize(() => {
    db.each(`SELECT * FROM bists`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.id + "\t" + row.name);
    });
  });

// db.serialize(function () {
//     db.all("select name from sqlite_master where type='table'", function (err, tables) {
//         console.log(tables);
//     });
// });

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});