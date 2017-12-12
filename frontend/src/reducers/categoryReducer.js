import capitalize from 'lodash.capitalize'

export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'

export const category = (state = 'All', action) => {
  switch(action.type) {
    case UPDATE_CATEGORY:
      return capitalize(action.category)
    default:
      return state
  }
}
