import { apiPosts as api } from '../utils/api'
import { constants } from '../reducers/postsReducer'

const {
  GET_POSTS,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  CHANGE_POST_TO_UPDATE,
  CHANGE_POST_TO_SEE
} = constants

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

export const updatePost = (id, post) => dispatch => {
  api.updatePost(id, post).then(() => dispatch({
    type: UPDATE_POST,
    id,
    post
  }))
}

export const changePostToUpdate = post => ({
  type: CHANGE_POST_TO_UPDATE,
  post
})

export const changePostToSee = id => dispatch => {
  api.getPost(id).then(post => dispatch({
    type: CHANGE_POST_TO_SEE,
    post
  }))
}

export const cleanPostToSee = () => ({
  type: CHANGE_POST_TO_SEE,
  post: null
})
