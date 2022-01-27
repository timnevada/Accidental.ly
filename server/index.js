const express = require('express')
const app = express()
const port = 3000

const db = require('../database/db.js')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var cors = require('cors');
app.use(cors());

app.get('/api/getScores', (req, res) => {
  db.getAllTodos((err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  })
})

app.post('/api/postScore', function (req, res) {
  console.log(req.body);
  var values = [req.body.name, req.body.correct, req.body.incorrect];
  db.postTodo(values, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  });
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})