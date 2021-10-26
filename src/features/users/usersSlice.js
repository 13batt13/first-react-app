import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as axios from 'axios'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://social-network.samuraijs.com/api/1.0/users',
      )
      if (response.error) {
        throw new Error('Something went wrong...')
      }
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
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
      state.users = action.payload
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
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.loading = true
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false
      state.users = action.payload.items
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { setUsers, followUser } = usersSlice.actions

export default usersSlice.reducer
