
// Потоки позволяют выдавать данные кусками

let fs = require('fs');

let myReadShort = fs.createReadStream(__dirname + '/text/article.txt','utf-8'); // считывание данных постепенно, уже имеет событие
let myWrtieShort = fs.createWriteStream(__dirname + '/text/articleWrite2.txt'); // запись частей данных и запись кусками в файл


myReadShort.pipe(myWrtieShort); // делает все тоже самое что ниже

// console.log(__dirname + '/text/article.txt');
// myReadShort.on('data', function(bundle){

//     console.log('NEW data');

//     myWrtieShort.write(bundle); // запись

// }); // событие когда мы получаем данные

