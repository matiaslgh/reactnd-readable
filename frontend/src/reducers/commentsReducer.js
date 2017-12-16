const GET_COMMENTS = 'GET_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
export const constants = { GET_COMMENTS, ADD_COMMENT }

const initial = []

export const comments = (state = initial, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return action.comments
    case ADD_COMMENT:
      return [...state, action.comment]
    default:
      return state
  }
}
