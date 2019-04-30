let http = require('http');
let fs = require('fs');

let server = http.createServer((req,res)=>{

    console.log(req.url);

    if (req.url === '/index' || req.url === '/'){

        res.writeHead(200, {'Content-Type': 'text/html charset=urf-8'});
        let read = fs.createReadStream(__dirname + '/index.html');
        read.pipe(res);
    } else if (req.url === '/about'){

        res.writeHead(200, {'Content-Type': 'text/html charset=urf-8'});
        let read = fs.createReadStream(__dirname + '/about.html');
        read.pipe(res);
    } else{

        res.writeHead(404, {'Content-Type': 'text/html charset=urf-8'});
        let read = fs.createReadStream(__dirname + '/404.html');
        read.pipe(res);
    }
});

let port = 9001;
let ip = 'localhost';

server.listen(port,ip);