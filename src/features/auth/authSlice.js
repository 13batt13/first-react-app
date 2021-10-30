import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as axios from 'axios'
import { showSharedError, setSharedError } from 'src/features/sharedSlice'

export const authMe = createAsyncThunk(
  'auth/authMe',
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(
        'https://social-network.samuraijs.com/api/1.0/auth/me',
      )
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
export const authLogin = createAsyncThunk(
  'auth/authLogin',
  async ({ email, password }, { dispatch }) => {
    try {
      const response = await axios.post(
        'https://social-network.samuraijs.com/api/1.0/auth/login',
        { email, password, rememberMe: true },
      )
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
      const response = await axios.delete(
        'https://social-network.samuraijs.com/api/1.0/auth/login',
      )
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
  loading: false,
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
    },
    [authLogin.pending]: (state) => {
      state.loading = true
    },
    [authLogin.fulfilled]: (state, action) => {
      state.loading = false
      if (action.payload.resultCode === 0) {
        state.data.id = action.payload.data.userId
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

export const { setLoading, setInputEmail, setInputPassword } = authSlice.actions

export default authSlice.reducer
