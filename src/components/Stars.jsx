import React from 'react';
import Stars from '../assets/star-inactive.svg';
import StarsActive from '../assets/star-active 1.svg';

function Rating({ score }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className='rating'>
      {stars.map((data, index) =>
        data <= score ? (
          <img src={StarsActive} alt='starsnone' key={index} className='star' />
        ) : (
          <img src={Stars} alt='starsempty' key={index} className='starEmpty' />
        )
      )}
    </div>
  );
}

export default Rating;

