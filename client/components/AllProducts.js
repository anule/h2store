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
    return (
      <div>
        <ul className="products">
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

{/* <form className='form-group' style={{marginTop: '20px'}}>
      <input
        onChange={handleChange}
        value={inputValue}
        className='form-control'
        placeholder="Enter artist name"
      />
    </form> */}


const mapStateToProps = ({product}) => ({product})
const mapDispatchToProps = (dispatch) => ({
  getProducts: () => {
    dispatch(fetchProducts())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
