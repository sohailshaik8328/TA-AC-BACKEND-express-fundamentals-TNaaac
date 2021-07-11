let express = require('express');
let logger = require('morgan');
let cookies = require('cookie-parser');

let app = express();

app.use(logger('dev'));
app.use(cookies());

app.use((req, res, next) => {
    console.log(req.cookies);
    res.cookie('username', 'sohail');
    next();
})

app.get('/about', (req, res) => {
    res.send('Welcome');
})

app.listen(3000, () => {
    console.log('server is listening at port 3k');
})