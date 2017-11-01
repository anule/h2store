import React, {Component} from 'react'
import {connect} from 'react-redux'
import CategoriesPane from './CategoriesPane';

class SingleCategory extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <CategoriesPane />
        <hr />
      </div>

    )
  }
}

const mapState = null

export default connect(mapState)(SingleCategory)
