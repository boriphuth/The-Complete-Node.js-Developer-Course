const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    // res.send('Hello world');

    res.status(404)
        .send({
            error: 'Error message'
        });
});

app.get('/users', (req, res) => {
    const users = [{
        name: 'Nino',
        age: 21
    }, {
        name: 'Andrew',
        age: 25
    }];
    res.send(users);
});

app.listen(PORT, () => {
    console.log(`Server: listening on ${PORT}`);
});

module.exports = {
    app: app
}