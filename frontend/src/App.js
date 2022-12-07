/* eslint-disable max-len */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import Swiper from './components/Card';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';


function App() {
  // eslint-disable-next-line react/prop-types
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovies] = useState(0);
  useEffect(() => {
    console.log('effect');
    axios
        .get('https://api.themoviedb.org/3/discover/movie?api_key=54481fb26c19cd97560adacbcdf502d7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
        .then((response) => {
          console.log('promise fulfilled');
          setMovies(response.data.results);
        });
  }, []);
  console.log(movies);
  return (
    <div>
      <div className="App">
        <h1>Movie picker</h1>
        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />

        <Swiper moviesToSwipe = {Array.from(movies).reverse()} onSwipe = {(myIdentifier) => {
          setCurrentMovies(currentMovie+1);
        }} class = "swipe">
        </Swiper>
      </div>
      <div className='info'>
        <h1>{ movies.length !== 0 ? movies[currentMovie].overview : 'temp' }</h1>
      </div>
    </div>

  );
}

export default App;
