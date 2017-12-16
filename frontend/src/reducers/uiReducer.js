const SET_DRAWER = 'SET_DRAWER'
const SET_CREATE_POST_MODAL= 'SET_CREATE_POST_MODAL'
const SET_ADD_COMMENT_MODAL= 'SET_ADD_COMMENT_MODAL'

export const constants = {
  SET_DRAWER,
  SET_CREATE_POST_MODAL,
  SET_ADD_COMMENT_MODAL,
}

const defaultState = {
  isDrawerOpen: false,
  isCreatePostModalOpen: false,
  isAddCommentModalOpen: false
}

export const ui = (state=defaultState, action) => {
  switch (action.type) {
    case SET_DRAWER:
      return {
        ...state,
        isDrawerOpen: action.isDrawerOpen
      }
    case SET_CREATE_POST_MODAL:
      return {
        ...state,
        isCreatePostModalOpen: action.isCreatePostModalOpen
      }
    case SET_ADD_COMMENT_MODAL:
      return {
        ...state,
        isAddCommentModalOpen: action.isAddCommentModalOpen
      }
    default:
      return state
  }
}
