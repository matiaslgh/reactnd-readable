export const GET_POSTS = 'GET_POSTS'

export const posts = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.posts
    default:
      return state
  }
}
