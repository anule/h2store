import axios from 'axios'

// ACTION TYPES
const CREATE_REVIEW = 'CREATE_REVIEW'
const GET_REVIEW = 'GET_REVIEW'

// ACTION CREATORS
export const createReview = review => ({type: CREATE_REVIEW, review})
export const getReview = reviews => ({type: GET_REVIEW, reviews})

// THUNK CREATORS
export function postReview (review) {
  return function thunk (dispatch) {
    return axios.post(`/api/products/${review.productId}/review`, review)
      .then(res => {
        dispatch(getReview(res.data));
      }
    )
  };
}

// REDUCER
export default function reducer(state = {}, action){
  switch (action.type) {
    case CREATE_REVIEW:
      return action.review
    // case GET_REVIEW:
    //   return [...state, action.reviews]
    default:
      return state
  }
}
