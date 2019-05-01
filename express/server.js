let express = require('express');

let app = express();

let port = 9001;

app.get('/', function(req, res){

    res.send('Hello express!');
});

app.get('/about/', function(req, res){

    res.send('Hello express about!');
});

app.get('/about/:id', function(req, res){

    res.send('Hello express about! id is' + req.params.id);
});

app.listen(port);