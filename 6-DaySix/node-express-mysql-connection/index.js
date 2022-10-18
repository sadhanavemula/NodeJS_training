var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: 'welcome$1234',
    database:"testdb",
})

connection.connect((err)=>{
    if (err) throw err;
    console.log('connected to database');
})

connection.query("select * from customers",(err,result)=>{
    if (err) throw err;
    console.log(result);
})

connection.end();

// mysql.createConnection({
//     host: 'localhost',
//     user: "root",
//     password: 'welcome$1234',
//     database:"testdb",
// }).connect((err)=>{
//     if (err) throw err;
//     console.log('connected to database');
// })