import React, {Component} from 'react'
import {connect} from 'react-redux'

class BestSellers extends Component{
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>
        Best Sellers!
      </div>
    )
  }
}

const mapState = null

export default connect(mapState)(BestSellers)
