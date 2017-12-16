import { constants } from '../reducers/commentsReducer'
import { apiComments as api } from '../utils/api'

const { GET_COMMENTS, ADD_COMMENT } = constants

export const getComments = postId => dispatch =>
  api.getComments(postId).then(comments => dispatch({
    type: GET_COMMENTS,
    comments
  }))

export const addComment = comment => dispatch =>
  api.addComment(comment).then(comment => dispatch({
    type: ADD_COMMENT,
    comment
  }))
