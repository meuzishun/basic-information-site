const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const fileExtension = {
    index: 'html',
    '/about': 'html',
    '/contact-me': 'html',
  };

  const contentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
  };

  // Don't worry about favicos for right now...
  if (path.extname(req.url) === '.ico') return;

  const page = req.url === '/' ? 'index' : req.url;
  const url = path.join(__dirname, 'public', `${page}.${fileExtension[page]}`);

  fs.readFile(url, 'utf-8', (err, content) => {
    if (err) {
      //TODO: handle 404 and 500 here
      throw err;
    }
    res.writeHead(200, { 'Content-Type': contentType[path.extname(url)] });
    res.write(content);
    res.end();
  });
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}...`);
});
