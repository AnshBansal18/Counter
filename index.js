const express = require('express');
const app = express();
const port = 3000;
let counter = 0;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Counter app listening at http://localhost:${port}`);
});

app.get('/increment', (req, res) => {
    counter++;
    res.send({ counter });
});

app.get('/decrement', (req, res) => {
    counter--;
    res.send({ counter });
});

app.get('/counter', (req, res) => {
    res.send({ counter });
});
