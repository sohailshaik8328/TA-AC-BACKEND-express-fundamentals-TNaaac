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


app.use((req, res) => [
    res.cookie('count', 1)
])

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

//handle errors
app.use((req, res) => {
    res.send('Page not found');
})

app.use((err, req, res, next) => {
    res.send(err);
    next();
})

//server
app.listen(4000, () => {
    console.log('server is listening at port 4k');
})