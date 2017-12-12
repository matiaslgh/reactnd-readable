const CLOSE_DRAWER = 'CLOSE_DRAWER'
const OPEN_DRAWER = 'OPEN_DRAWER'

export const constants = { CLOSE_DRAWER, OPEN_DRAWER }

const defaultState = {
  isDrawerOpen: false
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
    default:
      return state
  }
}
