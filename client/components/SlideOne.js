import React, { Component } from 'react';

const SlideOne = (props) => {

  let background = {
    backgroundImage: 'url(image/carousel/french-waterfall.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return <div style={background} className="slide" />;
};

export default SlideOne;
