const SET_DRAWER = 'SET_DRAWER'
const SET_CREATE_POST_MODAL= 'SET_CREATE_POST_MODAL'
const SET_ADD_COMMENT_MODAL= 'SET_ADD_COMMENT_MODAL'
const SET_UPDATE_POST_MODAL= 'SET_UPDATE_POST_MODAL'
const SET_UPDATE_COMMENT_MODAL = 'SET_UPDATE_COMMENT_MODAL'

export const constants = {
  SET_DRAWER,
  SET_CREATE_POST_MODAL,
  SET_ADD_COMMENT_MODAL,
  SET_UPDATE_POST_MODAL,
  SET_UPDATE_COMMENT_MODAL
}

export const ui = (state={}, action) => {
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
    case SET_UPDATE_POST_MODAL:
      return {
        ...state,
        isUpdatePostModalOpen: action.isUpdatePostModalOpen
      }
    case SET_UPDATE_COMMENT_MODAL:
      return {
        ...state,
        isUpdateCommentModalOpen: action.isUpdateCommentModalOpen
      }
    default:
      return state
  }
}
