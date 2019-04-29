let fs = require('fs');


fs.unlink('img2/some-new.txt', () => { // удаление папки и файла в нем

    fs.rmdir('img2', () => {});

}); // удаление сих

fs.mkdirSync('img'); // создание папки сих
fs.rmdirSync('img'); // удаление папки сих

fs.rmdir('img2', () => {}); // удаление папки

fs.mkdir('img2', () => { // асих
    // сработает после создания

    fs.writeFile('./img2/some-new.txt','Hello node JS', () => {

        console.log('done!');
    });
});