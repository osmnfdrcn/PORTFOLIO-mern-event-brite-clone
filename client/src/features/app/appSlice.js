import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showMainSubMenu: false,
  showUserProfileMobileMenu: false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShowMainSubMenu: (state, { payload }) => {
      state.showMainSubMenu = payload
    },
    setShowUserProfileMobileMenu: (state, { payload }) => {
      state.showUserProfileMobileMenu = payload
    }
  }
})

export const { setShowMainSubMenu, setShowUserProfileMobileMenu } = appSlice.actions
export default appSlice.reducer