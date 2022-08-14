import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios from 'axios'
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  getTokenFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage'

import {
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
  updateUserThunk,
  verifyUserThunk,
} from './userThunk'

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  token: getTokenFromLocalStorage(),
  vCode: ''
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    return registerUserThunk('/users/register', user, thunkAPI)
  }
)
export const verifyUser = createAsyncThunk(
  'user/verifyUser',
  async (verificationCode, thunkAPI) => {
    return verifyUserThunk('/users/verify', verificationCode, thunkAPI)
  }
)
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    return loginUserThunk('/users/login', user, thunkAPI)
  }
)

export const logoutUser = createAsyncThunk(
  '/user/logout',
  async (user, thunkAPI) => {
    return logoutUserThunk('/users/logout', thunkAPI)
  }
)

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkAPI) => {
    return updateUserThunk('/users/me', user, thunkAPI)
  }
)


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    socialLogin: (state, { payload }) => {
      state.user = payload
      addUserToLocalStorage(payload, payload.verification.code)
    }
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload
      const { token } = payload
      state.isLoading = false
      state.user = user
      state.token = token
      addUserToLocalStorage(user, token)
      toast.success('Please check your inbox and validate your  account!')
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [verifyUser.pending]: (state) => {
      state.isLoading = true
    },
    [verifyUser.fulfilled]: (state, { payload }) => {
      const { user } = payload
      state.isLoading = false
      state.vCode = user.verification.code
      toast.success('Account Activated')

    },
    [verifyUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload
      const { token } = payload
      state.isLoading = false
      state.user = user
      state.token = token
      addUserToLocalStorage(user, token)

      toast.success(`Welcome Back ${user.firstName}`)
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [logoutUser.pending]: (state) => {
      state.isLoading = true
    },
    [logoutUser.fulfilled]: (state) => {
      state.isLoading = false
      state.user = null
      state.token = null
      removeUserFromLocalStorage()
      toast.success(`Hope to see you back`, {
        theme: "colored"
      })
    },
    [logoutUser.rejected]: (state) => {
      state.isLoading = false
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { user, passwordChanged } = payload
      const { token } = payload
      state.isLoading = false
      if (passwordChanged) {
        state.user = null
        state.token = null
        removeUserFromLocalStorage()
        axios.get('http://localhost:5000/api/v1/users/auth/logout', { withCredentials: true })
        toast.success(`Password Updated, Login again`)
      } else {
        state.user = user
        state.token = token
        addUserToLocalStorage(user, token)
        toast.success(`User Updated!`)
      }




    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})

export const { socialLogin } = userSlice.actions
export default userSlice.reducer