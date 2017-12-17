import { constants } from '../reducers/commentsReducer'
import { apiComments as api } from '../utils/api'

const {
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  CHANGE_COMMENT_TO_UPDATE,
  UPDATE_COMMENT
} = constants

export const getComments = postId => dispatch =>
  api.getComments(postId).then(comments => dispatch({
    type: GET_COMMENTS,
    comments
  }))

export const cleanComments = () => ({
  type: GET_COMMENTS,
  comments: []
})

export const addComment = comment => dispatch =>
  api.addComment(comment).then(comment => dispatch({
    type: ADD_COMMENT,
    comment
  }))

export const deleteComment = id => dispatch =>
  api.deleteComment(id).then(() => dispatch({
    type: DELETE_COMMENT,
    id
  }))

export const updateComment = (id, comment) => dispatch =>
  api.updateComment(id, comment.body).then(() => dispatch({
    type: UPDATE_COMMENT,
    id,
    comment
  }))

export const changeCommentToUpdate = (id, body) => ({
  type: CHANGE_COMMENT_TO_UPDATE,
  commentToUpdate: { id, body }
})

export const commentUpVote = (id, currentScore) => {
  api.commentUpVote(id)
  return {
    type: UPDATE_COMMENT,
    comment: { voteScore: currentScore + 1},
    id
  }
}

export const commentDownVote = (id, currentScore) => {
  api.commentDownVote(id)
  return {
    type: UPDATE_COMMENT,
    comment: { voteScore: currentScore - 1},
    id
  }
}
