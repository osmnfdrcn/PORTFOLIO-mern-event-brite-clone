import { configureStore } from '@reduxjs/toolkit'
import appSlice from './features/app/appSlice';
import userSlice from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    app: appSlice
  }
});