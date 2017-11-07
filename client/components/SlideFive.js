import React, { Component } from 'react';

const SlideFive = (props) => {
  let background = {
    backgroundImage: 'url(image/carousel/zambian-kids-clean-water.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return <div style={background} className="slide" />;
};

export default SlideFive;
