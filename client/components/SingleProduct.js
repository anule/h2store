import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../store/product';
import { addToCartThunk, addToCart } from '../store/cart';
import CategoriesPane from './CategoriesPane';
import { Link, NavLink } from 'react-router-dom';
import SingleProductReviews from './SingleProductReviews';

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { alreadyInCartWarning: false, reviewVisible: false }
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProduct(id);
    if (this.props.user.id) {
      this.setState({ reviewVisible: true })
    }
  }


  handleAddClick() {
    const { selectedProduct } = this.props.product;
    selectedProduct.numOrdered = 1;
    const alreadyInCart = this.props.cart.products.filter(product => product.id === selectedProduct.id)
    if (alreadyInCart.length > 0) {
      this.setState({ alreadyInCartWarning: true })
    } else {
      this.props.user.id
        ? this.props.addToCartLoggedIn(selectedProduct)
        : this.props.addToCartNotLoggedIn(selectedProduct)
    }
  }

  componentWillReceiveProps(nextProps){
    if (!this.props.user.id) {
      localStorage.setItem('cart', JSON.stringify(nextProps.cart));
    }
  }

  render(){

    const {selectedProduct} = this.props.product;
    // Come back to similar products section
    return (
      <div className="container single-product-container">
        <CategoriesPane />
        {
          <section id="single-product">
            <h1>{selectedProduct.name}</h1>
            <img src={selectedProduct.image} alt="Product Image" width="275" height="250" />
            <h2>{selectedProduct.description}</h2>
            <h3>${selectedProduct.price}</h3>
            <button type="button" onClick={this.handleAddClick}>Add to Cart</button>
            <button type="button">See Similar Products</button>
            <br />
            {this.props.user.id
            ? <button><NavLink to={`/products/${selectedProduct.id}/review`}>Write a review! </NavLink></button>
            : null}
            <h5><NavLink to={`/categories/${selectedProduct.categoryId}`}>Back to Category </NavLink></h5>
            <h3>Product Reviews:</h3>
            <ul>
              {selectedProduct.reviews && `Average rating = ${
                parseFloat(selectedProduct.reviews.reduce(function (sum, value) {
                  return sum + Number(value.stars)
                }, 0) / selectedProduct.reviews.length).toFixed(1)} stars`}
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
          </section>
        }
        <section className="reviews-pane">
          <h3> <NavLink to={`/products/${selectedProduct.id}/reviews`}>Product Reviews:</NavLink></h3>
          {
            selectedProduct.reviews && (selectedProduct.reviews.slice(0, 2).map(review => (
              <span key={review.id}><span>{review.title}&nbsp;&nbsp;&nbsp;{review.date}</span>
                <p>{review.stars}</p>
                <p>{review.message}</p>
              </span>
            )))
          }
        </section>
      </div>
    );
  }
}

const mapState = ({ product, products, cart, user }) => ({ product, products, cart, user });
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
