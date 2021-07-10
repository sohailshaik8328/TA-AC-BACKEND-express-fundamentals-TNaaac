let express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send("Welcome sohail");
})

app.listen(3000, () => {
    console.log(`server is listening at port 3k`)
})