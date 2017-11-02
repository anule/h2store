import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchCart, deleteItemFromCart } from '../store/cart';

class Cart extends Component {
  constructor(){
    super()
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.props.user
    ? this.props.getCart()
    : this.props.cart = sessionStorage;
  }

  handleDelete(productId, transactionId){
    this.props.removeItemFromCart(productId, transactionId);
  }

  render(){
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        {this.props.cart.map(product => (<tr key={product.id}>
          <td><img src={product.image} width="64" height="64" /></td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.numOrdered}</td>
          <td>{product.numOrdered * product.price}</td>
          <td><button onClick={() => this.handleDelete(product.id, product.transactionId)}>Delete Item</button></td>
        </tr>))}</tbody></table>
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);


// componentDidMount(){
//   this.props.getCategories();
// }

// render(){
//   return (
//     <div className="left-pane">
//     <ul>
//       <li><Link to="/products">All Categories</Link></li>
//       {this.props.category.allCategories.map(category => {
//       return <li key={category.id}><Link to={`/categories/${category.id}`}>{category.name}</Link></li>
//       })}
//     </ul>
//     </div>
//   )
// }
// }

// const mapStateToProps = ({ category }) => ({ category });
// const mapDispatchToProps = (dispatch) => ({
// getCategories: () => {
//   dispatch(fetchCategories())
// }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPane);
