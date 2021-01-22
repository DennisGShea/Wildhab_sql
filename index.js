const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : "hebrank.greenheron.dreamhost.com',
  user     : "me"
  password : "BuildingSoFL"
  database : "secc01"
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();