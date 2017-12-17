const GET_POSTS = 'GET_POSTS'
const CREATE_POST = 'CREATE_POST'
const DELETE_POST = 'DELETE_POST'
const UPDATE_POST = 'UPDATE_POST'
const CHANGE_POST_TO_UPDATE = 'CHANGE_POST_TO_UPDATE'
const CHANGE_POST_TO_SEE = 'CHANGE_POST_TO_SEE'

export const constants = {
  GET_POSTS,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  CHANGE_POST_TO_UPDATE,
  CHANGE_POST_TO_SEE
}

const initial = {
  postToSee: null,
  postToUpdate: { },
  all: []
}

export const posts = (state = initial, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        all: action.posts
      }
    case CREATE_POST:
      const category = window.location.pathname.slice(1)
      const changeState = category === '' || action.post.category === category
      return {
        ...state,
        all: changeState ? [...state.all, action.post] : state.all
      }
    case DELETE_POST:
      return {
        ...state,
        all: state.all.filter(post => post.id !== action.id)
      }
    case UPDATE_POST:
      const { postToSee } = state
      return {
        ...state,
        postToSee: postToSee && postToSee.id === action.id ?
          Object.assign({}, postToSee, action.post) :
          postToSee,
        all: state.all.map(post =>
          post.id !== action.id ? post : Object.assign({}, post, action.post)
        )
      }
    case CHANGE_POST_TO_UPDATE:
      return {
        ...state,
        postToUpdate: action.post
      }
    case CHANGE_POST_TO_SEE:
      return {
        ...state,
        postToSee: action.post
      }
    default:
      return state
  }
}
