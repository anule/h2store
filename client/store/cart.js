import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART'

/**
 * ACTION CREATORS
 */
const getCart = products => ({type: GET_CART, products})
const deleteFromCart = productId => ({type: DELETE_FROM_CART, productId})

/**
 * THUNK CREATORS
 */
export const fetchCart = () =>
  dispatch =>
    axios.get('/api/cart')
      .then(res =>
          res.data.products.map(product => { return {
            transactionId: product['transactions-products'].transactionId,
            name: product.name,
            id: product.id,
            price: product.price,
            image: product.image,
            numInStock: product.numInStock, numOrdered: product['transactions-products'].numOrdered}}))
      .then(res => dispatch(getCart(res)))
      .catch(err => console.log(err))

export const deleteItemFromCart = (productId, transactionId) =>
    dispatch =>
      axios.post('/api/transactions-products', { transactionId, productId})
          .then(() => {console.log('you got here');dispatch(deleteFromCart(productId))})
          .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_CART:
      return state.concat(action.products)
    case DELETE_FROM_CART:
      return state.filter(product => product.id !== action.productId)
    default:
      return state
  }
}
