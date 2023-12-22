var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pass123',
  database: 'lms',
  port: 3306, // Change this to the desired port for your MySQL server
});

module.exports = {
  executeQuery: function (sql, sqlParam, callback) {
    if (sqlParam == null) {
      connection.query(sql, function (error, result) {
        if (error) {
          console.log(error);
        }
        callback(result);
      });
    } else {
      connection.query(sql, sqlParam, function (error, result) {
        if (error) {
          console.log(error);
        }
        callback(result);
      });
    }
  },
};
