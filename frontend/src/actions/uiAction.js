import { constants } from '../reducers/uiReducer'

const {
  SET_DRAWER,
  SET_CREATE_POST_MODAL,
  SET_ADD_COMMENT_MODAL,
  SET_UPDATE_POST_MODAL,
  SET_UPDATE_COMMENT_MODAL
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

export const openUpdatePostModal = () => ({
  type: SET_UPDATE_POST_MODAL,
  isUpdatePostModalOpen: true
})

export const closeUpdatePostModal = () => ({
  type: SET_UPDATE_POST_MODAL,
  isUpdatePostModalOpen: false
})

export const openUpdateCommentModal = () => ({
  type: SET_UPDATE_COMMENT_MODAL,
  isUpdateCommentModalOpen: true
})

export const closeUpdateCommentModal = () => ({
  type: SET_UPDATE_COMMENT_MODAL,
  isUpdateCommentModalOpen: false
})
