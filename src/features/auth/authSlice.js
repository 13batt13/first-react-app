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

const initialState = {
  resultCode: 0,
  messages: [],
  data: {
    id: null,
    email: '',
    login: '',
  },
  loading: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
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
  },
})

export const { setLoading } = authSlice.actions

export default authSlice.reducer
