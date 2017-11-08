/* eslint-disable no-nested-ternary react/prefer-stateless-function */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import history from '../history';
import ProfileUpdate from './ProfileUpdate';
import { processCartGuestThunk } from '../store/cart';

class CheckoutGuest extends Component {
  constructor(){
    super()
    this.state = ({showProfileFormYadda: false});
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const { id } = this.props.user;
    const { products } = this.props.cart;
    this.props.processCartNotLoggedIn(id, products);
    history.push('/');
    localStorage.clear()
  }

  render(){
    let total = this.props.cart.products.reduce((sum, value) =>
      sum + Number(value.price) * value.numOrdered
    , 0);
    const { user } = this.props;
    let showProfileFormYadda = (!user.address || !user.city || !user.email || !user.firstName || !user.lastName || !user.state || !user.zipcode  );
    const numToDollarsCents = num => (parseFloat(num).toFixed(2))
    return (
      <div>
        <p>Your Order</p>
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        {this.props.cart.products.map(product => {
          return (<tr key={product.id}><td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.numOrdered}</td>
              <td>{product.price * product.numOrdered}</td>
          </tr>)
        })}
        </tbody>
        </table>
        Total: ${numToDollarsCents(total)}
        <br />
        <br />
        {showProfileFormYadda
        ? <span> Please complete this order form <br /> <ProfileUpdate /> </span>
        : <button onClick={this.handleClick}>Process order</button> }
        <hr />
      </div>
    )
  }
}

const mapStateToProps = ({ user, cart }) => ({ user, cart });
const mapDispatchToProps = dispatch => ({
  processCartNotLoggedIn: (id, products) => {
    dispatch(processCartGuestThunk(id, products));
    console.log('processCartNotLoggedIn')
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutGuest);
