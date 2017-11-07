import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserProfile, createUserProfile } from '../store/user'

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
      username: props.user.username,
      email: props.user.email
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
    const username = this.props.user.id ? evt.target.form.username.value : null
    const email = this.props.user.id ? this.props.user.email : evt.target.form.email.value;
    this.setState({ firstName, lastName, address, city, state, zipcode, username, email })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.user.id
    ? this.props.updateUserFuncLoggedIn(this.props.user.id, this.state)
    : this.props.createUserFuncNotLoggedIn(this.state)
    this.setState({ firstName: '', lastName: '', address: '', city: '', state: '', zipcode: '', username: '', email: '' })
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

            {(!this.props.user.id)
            ? (<span>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
              </span>)
            : <span>
                <label>Username</label>
                <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                />
              </span>
            }
          </div> <br />
          <div>
            {this.props.user.id
            ? <button type="submit">Update Profile</button>
            : <button type="submit">Submit Information</button>}

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
    updateUserFuncLoggedIn: function (userId, userInfo) {
      dispatch(updateUserProfile(userId, userInfo))
    },
    createUserFuncNotLoggedIn: function(userInfo) {
      dispatch(createUserProfile(userInfo))
    }
  }
};

export default connect(mapStateToProps, mapStateToDispatch)(ProfileUpdate)
