const express = require('express');
const cors = require('cors');
const app = express();
const { add } = require('./arithmetica')
app.use(cors());

const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});

app.get('/add/:n/:m', (req, res) => { // any http request with url /add/[number]/[number]
    res.json(Number(req.params.n) + Number(req.params.m));
});

app.get('/sub/:n/:m', (req, res) => { // any http request with url /add/[number]/[number]
    res.json(Number(req.params.n) - Number(req.params.m));
});

app.get('/div/:n/:m', (req, res) => { // any http request with url /add/[number]/[number]
    res.json(Number(req.params.n) / Number(req.params.m));
});

app.get('/mult/:n/:m', (req, res) => { // any http request with url /add/[number]/[number]
    res.json(Number(req.params.n) * Number(req.params.m));
});

app.listen(port);