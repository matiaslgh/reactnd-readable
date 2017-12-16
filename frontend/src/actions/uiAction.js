import { constants } from '../reducers/uiReducer'

const {
  SET_DRAWER,
  SET_CREATE_POST_MODAL,
  SET_ADD_COMMENT_MODAL,
} = constants

export const openDrawer = () => ({
  type: SET_DRAWER,
  isDrawerOpen: true
})

export const closeDrawer = () => ({
  type: SET_DRAWER,
  isDrawerOpen: false
})

export const openCreatePostModal = () => ({
  type: SET_CREATE_POST_MODAL,
  isCreatePostModalOpen: true
})

export const closeCreatePostModal = () => ({
  type: SET_CREATE_POST_MODAL,
  isCreatePostModalOpen: false
})

export const openAddCommentModal = () => ({
  type: SET_ADD_COMMENT_MODAL,
  isAddCommentModalOpen: true
})

export const closeAddCommentModal = () => ({
  type: SET_ADD_COMMENT_MODAL,
  isAddCommentModalOpen: false
})
