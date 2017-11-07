import React from 'react';
import './_carousel.scss';

export default class Carousel extends React.Component {

  state = {
    currentImage: 2,
  }

  get sliderStyle() {
    return {
      width: this.props.images.length * 100 + 'vw',
      transform: `translate(${-100 * this.state.currentImage}vw)`
    };
  }

  next = () => {
    this.setState({currentImage: (this.state.currentImage + 1) % this.props.images.length});
  }

  componentDidMount() {
    const {interval = 2500} = this.props;
    this.interval = setInterval(this.next, interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {images} = this.props;
    return (
      <div className="carousel">
      <div className="carousel-slider" style={this.sliderStyle}>{
      images.map(src =>
        <div className="carousel-item" style={background(src)} key={src} />)
      }</div>
      </div>
    )
  }
}

function background(src) {
  return {
    backgroundImage: url(src)
  };
}

function url(src) {
  return `url("${src}")`;
}
