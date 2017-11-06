import React, {Component} from 'react'
import {connect} from 'react-redux'
import CategoriesPane from './CategoriesPane';
import { NavLink } from 'react-router-dom';
import { fetchSingleCategory } from '../store/category';

class SingleCategory extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const { id } = this.props.match.params
    this.props.getCategoryProducts(id);
  }

  componentWillReceiveProps (newProps) {
    if (newProps.match.params.id !== this.props.match.params.id){
      this.props.getCategoryProducts(newProps.match.params.id)}

  }

  render() {

    const { selectedCategory } = this.props.category
    return (
      <div>
        <CategoriesPane />
        {<div>
         <h1>{selectedCategory.name}</h1>
         <h2>{selectedCategory.description}</h2>
        </div>
        }
        {selectedCategory.products
        ? selectedCategory.products.map(product => {
          return (<li key={product.id}>
                  <NavLink to={`/products/${product.id}/`}>{product.name}</NavLink><br />
                  Price:{product.price}<br />
                  {product.description}</li>)
        })
        : null }
        <hr />
      </div>
    )
  }
}

const mapState = ({ category }) => ({ category });
const mapDispatchToProps = (dispatch) => ({
  getCategoryProducts: (id) => {
    dispatch(fetchSingleCategory(id))
  }
});

export default connect(mapState, mapDispatchToProps)(SingleCategory);
