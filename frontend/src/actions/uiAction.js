import { constants } from '../reducers/uiReducer'

const {
  OPEN_DRAWER,
  CLOSE_DRAWER,
  OPEN_CREATE_POST_MODAL,
  CLOSE_CREATE_POST_MODAL
} = constants

export const openDrawer = () => ({
  type: OPEN_DRAWER,
  isDrawerOpen: true
})

export const closeDrawer = () => ({
  type: CLOSE_DRAWER,
  isDrawerOpen: false
})

export const openCreatePostModal = () => ({
  type: OPEN_CREATE_POST_MODAL,
  isCreatePostModalOpen: true
})

export const closeCreatePostModal = () => ({
  type: CLOSE_CREATE_POST_MODAL,
  isCreatePostModalOpen: false
})
