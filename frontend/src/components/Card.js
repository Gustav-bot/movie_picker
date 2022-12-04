/* eslint-disable react/react-in-jsx-scope */
import TinderCard from 'react-tinder-card';
import React from 'react';


const Card = (props) =>{
  return (
    <div className='cardContainer'>
      <div className='card'>
        <div className='picture'>
          <div className='movieInfoContainer'>
            <div className='movieInfo'>
              <h1>hello</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Swiper = (props) => {
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen');
  };

  return (
    <TinderCard onSwipe={onSwipe} onCardLeftScreen={
      () => {
        return onCardLeftScreen('fooBar');
      }
    }>
      <Card></Card>
    </TinderCard>
  );
};

export default Swiper;

