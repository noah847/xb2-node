const http = require('http')
const server = http.createServer((request, response) => {
    switch (request.url) {
        case '/':
            response.write('hola')
            break;
        case '/posts':
            response.write('posts')
            break;
        case '/signup':
            response.write('signup')
            break;
        default:
            response.writeHead(404);
            response.write('404');
            break;
    }
    response.end();
})
server.listen(3000, () => {
    console.log('http://localhost:3000');
})
