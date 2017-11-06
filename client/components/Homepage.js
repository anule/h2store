import React from 'react';
import BestSellers from './BestSellers';

const Homepage = () => {
  return (
    <div className="homepage">
      <section id="carousel">
        <img className="carousel-image" src="images/colorado-waterfall.jpg" />
        <img className="carousel-image hidden" src="images/lake-victoria.jpg" />
        <img className="carousel-image hidden" src="images/zambian-kids-clean-water.jpg" />
        <img className="carousel-image hidden" src="images/irish-waterfall.jpg" />
      </section>
      <section id="mission">
        <h2>Mission Statement</h2>
        <p>For each product purchased, we will donate 12oz of water to an orphan or a very thirsty bird.</p>
      </section>
      <section id="best-sellers">
        <span>Best Sellers</span>
        <BestSellers />
      </section>
      <section id="our-difference">
        <h1>The h2Store Difference</h1>
        <div className="difference">
          <h2>Difference 1</h2>
          <p>The most variety you can find online.</p>
        </div>
        <div className="difference">
          <h2>Difference 2</h2>
          <p>The higest quality water mingling with the most wretched and denigrated water, which is democracy.</p>
        </div>
        <div className="difference">
          <h2>Difference 3</h2>
          <p>Exceptional customer service that'll make you almost forget that you're being picky about which version of a chemically identical product you're ordering.</p>
        </div>
      </section>
      <hr />
    </div>
  );
};
export default Homepage;
