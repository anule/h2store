import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

/**
 * ACTION CREATORS
 */
const getAllProducts = products => ({type: GET_ALL_PRODUCTS, products})
const removeProduct = product => ({type: REMOVE_PRODUCT, product})

/**
 * THUNK CREATORS
 */
export const fetchProducts = () =>
  dispatch =>
    axios.get('/api/products')
      .then(res =>
        dispatch(getAllProducts(res.data)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.products
    case REMOVE_PRODUCT:
      return state
    default:
      return state
  }
}
