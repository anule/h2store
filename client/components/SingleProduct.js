import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../store/product'
import CategoriesPane from './CategoriesPane'

class SingleProduct extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(this.props.match.params.id)
    const {id} = this.props.match.params
    this.props.getProduct(id)
  }

  render(){
    console.log('this is the singleproduct')
    const {selectedProduct} = this.props.product
    return(
      <div>
        <CategoriesPane />
        {
          <div>
            <h1>{selectedProduct.name}</h1>
            <img src={selectedProduct.image} alt='Product Image' width='275' height='250'/>
            <h2>{selectedProduct.description}</h2>
            <h3>{selectedProduct.price}</h3>
            <button type='button'>Add to Cart</button>
            <button type='button'>See Similar Products</button>
          </div>
        }
      <hr />
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
