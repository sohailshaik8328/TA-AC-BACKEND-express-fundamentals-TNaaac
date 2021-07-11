let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();

app.use(cookieParser());
app.use(logger('dev'));

app.use('/about', (req, res, next) => {
    console.log(req.cookies);
    res.cookie('username', 'sohail');
    res.end("About Page");
    next();
})

app.listen(3000, () => {
    console.log('server is listening at port 3k');
})