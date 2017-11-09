const express = require('express');
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use((req, res, next) => {
    let now = new Date().toString();
    const log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server log');
        }
    });
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(path.join(__dirname, 'public')));

// Handlebars
app.set('view engine', hbs);
hbs.registerPartials(path.join(__dirname, 'views/partials'));
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', text => text.toUpperCase());

// Routes
app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home page',
        welcomeMessage: 'Hello World'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About page'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Error handling request'
    });
});

app.get('/help', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/help.html'));
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        title: 'Projects'
    });
})

app.listen(PORT, () => console.log(`Server: listening on port ${PORT}`));