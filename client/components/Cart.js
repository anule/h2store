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
        : this.props.getCartLoggedIn(JSON.parse(sessionStorage.getItem('cart')) || {transactionId: 0, products: []})
    : this.props.getCartNotLoggedIn(JSON.parse(sessionStorage.getItem('cart')))
  }

  clearCart(transactionId){
    this.props.user.id
    ? this.props.emptyCartLoggedIn(transactionId)
    : this.props.emptyCartNotLoggedIn(transactionId)
  }

  componentWillReceiveProps(nextProps){
    if (!this.props.user.id) {
      sessionStorage.setItem('cart', JSON.stringify(nextProps.cart));
    }
  }

  render(){
    let total = 0;
    const numToDollarsCents = num => (parseFloat(num).toFixed(2))
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
        {this.props.cart.products.map(product =>
          <ProductInCart key={product.id} product={product} />
      )}
        <tr><td>Total</td><td /><td /><td /><td>${numToDollarsCents(total)}</td></tr>
        </tbody></table>
        { this.props.cart.length
        ? <button onClick={() => this.clearCart(this.props.cart.transactionId)}>Delete Cart</button>
        : null}
        <br />
        {console.log(this.props.cart.products)}
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
  getCartLoggedIn: cart => {
    dispatch(getCartThunk(cart));
    console.log('getCartLoggedIn')
  },
  getCartNotLoggedIn: cart => {
    dispatch(getCart(cart))
    console.log('getCartNotLoggedIn')
  },
  emptyCartLoggedIn: (transactionId) => {
    dispatch(emptyCartThunk(transactionId));
    console.log('emptyCartLoggedIn')
  },
  emptyCartNotLoggedIn: (transactionId) => {
    dispatch(emptyCart(transactionId));
    console.log('emptyCartNotLoggedIn')
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
