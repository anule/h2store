import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfileUpdate extends Component {
  constructor(prop){
    super(prop);

    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipcode: 0,
      username: ''
    }
  }

  render(){
    console.log('USER---', this.props.user)
    console.log('STATE---', this.state)
    return (
      <div>
        <form>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              placeholder={this.props.user.firstName}
            />
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              placeholder={this.props.user.lastName}
            />
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={this.state.address}
              placeholder={this.props.user.address}
            />
            <label>City</label>
            <input
              type="text"
              name="city"
              value={this.state.city}
              placeholder={this.props.user.city}
            />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect (mapStateToProps)(ProfileUpdate)
