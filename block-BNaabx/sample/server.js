const { json } = require('express');
let express = require('express');

let app = express();

app.use((req, res) => {
    console.log(req.method, req.url, new Date());
})

app.use((req, res) => {
    let data = JSON.parse(res);
    res.send(data);
})

app.use((req, res) => {
    let store = '';
    req.on("data", (chunk) => {
        store += chunk;
    })

    req.on("end", (req, res) => {
        res.setHeader("Content-Type", "text/html");        
        res.end()
    })
})

app.listen(3000, () => {
    console.log('server is listening at port 3k');
})