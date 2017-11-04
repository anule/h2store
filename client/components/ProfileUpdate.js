import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserProfile } from '../store/user'

class ProfileUpdate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      username: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    console.log('EVENT', evt.target)
    const firstName = evt.target.form.firstName.value;
    const lastName = evt.target.form.lastName.value;
    const address = evt.target.form.address.value;
    const city = evt.target.form.city.value;
    const state = evt.target.form.state.value;
    const zipcode = evt.target.form.zipcode.value;
    const username = evt.target.form.username.value;

    this.setState({ firstName, lastName, address, city, state, zipcode, username })

  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateUserFunc(this.state);
    this.setState({ firstName: '', lastName: '', address: '', city: '', state: '', zipcode: '', username: '' })
  }

  render() {
    console.log('USER ----', this.props.user)
    console.log('STATE -----', this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
            <label>City</label>
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
            <label>State</label>
            <input
              type="text"
              name="state"
              value={this.state.state}
              onChange={this.handleChange}
            />
            <label>Zipcode</label>
            <input
              type="text"
              name="zipcode"
              value={this.state.zipcode}
              onChange={this.handleChange}
            />
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
        </form>
        <span>
          <button type="submit">Update Profile</button>
        </span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    updateUserFunc: function (userInfo) {
      dispatch(updateUserProfile(userInfo))
    }
  }
};

export default connect(mapStateToProps, mapStateToDispatch)(ProfileUpdate)
