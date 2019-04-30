let http = require('http'); // модуль для создания сервера
let fs = require('fs');

let server = http.createServer(function(req,res){ // req - Запрос, res - ответ
    // настройка сервера
    console.log('URL:' + req.url); // отслеживаем ссылку
    res.writeHead(200, {'Content-Type': 'text/plan; charset=utf-8'}); // заголовок, 200 - успешно, text/plan - текст
    let read = fs.createReadStream(__dirname + '/text/article.txt');

    read.pipe(res); // ответ сервера
    // res.end('Привет мир'); // ответ сервера

}); // создания сервера

// указать по какому порту будет отслеживатся подключение сервера
let port = 9001;
let ip = 'localhost';

server.listen(port, ip); // выход нажать контрл+С
console.log('end');