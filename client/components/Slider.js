import React, { Component } from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import SlideFour from './SlideFour';
import SlideFive from './SlideFive';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1,
    }
  }

  render() {
    return (
      <div className="slider">
        { this.state.slideCount === 1 ? <SlideOne /> : null }
        { this.state.slideCount === 2 ? <SlideTwo /> : null }
        { this.state.slideCount === 3 ? <SlideThree /> : null }
        { this.state.slideCount === 4 ? <SlideFour /> : null }
        { this.state.slideCount === 5 ? <SlideFive /> : null }
      </div>
    );
  }
}
