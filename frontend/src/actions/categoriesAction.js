import { fetchCategories } from '../utils/api'
import { GET_CATEGORIES } from '../reducers/categoriesReducer'

export const getCategories = () => dispatch => {
  fetchCategories()
    .then(categories => dispatch({
      type: GET_CATEGORIES,
      categories
    }))
}
