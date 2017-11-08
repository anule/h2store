/* eslint-disable no-nested-ternary */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getCartThunk, getCart, emptyCartThunk, emptyCart } from '../store/cart';
import ProductInCart from './ProductInCart';
import { NavLink } from 'react-router-dom';

class Cart extends Component {
  constructor(){
    super()
    this.clearCart = this.clearCart.bind(this);
  }

  componentDidMount(){
    this.props.user.id
    ? this.props.cart.transactionId
        ? this.props.getCartLoggedIn({transactionId: 0, products: []})
        : this.props.getCartLoggedIn(JSON.parse(localStorage.getItem('cart')) || {transactionId: 0, products: []})
    : this.props.getCartNotLoggedIn(JSON.parse(localStorage.getItem('cart')))
  }

  clearCart(transactionId){
    this.props.user.id
    ? this.props.clearCartLoggedIn(transactionId)
    : this.props.clearCartNotLoggedIn()
  }

  componentWillReceiveProps(nextProps){
    if (!this.props.user.id) {
      localStorage.setItem('cart', JSON.stringify(nextProps.cart));
    }
  }

  render(){
    let total = 0;
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <th>Link</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {this.props.cart.products && this.props.cart.products.map(product => {total += product.numOrdered * +product.price})}
        {this.props.cart.products.map(product => <ProductInCart key={product.id} product={product} />)}
        <tr><td>Total</td><td /><td /><td /><td>{total}</td></tr>
        </tbody></table>
        { this.props.cart.products.length
        ? <button onClick={() => this.clearCart(this.props.cart.transactionId)}>Delete Cart</button>
        : null}
        <br />
        {this.props.cart.products.length
        ? this.props.user.id && this.props.user.isAuthUser
            ? <button><NavLink to={'/checkout'}>Checkout</NavLink></button>
            : <button><NavLink to={'/checkoutguest'}>Checkout</NavLink></button>
        : 'Add items to your cart to checkout'}
        <hr />
      </div>
    )
  }
}

const mapStateToProps = ({ user, cart }) => ({ user, cart });
const mapDispatchToProps = dispatch => ({
  getCartLoggedIn: () => {
    dispatch(getCartThunk())
  },
  getCartNotLoggedIn: (cartInfo) => {
    dispatch(getCart(cartInfo));
  },
  clearCartLoggedIn: (transactionId) => {
    dispatch(emptyCartThunk(transactionId))
  },
  clearCartNotLoggedIn: () => {
    dispatch(emptyCart())
  },

})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

