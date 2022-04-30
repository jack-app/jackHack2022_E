const http = require('http');
const fs = require('fs');
const url = require('url');

const indexPage  = fs.readFileSync('./index.html', 'UTF-8');
const mainPage   = fs.readFileSync('./main.html', 'UTF-8');
const mainCss    = fs.readFileSync('./css/main.css', 'UTF-8');
const mouse_stalserJs = fs.readFileSync('./js/mouse_stalker.js', 'UTF-8');
const appleFig2ch  = fs.readFileSync('./src/apple2ch.png');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(RouteSetting);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function RouteSetting(req, res) {
  switch (req.url) {
    case '/':
    case '/index.html':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(indexPage);
      res.end();
      break;
  
    case '/main.html':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(mainPage);
      res.end();
      break;
    
    case '/css/main.css':
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(mainCss);
      res.end();
      break;

    case '/js/mouse_stalker.js':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(mouse_stalserJs);
      res.end();
      break;
    
    case '/src/apple2ch.png':
      res.writeHead(200, {'Content-Type': "image/png"});
      res.end(appleFig2ch);
      break;

    default:
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.write('お探しのページは見つかりません。');
      res.end();
      break;
  }
}