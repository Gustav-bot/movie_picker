/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import TinderCard from 'react-tinder-card';
import React from 'react';


// const Card = (props) =>{
//   const {movie} = props;


//   return (
//     <div className='cardContainer'>
//       <div>
//         <div className='picture'>

//           <div className='movieInfoContainer'>
//             <div className='movieInfo'>
//               <h1>{movie.Name}</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


const Swiper = (props) => {
  const {moviesToSwipe} = props;

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction);
  };

  return (
    <div className='cardContainer'>
      {moviesToSwipe.map((movie) => {
        return (
          <TinderCard className='swipe' onSwipe={onSwipe} key = {movie.id} onCardLeftScreen={props.onSwipe}>
            <div style = {{backgroundImage: 'url(' + 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path + ')'}} className='card'>
              <h3 className='element'>{movie.title}</h3>
            </div>
          </TinderCard>
        );
      })}
    </div>);
};
export default Swiper;

