import React, { Component } from 'react';

const SlideThree = (props) => {
  let background = {
    backgroundImage: 'url(image/carousel/lake-victoria.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return <div style={background} className="slide" />
};

export default SlideThree;
