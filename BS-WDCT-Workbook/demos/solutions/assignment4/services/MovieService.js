const fetchData = require('./helpers').fetchData

const API_KEY = '86496137fa0de0d54c12d86e9c718d70'
const BASE_URL = 'https://api.themoviedb.org'
const IMAGE_BASE_URL = 'https://image.tmdb.org'

const MovieService = {
  getPopularMovies: (callback) => {
    fetchData(
      `${BASE_URL}/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
      (data) => callback(data.results)
    )
  },
  getMovie: (id, callback) => {
    fetchData(
      `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}`,
      (data) => {
        // Movie ID does not exist. Return null if movie is not found.
        if(data.status_code === 34) callback(null)
        else callback(data)
      }
    )
  },
  getPosterUrl: (imgUrl) => {
    return `${IMAGE_BASE_URL}/t/p/w500${imgUrl}`
  },
  search: (query, callback) => {
    fetchData(`${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`,
    (data) => callback(data.results)
  )
  }
}

module.exports = MovieService