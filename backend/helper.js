const axios = require('axios');

//maybe change this to a group of arrays instead of one long array.
async function getMoviesFromDB(){
    movies = await multipleApiCall(4)
    movies = movies.map((response) => response.data)
    newMovies = []
    movies.forEach((ele) => newMovies = newMovies.concat(ele.results))

    return newMovies
}

async function multipleApiCall(N){
    let ids = [];

    for (var i = 1; i <= N; i++) {
        ids.push(i);
    }
    console.log(ids.reduce((acu, cur) => acu += cur))
    const responses = await Promise.all(ids.map(async id => {
		const res = await axios.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=54481fb26c19cd97560adacbcdf502d7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${id}`
		); // Send request for each id
        return res
	}))

    return responses
}

module.exports = getMoviesFromDB;