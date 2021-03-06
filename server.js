const http = require("http");
const fs = require("fs");
const { url } = require("inspector");

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

const server = http.createServer(RouteSetting);

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function RouteSetting(req, res) {
  switch (true) {
    case "/" === req.url:
      res.writeHead(200, { "Content-Type": "text/html" });
      const indexPage = fs.readFileSync("./index.html", "UTF-8");
      res.write(indexPage);
      res.end();
      break;

    case /\.html$/.test(req.url):
      res.writeHead(200, { "Content-Type": "text/html" });
      const htmlFile = fs.readFileSync("." + req.url, "UTF-8");
      res.write(htmlFile);
      res.end();
      break;

    case /\.css$/.test(req.url):
      res.writeHead(200, { "Content-Type": "text/css" });
      const cssFile = fs.readFileSync("." + req.url, "UTF-8");
      res.write(cssFile);
      res.end();
      break;

    case /\.js$/.test(req.url):
      res.writeHead(200, { "Content-Type": "text/plain" });
      const jsFile = fs.readFileSync("." + req.url, "UTF-8");
      res.write(jsFile);
      res.end();
      break;

    case /\.png$/.test(req.url):
      res.writeHead(200, { "Content-Type": "image/png" });
      const pngFile = fs.readFileSync("." + req.url);
      res.end(pngFile);
      break;

    case /\.ico$/.test(req.url):
      res.writeHead(200, { "Content-Type": "image/x-icon" });
      const icoFile = fs.readFileSync("." + req.url);
      res.end(icoFile);
      break;

    default:
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      console.log(req.url);
      res.write("お探しのページは見つかりません。");
      res.end();
      break;
  }
}
