import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../store/product'
import CategoriesPane from './CategoriesPane'
import { NavLink } from 'react-router-dom'
import SingleProductReviews from './SingleProductReviews'

class SingleProduct extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const {id} = this.props.match.params
    this.props.getProduct(id)
  }

  render(){

    const {selectedProduct} = this.props.product
    // Come back to similar products section
    if(this.props.products){
      const {allProducts} = this.props.products
    }

    return(
      <div>
        <CategoriesPane />
        {
          <div>
            <h1>{selectedProduct.name}</h1>
            <img src={selectedProduct.image} alt='Product Image' width='275' height='250'/>
            <h2>{selectedProduct.description}</h2>
            <h3>${selectedProduct.price}</h3>
            <button type='button'>Add to Cart</button>
            <button type='button'>See Similar Products</button>
            <h3> <NavLink to={`/products/${selectedProduct.id}/reviews`}>Product Reviews:</NavLink></h3>
            <ul>
              {
                selectedProduct.reviews && (selectedProduct.reviews.slice(0, 2).map(review => (
                  <li key={review.id}><span>{review.title}&nbsp;&nbsp;&nbsp;{review.date}</span>
                  <p>{review.stars}</p>
                  <p>{review.message}</p>
                  </li>
                )))
              }
            </ul>
            <h3>Recommended Products:</h3>
          </div>
        }
      <hr />
      </div>
    )
  }
}

const mapState = (state) => ({product: state.product, products: state.products})
const mapDispatch = dispatch => ({
  getProduct: (id) => {
    dispatch(fetchSingleProduct(id))
  }
})

export default connect(mapState, mapDispatch)(SingleProduct)
