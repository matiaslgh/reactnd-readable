import { apiPosts as api } from '../utils/api'
import { constants } from '../reducers/postsReducer'

const { GET_POSTS, CREATE_POST, DELETE_POST } = constants

export const getPosts = category => dispatch => {
  api.getPosts(category)
    .then(posts => dispatch({
      type: GET_POSTS,
      posts
    }))
}

export const createPost = post => dispatch => {
  api.createPost(post)
    .then(data => dispatch({
      type: CREATE_POST,
      post: Object.assign(post, data)
    }))
}

export const deletePost = id => dispatch => {
  api.deletePost(id).then(() => dispatch({
    type: DELETE_POST,
    id
  }))
}
