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
    console.log(req.body.stringToRev);
    res.send(reverse(req.body.stringToRev));
});

function reverse(s){
    return [...s].reverse().join("");
}

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
