const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Access-Control-Allow-origin': '*'
    });
    console.log(req.url);
    res.write(req.url.split('?')[1]);
    res.end();
});

server.listen(5500, (err) => {
    if (err) {
        console.log(err);
    }
});
