import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../store/product'
import { Link, NavLink } from 'react-router-dom'


class SingleProductReviews extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const {id} = this.props.match.params
    this.props.getProduct(id)
  }

  render() {
    const {selectedProduct} = this.props.product
    return (
      <div>
      <h2>{selectedProduct.name} Reviews <img src={selectedProduct.image} width='50' height='50' /></h2>
        <ul>
        {
          selectedProduct.reviews && (selectedProduct.reviews.map(review => (
            <li key={review.id}><span>{review.title}&nbsp;&nbsp;&nbsp;{review.date}</span>
            <p>{review.stars}</p>
            <p>{review.message}</p>
            </li>
          )))
        }
      </ul>
      <Link to={`/products/${selectedProduct.id}`}><button>Back to Product Page</button></Link>
      <Link to={`/products/${selectedProduct.id}/review`}><button>Write a Review</button></Link>
      </div>
    )
  }
}

const mapState = ({product}) => ({product})

const mapDispatch = dispatch => ({
  getProduct: (id) => {
    dispatch(fetchSingleProduct(id))
  }
})

export default connect(mapState, mapDispatch)(SingleProductReviews)
