const express = require('express')
const serveIndex = require('serve-index')
const app = express()

app.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

app.get('/', (req, res) => {
  res.send('Successful response.')
})

app.listen(9000, () => console.log('Listening on port 9000...'))
