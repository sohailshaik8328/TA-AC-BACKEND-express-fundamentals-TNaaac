let express = require('express');

let app = express();

app.use(express.urlencoded());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/public/new.html')
})

app.use('/users/:parameter', (req, res) => {
    let parameter = req.params.parameter;
    res.send(parameter);
})

app.post('/new', (req, res) => {
    res.json();
})
app.listen(4000, () => {
    console.log('server is listening at port 4k');
})