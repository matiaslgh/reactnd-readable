import { combineReducers } from 'redux'
import { category } from './categoryReducer'
import { posts } from './postsReducer'
import { ui } from './uiReducer'

export default combineReducers({
  category,
  posts,
  ui
})
