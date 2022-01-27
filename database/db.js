var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ``,
  database : 'accidentally'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!');
  }
});

const getAllScores = function (callback) {
  var sqlString = 'select * from scores';
  connection.query(sqlString, function (error, results, fields) {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
      console.log(results);
    }
  });
}

const postScore = function (values, callback) {
  var sqlString = 'insert into scores set name=?, correct=?, incorrect=?';
  connection.query(sqlString, values, function (error, results, fields) {
    if(error) {
      console.log(values);
      callback(error);
    } else {
      console.log(results);
      callback(null, results);
    }
  })
}

module.exports = {
  getAllScores,
  postScore
}