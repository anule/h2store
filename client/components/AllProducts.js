import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoriesPane from './CategoriesPane';
import { fetchProducts } from '../store/product';
import { Link } from 'react-router-dom';

class AllProducts extends Component {
  constructor(props){
    super(props)
    this.state = { filterValue: ''}
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.getProducts();
  }

  handleChange(evt){
    const { value } = evt.target
    this.setState({
      filterValue: value
    })
  }

  render() {
    return (
      <div className="container product-container">
        <form style={{ marginTop: '20px' }}>
          <input
            onChange={this.handleChange}
            value={this.state.filterValue}
            placeholder="Search products"
          />
        </form>
        <CategoriesPane />
        <div id="products-pane">
          {this.props.product.allProducts.map(product => {
            return (
              <span className="products" key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <div className="product-preview container">
                    <img src={product.image} />
                    <p>{product.name}</p>
                    <p>Price: {`$ ${product.price}`}</p>
                  </div>
                </Link>
              </span>);
          })}
        </div>
      </div>

    );
  }
}

const mapStateToProps = ({ product }) => ({ product });
const mapDispatchToProps = (dispatch) => ({
  getProducts: () => {
    dispatch(fetchProducts());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
