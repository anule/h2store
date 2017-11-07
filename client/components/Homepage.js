import React from 'react';
import BestSellers from './BestSellers';
import Carousel from './Carousel';

const Homepage = () => {
  return (
    <div className="homepage">

      <Carousel images={[
        "images/carousel/french-waterfall.jpg",
        "images/carousel/lake-victoria.jpg",
        "images/carousel/zambian-kids-clean-water.jpg",
        "images/carousel/diving-penguins.jpg"]} />

      <section id="mission">
        <h2>Our Mission</h2>
        <p>For each product purchased, we will donate 12oz of water to an orphan or a very thirsty bird.</p>
      </section>

  {/* <section id="best-sellers">
        <h2>Best Sellers</h2>
        <BestSellers />
      </section> */}

      <section id="store-difference">
        <h2>The h2Store Difference</h2>
        <div id="differences">
          <div className="difference">
            <p>The most variety you can find online.</p>
          </div>
          <div className="difference">
            <p>The higest quality water mingling with the most wretched and denigrated water, which is democracy.</p>
          </div>
          <div className="difference">
            <p>Exceptional customer service that'll make you almost forget that you're being picky about which version of a chemically identical product you're ordering.</p>
          </div>
        </div>
      </section>

    </div>
  );
};
export default Homepage;
