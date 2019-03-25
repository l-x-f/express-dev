const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "132.232.109.242",
  user: "root",
  password: "",
  database: "mydb"
});

if (!connection) {
  const sqlStr = "CREATE DATABASE mydb";
  connection.query(sqlStr, (err, result) => {
    if (err) throw err;
    console.log("Database created");
  });
}

// 连接数据库
connection.connect(function(err) {
  if (err) return console.error("err connection: " + err.stack);

  console.log("successful database connection");
});

module.exports = connection;
