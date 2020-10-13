const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.post('/rev', (req, res) => {
  if(!req.body || !req.body.stringToRev || !(typeof req.body.stringToRev == "string")) {
    res.status(500).send('Pass body with stringToRev property');
  } else {
    res.json({ response: reverse(req.body.stringToRev) });
  }
});

function reverse(s){
    return [...s].reverse().join("");
}

app.listen(port, () => console.log(`Service to reverse string. Can be run at /rev endpoint and body with string property name: "stringToRev"`));
