import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { showSharedError, setSharedError } from 'src/features/sharedSlice'
import { authApi } from 'src/api/api'

export const authMe = createAsyncThunk(
  'auth/authMe',
  async (_, { dispatch }) => {
    try {
      const response = await authApi.authMe()
      return response.data
    } catch (error) {
      dispatch(setLoading(false))
      dispatch(setSharedError(error.message))
      dispatch(showSharedError())
    }
  },
)
export const authLogin = createAsyncThunk(
  'auth/authLogin',
  async ({ email, password }, { dispatch }) => {
    try {
      const response = await authApi.login(email, password)
      if (response.data.resultCode === 1) {
        dispatch(setSharedError(response.data.messages[0]))
        dispatch(showSharedError())
      }

      return response.data
    } catch (error) {
      dispatch(setLoading(false))
      dispatch(setSharedError(error.message))
      dispatch(showSharedError())
    }
  },
)
export const authLogout = createAsyncThunk(
  'auth/authLogout',
  async (_, { dispatch }) => {
    try {
      const response = await authApi.logout()
      if (response.data.resultCode === 1) {
        dispatch(setSharedError(response.data.messages[0]))
        dispatch(showSharedError())
      }
      return response.data
    } catch (error) {
      dispatch(setLoading(false))
      dispatch(setSharedError(error.message))
      dispatch(showSharedError())
    }
  },
)

const initialState = {
  resultCode: 0,
  messages: [],
  data: {
    id: null,
    email: '',
    login: '',
  },
  initialized: false,
  loading: false,
  isShowLoginModal: false,
  inputEmail: '',
  inputPassword: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setIsShowLoginModal: (state, action) => {
      state.isShowLoginModal = action.payload
    },
    setInputEmail: (state, action) => {
      state.inputEmail = action.payload
    },
    setInputPassword: (state, action) => {
      state.inputPassword = action.payload
    },
  },
  extraReducers: {
    [authMe.pending]: (state) => {
      state.loading = true
    },
    [authMe.fulfilled]: (state, action) => {
      state.loading = false
      if (action.payload.resultCode === 0) {
        state.data = action.payload.data
      }
      state.initialized = true
    },
    [authLogin.pending]: (state) => {
      state.loading = true
    },
    [authLogin.fulfilled]: (state, action) => {
      state.loading = false
      if (action.payload.resultCode === 0) {
        state.data.id = action.payload.data.userId
        state.isShowLoginModal = false
      }
    },
    [authLogout.pending]: (state) => {
      state.loading = true
    },
    [authLogout.fulfilled]: (state, action) => {
      state.loading = false
      if (action.payload.resultCode === 0) {
        state.data.id = null
      }
    },
  },
})

export const {
  setLoading,
  setInputEmail,
  setInputPassword,
  setIsShowLoginModal,
} = authSlice.actions

export default authSlice.reducer
