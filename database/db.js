var mysql = require('mysql');
var db = mysql.createdb({
  host     : 'localhost',
  user     : 'root',
  password : ``,
  database : ''
});

db.connect();

const getAllScores = function (callback) {
  var sqlString = 'select * from scores';
  db.query(sqlString, function (error, results, fields) {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
      console.log(results);
    }
  });
}

const postScore = function (values, callback) {
  var sqlString = 'insert into scores set name=?, correct=? incorrect=?';
  db.query(sqlString, values, function (error, results, fields) {
    if(error) {
      callback(error);
    } else {
      callback(null, results);
      console.log(results);
    }
  })
}

module.exports = {
  getAllScores,
  postScore
}