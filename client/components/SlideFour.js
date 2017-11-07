import React, { Component } from 'react';

const SlideFour = (props) => {
  let background = {
    backgroundImage: 'url(image/carousel/irish-waterfall.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return <div style={background} className="slide" />
};

export default SlideFour;
