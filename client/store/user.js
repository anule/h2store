import axios from 'axios'
import history from '../history'
import { emptyCart } from './cart';

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const UPDATE_PROFILE = 'UPDATE_PROFILE'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user })
export const removeUser = () => ({ type: REMOVE_USER })
const updateUser = user => ({ type: UPDATE_PROFILE, user })

/**
 * THUNK CREATORS
 */
export const me = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || defaultUser)))
      .catch(err => console.log(err))

export const auth = (email, password, method) =>
  dispatch =>
    axios.post(`/auth/${method}`, { email, password })
      .then(res => {
        dispatch(getUser(res.data))
        history.push('/home')
      })
      .catch(error =>
        dispatch(getUser({ error })))

export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(_ => {
        dispatch(removeUser())
        dispatch(emptyCart());
        history.push('/login')
      })
      .catch(err => console.log(err))

export const fetchSingleUser = (id) =>
  dispatch =>
    axios.get(`/api/users/${id}/orders`)
      .then(res => dispatch(getUser(res.data)))
      .catch(err => console.error('Could not fetch user', err))

export const updateUserProfile = (id, user) => dispatch => {
  axios.put(`/api/users/${id}`, user)
    .then(res => dispatch(updateUser(res.data)))
    .catch(err => console.error(`Could not update ${user}!`, err));
}
export const createUserProfile = userInfo => dispatch => {
  axios.post(`api/users/new`, userInfo)
    .then(res => dispatch(getUser(res.data)))
    .catch(err => console.error(`Could not create user!`, err));
}

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case UPDATE_PROFILE:
      return { ...state, ...action.user }
    default:
      return state
  }
}
