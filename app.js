// grab the packages we need
var express = require('express');
var app = express();
var port =  3030;


app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/api/users', function (req, res) {
    var user_id = req.param('id');
    var name = req.param('name');

    res.send(user_id + ' ' + name);
});


app.listen(port);
console.log('Server started! At http://localhost:' + port);