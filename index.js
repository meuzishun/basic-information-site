const express = require('express');
const app = express();
const port = 3000;

// const http = require('http');
const path = require('path');
// const fs = require('fs');

app.use(express.static('public'));

//? Soo... this index route is NOT needed?
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact-me.html'));
});

//? Do we just stick a .use at the end for errors?
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

// const server = http.createServer((req, res) => {
//   const fileExtension = {
//     index: 'html',
//     '/about': 'html',
//     '/contact-me': 'html',
//     '/404': 'html',
//   };

//   const contentType = {
//     '.html': 'text/html',
//     '.css': 'text/css',
//     '.js': 'text/javascript',
//     '.json': 'application/json',
//     '.png': 'image/png',
//     '.jpg': 'image/jpg',
//   };

//   // Don't worry about favicos for right now...
//   if (path.extname(req.url) === '.ico') return;

//   const page = req.url === '/' ? 'index' : req.url;
//   const url =
//     path.extname(page) !== ''
//       ? path.join(__dirname, 'public', page)
//       : path.join(__dirname, 'public', `${page}.${fileExtension[page]}`);

//   const handleErr = (err) => {
//     if (err.code === 'ENOENT') {
//       const url = path.join(__dirname, 'public', '404.html');
//       loadPage(url);
//     } else {
//       res.writeHead(500);
//       res.end(`Server Error: ${err.code}`);
//     }
//   };

//   const sendContent = (url, content) => {
//     res.writeHead(200, { 'Content-Type': contentType[path.extname(url)] });
//     res.write(content);
//     res.end();
//   };

//   const loadPage = (url) => {
//     const textExtension = ['.html', '.css']; //* add more extensions if needed
//     const encoding = textExtension.includes(path.extname(url)) ? 'utf-8' : null;
//     fs.readFile(url, encoding, (err, content) => {
//       if (err) {
//         handleErr(err);
//       } else {
//         sendContent(url, content);
//       }
//     });
//   };

//   loadPage(url);
// });

// const PORT = 8080;

// server.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}...`);
// });
