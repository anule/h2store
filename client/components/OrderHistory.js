import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchSingleUser } from '../store'
import { Link } from 'react-router-dom'

class OrderHistory extends Component {
  componentDidMount() {
    const {id} = this.props.match.params
    this.props.getUser(id)
    this.getSum = this.getSum.bind(this)
    this.excludePending = this.excludePending.bind(this)
  }

  getSum = (total, sum) => {
    return total + sum
  }

  excludePending = (status) => {
    if(status !== 'Pending'){
      return status
    }
  }

  render() {
    const {user} = this.props
    return (
      <div>
      <h2>Order History</h2>
      {
        user.transactions && user.transactions.map(transaction =>  {
          const total = []
          if (transaction.status !== 'Pending') {
          return <div key={transaction.id}> <br/>
            <h4><span>Order Id: {transaction.id}</span></h4>
            <span>Order Status: {transaction.status}</span><br/>
            <span>Order Date: {transaction.createdAt.split('T')[0]}</span> <br/><br/>
            {
              transaction.products.map(product => {
                return <div key={product.id}>
                <span>Product: </span><Link to={`/products/${product.id}`}><span>{product.name}</span></Link> <br/>
                <span>Quantity Ordered: {product['transactions-products'].numOrdered}</span><br/>
                <span>Price: ${product.price}</span><br/><br/>
                </div>
              })
            }
            {transaction.products.map(product => {
               total.push((product.price * product['transactions-products'].numOrdered))
            }
          )}
          <div><strong>Total Cost: </strong>${total.reduce(this.getSum).toFixed(2)}</div>
        </div>
        }
        })
      }
      <hr/>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    user: state.user,
    transactions: state.user.transactios
    // product: state.product.sele
  }
}

const mapDispatch = dispatch => ({
    getUser: (id) => {
      dispatch(fetchSingleUser(id))
  }
})

export default connect(mapState, mapDispatch)(OrderHistory)
