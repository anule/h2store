import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT'

/**
 * ACTION CREATORS
 */
const getAllProducts = products => ({type: GET_ALL_PRODUCTS, products})
const removeProduct = product => ({type: REMOVE_PRODUCT, product})
const getOneProduct = product => ({type: GET_ONE_PRODUCT, product})

/**
 * THUNK CREATORS
 */
export const fetchProducts = () =>
  dispatch =>
    axios.get('/api/products')
      .then(res =>
        dispatch(getAllProducts(res.data)))
      .catch(err => console.log(err))

export const fetchSingleProduct = (id) =>
  dispatch =>
    axios.get(`/api/products/${id}`)
      .then(res => dispatch(getOneProduct(res.data)))
      .catch(err => console.log(err))


/**
 * REDUCER
 */
export default function (state = {selectedProduct: {}, allProducts: []}, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return Object.assign({}, state, {allProducts: action.products})
    case REMOVE_PRODUCT:
      return state
    case GET_ONE_PRODUCT:
      return Object.assign({}, state, {selectedProduct: action.product})
    default:
      return state
  }
}
