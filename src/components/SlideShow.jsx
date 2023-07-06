import React, { useState } from 'react';
import ArrowFront from '../assets/arrow_forward.svg';
import ArrowBack from '../assets/arrow_back.svg';

function Slideshow({ listImg }) {
  const [index, setIndex] = useState(0);

  const handleClickNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % listImg.length);
  };

  const handleClickPrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + listImg.length) % listImg.length);
  };

  return (
    <div className="slideshow">
      <img src={listImg[index]} alt="" className="imgSlide" />

      <img
        src={ArrowBack}
        className="arrowback"
        alt="ArrowBack"
        onClick={handleClickPrev}
      />
      <img
        src={ArrowFront}
        className="arrowfront"
        alt="ArrowFront"
        onClick={handleClickNext}
      />

      <div className="number">
        {index + 1}/{listImg.length}
      </div>
    </div>
  );
}

export default Slideshow;







