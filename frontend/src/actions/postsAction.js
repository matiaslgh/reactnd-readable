import { fetchPosts } from '../utils/api'
import { GET_POSTS } from '../reducers/postsReducer'

export const getPosts = category => dispatch => {
  fetchPosts(category)
    .then(posts => dispatch({
      type: GET_POSTS,
      posts
    }))
}
