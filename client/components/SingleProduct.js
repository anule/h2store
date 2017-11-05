import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../store/product';
import { addToCartThunk, addToCart } from '../store/cart';
import CategoriesPane from './CategoriesPane';
import { NavLink } from 'react-router-dom';
import SingleProductReviews from './SingleProductReviews';

class SingleProduct extends Component {
  constructor(props){
    super(props);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.getProduct(id);
  }

  handleAddClick() {
    const {selectedProduct} = this.props.product;
    selectedProduct.numOrdered = 1;
    const alreadyInCart = this.props.cart.products.filter(product => product.id === selectedProduct.id)
    if (alreadyInCart.length > 0) {
      alert('This product is already in your cart!')
    } else {
    this.props.user.id
    ? this.props.addToCartLoggedIn(selectedProduct)
    : this.props.addToCartNotLoggedIn(selectedProduct)
    }
  }

  render(){
    sessionStorage.setItem('cart', JSON.stringify(this.props.cart));
    console.log('session storage', sessionStorage.getItem('cart'))
    const {selectedProduct} = this.props.product;
    // Come back to similar products section
    return (
      <div>
        <CategoriesPane />
        {
          <div>
            <h1>{selectedProduct.name}</h1>
            <img src={selectedProduct.image} alt="Product Image" width="275" height="250" />
            <h2>{selectedProduct.description}</h2>
            <h3>${selectedProduct.price}</h3>
            {selectedProduct.visibilityToggle ? <button type="button" onClick={this.handleAddClick}>Add to Cart</button> : <h4>This product is not currently available - please check back later!</h4>}
            <button type="button">See Similar Products</button>
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
    );
  }
}

const mapState = (state) => ({user: state.user, cart: state.cart, product: state.product});
const mapDispatch = dispatch => ({
  getProduct: (id) => {
    dispatch(fetchSingleProduct(id));
  },
  addToCartLoggedIn: (product) => {
    console.log('addToCartLoggedIn')
    dispatch(addToCartThunk(product));
  },
  addToCartNotLoggedIn: (product) => {
    console.log('addToCartNotLoggedIn');
    dispatch(addToCart(product));
  }
});

export default connect(mapState, mapDispatch)(SingleProduct);
