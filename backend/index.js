const helper = require('./helper.js')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

let movies = []
helper().then((response) => movies = response)


app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/movies', (request, response) => {
  console.log(movies, 'backend')
  return response.json(movies)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

