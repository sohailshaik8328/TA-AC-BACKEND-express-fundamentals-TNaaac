let express = require('express');
let logger = require('morgan');

let app = express();

//Middle wares
app.use(logger('dev'));

app.use('/admin', (req, res, next) => {
    res.send('unauthorized');
});


app.get('/', (req, res) => {
    res.send('Hey am index page')
})

app.get('/about', (req, res) => {
    res.send('Hey am about page')
})

app.use((req, res, next) => {
    if(req.url === 'admin') {
        return next('unauthorized');
    }
    next();
})


app.use((req, res, next ) =>{
    if(req.url !== '/' || req.url !== '/about') {
        return next('Page not found');
    }
    next();
})

app.listen(4000, () => {
    console.log('server is listening at port 4k');
})