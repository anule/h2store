import React, {Component} from 'react'
import {connect} from 'react-redux'
import CategoriesPane from './CategoriesPane';
import { fetchProducts } from '../store/product';
import { Link } from 'react-router-dom'

class AllProducts extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getProducts();
  }

  render() {
    console.log('hello this is allproducts')
    return (
      <div className="container product-container">
        <ul>
        <CategoriesPane />
        {this.props.product.allProducts.map(product => {
          return <li key={product.id}><Link to={`/products/${product.id}`}>{product.name}</Link></li>
        })}
        </ul>
        <hr />
      </div>

    )
  }
}

const mapStateToProps = ({product}) => ({product})
const mapDispatchToProps = (dispatch) => ({
  getProducts: () => {
    dispatch(fetchProducts())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
