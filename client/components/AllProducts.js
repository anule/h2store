import React, {Component} from 'react'
import {connect} from 'react-redux'
import CategoriesPane from './CategoriesPane';
import { fetchProducts } from '../store/product';

class AllProducts extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <ul className="products">
        <CategoriesPane />
        {this.props.product.map(product => {
          return <li key={product.id}>{product.name}</li>
        })}
        </ul>
        <hr />
      </div>

    )
  }
}

const mapStateToProps = ({ product }) => ({ product });
const mapDispatchToProps = (dispatch) => ({
  getProducts: () => {
    dispatch(fetchProducts())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);

