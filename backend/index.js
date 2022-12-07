const helper = require('./helper.js')
const express = require('express')
const app = express()

let movies = []
helper().then((response) => movies = response.data.results )

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/movies', (request, response) => {
  response.json(movies)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

