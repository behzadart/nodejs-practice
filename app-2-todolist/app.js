//hello!! this is the first app. my name is behzad

const express = require("express");
const path = require('path');
const app = express();
const port = 3000;
// app.set('view engine', 'vash')

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/libs'));

app.get('/:x', (req, res) => {
    // res.send('<h1> hello behzad, this is the first app... </h1>')
    // res.sendFile(path.resolve((__dirname + '/public/index.html')))
    // res.render('index', { name: 'mahdi' });
    // res.render('index', { url: req.url, data: ['behzad', 'pari', 'roozbeh', 'irani'] });
});

app.listen(port);
console.log(`server is listening on port ${port}`);