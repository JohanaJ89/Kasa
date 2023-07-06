import React from 'react';
import homeImg from '../assets/IMG_src_1.png';

const TopBannerH = () => {
  return (
    
      <div className='TopBanner'>
      <img src= {homeImg} alt='banniere1'></img>
      <h2 className='bannerText'> Chez vous, partout et ailleurs </h2>
      <div className='overlayH'></div>
      
    </div>
    
  );
};

export default TopBannerH;
