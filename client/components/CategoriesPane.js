import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CategoriesPane extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <ul>
        <li><Link to="/products">All Categories</Link></li>
        {/* {this.props.categories.map(category => {
        <li><Link to="/category/:id">{category.name}</Link></li>})} */}
      </ul>
    )
  }

}

const mapStateToProps = ({ categories }) => ({categories});

export default connect(mapStateToProps)(CategoriesPane);
