const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const fileExtension = {
    index: 'html',
    '/about': 'html',
    '/contact-me': 'html',
  };

  if (path.extname(req.url) === '.ico') return;

  const page = req.url === '/' ? 'index' : req.url;
  const url = path.join(__dirname, 'public', `${page}.${fileExtension[page]}`);

  // Don't worry about favicos for right now...

  fs.readFile(url, 'utf-8', (err, content) => {
    if (err) throw err;
    res.write(content);
    res.end();
  });
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}...`);
});
