const express = require('express');
const app = express();
const path = require('path');

const port = 3000;
const isLogIn = () => {
    return false;
};

app.use((req, res, next) => {
    res.show = (name) => {
        res.sendFile(path.join(__dirname, `/views/${name}`));
    };
    next();
});


app.use('/user', (req, res, next) => {
    if (isLogIn()) next();
    else res.show('forbidden.html');
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.show('home.html');
});

app.get('/home', (req, res) => {
    res.show('home.html');
});

app.get('/about', (req, res) => {
    res.show('about.html');
});

app.use((req, res) => {
    res.status(404).show('404.html');
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});