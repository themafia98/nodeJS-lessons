
let fs = require('fs'); // for work with files

// --------------FILE DIR-------------- //

 // * __filename -  current file
 // * __dirname -   dir to file

// ASYNC
// функция срабатывате когда файл будет полностью прочтен асинхронно или синхронно(sync)

fs.readFile('text/text2.txt','utf8', function(error, data) {

    if (error) throw error;
    console.log(data);

});

console.log('async test 1');

let message2 = "Hello async !!!\n";

fs.writeFile('text/new2.txt', message2, function(error) {

    console.log('error: ' + error);
    if (error) throw error;
    let data = fs.readFileSync("text/new2.txt", "utf8");
    console.log('data: ' + data);
});

console.log('async test 2');

 // SYNC
let file_readed = fs.readFileSync('text/text.txt', 'utf8'); // read files Sync(синхронно, когда не будет прочитан не вып дальше)

let message = "Hello \n" + file_readed;
fs.writeFileSync('text/new.txt', message);