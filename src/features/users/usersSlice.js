import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { usersApi } from 'src/api/api'
import { showSharedError, setSharedError } from 'src/features/sharedSlice'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async ({ count, page }, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const response = await usersApi.getUsers(count, page)
      dispatch(setLoading(false))
      dispatch(setUsers(response.data.items))
    } catch (error) {
      dispatch(setLoading(false))
      dispatch(setSharedError(error.message))
      dispatch(showSharedError())
    }
  },
)

const initialState = {
  users: [],
  loading: false,
  error: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users.push(...action.payload)
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    followUser: (state, action) => {
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id === action.payload) {
          state.users[i].followed = !state.users[i].followed
          break
        }
      }
    },
  },
})

export const { setUsers, followUser, setLoading } = usersSlice.actions

export default usersSlice.reducer
