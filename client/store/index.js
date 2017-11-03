import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import category from './category';
import product from './product';
import review from './review';
import cart from './cart'
import updateProfile from './updateProfile'

const reducer = combineReducers({user, category, product, review, cart, updateProfile});
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './category'
export * from './product'
export * from './review'
export * from './cart'
export * from './updateProfile'
