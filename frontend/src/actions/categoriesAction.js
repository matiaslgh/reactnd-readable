import { constants } from '../reducers/categoriesReducer'
const { CHANGE_CATEGORY, SET_CATEGORIES } = constants

export const changeCategory = category => ({
  type: CHANGE_CATEGORY,
  category
})

export const setCategories = categories => ({
  type: SET_CATEGORIES,
  categories
})
