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
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    id: state.user.id,
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
