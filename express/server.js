let express = require('express');
let bodyParser = require('body-parser');

let app = express(); // lib

app.set('view engine','egs'); // for ejs
app.use('/public', express.static('public')); // for static files (img,css...)


let urlencodedParser = bodyParser.urlencoded({ extended: false }); // for parser
let port = 9001;

app.get('/', function(req, res){

    //res.sendFile(__dirname + '/index.html');
     res.render('index.ejs');
});

app.get('/about/', function(req, res){

    //res.sendFile(__dirname + '/about.html');

    res.render('login.ejs'); // ejs
});

app.post('/index',urlencodedParser, function(req, res){

    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    //res.sendFile(__dirname + '/about.html');

    res.render('login.ejs', {data: req.body}); // ejs
});

app.get('/about/:id', function(req, res){

    let obj = {title:'News', num: 5};
    let array = ['Hello','express'];
    res.render('news.ejs', {newsId: req.params.id,newParam: 10, obj: obj, array: array});
});

app.listen(port);