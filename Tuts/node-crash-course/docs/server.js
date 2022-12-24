const http = require('http');
const fs = require('fs');
const _= require('lodash');

const server = http.createServer((req, res) => {
    //lodash
    const num = _.random(0, 20);
    console.log(num);


    //set Header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += "index.html";
            break;
        case '/about':
            path += "about.html";
            break;
        case '/about-me':
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += "404.html";
            break;
    }

    //send an html File
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    })

});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
})