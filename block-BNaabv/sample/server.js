let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();

//middlewares
app.use(express.json());
// app.use(express.static());
app.use(express.urlencoded({extended : false}));
app.use(logger('dev'));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send(`<h2>Welcome to express</h2>`);
})

app.get('/about', (req, res) => {
    res.send(`My name is qwerty`);
})

app.post('/form', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.post('/json', (req, res) => {
    // console.log(res.send());
    res.json();
})

app.get('/users/:username', (req, res) => {
    let username = req.params.username;
    res.send(`<h1>${username}</h1>`);
})

app.use((err, req, res, next) => {
    res.send(err);
})

app.use((req, res) => {
    res.send(req.statusCode = 500);
    res.send('error on client side');
})

app.listen(3000, () => {
    console.log('server is listening at port 3k');
})