import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
const GET_ONE_CATEGORY = 'GET_ONE_CATEGORY'

/**
 * ACTION CREATORS
 */
const getAllCategories = categories => ({type: GET_ALL_CATEGORIES, categories})
const removeCategory = category => ({type: REMOVE_CATEGORY, category})
const getOneCategory = category => ({type: GET_ONE_CATEGORY, category})

/**
 * THUNK CREATORS
 */
export const fetchCategories = () =>
  dispatch =>
    axios.get('/api/categories')
      .then(res =>
        dispatch(getAllCategories(res.data)))
      .catch(err => console.log(err))

export const fetchSingleCategory = (id) =>
  dispatch =>
    axios.get(`api/categories/${id}/`)
        .then(res => {console.log("data", res.data);
        console.log(getOneCategory("hello"));
          dispatch(getOneCategory(res.data))})
        .catch(err => console.log(err));


/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return action.categories
    case GET_ONE_CATEGORY:
      return action.category
    case REMOVE_CATEGORY:
      return state
    default:
      return state
  }
}
