import React, { Component } from 'react';

const SlideTwo = (props) => {
  let background = {
    backgroundImage: 'url(image/carousel/justin-trudeau-crying.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return <div style={background} className="slide" />;
};

export default SlideTwo;
