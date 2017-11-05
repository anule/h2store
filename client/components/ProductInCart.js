/* eslint-disable no-nested-ternary */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteFromCartThunk, deleteFromCart, updateQuantityInCart, updateQuantityInCartThunk } from '../store/cart';
import { NavLink } from 'react-router-dom';

class ProductInCart extends Component {
  constructor(){
    super()
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.state = {quantity: 0};
  }

  handleDelete(productId, transactionId){
    this.props.user.id
    ? this.props.removeItemFromCartLoggedIn(productId)
    : this.props.removeItemFromCartNotLoggedIn(productId, transactionId)
  }

  handleChange(event){
    event.preventDefault();
    this.setState({quantity: event.target.value});
    console.log('triggered handleChange', event.target.value)
  }

  handleUpdate(productId){
    event.preventDefault();
    const { numInStock } = this.props.product;
    if (Number(this.state.quantity) === 0){
      this.handleDelete(productId, this.props.cart.transactionId)
      return
    }
    if (this.state.quantity > numInStock){
      alert(`There are only ${numInStock} of this item in stock!`)
      return
    }
    this.props.user.id
    ? this.props.updateQuantityInCartLoggedIn(productId, this.props.cart.transactionId, Number(this.state.quantity))
    : this.props.updateQuantityInCartNotLoggedIn(productId, this.state.quantity)
  }

  render(){
    const numToDollarsCents = num => (parseFloat(num).toFixed(2))
    const { product } = this.props
    return (
        <tr key={product.id}>
          <td><img src={product.image} width="64" height="64" /></td>
          <td><NavLink to={`/products/${product.id}/`}>{product.name}</NavLink></td>
          <td>${numToDollarsCents(+product.price)}</td>
          <td>{product.numOrdered}</td>
          <td>${numToDollarsCents(product.numOrdered * +product.price)}</td>
          <td><button onClick={() => this.handleDelete(product.id, product.transactionId)}>Delete Item</button></td>
          <td><form><input
                type="text"
                placeholder={product.numOrdered}
                onChange={this.handleChange}
                value={this.state.quantity}
                name="quantity" />
          <button onClick={() => this.handleUpdate(product.id)}>Change Quantity</button>
          </form></td>
        </tr>
    )
  }
}

const mapStateToProps = ({ user, cart }) => ({ user, cart });
const mapDispatchToProps = dispatch => ({
  removeItemFromCartLoggedIn: (productId, transactionId) => {
    dispatch(deleteFromCartThunk(productId, transactionId));
    console.log('removeItemFromCartLoggedIn')
  },
  removeItemFromCartNotLoggedIn: (productId) => {
    dispatch(deleteFromCart(productId));
    console.log('removeItemFromCartNotLoggedIn')
  },
  updateQuantityInCartLoggedIn: (productId, transactionId, quantity) => {
    dispatch(updateQuantityInCartThunk(productId, transactionId, quantity))
  },
  updateQuantityInCartNotLoggedIn: (productId, quantity) => {
    dispatch(updateQuantityInCart(productId, quantity))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductInCart)
