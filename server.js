// http://localhost:4000
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/instruct.html', (req, res) => {
    res.sendFile(__dirname + '/public/instruct.html');
});

app.get('/contact.html', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

app.listen(PORT, () => {
    console.log(`listen to port ${PORT}`);
});