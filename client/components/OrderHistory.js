// import React, { Component } from 'react'
import {connect} from 'react-redux'

function orderHistory (props){
  return (
    <div>
    </div>
  )
}

const mapState = (state) => {
  return {
    userId: state.user.id
    product: state.product.sele
  }
}

const mapDispatch = null

export default connect(mapState, mapDispatch)(orderHistory)
