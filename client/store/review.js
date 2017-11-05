import axios from 'axios'

// ACTION TYPES
const CREATE_REVIEW = 'CREATE_REVIEW'
const GET_REVIEW = 'GET_REVIEW'

// ACTION CREATORS
export const createReview = review => ({type: CREATE_REVIEW, review})
export const getReview = reviews => ({type: GET_REVIEW, reviews})

// THUNK CREATORS
// export const postReview = (review) =>
//   dispatch =>
//     axios.post(`/api/products/${review.productId}/review`, review)
//     .then(res => res.data)
//     .then(newReview => dispatch(createReview(newReview)))
//     .catch(err => console.error(`Creating review: unsuccessful`, err))
//   }

export function postReview (review) {
  return function thunk (dispatch) {
    return axios.post(`/api/products/${review.productId}/review`, review)
      .then(res => res.data)
      .then(newReview => {
        dispatch(getReview(newReview));
      });
  };
}


// export function postChannel (channel, history) {
//
//   return function thunk (dispatch) {
//     return axios.post('/api/channels', channel)
//       .then(res => res.data)
//       .then(newChannel => {
//         dispatch(getChannel(newChannel));
//         socket.emit('new-channel', newChannel);
//         history.push(`/channels/${newChannel.id}`);
//       });
//   };
// }

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
