import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {email, id} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <div>
        <NavLink to={`/${id}/update`}>
          Update Profile
        </NavLink>
        <NavLink to={`/users/${id}/orders`} >
          <div>Order History</div>
        </NavLink>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    id: state.user.id
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
