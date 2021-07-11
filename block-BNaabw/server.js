let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(cookieParser());

//routes
app.get('/', (req, res) => {
    res.send(`<h1>Hey am / route page</h1>`);
})

app.get('/users', (req, res) => {
    res.send(`<h1>Hey am /users route page</h1>`);
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/project.html');
})

//server
app.listen(4000, () => {
    console.log('server is listening at port 4k');
})