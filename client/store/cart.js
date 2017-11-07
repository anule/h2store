import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const EMPTY_CART = 'EMPTY_CART'
const ADD_TO_CART = 'ADD_TO_CART'

/**
 * ACTION CREATORS
 */
const getCart = cart => ({type: GET_CART, cart})
const deleteFromCart = productId => ({type: DELETE_FROM_CART, productId})
const emptyCart = () => ({type: EMPTY_CART})
const addToCart = product => ({type: ADD_TO_CART, product})

/**
 * THUNK CREATORS
 */

export const addToCartThunk = product =>
dispatch =>
  axios.post('/api/cart', product)
    .then(dispatch(addToCart(product)))
    .catch(err => console.log(err));

export const getCartThunk = cart =>
dispatch =>
  axios.get('/api/cart')
    .then(res => res.data)
    .then(cartInDB => {
      if (cart.products && !cartInDB[1].products) {
          cart.products.forEach(product =>
            axios.post('/api/cart', product))
        }
      return cartInDB[1]
      ? {transactionId: cartInDB[0].id,
        products: cart.products}
      : {transactionId: cartInDB[0].id, products:
        cartInDB[0].products.map(product => {
          return {
            name: product.name,
            id: product.id,
            price: product.price,
            image: product.image,
            numInStock: product.numInStock,
            numOrdered: product['transactions-products'].numOrdered
          };
        }
      )
  }
  })
    .then(res => dispatch(getCart(res)))
    .catch(err => console.log(err));



export const deleteFromCartThunk = (productId, transactionId) =>
  dispatch =>
    axios.put('/api/transactions-products', { transactionId, productId })
      .then(() => dispatch(deleteFromCart(productId)))
      .catch(err => console.log(err));

export const emptyCartThunk = transactionId =>
    dispatch =>
      axios.delete(`/api/transactions/${transactionId}`)
        .then(() => dispatch(emptyCart()))
        .catch(err => console.log(err));
/**
 * REDUCER
 */
export default function (state = {transactionId: 0, products: []}, action) {
  switch (action.type) {
    case GET_CART:
      return { ...state, transactionId: action.cart && action.cart.transactionId, products: action.cart ? action.cart.products : [] }
    case ADD_TO_CART:
      return {...state, products: state.products.concat(action.product)}
    case DELETE_FROM_CART:
      return {...state, products: state.products.filter(product => product.id !== action.productId)}
    case EMPTY_CART:
      return {transactionId: 0, products: []}
    default:
      return state
  }
}
