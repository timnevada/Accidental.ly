const express = require('express')
const app = express()
const port = 5000

const db = require('../database/db.js')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var cors = require('cors');
app.use(cors());

app.get('/api/getScores', (req, res) => {
  db.getAllScores((err, results) => {
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
  db.postScore(values, (err, results) => {
    if (err) {
      // console.log(req.body);
      res.status(404).send(err);
    } else {
      // console.log(req.body);
      res.status(200).send(results);
    }
  });
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})