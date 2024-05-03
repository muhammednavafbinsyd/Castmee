import React from 'react';
import BlackImage from '../assets/images/imagesCastmee/800x600 black image.jpg';

function ExampleCarouselImage() {
  return (
    <img
      className="d-block w-100 crimg "
      src={BlackImage}
      style={{ maxWidth: 'auto', height:"30rem", mixBlendMode:"color-dodge",position: 'relative' ,zIndex:'1'}}
    />
  );
}

export default ExampleCarouselImage;
