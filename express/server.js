let express = require('express');


let app = express();

app.set('view engine','egs');

let port = 9001;

app.get('/', function(req, res){

    res.sendFile(__dirname + '/index.html');
});

app.get('/about/', function(req, res){

    res.sendFile(__dirname + '/about.html');
});

app.get('/about/:id', function(req, res){

    let obj = {title:'News', num: 5};
    let array = ['Hello','express'];
    res.render('news.ejs', {newsId: req.params.id,newParam: 10, obj: obj, array: array});
});

app.listen(port);