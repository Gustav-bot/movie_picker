/* eslint-disable no-unused-vars */
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
        .get('http://localhost:3001/api/movies')
        .then((response) => {
          console.log(response);
          setMovies(Array.from(response.data));
        });
  }, []);
  console.log(movies[0], 'in app');

  return (
    <div>
      <h1 className='headline'>Movie picker</h1>
      <div className="App">
        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />

        <Swiper moviesToSwipe = {movies.slice().reverse()} onSwipe = {(x) => {
          console.log(movies.slice(1), 'læjasdhflækjsd');
          x = movies.slice(1);
          setMovies(x);
          console.log('hello');
        }} class = "swipe">
        </Swiper>
      </div>
      <div className='info'>
        {/* <h1>{ movies.length !== 0 ? movies[currentMovie].overview : 'temp' }</h1> */}
      </div>
    </div>

  );
}

export default App;
