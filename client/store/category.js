import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
const REMOVE_CATEGORY = 'REMOVE_CATEGORY'

/**
 * ACTION CREATORS
 */
const getAllCategories = categories => ({type: GET_ALL_CATEGORIES, categories})
const removeCategory = category => ({type: REMOVE_CATEGORY, category})

/**
 * THUNK CREATORS
 */
export const fetchCategories = () =>
  dispatch =>
    axios.get('/api/categories')
      .then(res =>
        dispatch(getAllCategories(res.data)))
      .catch(err => console.log(err))


/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return action.categories
    case REMOVE_CATEGORY:
      return state
    default:
      return state
  }
}