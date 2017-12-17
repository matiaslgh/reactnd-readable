const GET_COMMENTS = 'GET_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const CHANGE_COMMENT_TO_UPDATE = 'CHANGE_COMMENT_TO_UPDATE'
const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const constants = {
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  CHANGE_COMMENT_TO_UPDATE,
  UPDATE_COMMENT
}

const initial = {
  all: [],
  commentToUpdate: null
}

export const comments = (state = initial, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        all: action.comments
      }
    case ADD_COMMENT:
      return {
        ...state,
        all: [...state.all, action.comment]
      }
    case DELETE_COMMENT:
      return {
        ...state,
        all: state.all.filter(comment => comment.id !== action.id)
      }
    case CHANGE_COMMENT_TO_UPDATE:
      return {
        ...state,
        commentToUpdate: action.commentToUpdate
      }
    case UPDATE_COMMENT:
      return {
        ...state,
        all: state.all.map(c =>
          c.id !== action.id ? c : Object.assign({}, c, action.comment)
        )
      }
    default:
      return state
  }
}
