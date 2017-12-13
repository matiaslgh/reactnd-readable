import { combineReducers } from 'redux'
import { categories } from './categoriesReducer'
import { posts } from './postsReducer'
import { ui } from './uiReducer'

export default combineReducers({
  categories,
  posts,
  ui
})
