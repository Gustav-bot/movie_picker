const axios = require('axios');


async function getMoviesFromDB(){
    movies = axios.get('https://api.themoviedb.org/3/discover/movie?api_key=54481fb26c19cd97560adacbcdf502d7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')

    return movies
}

module.exports = getMoviesFromDB;