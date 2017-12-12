import { constants } from '../reducers/uiReducer'

const { OPEN_DRAWER, CLOSE_DRAWER } = constants

export const openDrawer = () => ({
  type: OPEN_DRAWER,
  isDrawerOpen: true
})

export const closeDrawer = () => ({
  type: CLOSE_DRAWER,
  isDrawerOpen: false
})
