import { UPDATE_CATEGORY } from '../reducers/categoryReducer'

export const updateCategory = category => ({
  type: UPDATE_CATEGORY,
  category
})
