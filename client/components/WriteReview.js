import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postReview, createReview, fetchSingleProduct } from '../store'
import { NavLink } from 'react-router-dom'

class WriteReview extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    const {id} = this.props.match.params
    this.props.getProduct(id)
    // this.props.newReview(re)
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange (event) {
    this.props.review[event.target.name] = event.target.value
    this.props.newReview(this.props.review)
  }

  render (){
    const {review, handleSubmit, productId, product, userId} = this.props
    review.productId = productId
    review.userId = userId
    return (
      <div>
        <h3>{product.name}</h3>
        <h4>Write Your Review</h4>
        <form onSubmit={evt => handleSubmit(review, evt)}>
          <label htmlFor='title'>Title</label>
            <input
              value={review.title}
              type="text"
              name="title"
              onChange={this.handleChange}
              />
          <label htmlFor='stars'>Stars</label>
            <input
              value={review.stars}
              type="number" step='.1'
              name="stars"
              onChange={this.handleChange}
            />
          <label htmlFor='message'>Message</label>
            <textarea
              cols='50'
              rows='5'
              value={review.message}
              type="text"
              name="message"
              onChange={this.handleChange}
            />
            <button type="submit">
                Submit
              </button>
        </form>
        <hr />
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    productId: state.product.selectedProduct.id,
    product: state.product.selectedProduct,
    review: state.review,
    userId: state.user.id,
  }
}

const mapDispatch = function (dispatch) {
  return {
    getProduct (id) {
      dispatch(fetchSingleProduct(id))
    },
    handleSubmit (review, evt) {
      evt.preventDefault()
      dispatch(postReview(review))
    },
    newReview (newreview) {
      dispatch(createReview(newreview))
    }
  }
}

export default connect(mapState, mapDispatch)(WriteReview)
