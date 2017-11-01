import React, {Component} from 'react'
import {connect} from 'react-redux'
import CategoriesPane from './CategoriesPane';

class AllProducts extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <CategoriesPane />
        <h1>Here is some content.</h1>
        <hr />
      </div>

    )
  }
}

const mapState = null

export default connect(mapState)(AllProducts)
