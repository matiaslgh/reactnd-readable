const GET_POSTS = 'GET_POSTS'
const CREATE_POST = 'CREATE_POST'
const DELETE_POST = 'DELETE_POST'
const UPDATE_POST = 'UPDATE_POST'
const CHANGE_POST_TO_UPDATE = 'CHANGE_POST_TO_UPDATE'
const CHANGE_POST_TO_SEE = 'CHANGE_POST_TO_SEE'
const SORT_POSTS = 'SORT_POSTS'

export const constants = {
  GET_POSTS,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  CHANGE_POST_TO_UPDATE,
  CHANGE_POST_TO_SEE,
  SORT_POSTS
}

const initial = {
  sortCriteria: 'timestamp',
  postToSee: null,
  postToUpdate: { },
  all: []
}

const sort = (criteria, posts) => posts.sort( (a,b) => b[criteria] - a[criteria] )

export const posts = (state = initial, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        all: sort(state.sortCriteria, action.posts)
      }
    case CREATE_POST:
      const category = window.location.pathname.slice(1)
      const changeState = category === '' || action.post.category === category
      return {
        ...state,
        all: sort(
          state.sortCriteria,
          (changeState ? [...state.all, action.post] : state.all)
        )
      }
    case DELETE_POST:
      return {
        ...state,
        all: sort(
          state.sortCriteria,
          state.all.filter(post => post.id !== action.id)
        )
      }
    case UPDATE_POST:
      const { postToSee } = state
      return {
        ...state,
        postToSee: postToSee && postToSee.id === action.id ?
          Object.assign({}, postToSee, action.post) :
          postToSee,
        all: sort(
          state.sortCriteria,
          state.all.map(post =>
            post.id !== action.id ? post : Object.assign({}, post, action.post)
          )
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
    case SORT_POSTS:
      return {
        ...state,
        sortCriteria: action.criteria,
        all: sort(action.criteria, state.all)
      }
    default:
      return state
  }
}
