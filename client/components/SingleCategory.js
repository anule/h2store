import React, {Component} from 'react'
import {connect} from 'react-redux'
import CategoriesPane from './CategoriesPane';
import { fetchSingleCategory } from '../store/category';

class SingleCategory extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const { id } = this.props.match.params
    this.props.getCategoryProducts(id);
  }

  render() {
    console.log(this.props.match.params.id)
    console.log(this.props.category)
    return (
      <div>
        <CategoriesPane />
        {this.props.category.selectedCategory.products
        ? this.props.category.selectedCategory.products.map(product => {
          return <li key={product.id}>{product.name}</li>
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
