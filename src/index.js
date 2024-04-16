require("dotenv").config()
const express = require('express');
const cors = require('cors');
const app = express();
const { add } = require('./arithmetica')
app.use(cors());

if (!process.env.PORT) {
    throw new Error (
        "please specify the port"
    );
}

const port = process.env.PORT;


app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World! Updated 3/5/2024');
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