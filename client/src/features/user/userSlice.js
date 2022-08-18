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
  updateProfilePhotoThunk,
  getUsersThunk
} from './userThunk'

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  token: getTokenFromLocalStorage(),
  vCode: '',
  users: [],
  singleUser: {},
  totalUsers: 0,
  numOfPages: 0,
  page: 1,
  skip: 0,
  limit: 8
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

export const updateProfilePhoto = createAsyncThunk(
  'user/updateProfilePhoto',
  async (data, thunkAPI) => {
    return updateProfilePhotoThunk('/users/me/upload', data, thunkAPI)
  }
)

export const getUsers = createAsyncThunk(
  'user/getUsers',
  async (url, thunkAPI) => {
    return getUsersThunk(`/users${url}`, thunkAPI)
  }
)


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    socialLogin: (state, { payload }) => {
      state.user = payload
      addUserToLocalStorage(payload, payload.verification.code)
    },
    clearSearchCriterias: (state, { payload }) => {
      state.users = []
      state.totalUsers = 0
      state.numOfPages = 0
      state.page = 1
      state.skip = 0
    },
    updateSkip: (state, { payload }) => {
      state.skip = Number(state.skip) + payload
    },
    updatePage: (state, { payload }) => {
      state.page = payload
    },
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

    [updateProfilePhoto.pending]: (state) => {
      state.isLoading = true
    },
    [updateProfilePhoto.fulfilled]: (state, { payload }) => {
      const { user, token } = payload
      state.user = user
      state.token = token
      state.isLoading = false
      addUserToLocalStorage(user, token)
      toast.success(`Profile Photo Updated...`)
    },
    [updateProfilePhoto.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },

    [getUsers.pending]: (state) => {
      state.isLoading = true
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      const { users, totalUsers, numOfPages, skip } = payload
      console.log(payload);
      state.users = users
      state.totalUsers = totalUsers
      state.numOfPages = numOfPages
      state.skip = Number(skip)
      state.isLoading = false
    },
    [getUsers.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})

export const { socialLogin, clearSearchCriterias, updateSkip, updatePage } = userSlice.actions
export default userSlice.reducer

