import axios from 'axios'

// ACTION TYPES
const CREATE_REVIEW = 'CREATE_REVIEW'
const GET_REVIEW = 'GET_REVIEW'
const DELETE_REVIEW = 'DELETE_REVIEW'

// ACTION CREATORS
export const createReview = review => ({type: CREATE_REVIEW, review})
export const getReview = reviews => ({type: GET_REVIEW, reviews})
export const deleteReview = review => ({type: DELETE_REVIEW, review})

// THUNK CREATORS
export function postReview (review) {
  return function thunk (dispatch) {
    return axios.post(`/api/products/${review.productId}/review`, review)
      .then(res => {
        dispatch(getReview(res.data));
      }
    )
    .catch(err => console.error('Issue posting review', err))
  }
}

export function removePost (review) {
  return function thunk (dispatch) {
    return axios.delete(`/api/products/${review.productId}/reviews/${review.id}`, review)
      .then(res => dispatch(deleteReview(res.data)))
      .catch(err => console.error('Issue removing review', err))
  }
}

// REDUCER
export default function reducer(state = {}, action){
  switch (action.type) {
    case CREATE_REVIEW:
      return action.review
    case DELETE_REVIEW:
      return action.review
    // case GET_REVIEW:
    //   return [...state, action.reviews]
    default:
      return state
  }
}
