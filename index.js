const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public', { index: false }));

//* This route is only needed if index is set to false (see above)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

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
