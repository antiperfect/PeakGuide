const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    if (req.session.username) {
        res.sendFile(__dirname + '/Project/Home Page/layout.html');
    } else {
        res.sendFile(__dirname + '/Project/Home Page/login_page.html');
    }
});

app.post('/login', (req, res) => {
    const { username } = req.body;
    req.session.username = username;
    res.redirect('/');
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
