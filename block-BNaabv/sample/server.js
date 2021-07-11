let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(logger('dev'));
app.use(cookieParser());

//custom middleware
app.use((req, res, next) => {
    res.cookie('username', 'sohail cookie');
    next();
})

//routes
app.get('/', (req, res) => {
    res.send(`<h2>Welcome to express</h2>`);
})

app.get('/about', (req, res) => {
    res.send(`My name is qwerty`);
})

app.post('/form', (req, res) => {
    res.json(req.body);
})

app.post('/json', (req, res) => {
    res.json(req.body);
})

app.get('/users/:username', (req, res) => {
    let username = req.params.username;
    res.send(`<h1>${username}</h1>`);
})

//error handlers
app.use((req, res, next) => {
    res.send('Page not found');
})

app.use((err, req, res, next) => {
    res.send(err);
})

app.listen(3000, () => {
    console.log('server is listening at port 3k');
})