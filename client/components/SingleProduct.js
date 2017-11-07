import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../store/product';
import { addToCartThunk, addToCart } from '../store/cart';
import CategoriesPane from './CategoriesPane';
import { Link, NavLink } from 'react-router-dom';
import SingleProductReviews from './SingleProductReviews';

class SingleProduct extends Component {
  constructor(props){
    super(props);
    this.state = {alreadyInCartWarning: false, reviewVisible: false}
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.getProduct(id);

    if (this.props.user.id) {
      this.setState({reviewVisible: true})
    }
  }

  handleAddClick() {
    const {selectedProduct} = this.props.product;
    selectedProduct.numOrdered = 1;
    const alreadyInCart = this.props.cart.products.filter(product => product.id === selectedProduct.id)
    if (alreadyInCart.length > 0) {
      this.setState({alreadyInCartWarning: true})
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
            {((selectedProduct.numInStock !== 0) && selectedProduct.visibilityToggle)
              ? <button type="button" onClick={this.handleAddClick}>Add to Cart</button>
              : <h4>This product is not currently available - please check back later!</h4>}
            <br />
            {(selectedProduct.numInStock < 10 && selectedProduct.numInStock > 0)
              ? `Only ${selectedProduct.numInStock} left - more coming!`
              : null }
            <br />
            {this.state.alreadyInCartWarning
            ? 'This item is already in your cart!'
            : null}
            <br />
            <button type="button">See Similar Products</button>
            <br />
            {this.props.user.id
            ? <button><NavLink to={`/products/${selectedProduct.id}/review`}>Write a review! </NavLink></button>
            : null}
            <h5><NavLink to={`/categories/${selectedProduct.categoryId}`}>Back to Category </NavLink></h5>
            <h3>Product Reviews:</h3>
            <ul>
              {selectedProduct.reviews && `Average rating = ${
                parseFloat(selectedProduct.reviews.reduce(function(sum, value) {
                return sum + Number(value.stars)}, 0) / selectedProduct.reviews.length).toFixed(1)} stars`}
              {
                selectedProduct.reviews && (selectedProduct.reviews.slice(0, 2).map(review => (
                  <li key={review.id}><span>{review.title}&nbsp;&nbsp;&nbsp;{review.date}</span>
                  <p>{review.stars}</p>
                  <p>{review.message}</p>
                  </li>
                )))
              }
            </ul>
            <Link to={`/products/${selectedProduct.id}/reviews`}><button>Read All Reviews</button></Link>
            {
              this.state.reviewVisible ?
              <Link to={`/products/${selectedProduct.id}/review`}><button>Write a Review</button></Link>
                : <button disabled>Write a Review</button>
            }
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
