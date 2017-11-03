import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchCart, deleteItemFromCart, emptyCartThunk } from '../store/cart';

class Cart extends Component {
  constructor(){
    super()
    this.handleDelete = this.handleDelete.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  componentDidMount(){
    this.props.user
    ? this.props.getCart()
    : this.props.cart = sessionStorage;
  }

  handleDelete(productId, transactionId){
    this.props.removeItemFromCart(productId, transactionId);
  }

  clearCart(transactionId){
    this.props.clearCart(transactionId);
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
          {this.props.cart.products.map(product => {total += product.numOrdered * +product.price})}
        {this.props.cart.products.map(product => (<tr key={product.id}>
          <td><img src={product.image} width="64" height="64" /></td>
          <td>{product.name}</td>
          <td>{+product.price}</td>
          <td>{product.numOrdered}</td>
          <td>{product.numOrdered * +product.price}</td>
          <td><button onClick={() => this.handleDelete(product.id, product.transactionId)}>Delete Item</button></td>
        </tr>))}
        <tr><td>Total</td><td /><td /><td /><td>{total}</td></tr>
        </tbody></table>
        <button onClick={() => this.clearCart(this.props.cart.transactionId)}>Delete Cart</button>
        <hr />
      </div>
    )
  }
}

const mapStateToProps = ({ user, cart }) => ({ user, cart });
const mapDispatchToProps = dispatch => ({
  getCart: () => {
    dispatch(fetchCart())
  },
  removeItemFromCart: (productId, transactionId) => {
    dispatch(deleteItemFromCart(productId, transactionId))
  },
  clearCart: (transactionId) => {
    dispatch(emptyCartThunk(transactionId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

