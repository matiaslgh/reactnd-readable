const CLOSE_DRAWER = 'CLOSE_DRAWER'
const OPEN_DRAWER = 'OPEN_DRAWER'
const CLOSE_CREATE_POST_MODAL= 'CLOSE_CREATE_POST_MODAL'
const OPEN_CREATE_POST_MODAL= 'OPEN_CREATE_POST_MODAL'

export const constants = {
  CLOSE_DRAWER,
  OPEN_DRAWER,
  CLOSE_CREATE_POST_MODAL,
  OPEN_CREATE_POST_MODAL
}

const defaultState = {
  isDrawerOpen: false,
  isCreatePostModalOpen: false
}

export const ui = (state=defaultState, action) => {
  switch (action.type) {
    case CLOSE_DRAWER:
      return {
        ...state,
        isDrawerOpen: false
      }
    case OPEN_DRAWER:
      return {
        ...state,
        isDrawerOpen: true
      }
    case CLOSE_CREATE_POST_MODAL:
      return {
        ...state,
        isCreatePostModalOpen: false
      }
      case OPEN_CREATE_POST_MODAL:
        return {
          ...state,
          isCreatePostModalOpen: true
        }
    default:
      return state
  }
}
