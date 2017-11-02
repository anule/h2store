import axios from 'axios'

// ACTION TYPES
const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT'

// ACTION CREATORS
const getOneProduct = product => ({type: GET_ONE_PRODUCT, product})


// THUNK CREATORS
export const fetchSingleProduct = (id) =>
  dispatch => {
    axios.get(`/api/products/${id}`)
      .then(res => getOneProduct(res.data))
      .catch(err => console.log(err))
  }


// REDUCER
export default function (state={}, action) {
  switch(action.type) {
    case GET_ONE_PRODUCT:
      return action.product

    default:
      return state
  }
}
