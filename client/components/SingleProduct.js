import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../store/singleProduct'
import CategoriesPane from './CategoriesPane'

class SingleProduct extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const {id} = this.props.match.params
    this.props.getProduct(id)
  }

  render(){
    const {product} = this.product
    return(
      <div>
        <Categories Pane />
        {
          <div>
            <h1>{product.name}</h1>
          </div>
        }
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

export default connect(mapState, mapDispatch)(SingleProduct)
