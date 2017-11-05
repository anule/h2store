import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserProfile } from '../store/user'

class ProfileUpdate extends Component {

  constructor(props) {

    super(props);
    this.state = {
      firstName: props.user.firstName,
      lastName: props.user.lastName,
      address: props.user.address,
      city: props.user.city,
      state: props.user.state,
      zipcode: props.user.zipcode,
      username: props.user.username
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
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
    this.props.updateUserFunc(this.props.user.id, this.state);
    this.setState({ firstName: '', lastName: '', address: '', city: '', state: '', zipcode: '', username: '' })
  }

  render() {
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
          </div> <br />
          <div>
            <button type="submit">Update Profile</button>
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

const mapStateToDispatch = (dispatch) => {
  return {
    updateUserFunc: function (userId, userInfo) {
      dispatch(updateUserProfile(userId, userInfo))
    }
  }
};

export default connect(mapStateToProps, mapStateToDispatch)(ProfileUpdate)
