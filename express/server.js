let express = require('express');


let app = express(); // lib

app.set('view engine','egs'); // for ejs

app.use('/public', express.static('public')); // for static files (img,css...)

let port = 9001;

app.get('/', function(req, res){

    //res.sendFile(__dirname + '/index.html');
     res.render('index.ejs');
});

app.get('/about/', function(req, res){

    //res.sendFile(__dirname + '/about.html');

    res.render('about.ejs'); // ejs
});

app.get('/about/:id', function(req, res){

    let obj = {title:'News', num: 5};
    let array = ['Hello','express'];
    res.render('news.ejs', {newsId: req.params.id,newParam: 10, obj: obj, array: array});
});

app.listen(port);