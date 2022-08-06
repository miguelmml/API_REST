require('dotenv').config()

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res, next) => {
  res.send('Hola mundo')
})

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port: ${PORT}`)
})