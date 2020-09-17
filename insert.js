var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "mkdachamp",
    database: "Users"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO Users (user_name) VALUES ('Matt')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});