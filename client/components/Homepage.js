import React from 'react'
import BestSellers from './BestSellers'

const Homepage = () => {
  return (
    <div className="homepage">
      <img src="/h2StoreHomepage.jpeg" alt="Splash Image" />
      <p>Mission Statement: For each product purchased, we will donate 12oz
      of water to an orphan or a very thirsty bird.</p>
      <div>
        <span>Best Sellers</span>
        <BestSellers />
      </div>
      <div>
        The h2Store Difference
        <div>
          Difference 1: The most variety you can find online.
        </div>
        <div>
          Difference 2: The higest quality water mingling with the most wretched and denigrated water, which is democracy.
        </div>
        <div>
          Difference 3: Exceptional customer service that'll make you almost forget that you're being picky about which version of a chemically identical product you're ordering.
        </div>
      </div>
      <hr />
    </div>
  )
}
export default Homepage
