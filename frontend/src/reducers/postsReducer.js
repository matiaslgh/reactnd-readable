const GET_POSTS = 'GET_POSTS'
const CREATE_POST = 'CREATE_POST'
const DELETE_POST = 'DELETE_POST'

export const constants = { GET_POSTS, CREATE_POST, DELETE_POST }

export const posts = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.posts
    case CREATE_POST:
      const category = window.location.pathname.slice(1)
      const changeState = category === '' || action.post.category === category
      return changeState ? [...state, action.post] : state
    case DELETE_POST:
      return state.filter(post => post.id !== action.id)
    default:
      return state
  }
}
