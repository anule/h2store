import React, {Component} from 'react'
import {connect} from 'react-redux'

class AllProducts extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        The Products page
      </div>
    )
  }
}

const mapState = null

export default connect(mapState)(AllProducts)
