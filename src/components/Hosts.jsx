import React from 'react';

function Hosts({ name, picture }) {
  return (
    <div className='Host'>
      <div className='Name'>
        <span>{name}</span>
      </div>
      <img src={picture} alt={name} className='ImgHost' />
    </div>
  );
}

export default Hosts;



