var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: 'welcome$1234',
    database:"testdb",
  })
  
  connection.connect((err)=>{
    if (err) throw err;
    console.log('connected to database');
  })

  module.exports = connection;