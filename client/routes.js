import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, Login, Signup, UserHome, Homepage, Footer,
  AllProducts, SingleCategory, SingleProduct, Cart,
  SingleProductReviews, WriteReview, ProfileUpdate, OrderHistory} from './components';
import {me, getCart} from './store';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
    if (!this.props.isLoggedIn && localStorage.getItem('cart')) {
      this.props.loadCartFromLocalStorage(JSON.parse(localStorage.getItem('cart')));
    }

  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <Router history={history}>
        <div>
          <Main>
            <Switch>
              {/* Routes placed here are available to all visitors */}
              <Route exact path="/" component={Homepage} />
              <Route exact path="/products" component={AllProducts} />
              <Route exact path="/products/:id" component={SingleProduct} />
              <Route exact path="/products/:id/reviews" component={SingleProductReviews} />
              <Route path="/products/:id/review" component={WriteReview} />
              <Route path="/categories/:id" component={SingleCategory} />
              <Route path="/:id/update" component={ProfileUpdate} />
              <Route path="/users/:id/orders" component={OrderHistory} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/cart" component={Cart} />
              {
                isLoggedIn &&
                  <Switch>
                    {/* Routes placed here are only available after logging in */}
                    <Route path="/home" component={UserHome} />
                  </Switch>
              }
              {/* Displays our Login component as a fallback */}
              <Route component={Login} />
            </Switch>
          </Main>
        <Footer />
      </div>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
    },
    loadCartFromLocalStorage (cartInfo) {
      dispatch(getCart(cartInfo))
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
