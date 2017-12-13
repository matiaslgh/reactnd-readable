import capitalize from 'lodash.capitalize'

const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
const SET_CATEGORIES = 'SET_CATEGORIES'
export const constants = { CHANGE_CATEGORY, SET_CATEGORIES }

const initial = {
  currentCategory: 'All',
  allCategories: []
}

export const categories = (state = initial, action) => {
  switch(action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        currentCategory: capitalize(action.category)
      }
    case SET_CATEGORIES:
      return {
        ...state,
        allCategories: action.categories
      }
    default:
      return state
  }
}
