import { combineReducers } from 'redux'
import { categories } from './categoriesReducer'
import { posts } from './postsReducer'
import { comments } from './commentsReducer'
import { ui } from './uiReducer'

export default combineReducers({
  categories,
  posts,
  comments,
  ui
})
