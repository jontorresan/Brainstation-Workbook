const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080

const MovieService = require('./services/MovieService')

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  MovieService.getPopularMovies((movies) => {
    res.render('index', { 
      movies,
      getPosterUrl: MovieService.getPosterUrl 
    })
  })
})

app.get('/movie/:movieId', (req, res) => {
  const { movieId } = req.params
  MovieService.getMovie(movieId, (movie) => {
    res.render('movie', { 
      movie,
      getPosterUrl: MovieService.getPosterUrl 
    })
  })
})

app.get('/search', (req, res) => {
  const q = req.query.q.toLowerCase()
  MovieService.search(q, (movies) => {
    res.render('index', {
      movies,
      getPosterUrl: MovieService.getPosterUrl
    })
  })
})

app.all('*', (req, res) => {
  res.render('error', { url: req.url })
})


app.listen(port, () => {
  console.log(`Listening on ${port} 👍`)
})

