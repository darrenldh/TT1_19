const express = require('express');

const app = express();

app.use(express.json());

/**
 * Routes Definitions
 */

 var authenticate = require('./api/authenticate');

 // Authenticate
app.post('/authenticate', authenticate.authenticateUser);


app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));