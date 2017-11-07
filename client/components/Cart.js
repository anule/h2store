import React, {Component} from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { getCartThunk, getCart, emptyCartThunk, emptyCart } from '../store/cart';
import ProductInCart from './ProductInCart';
import { NavLink } from 'react-router-dom';
=======
import { fetchCart, deleteItemFromCart, emptyCartThunk, getCart } from '../store/cart';
>>>>>>> master

class Cart extends Component {
  constructor(){
    super()
    this.handleDelete = this.handleDelete.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  componentDidMount(){
    this.props.user.id
    ? this.props.cart.transactionId
        ? this.props.getCartLoggedIn()
        : this.props.getCartLoggedIn(JSON.parse(localStorage.getItem('cart')))  || {transactionId: 0, products: []}
    : this.props.getCartNotLoggedIn(JSON.parse(localStorage.getItem('cart')))
  }

  handleDelete(productId, transactionId){
    this.props.removeItemFromCart(productId, transactionId);
  }


  clearCart(transactionId){
    this.props.clearCart(transactionId);
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
  getCart: () => {
    dispatch(fetchCart())
  },
  removeItemFromCart: (productId, transactionId) => {
    dispatch(deleteItemFromCart(productId, transactionId))
  },
  clearCart: (transactionId) => {
    dispatch(emptyCartThunk(transactionId))
  },
  getCartNotLoggedIn: (cartInfo) => {
    dispatch(getCart(cartInfo));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

