import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../store/category';

class CategoriesPane extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div id="left-pane container">
        <p id="all-categories"><Link to="/products">All Categories</Link></p>
        {this.props.category.allCategories.map(category => {
          return <p key={category.id}><Link to={`/categories/${category.id}`}>{category.name}</Link></p>;
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ category }) => ({ category });
const mapDispatchToProps = (dispatch) => ({
  getCategories: () => {
    dispatch(fetchCategories());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPane);
