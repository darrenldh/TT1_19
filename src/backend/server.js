const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

/**
 * Routes Definitions
 */


app.get('/', (req, res) => {
    res.send('Successful response.');
});


app.use('/login', (req, res) => {
    res.send({
        user: "user1",
        password: "password"
    });
});

app.listen(8080, () => console.log('Example app is listening on port 8080.'));