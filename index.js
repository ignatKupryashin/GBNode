const http = require('http');
let mainCounter = 0;
let aboutCounter = 0;
const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/': {
            mainCounter++;
            res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'});
            res.end(`<h1>Главная страница</h1><br>Вы посетили данную страницу ${mainCounter} раз <br><a href="./about">На about</a>`);
            break;
        }
        case '/about': {
            aboutCounter++;
            res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'});
            res.end(`<h1>About</h1><br>Вы посетили данную страницу ${aboutCounter} раз <br><a href="..">На главную</a>`)
            break;
        }
        default: {
            res.writeHead(404, {'Content-Type' : 'text/html; charset=UTF-8'});
            res.end('<h1>Страница не найдена</h1>')
            break;
        }
    }
})
server.listen('3000');