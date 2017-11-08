import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoriesPane from './CategoriesPane';
import { fetchProducts } from '../store/product';
import { Link } from 'react-router-dom';

class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = ({filterValue: ''})
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  handleChange(evt){
    const { value } = evt.target
    this.setState({
      filterValue: value
    })
  }

  render() {
    const filterProducts = this.props.product.allProducts.filter(product => product.name.toLowerCase().match(this.state.filterValue));
    return (
      <div>
        <form style={{marginTop: '20px'}}>
          <input
            onChange={this.handleChange}
            value={this.state.filterValue}
            placeholder="Search products"
          />
        </form>
        <ul className="products">
        <CategoriesPane />
        {filterProducts.map(product => {
          return <li key={product.id}><Link to={`/products/${product.id}`}>{product.name}</Link></li>
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
    dispatch(fetchProducts());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
