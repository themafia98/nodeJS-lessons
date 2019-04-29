let http = require('http'); // модуль для создания сервера
let fs = require('fs');

let server = http.createServer(function(req,res){ // req - Запрос, res - ответ
    // настройка сервера
    console.log('URL:' + req.url); // отслеживаем ссылку

    /* -------------JSON-------- */
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

    let readJSON = fs.createReadStream(__dirname + '/data.json');

    readJSON.pipe(res);

    let app = {

        mode: 'Audi',
        speed: '10',
        wheels: 5
    };

    res.end(JSON.stringify(app));

    /* -------------HTML------- */

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); // заголовок, 200 - успешно

    let read = fs.createReadStream(__dirname + '/index.html');
    read.pipe(res); // ответ сервера

    res.end('Привет мир'); // ответ сервера

}); // создания сервера

// указать по какому порту будет отслеживатся подключение сервера
let port = 9001;
let ip = 'localhost';

server.listen(port, ip); // выход нажать контрл+С
console.log('end');