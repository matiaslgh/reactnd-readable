const GET_COMMENTS = 'GET_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
export const constants = { GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT }

const initial = []

export const comments = (state = initial, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return action.comments
    case ADD_COMMENT:
      return [...state, action.comment]
    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.id)
    default:
      return state
  }
}
