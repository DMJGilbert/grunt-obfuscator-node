const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

let server = app.listen(3000,  () => {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});